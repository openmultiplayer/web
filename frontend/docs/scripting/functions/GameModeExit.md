---
title: GameModeExit
sidebar_label: GameModeExit
description: Ends the current gamemode.
tags: []
---

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

- [SetModeRestartTime](SetModeRestartTime): Sets the delay between loading main scripts, in seconds.

## Related Callbacks

- [OnGameModeExit](../callbacks/OnGameModeExit): Called when a gamemode ends.
