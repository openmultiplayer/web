---
title: GetAnimationName
sidebar_label: GetAnimationName
description: Get the animation library/name for the index.
tags: []
---

## คำอธิบาย

Get the animation library/name for the index.

| Name       | Description                                               |
| ---------- | --------------------------------------------------------- |
| index      | The animation index, returned by GetPlayerAnimationIndex. |
| animlib[]  | String variable that stores the animation library.        |
| len1       | Size of the string that stores the animation library.     |
| animname[] | String variable that stores the animation name.           |
| len2       | Size of the string that stores the animation name.        |

## ส่งคืน

1 on success, 0 on failure.

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

- [GetPlayerAnimationIndex](../functions/GetPlayerAnimationIndex): Returns the index of any running applied animations
