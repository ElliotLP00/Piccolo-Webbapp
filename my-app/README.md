So this is a party game where the aim of the game is to make the players complete various tasks. (alpha version)
The design is not fully done and more functionalaties will be added but this is a first draft at least

<h2>Make your own tasks</h2>
1. create a questionsJS folder in /src.
2. create a .js file with your name of that category.
3. 

export const doOrDrinkQ = {
    results: [
        {
            info: string, (To use the random player function inset a # once where the players name will show)
            requiedAmountOfPlayers: int
        }
    ]
}
4. Include file in the pages/GamePage/game_copy.js on the top of the page
5. add the resluts in "const initTasks" in pages/GamePage/game_copy.js