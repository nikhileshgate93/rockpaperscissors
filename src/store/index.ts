import { atom } from 'recoil'
const state = atom({
    key: 'state',
    default: {
        playerSelection: [] as string[],
        computerSelection: '',
        playerWon: false,
        isTie: false,
        balance: 5000,
        currentBet: {
            'Rock': 0,
            'Paper': 0,
            'Scissors': 0
        },
        playerWonCount: 0,
        playStarted: false
    }
})
export default state