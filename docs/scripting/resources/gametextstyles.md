---
title: GameText Styles

description: GameText Styles to be used in textdraws and gametext
---

To be used with [GameText](https://wiki.open.mp/docs/scripting/functions/GameTextForPlayer) and [textdraws](https://wiki.open.mp/docs/scripting/functions/TextDrawCreate).

## `Text Colors`
* `~n~` New line

* `~r~` Red

* `~g~` Green

* `~b~` Blue

* `~w~` or ~s~ White

* `~y~` Yellow

* `~p~` Purple

* `~l~` Black (lower case L)

* `~h~` Turn text color lighter (used too much will make your text white, doesn't work on black)

## `Special Text Letters`
* `~u~` up arrow (gray)

* `~d~` down arrow (gray)

* `~<~` left arrow (gray)

* `~>~` right arrow (gray)

* `]` displays a * symbol (Only in text styles 3, 4 and 5)

* `~k~` keyboard key mapping (e.g. ~k~~VEHICLE_TURRETLEFT~ and ~k~~PED_FIREWEAPON~). Look here for a list of keys

:::caution
Be careful, using too many text colors or special characters in one gametext may crash every player the gametext is shown to. Additionally, avoid using an uneven usage of the ~ character.
Example: `~`~r~Hello, ~g~how are ~y~`~`you?`~`
:::

## `Text Styles`

**Style 0**
----------
![![](/web/20190415201801im_/https://wiki.sa-mp.com/wroot/images2/thumb/0/00/Game-text-type0.jpg/120px-Game-text-type0.jpg)](https://web.archive.org/web/20190415201801im_/https://wiki.sa-mp.com/wroot/images2/thumb/0/00/Game-text-type0.jpg/120px-Game-text-type0.jpg)

**Appears for 9 seconds regardless of time setting. Hides textdraws and any other gametext on screen.**

**Style 1** 
-----------
![![](/web/20190415201801im_/https://wiki.sa-mp.com/wroot/images2/thumb/e/ef/Game-text-type1.jpg/120px-Game-text-type1.jpg)](https://web.archive.org/web/20190415201801im_/https://wiki.sa-mp.com/wroot/images2/thumb/e/ef/Game-text-type1.jpg/120px-Game-text-type1.jpg)

**Fades out after 8 seconds, regardless of time set. If you have a time setting longer than that, it will re-appear after fading out and repeat until the time ends.**

**Style 2**  
-----------
![![](/web/20190415201801im_/https://wiki.sa-mp.com/wroot/images2/thumb/4/47/Game-text-type2.jpg/120px-Game-text-type2.jpg)](https://web.archive.org/web/20190415201801im_/https://wiki.sa-mp.com/wroot/images2/thumb/4/47/Game-text-type2.jpg/120px-Game-text-type2.jpg)

**Does not disappear until the player respawns.**

**Style 3**
-----------
![![](/web/20190415201801im_/https://wiki.sa-mp.com/wroot/images2/thumb/1/13/Game-text-type3.jpg/120px-Game-text-type3.jpg)](https://web.archive.org/web/20190415201801im_/https://wiki.sa-mp.com/wroot/images2/thumb/1/13/Game-text-type3.jpg/120px-Game-text-type3.jpg)

**Style 4**
-----------
![![](/web/20190415201801im_/https://wiki.sa-mp.com/wroot/images2/thumb/1/1b/Game-text-type4.jpg/120px-Game-text-type4.jpg)](https://web.archive.org/web/20190415201801im_/https://wiki.sa-mp.com/wroot/images2/thumb/1/1b/Game-text-type4.jpg/120px-Game-text-type4.jpg)

**Style 5**
-----------
![![](/web/20190415201801im_/https://wiki.sa-mp.com/wroot/images2/thumb/1/14/Game-text-type5.jpg/120px-Game-text-type5.jpg)](https://web.archive.org/web/20190415201801im_/https://wiki.sa-mp.com/wroot/images2/thumb/1/14/Game-text-type5.jpg/120px-Game-text-type5.jpg)
  
**Displays for 3 seconds, regardless of what time you set. Will refuse to be shown if it is 'spammed'.**

**Style 6**
-----------
![![](/web/20190415201801im_/https://wiki.sa-mp.com/wroot/images2/thumb/4/4c/Game-text-type6.jpg/120px-Game-text-type6.jpg)](https://web.archive.org/web/20190415201801im_/https://wiki.sa-mp.com/wroot/images2/thumb/4/4c/Game-text-type6.jpg/120px-Game-text-type6.jpg)