---
title: "SetPlayerFacingAngle | open.mp"
description: "Set a player's facing angle (Z rotation)."
canonical: https://open.mp/docs/scripting/functions/SetPlayerFacingAngle
language: en
---

# SetPlayerFacingAngle

## Description

Set a player's facing angle (Z rotation).

| Name | Description |
| --- | --- |
| playerid | The ID of the player to set the facing angle of. |
| Float:angle | The angle the player should face. |

## Returns

**true** - The function executed successfully.

**false** - The function failed to execute. The player specified does not exist.

## Examples

```c
SetPlayerFacingAngle(playerid, 0.0); //Player faces north
```

```text
        north (0)
           |
(90) west-   -east (270)      (Good way to remember: Never Eat Shredded Wheat)
           |
        south (180)
```

## Notes

warning

Angles are reversed in GTA:SA; 90 degrees would be _East_ in the real world, but in GTA:SA 90 degrees is in fact _West_. North and South are still 0/360 and 180. To convert this, simply do **360 - angle**.

## Related Functions

-   [GetPlayerFacingAngle](https://open.mp/docs/scripting/functions/GetPlayerFacingAngle): Check where a player is facing.
-   [GetPlayerRotationQuat](https://open.mp/docs/scripting/functions/GetPlayerRotationQuat): Get the quaternion rotation of a player.
-   [SetPlayerPos](https://open.mp/docs/scripting/functions/SetPlayerPos): Set a player's position.
