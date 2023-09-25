import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchPlayerById } from "../API";

export default function SinglePlayer() {
  const { id } = useParams();
  const [player, setPlayer] = useState({});
  useEffect(() => {
    async function fetchData() {
      const data = await fetchPlayerById(id);
      console.log(data);
      setPlayer(data);
    }
    fetchData();
  }, [id]);
  if (!player) { <h1>Loading...</h1>
  }
  const { name, breed, imageUrl, status, team } = player;
  return (
    <>
    <Link to= '/'>Back To All Players</Link>
      <div className="playerCard" key={id}>
        <img src={imageUrl} alt={name} />
        <h2>Name: {name}</h2>
        <p>Breed: {breed}</p>
        <p>Position: {status}</p>
        { team && 
        <section>
          <h3>Team: {team.name}</h3>
        </section>
        }
      </div>
    </>
  );
}