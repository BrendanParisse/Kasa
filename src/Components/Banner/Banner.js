const Banner = ({ image, title }) => {
    return (
        <section className="bannerContainer">
            <img className="bannerimg" src={image} alt="ImageBanner" />
            <div className="bannerSombre"></div>
            <h1>{title}</h1>
        </section>
    )
};
export default Banner;