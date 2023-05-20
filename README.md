# A simple adventure game by Akash Basu based on a simple adventure game engine by [Adam Smith](https://github.com/rndmcnlly).

## Code requirements:
- The game uses both continuous and discrete inputs from the player
- The player’s goal can only be achieved indirectly (by allowing the physics engine to move key objects into position/contact).
- 3+ physics-based gameplay scenes (possibly implemented with a single Phaser Scene subclass).
- Other scenes are used to separate and contextualize the gameplay scenes


## Experience requirements:
- **4+ locations in the game world**: satisfied (name at least 4 of the classes): **Room1, Room2, Room3, Room4, DoorA, DoorB, Room5**
- **2+ interactive objects in most scenes**: satisfied (describe two examples): **Room 3 has two buttons and Room 4 has two doors**
- **Many objects have `pointerover` messages**: satisfied **Button A and Button B both have pointerover messages describing what they are**
- **Many objects have `pointerdown` effects**: satisfied (describe two examples): **Button A has a pointer down effect in which text appears saying its the wrong button while shaking and Passcode has a pointer down effect in which there is a message saying you took it and it fades away. There is also text in Room 5 that has an animation in which it comes in from the top.**
- **Some objects are themselves animated**: satisfied (describe two examples): **Button A has a shaking animation and the Passcode has a fade away animation**

## Asset sources:
- **logo.png:** Created by me using ms paint. It was not based on another work.
- **ltext.png:** Created by me using ms paint. It was not based on another work.
- **monke.jpg:** Was not created by me. This is a picture taken by [Thomas Marent](https://www.smithsonianmag.com/smart-news/monkeys-like-full-red-lips-too-180957565/) of a black and white snub nosed monkey.

Code sources:
- `adventure.js` and `index.html` were created for this project [Adam Smith](https://github.com/rndmcnlly) and edited by me.
- `game.js` was sketched by [Adam Smith](https://github.com/rndmcnlly) and rewritten by me.
