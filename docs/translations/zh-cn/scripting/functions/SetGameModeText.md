---
title: SetGameModeText
description: Set the name of the game mode, which appears in the server browser.
tags: []
---

## Description

Set the name of the game mode, which appears in the server browser.

| Name             | Description                                |
| ---------------- | ------------------------------------------ |
| format[]         | The gamemode name to display.              |
| OPEN_MP_TAGS:... | Indefinite number of arguments of any tag. |

## Returns

This function does not return any specific values.

## Examples

```c
public OnGameModeInit()
{
    SetGameModeText("Team Deathmatch");
    return 1;
}
```

<br />

```c
#define GAME_MODE_VERSION "1.5.0"

public OnGameModeInit()
{
    SetGameModeText("Roleplay v%s", GAME_MODE_VERSION);
    return 1;
}
```
