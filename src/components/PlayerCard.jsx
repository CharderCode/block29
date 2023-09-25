import { Link } from 'react-router-dom'
import { deletePlayer, fetchAllPlayers } from '../API';

export default function PlayerCard({player, fetchAllPlayers}) {
  const { id, name, breed, imageUrl } = player;
  async function handleClick(id) {
    await deletePlayer(id);
    fetchAllPlayers();
  }
  return (
    <div className = 'playerCard' key={id}>
        <h2>Name: {name}</h2>
        <p>Breed: {breed}</p>
        <img src={imageUrl} alt={name} />
        <div>
        <Link className='linkButton' to={`players/${id}`}>View Player</Link>
        <button onClick={() => handleClick(id)}>Delete Player</button>
        </div>
        </div>
  )
}