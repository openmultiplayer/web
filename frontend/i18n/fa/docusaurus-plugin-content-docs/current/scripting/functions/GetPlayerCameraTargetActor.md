---
title: GetPlayerCameraTargetActor
sidebar_label: GetPlayerCameraTargetActor
description: اجازه می‌دهد شناسه اکتوری که بازیکن به آن نگاه می‌کند را دریافت کنید (اگر وجود داشته باشد).
tags: ["player", "camera", "actor"]
---

<VersionWarn version='SA-MP 0.3.7' />

## توضیحات

اجازه می‌دهد شناسه اکتوری که بازیکن به آن نگاه می‌کند را دریافت کنید (اگر وجود داشته باشد).

| نام      | توضیحات                                      |
| -------- | ------------------------------------------------ |
| playerid | شناسه بازیکنی که اکتور هدف آن را می‌خواهید دریافت کنید. |

## مقدار بازگشتی

شناسه اکتوری که بازیکن به آن نگاه می‌کند.

## مثال‌ها

```c
new bool:ActorHandsup[MAX_ACTORS];

public OnPlayerConnect(playerid)
{
    EnablePlayerCameraTarget(playerid, true);
    return 1;
}

public OnPlayerUpdate(playerid)
{
    // Find out what actor (if any) the player is LOOKING at
    new playerTargetActor = GetPlayerCameraTargetActor(playerid);

    // If they ARE looking at ANY actor
    if (playerTargetActor != INVALID_ACTOR_ID)
    {
        // Store the player's weapon so we can check if they are armed
        new playerWeapon = GetPlayerWeapon(playerid);

        // Get the player's keys so we can check if they are aiming
        new KEY:keys, updown, leftright;
        GetPlayerKeys(playerid, keys, updown, leftright);

        // If the actor hasn't put its hands up yet, AND the player is ARMED
        if (!ActorHandsup[playerTargetActor] && playerWeapon >= 22 && playerWeapon <= 42 && keys & KEY_AIM)
        {
            // Apply 'hands up' animation
            ApplyActorAnimation(playerTargetActor, "SHOP", "SHP_HandsUp_Scr",4.1,0,0,0,1,0);

            // Set 'ActorHandsup' to true, so the animation won't keep being reapplied
            ActorHandsup[playerTargetActor] = true;
        }
    }
    return 1;
}
```

## نکات

:::tip

این تابع فقط به شما می‌گوید بازیکن به کدام اکتور (اگر وجود داشته باشد) نگاه می‌کند. برای فهمیدن اینکه آیا به آن هدف‌گیری می‌کند یا خیر، باید GetPlayerTargetActor را استفاده کنید.

:::

:::warning

این تابع به طور پیش‌فرض برای صرفه‌جویی در باندوید غیرفعال است. از [EnablePlayerCameraTarget](EnablePlayerCameraTarget) برای فعال‌سازی آن برای هر بازیکن استفاده کنید.

:::

## تابع‌های مرتبط

- [GetPlayerTargetActor](GetPlayerTargetActor): شناسه اکتوری که توسط بازیکن هدف‌گیری می‌شود را دریافت کنید.
- [GetPlayerCameraTargetPlayer](GetPlayerCameratargetPlayer): شناسه بازیکنی که یک بازیکن به آن نگاه می‌کند را دریافت کنید.
- [GetPlayerCameraTargetVehicle](GetPlayerCameraTargetVehicle): شناسه وسیله نقلیه‌ای که بازیکن به آن نگاه می‌کند را دریافت کنید.
- [GetPlayerCameraTargetObject](GetPlayerCameraTargetObject): شناسه آبجکتی که بازیکن به آن نگاه می‌کند را دریافت کنید.
- [GetPlayerCameraFrontVector](GetPlayerCaemraFrontVector): بردار جلویی دوربین بازیکن را دریافت کنید