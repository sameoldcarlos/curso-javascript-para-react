import './src/styles/settings/colors.css'
import './src/styles/generic/reset.css'
import './src/styles/elements/base.css'

import CardGame from "./src/components/CardGame";

const $root = document.querySelector("#root"); //boa pratica front-end: toda variavel que tenha $ guarda um elemento da tela
const $htmlCardGame = CardGame();

console.log(typeof $htmlCardGame);

$root.insertAdjacentHTML("beforeend", $htmlCardGame);