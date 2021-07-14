import CardGame from "../../components/CardGame";

const BoardGame = (amountCards) => {    
    return CardGame().repeat(amountCards) 
}

export default BoardGame;