---
title: IsActorStreamedIn
description: Checks if an actor is streamed in for a player.
tags: []
---

# IsActorStreamedIn

<TagLinks />

::: warning

This function was added in SA-MP 0.3.7 and will not work in earlier versions!

:::

## Description

Checks if an actor is streamed in for a player.


| Name | Description |
|------|-------------|
|actorid | The ID of the actor.|
|forplayerid | The ID of the player.|


## Returns

This function returns 1 if the actor is streamed in for the player, or 0 if it is not.


## Examples


```c
new MyActor;
 
public OnGameModeInit()
{
    MyActor = CreateActor(...);
    return 1;
}
 
public OnPlayerSpawn(playerid)
{
    if(IsActorStreamedIn(MyActor, playerid))
    {
        // Do something
    }
}
```


## Related Functions


-  CreateActor: Create an actor (static NPC).
-  IsPlayerStreamedIn: Checks if a player is streamed in for another player.