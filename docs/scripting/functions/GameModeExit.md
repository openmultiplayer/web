---
title: "GameModeExit | open.mp"
description: "Ends the current gamemode."
canonical: https://open.mp/docs/scripting/functions/GameModeExit
language: en
---

# GameModeExit

## Description

Ends the current gamemode.

## Returns

This function does not return any specific values.

## Examples

```c
if (OneTeamHasWon)
{
    GameModeExit();
}
```

## Related Functions

-   [SetModeRestartTime](https://open.mp/docs/scripting/functions/SetModeRestartTime): Sets the delay between loading main scripts, in seconds.

## Related Callbacks

-   [OnGameModeExit](https://open.mp/docs/scripting/callbacks/OnGameModeExit): Called when a gamemode ends.
