---
title: CreatePlayerPickup
sidebar_label: CreatePlayerPickup
description: پیکاپی ایجاد می‌کند که فقط برای یک بازیکن قابل مشاهده است.
tags: ["player", "pickup", "playerpickup"]
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

پیکاپی ایجاد می‌کند که فقط برای یک بازیکن قابل مشاهده است.

| نام                              | توضیحات                                                                            |
| -------------------------------- | --------------------------------------------------------------------------------- |
| playerid                         | ID بازیکنی که برایش پیکاپ ایجاد شود.                                               |
| [model](../resources/pickupids)  | مدل پیکاپ.                                                                         |
| [type](../resources/pickuptypes) | نوع پیکاپ. مشخص می‌کند که پیکاپ هنگام برداشته شدن چگونه واکنش نشان دهد.           |
| Float:x                          | مختصات X برای ایجاد پیکاپ.                                                        |
| Float:y                          | مختصات Y برای ایجاد پیکاپ.                                                        |
| Float:z                          | مختصات Z برای ایجاد پیکاپ.                                                        |
| virtualWorld                     | ID دنیای مجازی پیکاپ. از -1 استفاده کنید تا پیکاپ در همه دنیاها نمایش داده شود. |

## مقادیر بازگشتی

ID player-pickup ایجاد شده، **-1** در صورت شکست (رسیدن به حداکثر پیکاپ).

## مثال‌ها

```c
new PlayerPickupArmour[MAX_PLAYERS]; // متغیری برای ذخیره ID player-pickup ایجاد کنید

public OnPlayerConnect(playerid)
{
    PlayerPickupArmour[playerid] = CreatePlayerPickup(playerid, 1242, 2, 2010.0979, 1222.0642, 10.8206, -1);
    // یک پیکاپ زره ایجاد کنید و ID را در 'PlayerPickupArmour[playerid]' ذخیره کنید
    return 1;
}
```

## نکات

:::tip

- تنها نوع پیکاپی که می‌تواند از داخل وسیله نقلیه برداشته شود 14 است (به جز پیکاپ‌های خاص مثل bribes).
- پیکاپ‌ها برای همه بازیکنان نمایش داده می‌شوند و توسط آن‌ها قابل برداشتن هستند.
- ممکن است اگر DestroyPlayerPickup() هنگام برداشتن پیکاپ استفاده شود، بیش از یک بازیکن بتواند پیکاپ را بردارد، به دلیل تاخیر. این را می‌توان با استفاده از متغیرها حل کرد.
- برخی از انواع پیکاپ با 'پاسخ‌های خودکار' همراه هستند، مثلاً استفاده از مدل M4 در پیکاپ خودکار به بازیکن سلاح و مقداری تیر می‌دهد.
- برای پیکاپ‌های کاملاً اسکریپت شده، باید از نوع 1 استفاده کنید.

:::

:::warning

باگ‌های شناخته شده:

- پیکاپ‌هایی که X یا Y آن‌ها کمتر از 4096.0- یا بیشتر از 4096.0 باشد، نمایش داده نمی‌شوند و OnPlayerPickUpPlayerPickup را هم فعال نمی‌کنند.

:::

## توابع مرتبط

- [CreatePlayerPickup](CreatePlayerPickup): ایجاد پیکاپی که فقط برای یک بازیکن قابل مشاهده است.
- [DestroyPlayerPickup](DestroyPlayerPickup): حذف یک player-pickup.
- [IsValidPlayerPickup](IsValidPlayerPickup): بررسی معتبر بودن یک player-pickup.
- [IsPlayerPickupStreamedIn](IsPlayerPickupStreamedIn): بررسی اینکه آیا player-pickup برای بازیکن stream شده است.
- [SetPlayerPickupPos](SetPlayerPickupPos): تنظیم موقعیت یک player-pickup.
- [GetPlayerPickupPos](GetPlayerPickupPos): دریافت مختصات یک player-pickup.
- [SetPlayerPickupModel](SetPlayerPickupModel): تنظیم مدل یک player-pickup.
- [GetPlayerPickupModel](GetPlayerPickupModel): دریافت ID مدل یک player-pickup.
- [SetPlayerPickupType](SetPlayerPickupType): تنظیم نوع یک player-pickup.
- [GetPlayerPickupType](GetPlayerPickupType): دریافت نوع یک player-pickup.
- [SetPlayerPickupVirtualWorld](SetPlayerPickupVirtualWorld): تنظیم ID دنیای مجازی یک player-pickup.
- [GetPlayerPickupVirtualWorld](GetPlayerPickupVirtualWorld): دریافت ID دنیای مجازی یک player-pickup.

## کالبک‌های مرتبط

کالبک‌های زیر ممکن است مفید باشند، چون مربوط به این تابع هستند.

- [OnPlayerPickUpPlayerPickup](../callbacks/OnPlayerPickUpPlayerPickup): زمانی فراخوانی می‌شود که بازیکن یک player-pickup بردارد.
- [OnPlayerPickupStreamIn](../callbacks/OnPlayerPickupStreamIn): زمانی فراخوانی می‌شود که player-pickup وارد محدوده دید بازیکن شود.
- [OnPlayerPickupStreamOut](../callbacks/OnPlayerPickupStreamOut): زمانی فراخوانی می‌شود که player-pickup از محدوده دید بازیکن خارج شود.

## منابع مرتبط

- [Pickup IDs](../resources/pickupids)
- [Pickup Types](../resources/pickuptypes)