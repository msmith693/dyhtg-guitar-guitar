import { useState } from "react";
import FetchProducts from "./FetchProducts";

function App() {
  // [variable, functionToChangeIt] = useState(initialValue)
  const [name, setName] = useState("");
  return (

    <div className="p-8 font-sans">
      <div>
        <FetchProducts />
      </div>

      <h1 className="text-3xl font-bold text-blue-500 header">Your Instrument Recommender!</h1>
      <p>Guitar Guitar's personal instrument recommendation tool.</p>
      <input
        type="text"
        placeholder="Enter your name here"
        className="input-field"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <p className="mt-4 text-lg">
        {name ? `Welcome, ${name}!` : "Type your name above."}
      </p>
    </div>
  );
}

export default App;


