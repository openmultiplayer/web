---
title: SetPickupVirtualWorld
sidebar_label: SetPickupVirtualWorld
description: ID virtual world یک pickup رو تنظیم می‌کنه.
tags: ["pickup"]
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

ID virtual world یک pickup رو تنظیم می‌کنه.

| نام         | توضیح                  |
|--------------|--------------------------|
| pickupid     | ID pickup.        |
| virtualWorld | ID virtual world برای تنظیم. |

## مقادیر بازگشتی

این function همیشه **true** بر می‌گردونه.

## مثال‌ها

```c
new g_Pickup;

public OnGameModeInit()
{
    g_Pickup = CreatePickup(1239, 1, 1686.6160, 1455.4277, 10.7705, 20);

    SetPickupVirtualWorld(g_Pickup, 10);
    return 1;
}
```

## توابع مرتبط

- [CreatePickup](CreatePickup): pickup می‌سازه.
- [AddStaticPickup](AddStaticPickup): static pickup اضافه می‌کنه.
- [DestroyPickup](DestroyPickup): pickup رو از بین می‌بره.
- [IsValidPickup](IsValidPickup): چک می‌کنه که آیا pickup معتبره یا نه.
- [IsPickupStreamedIn](IsPickupStreamedIn): چک می‌کنه که آیا pickup برای بازیکن مشخص stream شده یا نه.
- [IsPickupHiddenForPlayer](IsPickupHiddenForPlayer): چک می‌کنه که آیا pickup برای بازیکن مشخص پنهان شده یا نه.
- [SetPickupPos](SetPickupPos): موقعیت pickup رو تنظیم می‌کنه.
- [GetPickupPos](GetPickupPos): مختصات pickup رو دریافت می‌کنه.
- [SetPickupModel](SetPickupModel): model pickup رو تنظیم می‌کنه.
- [GetPickupModel](GetPickupModel): ID model یک pickup رو دریافت می‌کنه.
- [SetPickupType](SetPickupType): نوع pickup رو تنظیم می‌کنه.
- [GetPickupType](GetPickupType): نوع pickup رو دریافت می‌کنه.
- [GetPickupVirtualWorld](GetPickupVirtualWorld): ID virtual world یک pickup رو دریافت می‌کنه.
- [ShowPickupForPlayer](ShowPickupForPlayer): pickup رو برای بازیکن مشخص نشون می‌ده.
- [HidePickupForPlayer](HidePickupForPlayer): pickup رو برای بازیکن مشخص پنهان می‌کنه.
- [SetPickupForPlayer](SetPickupForPlayer): model، نوع، و موقعیت pickup رو برای بازیکن مشخص تنظیم می‌کنه.