---
title: SendChat
sidebar_label: SendChat
description: این تابع متن رو توسط bot ارسال می‌کنه، درست مثل SendPlayerMessageToAll، ولی این تابع برای استفاده در NPC script ها هست.
tags: []
---

## توضیحات

این تابع متن رو توسط bot ارسال می‌کنه، درست مثل [SendPlayerMessageToAll](SendPlayerMessageToAll)، ولی این تابع برای استفاده در NPC script ها هست.

| نام         | توضیحات                                        |
| ------------ | -------------------------------------------------- |
| msg[]        | متنی که باید توسط NPC ارسال بشه.                    |

## مثال‌ها

```c
public OnPlayerDeath(playerid)
{
    new string[80], name[MAX_PLAYER_NAME];
    GetPlayerName(playerid, name, sizeof(name));
    format(string, sizeof(string), "Oh no %s! I didn't want you to die that way!", name);
    SendChat(string);
    return 1;
}
```

## توابع مرتبط

- [SendCommand](SendCommand): ارسال دستور به عنوان NPC.