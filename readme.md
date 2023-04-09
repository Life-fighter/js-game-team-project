# JavaScript Game Team Project

Everything in this repo is published live here:

https://lxp200.github.io/js-game-team-project/

Each subfolder is assigned to one of us:

`/stage1` is Aleksey's\
`/stage2` is Yuanbo's\
`/stage3` is Lucas'

You can already link your minigame `index.html` to `global.css` to benefit from all future styles by respecting the template below. Example:

`<link rel="stylesheet" href="../global.css">`

Feel free to add your own CSS file inside your subfolder if your game requires a custom layout (a custom table, a custom grid, etc). Example:

`<link rel="stylesheet" href="./stage1.css">`

Basically, this is the template that you can use:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JS Triathlon | (minigame title goes here)</title>
    <link rel="stylesheet" href="../global.css"> <!-- for visual consistency across all website -->
    <link rel="stylesheet" href="./stage1.css"> <!-- your minigame custom css if needed -->
</head>
<body>

    <div id="main-container">

        <h1>JS Triathlon</h1>

        <h2>(minigame title goes here)</h2>

        <div id="game">

            (code goes here)

            <div id="game-scores">
                <p>Current Score: <span id="game-current-score">0</span></p>
                <p>Highscore: <span id="game-highscore">0</span</p>
            </div>

        </div>

        <div id="back"><a href="../">back</a></div>

    </div>

    <script src="./stage1.js"></script> <!-- script for your minigame -->

</body>
</html>
```

Note: I already created the `index.html` files in each subfolder according to that template.