---
title: GameText Styles
description: GameText Styles used in textdraws and gametext.
---

This page covers everything you need to know about gametext styles, and how they can be used in textdraws and in text rendered for a (single) player.
Mainly used by [GameText](../functions/GameTextForPlayer) and [GameTextForAll](../functions/GameTextForAll).

---

## Text Colors

It is possible to draw certain parts of your text in different colors. To do this, you simply need to use the colour slugs listed below, and encapsulate the part of your text which you want to draw in a specific color (e.g. \~y\~I'm drawn in yellow!\~y\~).

| Code                 | Colour                                                              | Description                                      |
| -------------------- | ------------------------------------------------------------------- | ------------------------------------------------ |
| N/A                  | ![](https://assets.open.mp/assets/images/gameTextStyles/-.png)      | Default colour, has no code.                     |
| `~h~`                | ![](https://assets.open.mp/assets/images/gameTextStyles/h.png)      | Lighter version of the default colour.           |
| `~h~~h~`             | ![](https://assets.open.mp/assets/images/gameTextStyles/hh.png)     | Lighter version of the default colour.           |
| `~r~`                | ![](https://assets.open.mp/assets/images/gameTextStyles/r.png)      | Has five levels of lightening.                   |
| `~r~~h~`             | ![](https://assets.open.mp/assets/images/gameTextStyles/rh.png)     |                                                  |
| `~r~~h~~h~`          | ![](https://assets.open.mp/assets/images/gameTextStyles/rhh.png)    |                                                  |
| `~r~~h~~h~~h~`       | ![](https://assets.open.mp/assets/images/gameTextStyles/rhhh.png)   |                                                  |
| `~r~~h~~h~~h~~h~`    | ![](https://assets.open.mp/assets/images/gameTextStyles/rhhhh.png)  |                                                  |
| `~r~~h~~h~~h~~h~~h~` | ![](https://assets.open.mp/assets/images/gameTextStyles/rhhhhh.png) |                                                  |
| `~g~`                | ![](https://assets.open.mp/assets/images/gameTextStyles/g.png)      | Has four levels of lightening.                   |
| `~g~~h~`             | ![](https://assets.open.mp/assets/images/gameTextStyles/gh.png)     |                                                  |
| `~g~~h~~h~`          | ![](https://assets.open.mp/assets/images/gameTextStyles/ghh.png)    |                                                  |
| `~g~~h~~h~~h~`       | ![](https://assets.open.mp/assets/images/gameTextStyles/ghhh.png)   |                                                  |
| `~g~~h~~h~~h~~h~`    | ![](https://assets.open.mp/assets/images/gameTextStyles/ghhhh.png)  | Same as `~y~~h~~h~`.                             |
| `~b~`                | ![](https://assets.open.mp/assets/images/gameTextStyles/b.png)      | Has three levels of lightening.                  |
| `~b~~h~`             | ![](https://assets.open.mp/assets/images/gameTextStyles/bh.png)     |                                                  |
| `~b~~h~~h~`          | ![](https://assets.open.mp/assets/images/gameTextStyles/bhh.png)    |                                                  |
| `~b~~h~~h~~h~`       | ![](https://assets.open.mp/assets/images/gameTextStyles/bhhh.png)   |                                                  |
| `~p~`                | ![](https://assets.open.mp/assets/images/gameTextStyles/p.png)      | Has two levels of lightening.                    |
| `~p~~h~`             | ![](https://assets.open.mp/assets/images/gameTextStyles/ph.png)     |                                                  |
| `~p~~h~~h~`          | ![](https://assets.open.mp/assets/images/gameTextStyles/phh.png)    |                                                  |
| `~y~`                | ![](https://assets.open.mp/assets/images/gameTextStyles/y.png)      | Has two levels of lightening.                    |
| `~y~~h~`             | ![](https://assets.open.mp/assets/images/gameTextStyles/yh.png)     |                                                  |
| `~y~~h~~h~`          | ![](https://assets.open.mp/assets/images/gameTextStyles/yhh.png)    | Same as `~g~~h~~h~~h~~h~`.                       |
| `~l~`                | ![](https://assets.open.mp/assets/images/gameTextStyles/l.png)      | Lower case "L". Can't be lightened.              |
| `~w~ (or ~s~)`       | ![](https://assets.open.mp/assets/images/gameTextStyles/w.png)      | Has one level of lightening.                     |
| `~w~~h~ (or ~s~~h~)` | ![](https://assets.open.mp/assets/images/gameTextStyles/wh.png)     | All colours become this when lightened too much. |

---

## Special Text Letters

Unlike text colors, these slugs do not require encapsulation. They can be used as-is.

| Code  | Description                                                                                                                                                                        |
| ----- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `~n~` | New line                                                                                                                                                                           |
| `~h~` | Turn selected colours lighter. Text can appear between the main colour and the lightening, for example `~r~Hello ~h~world` will make "Hello" red and "world" slightly lighter red. |
| `~u~` | Up arrow (gray)                                                                                                                                                                    |
| `~d~` | Down arrow (gray)                                                                                                                                                                  |
| `~<~` | Left arrow (gray)                                                                                                                                                                  |
| `~>~` | Right arrow (gray)                                                                                                                                                                 |
| `~]~` | Displays a `*` symbol (Only in text styles 3, 4 and 5)                                                                                                                             |
| `~k~` | Keyboard key mapping (e.g. `~k~~VEHICLE_TURRETLEFT~` and `~k~~PED_FIREWEAPON~`). Look [here](../resources/keys) for a list of keys.                                                |

:::caution

Be careful, using too many text colors or special characters in one gametext may crash every player the gametext is shown to. Additionally, avoid using an uneven usage of the `~` character. Example: `~~r~Hello, ~g~how are ~y~you?`

:::

## Text Styles

You can use the following text styles in game texts.

| Style   | Preview                                                             | Description                                                                                                                                                                            |
| ------- | ------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Style 0 | ![](https://assets.open.mp/assets/images/gameTextStyles/style0.png) | Appears for 9 seconds regardless of time setting. Hides textdraws and any other gametext on screen (fixed in fixes.inc)                                                                |
| Style 1 | ![](https://assets.open.mp/assets/images/gameTextStyles/style1.png) | Fades out after 8 seconds, regardless of time set. If you have a time setting longer than that, it will re-appear after fading out and repeat until the time ends (fixed in fixes.inc) |
| Style 2 | ![](https://assets.open.mp/assets/images/gameTextStyles/style2.png) | N/A                                                                                                                                                                                    |
| Style 3 | ![](https://assets.open.mp/assets/images/gameTextStyles/style3.png) | N/A                                                                                                                                                                                    |
| Style 4 | ![](https://assets.open.mp/assets/images/gameTextStyles/style4.png) | N/A                                                                                                                                                                                    |
| Style 5 | ![](https://assets.open.mp/assets/images/gameTextStyles/style5.png) | Displays for 3 seconds, regardless of what time you set. Will refuse to be shown if it is 'spammed' (fixed in fixes.inc)                                                               |
| Style 6 | ![](https://assets.open.mp/assets/images/gameTextStyles/style6.png) | N/A                                                                                                                                                                                    |

---

## Text Styles added by [fixes.inc](https://github.com/pawn-lang/sa-mp-fixes)

| Style    | Preview                                                              | Description                                        |
| -------- | -------------------------------------------------------------------- | -------------------------------------------------- |
| Style 7  | ![](https://assets.open.mp/assets/images/gameTextStyles/style7.png)  | Based on SA vehicle names.                         |
| Style 8  | ![](https://assets.open.mp/assets/images/gameTextStyles/style8.png)  | Based on SA location names.                        |
| Style 9  | ![](https://assets.open.mp/assets/images/gameTextStyles/style9.png)  | Based on SA radio station names (once selected).   |
| Style 10 | ![](https://assets.open.mp/assets/images/gameTextStyles/style10.png) | Based on SA radio station names (while switching). |
| Style 11 | ![](https://assets.open.mp/assets/images/gameTextStyles/style11.png) | Based on SA positive money.                        |
| Style 12 | ![](https://assets.open.mp/assets/images/gameTextStyles/style12.png) | Based on SA negative money.                        |
| Style 13 | ![](https://assets.open.mp/assets/images/gameTextStyles/style13.png) | Based on SA stunt bonuses.                         |
| Style 14 | ![](https://assets.open.mp/assets/images/gameTextStyles/style14.png) | Based on SA in-game clock.                         |
| Style 15 | ![](https://assets.open.mp/assets/images/gameTextStyles/style15.png) | Based on SA notification popup.                    |
