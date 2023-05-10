import Link from "next/link";
import Image from "next/image";

const EventsPage = ({data}) => {
  return (
      <div className="events_page">
          {/* <h1>Events</h1> */}
   
              {data.map(ev => <Link key={ev.id} href={`/events/${ev.id}`} className="card"><Image alt={ev.title} width={500} height={500} src={ev.image} /> <h2>{ev.title}</h2></Link>)}

   

      </div>
  )
}

export default EventsPage;
