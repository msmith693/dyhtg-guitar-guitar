import { useState } from "react";
import FetchProducts from "./FetchProducts";
import QueryProducts from "./QueryProducts"

function App() {
  // [variable, functionToChangeIt] = useState(initialValue)
  // const [name, setName] = useState("");
  const [query, setQuery] = useState("");
  return (

    <div className="p-8 font-sans">

      <h1 className="text-3xl font-bold text-blue-500 header">Your Instrument Recommender!</h1>
      <p>Guitar Guitar's personal instrument recommendation tool.</p>
      <input
        type="text"
        placeholder="Max price"
        className="input-field"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <div>
        <FetchProducts />
      </div>

      <div>
        <QueryProducts/>
      </div>

      <p className="mt-4 text-lg">
        {query ? `Enter your maximumm price limit here.` : `Displaying products under ${query}`}
      </p>

    </div>
  );
}

export default App;


