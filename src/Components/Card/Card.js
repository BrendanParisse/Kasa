import { Link } from 'react-router-dom';

const Card = ({ id, cover, title }) => {
    return (
        <li key={id} className="Card" id={id}>
            <Link to={`/logement/${id}`}>
                <img className="Card-image" src={cover} alt="Card" />
                <div className="Card-sombre"></div>
                <h3 className="Card-titre">{title}</h3>
            </Link>
        </li>
    );
}

export default Card;