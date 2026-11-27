---
title: "Map Icon Styles | open.mp"
description: "A list of Map Icons"
canonical: https://open.mp/docs/scripting/resources/mapiconstyles
language: en
---

# Map Icon Styles

info

This page has a list of all map icon styles which can be used by [SetPlayerMapIcon](https://open.mp/docs/scripting/functions/SetPlayerMapIcon) function.

| Value | Constant | Has checkpoint marker | Radar map range |
| --- | --- | --- | --- |
| 0 | MAPICON\_LOCAL | No | Close proximity Only |
| 1 | MAPICON\_GLOBAL | No | Show on radar edge as long as in range |
| 2 | MAPICON\_LOCAL\_CHECKPOINT | Yes | Close proximity only |
| 3 | MAPICON\_GLOBAL\_CHECKPOINT | Yes | Show on radar edge as long as in range |

note

The checkpoint styles also show a checkpoint-like marker in the game world at the icon's position, so remember to use a correct Z coordinate (not just X and Y) when using them.
