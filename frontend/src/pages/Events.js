import EventsList from "../components/EventsList";
import { useLoaderData, useRouteLoaderData } from "react-router-dom";

function EventsPage() {
  const events = useLoaderData();

  return (
    <>
      <EventsList events={events} />
    </>
  );
}

export default EventsPage;
