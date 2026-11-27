---
title: "SetGameModeText | open.mp"
description: "Set the name of the game mode, which appears in the server browser."
canonical: https://open.mp/docs/scripting/functions/SetGameModeText
language: en
---

# SetGameModeText

## Description

Set the name of the game mode, which appears in the server browser.

| Name | Description |
| --- | --- |
| format\[\] | The gamemode name to display. |
| OPEN\_MP\_TAGS:... | Indefinite number of arguments of any tag. |

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

  

```c
#define GAME_MODE_VERSION "1.5.0"

public OnGameModeInit()
{
    SetGameModeText("Roleplay v%s", GAME_MODE_VERSION);
    return 1;
}
```
