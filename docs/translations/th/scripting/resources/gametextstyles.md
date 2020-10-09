---
title: GameText Styles
description: GameText Styles to be used in textdraws and gametext
---

To be used with [GameText](../functions/GameTextForPlayer).

## Text Colors

- `~n~` New line

- `~r~` Red

- `~g~` Green

- `~b~` Blue

- `~w~` or ~s~ White

- `~y~` Yellow

- `~p~` Purple

- `~l~` Black (lower case L)

- `~h~` Turn text color lighter (used too much will make your text white, doesn't work on black)

## Special Text Letters

- `~u~` up arrow (gray)

- `~d~` down arrow (gray)

- `~<~` left arrow (gray)

- `~>~` right arrow (gray)

- `]` displays a \* symbol (Only in text styles 3, 4 and 5)

- `~k~` keyboard key mapping (e.g. ~k~~VEHICLE_TURRETLEFT~ and ~k~~PED_FIREWEAPON~). Look here for a list of keys

:::caution

Be careful, using too many text colors or special characters in one gametext may crash every player the gametext is shown to. Additionally, avoid using an uneven usage of the ~ character. Example: `~`~r~Hello, ~g~how are ~y~`~`you?`~`

:::

## Text Styles

### Style 0

![GameTextStyle0](/images/gameTextStyles/120px-Game-text-type0.png)

**Appears for 9 seconds regardless of time setting. Hides textdraws and any other gametext on screen.**

### Style 1

![GameTextStyle1](/images/gameTextStyles/120px-Game-text-type1.png)

**Fades out after 8 seconds, regardless of time set. If you have a time setting longer than that, it will re-appear after fading out and repeat until the time ends.**

### Style 2

![GameTextStyle2](/images/gameTextStyles/120px-Game-text-type2.png)

**Does not disappear until the player respawns.**

### Style 3

![GameTextStyle3](/images/gameTextStyles/120px-Game-text-type3.png)

### Style 4

![GameTextStyle4](/images/gameTextStyles/120px-Game-text-type4.png)

### Style 5

![GameTextStyle5](/images/gameTextStyles/120px-Game-text-type5.png)

**Displays for 3 seconds, regardless of what time you set. Will refuse to be shown if it is 'spammed'.**

### Style 6

![GameTextStyle6](/images/gameTextStyles/120px-Game-text-type6.png)
