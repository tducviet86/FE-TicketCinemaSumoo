import { useMemo } from "react";
import { Showtime } from "../entity/movie.entity";

interface DateItem {
  day: number;
  month: number;
  week: string;
}

export const useMovieSchedule = (
  showtimes: Showtime[],
  selectedDay: number
) => {
  const uniqueDates = useMemo<DateItem[]>(() => {
    if (!showtimes?.length) return [];

    const map = new Map<string, DateItem>();

    [...showtimes]
      .sort(
        (a, b) =>
          new Date(a.startTime).getTime() -
          new Date(b.startTime).getTime()
      )
      .forEach((show) => {
        const d = new Date(show.startTime);

        const key = d.toDateString();

        if (!map.has(key)) {
          map.set(key, {
            day: d.getDate(),
            month: d.getMonth() + 1,
            week: d.toLocaleDateString("vi-VN", {
              weekday: "short",
            }),
          });
        }
      });

    return [...map.values()];
  }, [showtimes]);

  const groupedCinema = useMemo(() => {
    if (!showtimes?.length) return {};

    const selectedDate = uniqueDates[selectedDay];

    if (!selectedDate) return {};

    const filtered = showtimes.filter((show) => {
      const d = new Date(show.startTime);

      return (
        d.getDate() === selectedDate.day &&
        d.getMonth() + 1 === selectedDate.month
      );
    });

    return filtered.reduce<Record<string, Showtime[]>>((acc, item) => {
      const cinema = item.room.cinema.name;

      if (!acc[cinema]) {
        acc[cinema] = [];
      }

      acc[cinema].push(item);

      return acc;
    }, {});
  }, [showtimes, uniqueDates, selectedDay]);

  const minPrice = useMemo(() => {
    const selectedDate = uniqueDates[selectedDay];

    if (!selectedDate) return 0;

    const prices = showtimes
      .filter((show) => {
        const d = new Date(show.startTime);

        return (
          d.getDate() === selectedDate.day &&
          d.getMonth() + 1 === selectedDate.month
        );
      })
      .map((show) => show.price);

    return prices.length ? Math.min(...prices) : 0;
  }, [showtimes, uniqueDates, selectedDay]);

  return {
    uniqueDates,
    groupedCinema,
    minPrice,
  };
};