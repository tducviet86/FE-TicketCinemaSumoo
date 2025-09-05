import { Ticket, Theater } from "../../entity/movie.entity";

const BRAND = "Sumoo Cinema";

export const sampleMovies: Ticket[] = [
  {
    id: "m1",
    title: "Truy Đuổi Trong Đêm",
    posterUrl:
      "https://image.tmdb.org/t/p/w342/2CAL2433ZeIihfX1Hb2139CX0pW.jpg",
    ageRating: "C16",
    runtimeMins: 124,
    genres: ["Hành động", "Tội phạm"],
    rating: 8.2,
  },
  {
    id: "m2",
    title: "Hài Kịch Ngoại Truyện",
    posterUrl:
      "https://image.tmdb.org/t/p/w342/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
    ageRating: "P",
    runtimeMins: 99,
    genres: ["Hài"],
    rating: 7.2,
  },
  {
    id: "m3",
    title: "Kỷ Nguyên Người Máy",
    posterUrl:
      "https://image.tmdb.org/t/p/w342/9QusGjxcYvfPD1THg6oW3RLeNn7.jpg",
    ageRating: "C13",
    runtimeMins: 132,
    genres: ["Khoa học viễn tưởng", "Hành động"],
    rating: 0,
  },
  {
    id: "m4",
    title: "Bí Ẩn Trong Rừng Sâu",
    posterUrl:
      "https://image.tmdb.org/t/p/w342/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
    ageRating: "C18",
    runtimeMins: 108,
    genres: ["Kinh dị", "Tâm lý"],
    rating: 7.0,
  },
];

export const THEATERS: Theater[] = [
  {
    id: "hcm-landmark",
    name: `${BRAND} Landmark 81`,
    address: "Vinhomes Central Park, Bình Thạnh",
    city: "TP.HCM",
    imageUrl:
      "https://images.unsplash.com/photo-1543965170-4c01a586684e?auto=format&fit=crop&w=1200&q=60",
    coords: { lat: 10.795, lon: 106.721 },
    amenities: ["IMAX", "3D", "Snack", "eTicket", "Parking"],
    schedules: [
      {
        movie: sampleMovies[0],
        showtimes: [
          {
            time: "10:30",
            format: "IMAX",
            language: "SUB",
            room: "IMAX 1",
            price: "160.000đ",
          },
          {
            time: "13:10",
            format: "IMAX",
            language: "SUB",
            room: "IMAX 1",
            price: "160.000đ",
          },
          {
            time: "16:40",
            format: "IMAX",
            language: "SUB",
            room: "IMAX 1",
            price: "190.000đ",
          },
          {
            time: "20:00",
            format: "IMAX",
            language: "SUB",
            room: "IMAX 1",
            price: "190.000đ",
          },
        ],
      },
      {
        movie: sampleMovies[2],
        showtimes: [
          {
            time: "11:15",
            format: "3D",
            language: "SUB",
            room: "R5",
            price: "130.000đ",
          },
          {
            time: "15:00",
            format: "3D",
            language: "SUB",
            room: "R5",
            price: "140.000đ",
          },
          {
            time: "18:20",
            format: "3D",
            language: "SUB",
            room: "R5",
            price: "140.000đ",
          },
        ],
      },
    ],
  },
  {
    id: "hcm-nguyentrai",
    name: `${BRAND} Nguyễn Trãi`,
    address: "135 Nguyễn Trãi, Quận 1",
    city: "TP.HCM",
    imageUrl:
      "https://images.unsplash.com/photo-1509097260578-d01a9e376d26?auto=format&fit=crop&w=1200&q=60",
    coords: { lat: 10.764, lon: 106.689 },
    amenities: ["3D", "Snack", "eTicket"],
    schedules: [
      {
        movie: sampleMovies[1],
        showtimes: [
          {
            time: "09:50",
            format: "2D",
            language: "VI",
            room: "R2",
            price: "85.000đ",
          },
          {
            time: "13:00",
            format: "2D",
            language: "VI",
            room: "R2",
            price: "95.000đ",
          },
          {
            time: "19:30",
            format: "2D",
            language: "VI",
            room: "R2",
            price: "110.000đ",
          },
        ],
      },
      {
        movie: sampleMovies[3],
        showtimes: [
          {
            time: "21:00",
            format: "2D",
            language: "SUB",
            room: "R4",
            price: "115.000đ",
          },
        ],
      },
    ],
  },
  {
    id: "hn-royal",
    name: `${BRAND} Vincom Royal City`,
    address: "72A Nguyễn Trãi, Thanh Xuân",
    city: "Hà Nội",
    imageUrl:
      "https://images.unsplash.com/photo-1491555103944-7c647fd857e6?auto=format&fit=crop&w=1200&q=60",
    coords: { lat: 21.002, lon: 105.812 },
    amenities: ["IMAX", "3D", "Snack", "eTicket", "Parking"],
    schedules: [
      {
        movie: sampleMovies[0],
        showtimes: [
          {
            time: "10:15",
            format: "IMAX",
            language: "SUB",
            room: "IMAX 1",
            price: "150.000đ",
          },
          {
            time: "13:30",
            format: "IMAX",
            language: "SUB",
            room: "IMAX 1",
            price: "150.000đ",
          },
          {
            time: "17:00",
            format: "IMAX",
            language: "SUB",
            room: "IMAX 1",
            price: "180.000đ",
          },
          {
            time: "20:10",
            format: "IMAX",
            language: "SUB",
            room: "IMAX 1",
            price: "180.000đ",
          },
        ],
      },
      {
        movie: sampleMovies[1],
        showtimes: [
          {
            time: "09:40",
            format: "2D",
            language: "VI",
            room: "R2",
            price: "85.000đ",
          },
          {
            time: "12:20",
            format: "2D",
            language: "VI",
            room: "R2",
            price: "95.000đ",
          },
          {
            time: "19:00",
            format: "2D",
            language: "VI",
            room: "R2",
            price: "110.000đ",
          },
        ],
      },
    ],
  },
  {
    id: "hp-vincom",
    name: `${BRAND} Vincom Hải Phòng`,
    address: "1 Lê Thánh Tông, Ngô Quyền",
    city: "Hải Phòng",
    imageUrl:
      "https://images.unsplash.com/photo-1558981285-6f0c94958bb6?auto=format&fit=crop&w=1200&q=60",
    coords: { lat: 20.861, lon: 106.683 },
    amenities: ["3D", "Snack", "eTicket"],
    schedules: [
      {
        movie: sampleMovies[2],
        showtimes: [
          {
            time: "10:00",
            format: "3D",
            language: "SUB",
            room: "R4",
            price: "120.000đ",
          },
          {
            time: "13:45",
            format: "3D",
            language: "SUB",
            room: "R4",
            price: "140.000đ",
          },
          {
            time: "18:20",
            format: "3D",
            language: "SUB",
            room: "R4",
            price: "140.000đ",
          },
        ],
      },
    ],
  },
  {
    id: "dn-indochina",
    name: `${BRAND} Indochina Đà Nẵng`,
    address: "74 Bạch Đằng, Hải Châu",
    city: "Đà Nẵng",
    imageUrl:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=60",
    coords: { lat: 16.066, lon: 108.224 },
    amenities: ["Snack", "eTicket", "Parking"],
    schedules: [
      {
        movie: sampleMovies[1],
        showtimes: [
          {
            time: "10:10",
            format: "2D",
            language: "VI",
            room: "R1",
            price: "80.000đ",
          },
          {
            time: "12:30",
            format: "2D",
            language: "VI",
            room: "R1",
            price: "90.000đ",
          },
          {
            time: "20:00",
            format: "2D",
            language: "VI",
            room: "R1",
            price: "105.000đ",
          },
        ],
      },
      {
        movie: sampleMovies[3],
        showtimes: [
          {
            time: "11:05",
            format: "2D",
            language: "SUB",
            room: "R3",
            price: "95.000đ",
          },
          {
            time: "15:40",
            format: "2D",
            language: "SUB",
            room: "R3",
            price: "105.000đ",
          },
        ],
      },
    ],
  },
  {
    id: "hue-coop",
    name: `${BRAND} Coopmart Huế`,
    address: "6 Trần Hưng Đạo",
    city: "Huế",
    imageUrl:
      "https://images.unsplash.com/photo-1544989164-31dc3c645987?auto=format&fit=crop&w=1200&q=60",
    coords: { lat: 16.463, lon: 107.59 },
    amenities: ["3D", "Snack", "eTicket"],
    schedules: [
      {
        movie: sampleMovies[2],
        showtimes: [
          {
            time: "09:30",
            format: "2D",
            language: "SUB",
            room: "R2",
            price: "85.000đ",
          },
          {
            time: "14:00",
            format: "2D",
            language: "SUB",
            room: "R2",
            price: "95.000đ",
          },
        ],
      },
    ],
  },
  {
    id: "ct-sense",
    name: `${BRAND} Sense City Cần Thơ`,
    address: "1 Đại lộ Hòa Bình, Ninh Kiều",
    city: "Cần Thơ",
    imageUrl:
      "https://images.unsplash.com/photo-1541417904950-b855846fe074?auto=format&fit=crop&w=1200&q=60",
    coords: { lat: 10.034, lon: 105.786 },
    amenities: ["Snack", "eTicket", "Parking"],
    schedules: [
      {
        movie: sampleMovies[1],
        showtimes: [
          { time: "10:00", format: "2D", language: "VI", price: "75.000đ" },
          { time: "12:10", format: "2D", language: "VI", price: "85.000đ" },
          { time: "15:40", format: "2D", language: "VI", price: "95.000đ" },
        ],
      },
    ],
  },
  {
    id: "vt-lehongphong",
    name: `${BRAND} Vũng Tàu Lê Hồng Phong`,
    address: "Lê Hồng Phong, Vũng Tàu",
    city: "Vũng Tàu",
    imageUrl:
      "https://images.unsplash.com/photo-1560448075-bb4caa6c8e28?auto=format&fit=crop&w=1200&q=60",
    coords: { lat: 10.355, lon: 107.084 },
    amenities: ["3D", "Snack", "eTicket"],
    schedules: [
      {
        movie: sampleMovies[0],
        showtimes: [
          { time: "09:30", format: "2D", language: "SUB", price: "85.000đ" },
          { time: "14:15", format: "2D", language: "SUB", price: "95.000đ" },
        ],
      },
    ],
  },
  {
    id: "bh-vincom",
    name: `${BRAND} Vincom Biên Hòa`,
    address: "Vincom Plaza, Biên Hòa, Đồng Nai",
    city: "Biên Hòa",
    imageUrl:
      "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?auto=format&fit=crop&w=1200&q=60",
    coords: { lat: 10.945, lon: 106.822 },
    amenities: ["Snack", "eTicket", "Parking"],
    schedules: [
      {
        movie: sampleMovies[2],
        showtimes: [
          { time: "10:45", format: "2D", language: "SUB", price: "85.000đ" },
          { time: "16:00", format: "2D", language: "SUB", price: "95.000đ" },
        ],
      },
    ],
  },
  {
    id: "nt-center",
    name: `${BRAND} Nha Trang Center`,
    address: "20 Trần Phú, Nha Trang",
    city: "Nha Trang",
    imageUrl:
      "https://images.unsplash.com/photo-1541427468627-a89a96e5ca52?auto=format&fit=crop&w=1200&q=60",
    coords: { lat: 12.238, lon: 109.196 },
    amenities: ["3D", "Snack", "eTicket"],
    schedules: [
      {
        movie: sampleMovies[3],
        showtimes: [
          { time: "11:00", format: "2D", language: "SUB", price: "90.000đ" },
          { time: "18:30", format: "2D", language: "SUB", price: "110.000đ" },
        ],
      },
    ],
  },
];
