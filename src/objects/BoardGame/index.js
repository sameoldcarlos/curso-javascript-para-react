import './style.css'
import CardGame from "../../components/CardGame";

const BoardGame = (amountCards) => {    
    const $htmlContent = CardGame().repeat(amountCards) 
    return `
        <section class="board-game">
            ${$htmlContent}
        </section>
    `
}

export default BoardGame;