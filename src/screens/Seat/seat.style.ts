import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const SEAT_SIZE = 30;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F1117",
  },

  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0F1117",
  },

  body: {
    flex: 1,
  },

  /*
  ===================================
              HEADER
  ===================================
  */

  header: {
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
  },

  backButton: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "#1C1E27",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },

  movieInfo: {
    flex: 1,
  },

  movieTitle: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "700",
  },

  cinemaName: {
    color: "#8E96A3",
    marginTop: 4,
    fontSize: 13,
  },

  showtime: {
    color: "#D5D8DE",
    fontSize: 13,
    marginTop: 2,
  },

  /*
  ===================================
            SCREEN
  ===================================
  */

  screenWrapper: {
    marginTop: 20,
    marginBottom: 30,
    alignItems: "center",
  },

  screenShadow: {
    width: width - 60,
    height: 12,
    borderRadius: 30,
    backgroundColor: "#6FA8FF",
    opacity: 0.25,
  },

  screen: {
    width: width - 80,
    height: 12,
    borderRadius: 20,
    backgroundColor: "#E8ECF5",
  },

  screenText: {
    marginTop: 12,
    color: "#AEB7C4",
    fontWeight: "600",
    letterSpacing: 2,
    fontSize: 12,
  },

  /*
  ===================================
          SEAT MAP
  ===================================
  */

  seatContainer: {
    paddingHorizontal: 20,
    marginBottom: 30,
  },

  seatRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
  },

  rowLabel: {
    width: 24,
    color: "#FFF",
    textAlign: "center",
    fontWeight: "700",
    marginRight: 10,
  },

  seatList: {
    flexDirection: "row",
    alignItems: "center",
  },

  seatGap: {
    width: 18,
  },

  seat: {
    width: SEAT_SIZE,
    height: SEAT_SIZE,
    borderRadius: 8,
    marginHorizontal: 3,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2D3442",
  },

  seatText: {
    color: "#FFF",
    fontSize: 10,
    fontWeight: "600",
  },

  normalSeat: {
    backgroundColor: "#2D3442",
  },

  vipSeat: {
    backgroundColor: "#F59E0B",
  },

  bookedSeat: {
    backgroundColor: "#5B6473",
  },

  selectedSeat: {
    backgroundColor: "#E53935",
  },  coupleSeat: {
    backgroundColor: "#8B5CF6",
  },

  lockedSeat: {
    backgroundColor: "#3F4654",
    opacity: 0.45,
  },

  seatDisabled: {
    opacity: 0.4,
  },

  /*
  ===================================
              LEGEND
  ===================================
  */

  legendContainer: {
    marginTop: 10,
    paddingHorizontal: 24,
    marginBottom: 30,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  legendItem: {
    width: "48%",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },

  legendSeat: {
    width: 20,
    height: 20,
    borderRadius: 6,
    marginRight: 10,
  },

  legendText: {
    color: "#FFFFFF",
    fontSize: 13,
  },

  /*
  ===================================
          SELECTED SEATS
  ===================================
  */

  selectedContainer: {
    paddingHorizontal: 20,
    marginBottom: 15,
  },

  selectedTitle: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "700",
    marginBottom: 10,
  },

  selectedList: {
    flexDirection: "row",
    flexWrap: "wrap",
  },

  selectedSeatItem: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 20,
    backgroundColor: "#E53935",
    marginRight: 8,
    marginBottom: 8,
  },

  selectedSeatText: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "700",
  },

  /*
  ===================================
            BOTTOM BOOKING
  ===================================
  */

  bottomContainer: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "#181C25",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingHorizontal: 22,
    paddingTop: 20,
    paddingBottom: 34,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 20,
    shadowOffset: {
      width: 0,
      height: -5,
    },
    elevation: 20,
  },

  bookingRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 18,
  },

  bookingLeft: {
    flex: 1,
  },

  bookingLabel: {
    color: "#AAB2C5",
    fontSize: 13,
    marginBottom: 5,
  },

  bookingSeat: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "700",
  },

  bookingPrice: {
    color: "#FF4D4F",
    fontSize: 24,
    fontWeight: "800",
  },

  bookingButton: {
    height: 56,
    borderRadius: 18,
    backgroundColor: "#E53935",
    justifyContent: "center",
    alignItems: "center",
  },

  bookingButtonDisabled: {
    backgroundColor: "#50596A",
  },

  bookingButtonText: {
    color: "#FFFFFF",
    fontWeight: "700",
    fontSize: 17,
  },

  /*
  ===================================
            PRICE CARD
  ===================================
  */

  priceCard: {
    backgroundColor: "#222833",
    borderRadius: 16,
    padding: 15,
    marginBottom: 18,
  },

  priceRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },

  priceLabel: {
    color: "#BFC7D5",
    fontSize: 13,
  },

  priceValue: {
    color: "#FFFFFF",
    fontWeight: "600",
    fontSize: 13,
  },

  totalRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderTopWidth: 1,
    borderTopColor: "#313846",
    paddingTop: 12,
    marginTop: 5,
  },

  totalLabel: {
    color: "#FFFFFF",
    fontWeight: "700",
    fontSize: 16,
  },

  totalValue: {
    color: "#FF4D4F",
    fontWeight: "800",
    fontSize: 20,
  },

  /*
  ===================================
              EMPTY
  ===================================
  */

  emptyContainer: {
    paddingVertical: 40,
    justifyContent: "center",
    alignItems: "center",
  },

  emptyText: {
    color: "#98A2B3",
    fontSize: 14,
  },
});

export default styles;