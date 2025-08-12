---
title: GetActorVirtualWorld
sidebar_label: GetActorVirtualWorld
description: Virtual World Actor رو می‌گیره.
tags: ["actor"]
---

<div dir="rtl" style={{ textAlign: "right" }}>

<VersionWarn version='SA-MP 0.3.7' />

## توضیحات

Virtual World Actor رو می‌گیره.

| اسم     | توضیح                                       |
| ------- | ------------------------------------------- |
| actorid | شناسه Actor که می‌خوای Virtual World ش رو بگیری. |

## مقادیر برگشتی

Virtual World Actor رو برمی‌گردونه. به صورت پیش‌فرض این مقدار 0 هست.

همچنین 0 برمی‌گردونه اگه Actor مشخص شده وجود نداشته باشه.

## مثال‌ها

</div>

```c
new MyActor;

public OnGameModeInit()
{
    MyActor = CreateActor(69, 0.0, 0.0, 3.0, 0.0);

    SetActorVirtualWorld(MyActor, 20);
    return 1;
}

// Somewhere else
if (GetActorVirtualWorld(MyActor) == 20)
{
    // Do something
}
```

<div dir="rtl" style={{ textAlign: "right" }}>

## تابع‌های مرتبط

- [SetActorVirtualWorld](SetActorVirtualWorld): تنظیم Virtual World Actor.

</div>