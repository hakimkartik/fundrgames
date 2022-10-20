import { Outlet } from "react-router-dom";
import GameBottomButton from "../Components/GameBottomButton.js";
import GameDetailNav from "../Components/GameDetailNav.js";
import mainGame from "../js/main-game.js";
import GameDetail from "./GameDetail";

export default function Game() {
    document.body.classList.remove('oddBody2');
    document.body.classList.remove('oddBody');
    return(
        <>
            <GameDetail />
            <div className="paddings">
                <Outlet />
                <GameBottomButton />
            </div>
        </>
    )
}