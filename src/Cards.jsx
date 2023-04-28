
function Cards({ menuler }) {

    return (
        <div className="menuler">
            {
                menuler.map((eleman) => {
                    return (
                        <div className="cards">

                            <div className="img"><img src={eleman.img} alt="resim" /></div>

                            <div className="card-body">
                                <p><strong>{eleman.title} {eleman.price}$</strong></p>
                                <p>{eleman.desc}</p>
                            </div>

                        </div>
                    )
                })
            }

        </div>
    )
};

export default Cards;