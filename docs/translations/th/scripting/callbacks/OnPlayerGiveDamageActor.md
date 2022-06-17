---
title: OnPlayerGiveDamageActor
description: This callback is called when a player gives damage to an actor.
tags: ["player"]
---

:::warning

Callback นี้ถูกเพิ่มใน SA-MP 0.3.7 และจะไม่ทำงานในเวอร์ชั่นก่อนหน้านี้!

:::

## คำอธิบาย

This callback is called when a player gives damage to an actor.

| Name            | Description                                           |
| --------------- | ----------------------------------------------------- |
| playerid        | The ID of the player that gave damage.                |
| damaged_actorid | The ID of the actor that received damage.             |
| amount          | The amount of health/armour damaged_actorid has lost. |
| weaponid        | The reason that caused the damage.                    |
| bodypart        | The body part that was hit                            |

## ส่งคืน

1 - 回调不会在其他过滤脚本中被调用。

0 -允许在其他筛选脚本中调用此回调。

它在过滤脚本中总是先被调用，所以在那里返回 1 会阻止其他过滤脚本看到它。

## ตัวอย่าง

```c
public OnPlayerGiveDamageActor(playerid, damaged_actorid, Float: amount, weaponid, bodypart)
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

This function does not get called if the actor is set invulnerable (WHICH IS BY DEFAULT). See SetActorInvulnerable.

:::

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- [CreateActor](../../scripting/functions/CreateActor.md): Create an actor (static NPC).
- [SetActorInvulnerable](../../scripting/functions/SetActorInvulnerable.md): Set actor invulnerable.
- [SetActorHealth](../../scripting/functions/SetActorHealth.md): Set the health of an actor.
- [GetActorHealth](../../scripting/functions/GetActorHealth.md): Gets the health of an actor.
- [IsActorInvulnerable](../../scripting/functions/IsActorInvulnerable.md): Check if actor is invulnerable.
- [IsValidActor](../../scripting/functions/IsValidActor.md): Check if actor id is valid.
- [OnActorStreamOut](../../scripting/callbacks/OnActorStreamOut.md): Called when an actor is streamed out by a player.
- [OnPlayerStreamIn](../../scripting/callbacks/OnPlayerStreamIn.md): Called when a player streams in for another player.
