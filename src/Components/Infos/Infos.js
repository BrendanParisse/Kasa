import React from 'react';

const Infos = ({ title, location, name, picture, tags, note }) => {

    return (
        <div className='Fichelogement'>
            <div className='Infoslogement'>
                <h1>{title}</h1>
                <p>{location}</p>
            </div>
            <ul className='infos'>
                {tags.map((tag, id) => (
                    <li key={id}>{tag}</li>
                ))}
            </ul>
            <div className='InfosPersonne'>
                <div className='NomPhoto'>
                    <p>{name}</p>
                    <img src={picture} className='Cercle' alt="Cercle" />
                </div>
                <span>
                    {
                        [...Array(5)].map((_, index) => {
                            return (<i
                                key={index}
                                className={`fa-solid fa-star star ${index + 1 <= note ? 'pleine' : 'vide'}`}
                            ></i>)
                        })
                    }
                </span>
            </div>
        </div>
    );
};

export default Infos;
