---
title: OnPlayerGiveDamageActor
sidebar_label: OnPlayerGiveDamageActor
description: This callback is called when a player gives damage to an actor.
tags: ["player"]
---

:::warning

Callback นี้ถูกเพิ่มใน SA-MP 0.3.7 และจะไม่ทำงานในเวอร์ชั่นก่อนหน้านี้!

:::

## คำอธิบาย

This callback is called when a player gives damage to an actor.

| Name            | Description                                           |
|-----------------|-------------------------------------------------------|
| playerid        | The ID of the player that gave damage.                |
| damaged_actorid | The ID of the actor that received damage.             |
| Float:amount    | The amount of health/armour damaged_actorid has lost. |
| WEAPON:weaponid | The reason that caused the damage.                    |
| bodypart        | The body part that was hit                            |

## ส่งคืน

1 - Callback will not be called in other filterscripts.

0 - Allows this callback to be called in other filterscripts.

It is always called first in filterscripts so returning 1 there blocks other filterscripts from seeing it.

## ตัวอย่าง

```c
public OnPlayerGiveDamageActor(playerid, damaged_actorid, Float:amount, WEAPON:weaponid, bodypart)
{
    new string[128], attacker[MAX_PLAYER_NAME];
    new weaponname[24];
    GetPlayerName(playerid, attacker, sizeof (attacker));
    GetWeaponName(weaponid, weaponname, sizeof (weaponname));

    format(string, sizeof(string), "%s has made %.0f damage to actor id %d, weapon: %s", attacker, amount, damaged_actorid, weaponname);
    SendClientMessageToAll(0xFFFFFFFF, string);
    return 1;
}
```

## บันทึก

:::tip

This function does not get called if the actor is set invulnerable (WHICH IS BY DEFAULT). See [SetActorInvulnerable](../functions/SetActorInvulnerable).

:::

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- [CreateActor](../functions/CreateActor): Create an actor (static NPC).
- [SetActorInvulnerable](../functions/SetActorInvulnerable): Set actor invulnerable.
- [SetActorHealth](../functions/SetActorHealth): Set the health of an actor.
- [GetActorHealth](../functions/GetActorHealth): Gets the health of an actor.
- [IsActorInvulnerable](../functions/IsActorInvulnerable): Check if actor is invulnerable.
- [IsValidActor](../functions/IsValidActor): Check if actor id is valid.

## Related Callbacks

- [OnActorStreamOut](OnActorStreamOut): Called when an actor is streamed out by a player.
- [OnPlayerStreamIn](OnPlayerStreamIn): Called when a player streams in for another player.
