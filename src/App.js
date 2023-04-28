import { useState } from "react";
import "./app.css";
import menu from "./data.js"
import Cards from "./Cards";
import Categorys from "./Categorys";

function App() {
  const [menuler, setMenu] = useState(menu);

  function filtre(filter) {
    setMenu(menu.filter((e) => e.category === filter))
  }

  function all() {
    setMenu(menu);
  }

  return (
    <div className="kok-etiket">
      <h2 className="baslik">Our menu <hr /></h2>

      <Categorys filtre={filtre} all={all} />

      <Cards menuler={menuler} />
    </div>
  );
}

export default App;
