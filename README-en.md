# SOKOBAN 3D GAME

Choose language: [Vietnamese](./README.md) | [English](./README-en.md)

## Description

![Sokoban 3D](https://github.com/zukahai/sokoban-3d/assets/85035951/bc061f7f-dc4e-4c92-b09d-c8b09f2b0672)

This is a puzzle game where your task is to move the black cube to the position of the ball. To move the cube, simply press the arrow keys on the keyboard. The game features various puzzle elements such as secret rooms, stairs, doors, keys, etc. You need to find a way to overcome these obstacles to reach the position of the ball.

## Installation

Play directly [here](https://sokoban-3d.vercel.app/)

## Contribute a Level

### Create Your Own Level

Access: https://sokoban-3d.vercel.app/create/

Table of Contents:

1. [Preview Your Level](#1-preview-your-level)
2. [Change Block Heights](#2-change-block-heights)
3. [Add Rows and Columns](#3-add-rows-and-columns)
4. [Add Starting Point](#4-add-starting-point)
5. [Change Ending Point](#5-change-ending-point)
6. [Add Regular Cubes](#6-add-regular-cubes)
7. [Add Climbing Cubes](#7-add-climbing-cubes)
8. [Add Regular Switches](#8-add-regular-switches)
9. [Add Hold Switches](#9-add-hold-switches)

#### 1. Preview Your Level
Press `Enter` to preview your level:

For example, with the image below:

![Create Level 1](./assets/images/create1.png)

After pressing `Enter`, the level will be displayed as follows:

![Create Level 2](./assets/images/create2.png)

#### 2. Change Block Heights

Change the block heights by clicking on the cells. The values will range from 0 to 9, representing the heights of the blocks.

#### 3. Add Rows and Columns

- Press ↑ to add a row above
- Press ↓ to add a row below
- Press ← to add a column on the left
- Press → to add a column on the right

#### 4. Add Starting Point

Press `S` and select the cell where you want to place the starting point.

#### 5. Change Ending Point

Press `K` and select the cell where you want to place the ending point.

#### 6. Add Regular Cubes

Press `P` and select the cell where you want to place a regular cube.

#### 7. Add Climbing Cubes

Press `Q` and select the cell where you want to place a climbing cube.

#### 8. Add Regular Switches

Press `B` to display the following:

![Add Regular Switch](./assets/images/create3.png)

Click on the green cell to change the depth when the switch is activated. The number 1 means that the designated cell will decrease its depth by 1 when the switch is pressed. The number -1 means that the designated cell will decrease its depth by 1 when the switch is pressed.

Select the cell to place the switch, then select the cell that the switch will activate.

#### 9. Add Hold Switches

Press `M` and follow the same steps as regular switches.

## How to Add Your Level to the Game

You can send me a direct message on Facebook: [Phan Đức Hải](https://www.facebook.com/chiatayde/) and send me the `data.txt` file.

If you have a GitHub account, you can add your level to the game by following these steps:

Go to https://sokoban-3d.vercel.app/create/

Press `H` to create a file named `data.txt`. Copy the content of this file and follow the instructions.

Access: https://github.dev/zukahai/sokoban-3d-game

Wait for the web page to load, it will appear as shown below:

![Contribute Step 1](./assets/images/contribute1.png)

Select `config.js`, inside it is the current number of levels. You need to increase it by 1. For example, if there are currently 21 levels, you need to change it to 22.

![Contribute Step 2](./assets/images/contribute2.png)

Continue to select `assets`, wait for it to load, then select `levels`. The window will appear as shown below:

![Contribute Step 3](./assets/images/contribute3.png)

Click on the icon as shown below to create a new file named `levelX.json`, where `X` is the number of your level. For example, if you want to create level 22, you need to create the file `level22.json`.
*Note: The GitHub.dev system loads continuously, so sometimes it may not receive the signal to create the file. You need to be patient and perform this operation multiple times if you don't see the system asking for the file name.*

Then paste the content of the `data.txt` file into the newly created `levelX.json` file. Remember to change the `indexLevel` part to `X` in the `levelX.json` file. For example, if you are creating level 22, you need to change it to `var indexLevel = 22;`.

![Contribute Step 5](./assets/images/contribute5.png)

- Switch to the source control tab by selecting the icon as shown below
- Write a message to let me know what you want to do, for example, `add level 22`
- Press the `Commit and push` button

![Contribute Step 6](./assets/images/contribute6.png)

If there is a prompt, select `fork repository` to create a copy of the game on your GitHub.

![Contribute Step 7](./assets/images/contribute7.png)

If the next interface appears, simply select `patch-1` and press `Enter` to create a Pull Request.

Finally, create a Pull Request:<br>Access: https://github.com/zukahai/sokoban-3d-game

![Contribute Step 8](./assets/images/contribute8.png)

Select `Compare & pull request`

![Contribute Step 9](./assets/images/contribute9.png)

Finally, select `Create pull request` and wait for a response from me.

#### If you encounter any issues or have trouble following the steps, you can contact me on Facebook: [Phan Đức Hải](https://www.facebook.com/chiatayde/)