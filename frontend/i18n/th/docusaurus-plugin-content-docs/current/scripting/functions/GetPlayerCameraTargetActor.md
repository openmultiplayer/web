---
title: GetPlayerCameraTargetActor
description: Allows you to retrieve the ID of the actor the player is looking at (in any).
tags: ["player"]
---

:::warning

ฟังก์ชั่นนี้ถูกเพิ่มใน SA-MP 0.3.7 และจะไม่ทำงานในเวอร์ชั่นก่อนหน้านี้!

:::

## คำอธิบาย

Allows you to retrieve the ID of the actor the player is looking at (in any).

| Name     | Description                                      |
| -------- | ------------------------------------------------ |
| playerid | The ID of the player to get the target actor of. |

## ส่งคืน

The ID of the actor the player is looking at.

## ตัวอย่าง

```c
new bool:ActorHandsup[MAX_ACTORS];

public OnPlayerConnect(playerid)
{
    EnablePlayerCameraTarget(playerid, 1);
    return 1;
}

public OnPlayerUpdate(playerid)
{
    // Find out what actor (if any) the player is LOOKING at
    new playerTargetActor = GetPlayerCameraTargetActor(playerid);

    // If they ARE looking at ANY actor
    if (playerTargetActor != INVALID_ACTOR_ID)
    {
        // Store the player's weapon so we can check if they are armed
        new playerWeapon = GetPlayerWeapon(playerid);

        // Get the player's keys so we can check if they are aiming
        new keys, updown, leftright;
        GetPlayerKeys(playerid, keys, updown, leftright);

        // If the actor hasn't put its hands up yet, AND the player is ARMED
        if (!ActorHandsup[playerTargetActor] && playerWeapon >= 22 && playerWeapon <= 42 && keys & KEY_AIM)
        {
            // Apply 'hands up' animation
            ApplyActorAnimation(playerTargetActor, "SHOP", "SHP_HandsUp_Scr",4.1,0,0,0,1,0);

            // Set 'ActorHandsup' to true, so the animation won't keep being reapplied
            ActorHandsup[playerTargetActor] = true;
        }
    }
    return 1;
}
```

## บันทึก

:::tip

This function only tells you which actor (if any) the player is looking at. To find out if they are aiming at them, you need to use GetPlayerTargetActor.

:::

:::warning

This function is disabled by default to save bandwidth. Use EnablePlayerCameraTarget to enable it for each player.

:::

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- [GetPlayerTargetActor](../functions/GetPlayerTargetActor): Gets id of an actor which is aimed by certain player.
- [GetPlayerCameraTargetPlayer](../functions/GetPlayerCameratargetPlayer): Get the ID of the player a player is looking at.
- [GetPlayerCameraTargetVehicle](../functions/GetPlayerCameraTargetVehicle): Get the ID of the vehicle a player is looking at.
- [GetPlayerCameraTargetObject](../functions/GetPlayerCameraTargetObject): Get the ID of the object a player is looking at.
- [GetPlayerCameraFrontVector](../functions/GetPlayerCaemraFrontVector): Get the player's camera front vector
