const Carousel = ({ carouselImages }) => {
    return (
        <div id="carouselExampleIndicators" className="carousel slide my-4" data-ride="carousel">
            <ol className="carousel-indicators">
                {
                    carouselImages.map(({ id }, index) => (
                        <li
                            key={id}
                            data-target="#carouselExampleIndicators"
                            data-slide-to={index}
                            className={[index === 0 && "active"].join(" ")}
                        />
                    ))
                }

                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner" role="listbox">
                {
                    carouselImages.map(({ id, url, name }, index) => (
                        <div key={id} className={["carousel-item", index === 0 && "active"].join(" ")}>
                            <picture>
                                <source
                                    srcSet={`${url}?fm=webp&w=480`}
                                    media="(max-width: 480px)"
                                    type="image/webp"
                                />
                                <source
                                    srcSet={`${url}?fm=webp&w=768`}
                                    media="(max-width: 768px)"
                                    type="image/webp"
                                />
                                <img src={url} alt={name} title={name} width="100%" height="350" />
                            </picture>
                        </div>
                    ))
                }
                {/* <div className="carousel-item">
                    <img className="d-block img-fluid" src="http://placehold.it/900x350" alt="Second slide" />
                </div>
                <div className="carousel-item">
                    <img className="d-block img-fluid" src="http://placehold.it/900x350" alt="Third slide" />
                </div> */}
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    );
};

export default Carousel;