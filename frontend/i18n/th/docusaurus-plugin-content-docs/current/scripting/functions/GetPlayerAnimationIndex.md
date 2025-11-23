---
title: GetPlayerAnimationIndex
sidebar_label: GetPlayerAnimationIndex
description: Returns the index of any running applied animations.
tags: ["player"]
---

## คำอธิบาย

Returns the index of any running applied animations.

| Name     | Description                                                      |
| -------- | ---------------------------------------------------------------- |
| playerid | ID of the player of whom you want to get the animation index of. |

## ส่งคืน

0 if there is no animation applied

## ตัวอย่าง

```c
public OnPlayerUpdate(playerid)
{
    if (GetPlayerAnimationIndex(playerid))
    {
        new animlib[32];
        new animname[32];
        new msg[128];
        GetAnimationName(GetPlayerAnimationIndex(playerid),animlib,32,animname,32);
        format(msg, 128, "Running anim: %s %s", animlib, animname);
        SendClientMessage(playerid, 0xFFFFFFFF, msg);
    }
    return 1;
}
```

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- [GetAnimationName](GetAnimationName): Get the animation library/name for the index.
