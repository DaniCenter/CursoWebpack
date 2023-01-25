import Template from "@templates/Template.js";
import "@styles/main.css";
import "@styles/vars.scss";

(async function App() {
  console.log("Hola mundo");
  const main = null || document.getElementById("main");
  main.innerHTML = await Template();
})();
