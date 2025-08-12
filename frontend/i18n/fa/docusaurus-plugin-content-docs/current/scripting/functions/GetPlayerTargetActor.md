---
title: GetPlayerTargetActor
sidebar_label: GetPlayerTargetActor
description: دریافت id actorی که بازیکن خاص به آن نشانه گرفته است.
tags: ["player"]
---

<VersionWarn version='SA-MP 0.3.7' />

## توضیحات

دریافت id actorی که بازیکن خاص به آن نشانه گرفته است.

| نام     | توضیحات                                |
| -------- | ------------------------------------------ |
| playerid | ID بازیکن برای دریافت هدفش. |

## مقادیر برگشتی

ID actor هدف گرفته شده، یا `INVALID_ACTOR_ID` اگر هیچ‌کدام نباشد.

## مثال‌ها

```c
public OnPlayerUpdate(playerid)
{
    new
        targetActorId = GetPlayerTargetActor(playerid),
        string[32];

    format(string, sizeof(string), "You are aiming at actor id %d", targetActorId);
    SendClientMessage(playerid, -1, string);
    return 1;
}
```

## نکات

:::warning

برای joypads/controllerها و بعد از فاصله خاصی کار نمی‌کند. برای تفنگ تک‌تیرانداز کار نمی‌کند، چون به چیزی lock نمی‌شود و به همین دلیل نمی‌تواند و نخواهد بازیکنی را برگرداند.

:::

## توابع مرتبط

- [GetPlayerCameraTargetActor](GetPlayerCameraTargetActor): دریافت ID actor (اگر وجود داشته باشد) که بازیکن به آن نگاه می‌کند.
- [GetPlayerCameraFrontVector](GetPlayerCameraFrontVector): دریافت بردار جلوی دوربین بازیکن

## کالبک‌های مرتبط

- [OnPlayerGiveDamageActor](../callbacks/OnPlayerGiveDamageActor): زمانی که بازیکن به actor آسیب می‌زند فراخوانی می‌شود.