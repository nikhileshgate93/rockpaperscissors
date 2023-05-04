import { GAME_VALUES, PAPER, ROCK, SCISSORS } from "../../constants";

function random(values:string[]) {
    return values[Math.floor(Math.random()*values.length)];
}

function getResult(userSelection:string[], computerSelection:string) {
    const results = userSelection.map((selection) => {
        if (selection === computerSelection) {
            return 0
        }
    
        if (selection === ROCK && computerSelection === PAPER) {
            return -1
        }
    
        if (selection === ROCK && computerSelection === SCISSORS) {
            return 1
        }
    
        if (selection === SCISSORS && computerSelection === PAPER) {
            return 1
        }
        
        if (selection === SCISSORS && computerSelection === ROCK) {
            return -1
        }
    
        if (selection === PAPER && computerSelection === ROCK) {
            return 1
        }
        
        if (selection === PAPER && computerSelection === SCISSORS) {
            return -1
        }
        return -1
    })

    return results
}

export const onPlay = (userSelection:string[]) => {
    const computerSelection = random(GAME_VALUES)
    const result = getResult(userSelection, computerSelection)
    return {
        result,
        computerSelection,
        userSelection
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
