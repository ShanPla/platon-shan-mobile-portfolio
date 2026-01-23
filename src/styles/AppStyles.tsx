import { StyleSheet } from "react-native";

export default StyleSheet.create({
  // Main container
  container: {
    flex: 1,
    padding: 20,
  },

  // Profile
  profileContainer: {
    alignItems: "center",
    marginVertical: 30,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 2,
    borderColor: "#4A90E2",
  },
  name: {
    fontSize: 26,
    fontWeight: "bold",
    marginTop: 10,
  },
  bio: {
    textAlign: "center",
    marginTop: 5,
    fontStyle: "italic",
  },

  // Section titles
  sectionTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 25,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingBottom: 5,
  },

  // Skills
  skillCard: {
    backgroundColor: "#e6f0ff",
    padding: 10,
    marginVertical: 5,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  },
  skillText: {
    fontSize: 16,
    color: "#333",
  },

  // Contact
  contactCard: {
    backgroundColor: "#f0f0f0",
    padding: 15,
    marginVertical: 5,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.15,
    shadowRadius: 2,
    elevation: 2,
  },
  contactText: {
    fontSize: 16,
    marginTop: 5,
  },

  // Theme toggle
  toggleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: "#d9d9d9",
    borderRadius: 10,
  },

  // Projects
  projectCard: {
    backgroundColor: "#4A90E2",
    padding: 15,
    borderRadius: 12,
    marginVertical: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },
  projectTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  projectDescription: {
    color: "#fff",
    marginTop: 5,
  },

  // Footer
  footer: {
    marginTop: 40,
    paddingVertical: 15,
    borderTopWidth: 1,
    borderTopColor: "#888",
    alignItems: "center",
  },
  footerText: {
    fontSize: 14,
    opacity: 0.7,
  },

  // Navbar
  navbar: {
    borderBottomWidth: 1,
    borderBottomColor: "#888",
    paddingBottom: 10,
    marginBottom: 10,
  },

  navTopRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 10,
  },

  navTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },

  navBottomRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 8,
  },

});
