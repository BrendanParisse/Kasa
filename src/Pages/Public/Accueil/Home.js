import Banner from '@/Components/Banner/Banner.js';
import imgbanner from '@/Assets/Images/Baniere_1.png'
import Card from '@/Components/Card/Card.js';

import logementservice from "@/_Services/logement.service.js";

const Home = () => {
    return (
        <section className="SectionHome">
            <Banner image={imgbanner} title="Chez vous, partout et ailleurs" />
            <ul>
                {
                    logementservice.GetAllLogement().map((logement) =>
                        <Card key={logement.id} id={logement.id} cover={logement.cover} title={logement.title} />
                    )
                }
            </ul>
        </section>
    );
}

export default Home