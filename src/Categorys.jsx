
function Categorys({ filtre, all }) {

    return (
        <div className="kategori">
            <button onClick={all}>All</button>
            <button onClick={() => filtre("breakfast")}>Breakfast</button>
            <button onClick={() => filtre("lunch")}>Lunch</button>
            <button onClick={() => filtre("shakes")}>Shakes</button>
        </div>
    )
};

export default Categorys;