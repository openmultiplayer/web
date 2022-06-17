---
title: OnPlayerTakeDamage
description: This callback is called when a player takes damage.
tags: ["player"]
---

:::warning

Callback นี้ถูกเพิ่มใน SA-MP 0.3d และจะไม่ทำงานในเวอร์ชั่นก่อนหน้านี้!

:::

## คำอธิบาย

This callback is called when a player takes damage.

| Name     | Description                                                                                                   |
| -------- | ------------------------------------------------------------------------------------------------------------- |
| playerid | The ID of the player that took damage.                                                                        |
| issuerid | The ID of the player that caused the damage. INVALID_PLAYER_ID if self-inflicted.                             |
| amount   | The amount of damage the player took (health and armour combined).                                            |
| weaponid | The ID of the weapon/reason for the damage.                                                                   |
| bodypart | The body part that was hit. (NOTE: This parameter was added in 0.3z. Leave it out if using an older version!) |

## ส่งคืน

1 - 回调不会在其他过滤脚本中被调用。

0 -允许在其他筛选脚本中调用此回调。

它在过滤脚本中总是先被调用，所以在那里返回 1 会阻止其他过滤脚本看到它。

## ตัวอย่าง

```c
public OnPlayerTakeDamage(playerid, issuerid, Float:amount, weaponid, bodypart)
{
    if (issuerid != INVALID_PLAYER_ID) // If not self-inflicted
    {
        new
            infoString[128],
            weaponName[24],
            victimName[MAX_PLAYER_NAME],
            attackerName[MAX_PLAYER_NAME];

        GetPlayerName(playerid, victimName, sizeof (victimName));
        GetPlayerName(issuerid, attackerName, sizeof (attackerName));

        GetWeaponName(weaponid, weaponName, sizeof (weaponName));

        format(infoString, sizeof(infoString), "%s has made %.0f damage to %s, weapon: %s, bodypart: %d", attackerName, amount, victimName, weaponName, bodypart);
        SendClientMessageToAll(-1, infoString);
    }
    return 1;
}
public OnPlayerTakeDamage(playerid, issuerid, Float:amount, weaponid, bodypart)
{
    if (issuerid != INVALID_PLAYER_ID && weaponid == 34 && bodypart == 9)
    {
        // One shot to the head to kill with sniper rifle
        SetPlayerHealth(playerid, 0.0);
    }
    return 1;
}
```

## บันทึก

:::tip

The weaponid will return 37 (flame thrower) from any fire sources (e.g. molotov, 18). The weaponid will return 51 from any weapon that creates an explosion (e.g. RPG, grenade) playerid is the only one who can call the callback. The amount is always the maximum damage the weaponid can do, even when the health left is less than that maximum damage. So when a player has 100.0 health and gets shot with a Desert Eagle which has a damage value of 46.2, it takes 3 shots to kill that player. All 3 shots will show an amount of 46.2, even though when the last shot hits, the player only has 7.6 health left.

:::

:::warning

GetPlayerHealth and GetPlayerArmour will return the old amounts of the player before this callback. Always check if issuerid is valid before using it as an array index.

:::

## ฟังก์ชั่นที่เกี่ยวข้องกัน
