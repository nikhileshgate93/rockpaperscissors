import { GAME_VALUES, PAPER, ROCK, SCISSORS } from "../../constants";

function random(values:string[]) {
    return values[Math.floor(Math.random()*values.length)];
}

function getResult(userSelection:string[], computerSelection:string) {
    let winningSelection = ''
    const results = userSelection.map((selection) => {
        if (selection === computerSelection) {
            return 0
        }
    
        if (selection === ROCK && computerSelection === PAPER) {
            return -1
        }
    
        if (selection === ROCK && computerSelection === SCISSORS) {
            winningSelection = selection
            return 1
        }
    
        if (selection === SCISSORS && computerSelection === PAPER) {
            winningSelection = selection
            return 1
        }
        
        if (selection === SCISSORS && computerSelection === ROCK) {
            return -1
        }
    
        if (selection === PAPER && computerSelection === ROCK) {
            winningSelection = selection
            return 1
        }
        
        if (selection === PAPER && computerSelection === SCISSORS) {
            return -1
        }
        return -1
    })

    return {results, winningSelection}
}

export const onPlay = (userSelection:string[]) => {
    const computerSelection = random(GAME_VALUES)
    const output = getResult(userSelection, computerSelection)
    return {
        result: output.results,
        computerSelection,
        userSelection,
        winningSelection: output.winningSelection
    }
}

export const getBetSum = (bet:Object) => {
    const values = Object.values(bet)

    let betSum = 0
    values.forEach((value:number) => {
        betSum = betSum + value
    })

    return betSum
}
