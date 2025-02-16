---
title: GetActorSpawnInfo
sidebar_label: GetActorSpawnInfo
description: Get the initial spawn point of the actor.
tags: ["actor"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Description

Get the initial spawn point of the actor.

| Name              | Description                                                                  |
|-------------------|------------------------------------------------------------------------------|
| actorid           | The ID of the actor to get the spawn point of                                |
| &skin             | A variable into which to store the skin in, passed by reference.             |
| &Float:spawnX     | A float variable into which to store the spawnX in, passed by reference.     |
| &Float:spawnY     | A float variable into which to store the spawnY in, passed by reference.     |
| &Float:spawnZ     | A float variable into which to store the spawnZ in, passed by reference.     |
| &Float:spawnAngle | A float variable into which to store the spawnAngle in, passed by reference. |

## Return Values

Returns **true** if the actor is valid, otherwise returns **false**.

## Examples

```c
new gMyActor;

public OnGameModeInit()
{
    gMyActor = CreateActor(179, 1153.9640, -1772.3915, 16.5920, 0.0000);

    new skin,
        Float:spawnX,
        Float:spawnY,
        Float:spawnZ,
        Float:spawnAngle;
    
    GetActorSpawnInfo(gMyActor, skin, spawnX, spawnY, spawnZ, spawnAngle);
    return 1;
}
```

## Related Functions

- [CreateActor](CreateActor): Create an actor (static NPC).
- [GetActorPos](GetActorPos): Get the position of an actor.
- [SetActorPos](SetActorPos): Set the position of an actor.
- [GetActorSkin](GetActorSkin): Get the skin of the actor.
- [SetActorSkin](SetActorSkin): Set the skin of the actor.
