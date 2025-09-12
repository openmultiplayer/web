---
title: ClearActorAnimations
sidebar_label: ClearActorAnimations
description: پاک کردن هر گونه انیمیشن اعمال شده روی یک اکتور.
tags: ["actor"]
---

<VersionWarn version='SA-MP 0.3.7' />

## توضیحات

پاک کردن هر گونه انیمیشن اعمال شده روی یک اکتور.

| نام     | توضیحات                                                                                        |
| ------- | ----------------------------------------------------------------------------------------- |
| actorid | ID اکتور (بازگردانده شده توسط [CreateActor](CreateActor)) که انیمیشن هایش پاک می‌شود. |

## مقدار بازگشتی

**true** - تابع با موفقیت اجرا شد.

**false** - تابع در اجرا ناکام بود. اکتور مشخص شده وجود ندارد.

## مثال‌ها

```c
new gMyActor;

public OnGameModeInit()
{
    gMyActor = CreateActor(179, 316.1, -134.0, 999.6, 90.0); // اکتور به عنوان فروشنده در Ammunation
    ApplyActorAnimation(gMyActor, "DEALER", "shop_pay", 4.1, false, false, false, false, 0); // انیمیشن پرداخت
    return 1;
}

// جایی دیگر
ClearActorAnimations(gMyActor);
```

## توابع مرتبط

- [ApplyActorAnimation](ApplyActorAnimation): اعمال یک انیمیشن روی اکتور.