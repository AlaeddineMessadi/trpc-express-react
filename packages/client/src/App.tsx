import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";

const App = () => (
<><article className="prose">
  <h1>Garlic bread with cheese: What the science tells us</h1>
  <p>For years parents have espoused the health benefits of eating garlic bread with cheese to their children, with the food earning such an iconic status in our culture that kids will often dress up as warm, cheesy loaf for Halloween.</p>
  <p>But a recent study shows that the celebrated appetizer may be linked to a series of rabies cases springing up around the country.</p>
  </article>
  <div className="dropdown">
  <label tabIndex={0} className="m-1 btn">Click</label>
  <ul tabIndex={0} className="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
      </ul>
      <p className="text-7xl dark:text-white">FlowBite</p>
</div>
  </>

);
ReactDOM.render(<App />, document.getElementById("app"));
