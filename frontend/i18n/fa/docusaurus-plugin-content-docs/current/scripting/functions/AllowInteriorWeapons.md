---
title: AllowInteriorWeapons
sidebar_label: AllowInteriorWeapons
description: فعال/غیرفعال کردن استفاده از اسلحه در اینتریورها.
tags: []
---

## توضیحات

فعال/غیرفعال کردن استفاده از اسلحه در اینتریورها.

| نام        | توضیحات                                                                                                        |
| ---------- | --------------------------------------------------------------------------------------------------------------- |
| bool:allow | 'true' برای فعال کردن اسلحه در اینتریورها (به صورت پیش‌فرض فعال است)، 'false' برای غیرفعال کردن اسلحه در اینتریورها. |

## مقدار بازگشتی

این تابع هیچ مقدار خاصی برنمی‌گرداند.

## مثال‌ها

```c
public OnGameModeInit()
{
    // این اجازه استفاده از اسلحه در داخل اینتریورها را می‌دهد.
    AllowInteriorWeapons(true);
    return 1;
}
```

## نکات

:::warning

این تابع در نسخه فعلی SA:MP کار نمی‌کند!

:::

:::tip

همچنین می‌توانید اسلحه اینتریور را از طریق [config.json](../../server/config.json) فعال/غیرفعال کنید

```json
"allow_interior_weapons": true,
```

:::

## توابع مرتبط

- [AreInteriorWeaponsAllowed](AreInteriorWeaponsAllowed): آیا می‌توان از اسلحه در اینتریورها استفاده کرد؟
- [SetPlayerInterior](SetPlayerInterior): تنظیم اینتریور بازیکن.
- [GetPlayerInterior](GetPlayerInterior): دریافت اینتریور فعلی بازیکن.

## کالبک‌های مرتبط

- [OnPlayerInteriorChange](../callbacks/OnPlayerInteriorChange): هنگامی که بازیکن اینتریور تغییر می‌دهد فراخوانی می‌شود.