import React from "react";
import "./App.css";
import Concierge from "./pages/Concierge";
import Nav from "./components/Nav";

//Mock Data for demonstration purposes only! Replace with api layer in prod.
const mockData = {
  user: {
    name: "Yosef",
    memberSince: "03/16/2021",
    potentialSavings: 2022,
    lifetimeSavings: 9283,
  },
  notifications: [
    //Duplicate this if interested in testing more notifications
    {
      type: "claim", // can be claim, medical, dental, pharmacy, reminder
      name: "Bob",
      action: "Save up to",
      detail: "$247",
      message:
        "By submiting your urgent care claim dated Oct 27, 2020 to Guardian.",
      highlight: "urgent care claim",
      cta: "Save now",
      date: "3 min ago",
    },
    {
      type: "dental",
      name: "Joe",
      action: "Dental cleanings",
      detail: "2/yr",
      message:
        "Schedule your covered semi-annual dental cleaning with a dentist near you. Its not too late",
      highlight: "semi-annual dental cleaning",
      cta: "Save now",
      date: "2 hrs ago",
    },
  ],
};
function App() {
  //for demonstration purposes only. Replace with proper page routing in prod.
  const [page, setPage] = React.useState("concierge");

  return (
    <div className="App">
      <Nav
        page={page}
        name={mockData.user.name}
        updatePage={() => setPage}
        notificationCount={mockData.notifications.length}
      />
      {page === "concierge" && (
        <Concierge
          user={mockData.user}
          notifications={mockData.notifications}
        />
      )}
    </div>
  );
}

export default App;
