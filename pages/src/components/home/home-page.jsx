import Link from "next/link";
import Image from "next/image";

const Homepage = ({data}) => {
    return (
        <div className="home_body">
            {data.map(ev => <Link key={ev.id} href={`/events/${ev.id}`} className="card">
                <div className="image">
                    <Image alt={ev.title} width={600} height={400} src={ev.image} />
                </div>
                <div className="content">

                    <h2>{ev.title}</h2> <p>{ev.description}</p>
                </div>
            </Link>)}
        </div>
    )
}

export default Homepage;