import Banner from '@/Components/Banner/Banner.js';
import imgbanner from '@/Assets/Images/Baniere_2.png';
import Collapse from '@/Components/Collapse/Collapse.js';

import ListeValeurs from "@/Assets/Api/Apropos.json";


const Apropos = () => {

    return (
        <section className="SectionApropos">
            <Banner image={imgbanner} title="" />
            <ul className="Liste_Déroulante">
                {ListeValeurs.map((valeur) => (
                    <Collapse key={valeur.id} content={valeur.content} title={valeur.title} />
                ))}
            </ul>
        </section>
    );
}

export default Apropos;

