import React, { useEffect, useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { LogementService } from '@/_Services/logement.service.js';
import Infos from '@/Components/Infos/Infos.js';
import Carousel from '@/Components/Slideshow/Slideshow.js';
import Collapse from '@/Components/Collapse/Collapse.js';

const Fichelogement = () => {
    const { id } = useParams();
    const [logement, setLogement] = useState(null);
    const [isValidId, setIsValidId] = useState(true); // State pour vérifier si l'id est valide

    useEffect(() => {
        const fetchLogement = async () => {
            const fetchedLogement = await LogementService.GetOneLogement(id);
            if (fetchedLogement) {
                setLogement(fetchedLogement);
            } else {
                setIsValidId(false); // Si l'id n'est pas valide, isValidId = false
            }
        };

        fetchLogement();
    }, [id]);

    // Si l'id n'est pas valide => 404
    if (!isValidId) {
        return <Navigate to="/404" />;
    }

    return (
        <section className="Sectionlogement">
            {logement && (
                <>
                    <Carousel id={logement.id} />
                    <Infos title={logement.title} location={logement.location} name={logement.host.name} picture={logement.host.picture} tags={logement.tags} note={logement.rating}
                    />
                    <ul className="Liste_Déroulante">
                        <Collapse title="Description" content={logement.description} />
                        <Collapse
                            title="Équipements"
                            content={
                                <ul>
                                    {logement.equipments.map((equipment, id) => (
                                        <li key={id}>{equipment}</li>
                                    ))}
                                </ul>
                            }
                        />
                    </ul>
                </>
            )}
        </section>
    );
};

export default Fichelogement;