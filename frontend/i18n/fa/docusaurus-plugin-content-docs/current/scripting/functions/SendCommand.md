---
title: SendCommand
sidebar_label: SendCommand
description: این تابع NPC رو مجبور می‌کنه که یه دستور دلخواه رو بنویسه و بدین شکل اثراتی که تولید می‌کنه رو بگیره.
tags: []
---

## توضیحات

این تابع NPC رو مجبور می‌کنه که یه دستور دلخواه رو بنویسه و بدین شکل اثراتی که تولید می‌کنه رو بگیره.

| نام                 | توضیحات                                        |
| -------------------- | -------------------------------------------------- |
| commandtext[]        | متن دستوری که باید توسط NPC ارسال بشه.            |

## مثال‌ها

```c
public OnPlayerText(playerid, text[])
{
    if (strfind(text, "stupid bot") != -1)
    {
        new string[80], name[MAX_PLAYER_NAME];
        GetPlayerName(playerid, name, sizeof(name));
        SendCommand("/kill");
        format(string, sizeof(string), "Hey %s! You are so mean, you make me so sad!", name);
        SendChat(string);
    }
    return 1;
}
```

## توابع مرتبط

- [SendChat](SendChat): ارسال متن به عنوان NPC.