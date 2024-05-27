document.onkeydown = (e) => {
    switch (
    (waitingKeyStart &&
        ((waitingKeyStart = !1), loop(), cancelAnimationFrame(rafHUD)),
        e.keyCode)
    ) {
        case 90:
        case 87:
        case 38:
            moveB = !0;
            break;
        case 81:
        case 65:
        case 37:
            moveL = !0;
            break;
        case 40:
        case 83:
            moveF = !0;
            break;
        case 68:
        case 39:
            moveR = !0;
            break;
        case 17:
        case 32:
            break;
        // n
        case 78:
            //load page
            window.location.href = "../" + "?level=" + (gameLevel + 1);
            break;
        // p
        case 80:
            window.location.href = "../" + "?level=" + (gameLevel - 1);
            break;
        // h
        case 72:
            window.open("https://github.com/zukahai/sokoban-3d-game/blob/main/README.md#sokoban-3d-game", "_blank");
            break;
        // k
        case 75:
            isShowText = !isShowText;
            break;
        default:
            isShowText = true;

    }
}
document.onkeyup = (e) => {
    switch (e.keyCode) {
        case 90:
        case 87:
        case 38:
            moveB = !1;
            break;
        case 81:
        case 65:
        case 37:
            moveL = !1;
            break;
        case 40:
        case 83:
            moveF = !1;
            break;
        case 68:
        case 39:
            moveR = !1;
            break;
        case 82:
            gameOver();
            break;
        case 77:
            sound = 1 - sound;
            break;
        case 32:
            selectedPlayer =
                (selectedPlayer + 1) % levels[gameLevel].starts.length;
    }
}