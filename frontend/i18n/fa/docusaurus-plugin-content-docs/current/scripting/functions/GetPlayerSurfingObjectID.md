---
title: GetPlayerSurfingObjectID
sidebar_label: GetPlayerSurfingObjectID
description: ID objectی که بازیکن روی آن surfing می‌کند را برمی‌گرداند.
tags: ["player"]
---

## توضیحات

ID objectی که بازیکن روی آن surfing می‌کند را برمی‌گرداند.

| نام     | توضیحات                             |
| -------- | --------------------------------------- |
| playerid | ID بازیکنی که روی object surfing می‌کند |

## مقادیر برگشتی

ID moving objectی که بازیکن روی آن surfing می‌کند. اگر بازیکن روی moving object surfing نکند، `INVALID_OBJECT_ID` برمی‌گرداند

## مثال‌ها

```c
/* when the player types 'objectsurfing' in to the chat box, they'll see this.*/
public OnPlayerText(playerid, text[])
{
    if (strcmp(text, "objectsurfing", true) == 0)
    {
        new
            szMessage[30];

        format(szMessage, sizeof(szMessage), "You're surfing on object #%d.", GetPlayerSurfingObjectID(playerid));
        SendClientMessage(playerid, 0xA9C4E4FF, szMessage);
    }
    return 0;
}
```

## توابع مرتبط

- [GetPlayerSurfingPlayerObjectID](GetPlayerSurfingPlayerObjectID): دریافت ID player-objectی که بازیکن روی آن surfing می‌کند.
- [GetPlayerSurfingVehicleID](GetPlayerSurfingVehicleID): دریافت ID وسیله نقلیه‌ای که بازیکن روی آن surfing می‌کند (چسبیده به سقف).
- [GetPlayerSurfingOffsets](GetPlayerSurfingOffsets): دریافت offsetهای surfing بازیکن.