import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },

  listContent: { paddingBottom: 24, paddingTop: 8 },
  columnWrapper: { paddingHorizontal: 12, justifyContent: "space-between" },

  /* Tabs */
  tabs: {
    flexDirection: "row",
    paddingHorizontal: 16,
    marginVertical: 16,
    gap: 8,
  },
  tab: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 12,
    backgroundColor: "#F4F5F6",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ECEDEF",
  },
  tabActive: { backgroundColor: "#111", borderColor: "#111" },
  tabText: { fontWeight: "700", color: "#1F2328", letterSpacing: 0.2 },
  tabTextActive: { color: "#fff" },

  /* Section */
  sectionHeader: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  sectionTitle: { fontSize: 18, fontWeight: "700", color: "#111" },

  /* Featured carousel */
  featuredCard: {
    width: 360,
    height: 180,
    marginHorizontal: 12,
    borderRadius: 18,
    overflow: "hidden",
    backgroundColor: "#eaeaea",
  },
  featuredImage: { width: "100%", height: "100%" },
  featuredOverlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: 14,
    backgroundColor: "rgba(0,0,0,0.35)",
  },
  featuredTitle: { color: "#fff", fontWeight: "800", fontSize: 18 },
  featuredMeta: { color: "#f5f5f5", marginTop: 6, fontWeight: "600" },

  /* Grid card */
  gridItemWrap: {
    flex: 1,
    marginBottom: 16,
    paddingHorizontal: 4,
  },
  gridCard: {
    backgroundColor: "#fff",
    borderRadius: 12,
    overflow: "hidden",
    // shadow iOS
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 6 },
    // elevation Android
    elevation: 2,
  },
  gridPoster: {
    width: "100%",
    aspectRatio: 2 / 3, // poster đứng 2:3
    backgroundColor: "#eee",
  },
  gridTitle: {
    fontSize: 14,
    fontWeight: "700",
    color: "#111",
    paddingHorizontal: 8,
    paddingTop: 8,
  },
  gridMeta: {
    fontSize: 12,
    color: "#666",
    paddingHorizontal: 8,
    paddingBottom: 10,
    paddingTop: 2,
  },
});

export default styles;
