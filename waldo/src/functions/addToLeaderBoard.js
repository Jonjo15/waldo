import {leaderBoardRef} from "../firebase/config"
export const addToLeaderBoard = (name, score) => {
    leaderBoardRef.add({name, score})
}