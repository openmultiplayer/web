---
title: GetPlayerTeam
description: Kunin ang ID ng koponan kung nasaan ang manlalaro.
tags: ["player"]
---

## Description

Kunin ang ID ng koponan kung nasaan ang manlalaro.

| Name     | Description                              |
| -------- | ---------------------------------------- |
| playerid | Ang ID ng manlalaro para makuha ang koponan ng. |

## Returns

0-254: Ang koponan ng manlalaro. (0 ay isang wastong koponan)

255: Tinukoy bilang NO_TEAM. Ang manlalaro ay wala sa alinmang koponan.

-1: Nabigo ang function na isagawa. Hindi konektado ang player.

## Examples

```c
enum
{
    TEAM_ONE = 1,
    TEAM_TWO
};

public OnPlayerSpawn(playerid)
{
    // Ang mga manlalaro na nasa team 1 ay dapat mag-spawn sa Las Venturas airport.

    if (GetPlayerTeam(playerid) == TEAM_ONE)
    {
        SetPlayerPos(playerid, 1667.8909, 1405.5618, 10.7801);
    }
    return 1;
}
```

## Related Functions

- [SetPlayerTeam](SetPlayerTeam): Magtakda ng koponan ng manlalaro.
- [SetTeamCount](SetTeamCount): Itakda ang bilang ng mga team na available.