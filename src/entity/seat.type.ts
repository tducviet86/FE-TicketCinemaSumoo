export enum SeatType {
  NORMAL = "NORMAL",
  VIP = "VIP",
  COUPLE = "COUPLE",
}

export enum SeatStatus {
  AVAILABLE = "AVAILABLE",
  BOOKED = "BOOKED",
  LOCKED = "LOCKED",
}

export interface Seat {
  id: string;

  code: string;

  row: string;

  number: number;

  type: SeatType;

  status: SeatStatus;

  price: number;
}

export interface SeatRow {
  row: string;

  seats: Seat[];
}