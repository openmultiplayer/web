---
title: SetPlayerAttachedObject
description: Attach an object to a specific bone on a player.
tags: ["player"]
---

## คำอธิบาย

Attach an object to a specific bone on a player.

| Name           | Description                                                                          |
| -------------- | ------------------------------------------------------------------------------------ |
| playerid       | The ID of the player to attach the object to.                                        |
| index          | The index (slot) to assign the object to (0-9 since 0.3d, 0-4 in previous versions). |
| modelid        | The model to attach.                                                                 |
| bone           | The bone to attach the object to.                                                    |
| fOffsetX       | (optional) X axis offset for the object position.                                    |
| fOffsetY       | (optional) Y axis offset for the object position.                                    |
| fOffsetZ       | (optional) Z axis offset for the object position.                                    |
| fRotX          | (optional) X axis rotation of the object.                                            |
| fRotY          | (optional) Y axis rotation of the object.                                            |
| fRotZ          | (optional) Z axis rotation of the object.                                            |
| fScaleX        | (optional) X axis scale of the object.                                               |
| fScaleY        | (optional) Y axis scale of the object.                                               |
| fScaleZ        | (optional) Z axis scale of the object.                                               |
| materialcolor1 | (optional) The first object color to set, as an integer or hex in ARGB color format. |
| materialcolor2 | (optional) The second object color to set, as an integer or hex in ARGB color format |

## ส่งคืน

1 on success, 0 on failure.

## ตัวอย่าง

```c
public OnPlayerSpawn(playerid)
{
    SetPlayerAttachedObject(playerid, 3, 1609, 2); //Attach a turtle to the playerid's head, in slot 3

    // example of using colors on an object being attached to the player:
    SetPlayerAttachedObject(playerid, 3, 19487, 2, 0.101, -0.0, 0.0, 5.50, 84.60, 83.7, 1.0, 1.0, 1.0, 0xFF00FF00);
    // Attach a white hat to the head of the player and paint it green
    return 1;
}
#define SetPlayerHoldingObject(%1,%2,%3,%4,%5,%6,%7,%8,%9) SetPlayerAttachedObject(%1,MAX_PLAYER_ATTACHED_OBJECTS-1,%2,%3,%4,%5,%6,%7,%8,%9)
#define StopPlayerHoldingObject(%1) RemovePlayerAttachedObject(%1,MAX_PLAYER_ATTACHED_OBJECTS-1)
#define IsPlayerHoldingObject(%1) IsPlayerAttachedObjectSlotUsed(%1,MAX_PLAYER_ATTACHED_OBJECTS-1)
```

## บันทึก

:::tip

This function is separate from the CreateObject / CreatePlayerObject pools.

:::

:::warning

In version 0.3d and onwards, 10 objects can be attached to a single player (index 0-9). In earlier versions, the limit is 5 (index 0-4).

:::

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- RemovePlayerAttachedObject: Remove an attached object from a player
- IsPlayerAttachedObjectSlotUsed: Check whether an object is attached to a player in a specified index
- EditAttachedObject: Edit an attached object.
