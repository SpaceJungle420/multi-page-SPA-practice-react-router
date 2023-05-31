import { Outlet } from "react-router-dom";
import EventsNavigation from "../components/EventsNavigation";

function EventRootsLayout() {
  return (
    <>
      <h1>Event Roots Layout</h1>
      <EventsNavigation />
      <Outlet />
    </>
  );
}

export default EventRootsLayout;
