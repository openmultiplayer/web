---
title: OnPlayerObjectMoved
sidebar_label: OnPlayerObjectMoved
description: این کالبک زمانی فراخوانده می‌شود که یک player object پس از MovePlayerObject حرکت کند (زمانی که متوقف می‌شود).
tags: ["player", "object", "playerobject"]
---

## توضیحات

این کالبک زمانی فراخوانده می‌شود که یک player object پس از [MovePlayerObject](../functions/MovePlayerObject) حرکت کند (زمانی که متوقف می‌شود).

| نام      | توضیحات                                    |
| -------- | ------------------------------------------ |
| playerid | شناسه بازیکنی که آبجکت به او تعلق دارد       |
| objectid | شناسه player object که حرکت کرده است       |

## مقادیر برگشتی

همیشه اول در filterscript ها فراخوانده می‌شود.

## مثال‌ها

```c
public OnPlayerObjectMoved(playerid, objectid)
{
    printf("Player object moved: objectid: %d playerid: %d", objectid, playerid);
    return 1;
}
```

## نکته‌ها

<TipNPCCallbacks />

## کالبک‌های مرتبط

کالبک‌های زیر ممکن است مفید باشند، زیرا به نوعی با این کالبک مرتبط هستند.

- [OnObjectMoved](OnObjectMoved): این کالبک زمانی فراخوانده می‌شود که آبجکت متوقف شود.

## توابع مرتبط

توابع زیر ممکن است مفید باشند، زیرا به نوعی با این کالبک مرتبط هستند.

- [MovePlayerObject](../functions/MovePlayerObject): حرکت دادن یک player object.
- [IsPlayerObjectMoving](../functions/IsPlayerObjectMoving): بررسی اینکه آیا player object در حال حرکت است یا نه.
- [StopPlayerObject](../functions/StopPlayerObject): متوقف کردن حرکت player object.
- [CreatePlayerObject](../functions/CreatePlayerObject): ایجاد آبجکت فقط برای یک بازیکن.
- [DestroyPlayerObject](../functions/DestroyPlayerObject): حذف یک player object.