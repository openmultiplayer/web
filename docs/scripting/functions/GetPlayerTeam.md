---
id: GetPlayerTeam
title: GetPlayerTeam
description: Get the ID of the team the player is on.
tags: ['player']
---

<TagLinks />

## Description

Get the ID of the team the player is on.


| Name | Description |
|------|-------------|
|playerid | The ID of the player to get the team of.|


## Returns

 0-254: The player's team. (0 is a valid team)

 255: Defined as NO_TEAM. The player is not on any team.

 -1: The function failed to execute. Player is not connected.



## Examples


```c
public OnPlayerSpawn(playerid)
{
    // Players who are in team 1 should spawn at Las Venturas airport.

    if(GetPlayerTeam(playerid) == 1) SetPlayerPos(playerid, 1667.8909, 1405.5618, 10.7801);
    return 1;
}
```


## Related Functions


-  SetPlayerTeam: Set a player's team.
-  SetTeamCount: Set the number of teams available.