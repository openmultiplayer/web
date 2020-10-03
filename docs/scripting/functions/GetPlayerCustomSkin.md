---
id: GetPlayerCustomSkin
title: GetPlayerCustomSkin
description: Returns the class of the players custom skin downloaded from the server.
tags: ["player"]
---

:::warning

This function was added in SA-MP 0.3.DL R1 and will not work in earlier versions!

:::

## Description

Returns the class of the players custom skin downloaded from the server.

| Name     | Description                              |
| -------- | ---------------------------------------- |
| playerid | The player you want to get the skin from |

## Returns

The custom skin id that was specified in AddCharModel newid

## Examples

```c
playerskin = GetPlayerCustomSkin(playerid);
```

## Related Functions

- [GetPlayerSkin](GetPlayerSkin): Get a player's current skin.
- [SetPlayerSkin](SetPlayerSkin): Set a player's skin.
