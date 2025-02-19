---
title: ShowPlayerNameTagForPlayer
sidebar_label: ShowPlayerNameTagForPlayer
description: This functions allows you to toggle the drawing of player nametags, healthbars and armor bars which display above their head.
tags: ["player"]
---

## คำอธิบาย

This functions allows you to toggle the drawing of player nametags, healthbars and armor bars which display above their head. For use of a similar function like this on a global level, ShowNameTags function.

| Name         | Description                                      |
| ------------ | ------------------------------------------------ |
| playerid     | Player who will see the results of this function |
| showplayerid | Player whose name tag will be shown or hidden    |
| show         | 1-show name tag, 0-hide name tag                 |

## ส่งคืน

ImportantNote

ShowNameTags must be set to 1 to be able to show name tags with ShowPlayerNameTagForPlayer, that means that in order to be effective you need to ShowPlayerNameTagForPlayer(forplayerid, playerid, 0) ahead of time(OnPlayerStreamIn is a good spot).

## ตัวอย่าง

```c
//The player who typed /nameoff will not be able to see any other players nametag.
if (strcmp("/nameoff", cmdtext, true) == 0)
{
    for(new i = GetPlayerPoolSize(); i != -1; --i) ShowPlayerNameTagForPlayer(playerid, i, false);
    GameTextForPlayer(playerid, "~W~Nametags ~R~off", 5000, 5);
    return 1;
}
```

## บันทึก

:::warning

ShowNameTags must be set to 1 to be able to show name tags with ShowPlayerNameTagForPlayer, that means that in order to be effective you need to ShowPlayerNameTagForPlayer(forplayerid, playerid, 0) ahead of time(OnPlayerStreamIn is a good spot).

:::

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- ShowNameTags: Set nametags on or off.
- DisableNameTagLOS: Disable nametag Line-Of-Sight checking.
- SetPlayerMarkerForPlayer: Set a player's marker.
