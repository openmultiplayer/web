---
title: "GameText Styles | open.mp"
description: "GameText Styles used in textdraws and gametext."
canonical: https://open.mp/docs/scripting/resources/gametextstyles
language: en
---

# GameText Styles

This page covers everything you need to know about gametext styles, and how they can be used in [textdraws](https://open.mp/docs/scripting/functions/TextDrawCreate) and in text rendered for a (single) player. Mainly used by [GameTextForPlayer](https://open.mp/docs/scripting/functions/GameTextForPlayer) and [GameTextForAll](https://open.mp/docs/scripting/functions/GameTextForAll).

* * *

## Text Colors

It is possible to draw certain parts of your text in different colors. To do this, you simply need to use the colour slugs listed below, and encapsulate the part of your text which you want to draw in a specific color (e.g. `~y~I'm drawn in yellow!~y~`).

| Code | Colour | Description |
| --- | --- | --- |
| N/A |  | Default colour, has no code. |
| `~h~` |  | Lighter version of the default colour. |
| `~h~~h~` |  | Lighter version of the default colour. |
| `~r~` |  | Has five levels of lightening. |
| `~r~~h~` |  |  |
| `~r~~h~~h~` |  |  |
| `~r~~h~~h~~h~` |  |  |
| `~r~~h~~h~~h~~h~` |  |  |
| `~r~~h~~h~~h~~h~~h~` |  |  |
| `~g~` |  | Has four levels of lightening. |
| `~g~~h~` |  |  |
| `~g~~h~~h~` |  |  |
| `~g~~h~~h~~h~` |  |  |
| `~g~~h~~h~~h~~h~` |  | Same as `~y~~h~~h~`. |
| `~b~` |  | Has three levels of lightening. |
| `~b~~h~` |  |  |
| `~b~~h~~h~` |  |  |
| `~b~~h~~h~~h~` |  |  |
| `~p~` |  | Has two levels of lightening. |
| `~p~~h~` |  |  |
| `~p~~h~~h~` |  |  |
| `~y~` |  | Has two levels of lightening. |
| `~y~~h~` |  |  |
| `~y~~h~~h~` |  | Same as `~g~~h~~h~~h~~h~`. |
| `~l~` |  | Lower case "L". Can't be lightened. |
| `~w~ (or ~s~)` |  | Has one level of lightening. |
| `~w~~h~ (or ~s~~h~)` |  | All colours become this when lightened too much. |

* * *

## Special Text Letters

Unlike text colors, these slugs do not require encapsulation. They can be used as-is.

| Code | Description |
| --- | --- |
| `~n~` | New line |
| `~h~` | Turn selected colours lighter. Text can appear between the main colour and the lightening, for example `~r~Hello ~h~world` will make "Hello" red and "world" slightly lighter red. |
| `~u~` | Up arrow (gray) |
| `~d~` | Down arrow (gray) |
| `~<~` | Left arrow (gray) |
| `~>~` | Right arrow (gray) |
| `~]~` | Displays a `*` symbol (Only in text styles 3, 4 and 5) |
| `~k~` | Keyboard key mapping (e.g. `~k~~VEHICLE_TURRETLEFT~` and `~k~~PED_FIREWEAPON~`). Look [here](https://open.mp/docs/scripting/resources/keys) for a list of keys. |

caution

Be careful, using too many text colors or special characters in one gametext may crash every player the gametext is shown to. Additionally, avoid using an uneven usage of the `~` character.

Example: `~~r~Hello, ~g~how are ~y~you?`

## Text Styles

You can use the following text styles in game texts.

| Style | Preview | Description |
| --- | --- | --- |
| Style 0 |  | Appears for 9 seconds regardless of time setting. Hides textdraws and any other gametext on screen (fixed in fixes.inc / GameText+) |
| Style 1 |  | Fades out after 8 seconds, regardless of time set. If you have a time setting longer than that, it will re-appear after fading out and repeat until the time ends (fixed in fixes.inc / GameText+) |
| Style 2 |  | N/A |
| Style 3 |  | N/A |
| Style 4 |  | N/A |
| Style 5 |  | Displays for 3 seconds, regardless of what time you set. Will refuse to be shown if it is 'spammed' (fixed in fixes.inc / GameText+) |
| Style 6 |  | N/A |

* * *

## Text Styles added by [fixes.inc](https://github.com/pawn-lang/sa-mp-fixes) / [GameText+](https://github.com/itsneufox/GameText-Plus)

| Style | Preview | Description |
| --- | --- | --- |
| Style 7 |  | Based on SA vehicle names. |
| Style 8 |  | Based on SA location names. |
| Style 9 |  | Based on SA radio station names (once selected). |
| Style 10 |  | Based on SA radio station names (while switching). |
| Style 11 |  | Based on SA positive money. |
| Style 12 |  | Based on SA negative money. |
| Style 13 |  | Based on SA stunt bonuses. |
| Style 14 |  | Based on SA in-game clock. |
| Style 15 |  | Based on SA notification popup. |
