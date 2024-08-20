---
title: SetPlayerAttachedObject
description: Attach an object to a specific bone on a player.
tags: ["player", "object", "attachment"]
---

## Description

Attach an object to a specific bone on a player.

| Name            | Description                                                                          |
| --------------- | ------------------------------------------------------------------------------------ |
| playerid        | The ID of the player to attach the object to.                                        |
| index           | The index (slot 0-9) to assign the object to.                                        |
| modelid         | The model to attach.                                                                 |
| bone            | The [bone](../resources/boneid) to attach the object to.                             |
| Float:offsetX   | (optional) X axis offset for the object position.                                    |
| Float:offsetY   | (optional) Y axis offset for the object position.                                    |
| Float:offsetZ   | (optional) Z axis offset for the object position.                                    |
| Float:rotationX | (optional) X axis rotation of the object.                                            |
| Float:rotationY | (optional) Y axis rotation of the object.                                            |
| Float:rotationZ | (optional) Z axis rotation of the object.                                            |
| Float:scaleX    | (optional) X axis scale of the object.                                               |
| Float:scaleY    | (optional) Y axis scale of the object.                                               |
| Float:scaleZ    | (optional) Z axis scale of the object.                                               |
| materialColour1 | (optional) The first object color to set, as an integer or hex in ARGB color format. |
| materialColour2 | (optional) The second object color to set, as an integer or hex in ARGB color format |

## Returns

**1** on success, **0** on failure.

## Examples

```c
public OnPlayerSpawn(playerid)
{
    SetPlayerAttachedObject(playerid, 3, 1609, 2); // Attach a turtle to the playerid's head, in slot 3

    // Example of using colors on an object being attached to the player:
    SetPlayerAttachedObject(playerid, 3, 19487, 2, 0.101, -0.0, 0.0, 5.50, 84.60, 83.7, 1.0, 1.0, 1.0, 0xFF00FF00);
    // Attach a white hat to the head of the player and paint it green
    return 1;
}
```

## Notes

:::tip

This function is separate from the CreateObject / CreatePlayerObject pools.

:::

:::warning

Atleast 10 objects can be attached to a single player (index 0-9)

:::

## Related Functions

- [RemovePlayerAttachedObject](RemovePlayerAttachedObject): Remove an attached object from a player
- [IsPlayerAttachedObjectSlotUsed](IsPlayerAttachedObjectSlotUsed): Check whether an object is attached to a player in a specified index
- [GetPlayerAttachedObject](GetPlayerAttachedObject): Gets the player attachment object data by index.
- [EditAttachedObject](EditAttachedObject): Edit an attached object.

## Related Resources

- [Bone IDs](../resources/boneid)
