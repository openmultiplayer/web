---
title: GetActorSkin
sidebar_label: GetActorSkin
description: اسکین Actor رو می‌گیره.
tags: ["actor"]
---

<div dir="rtl" style={{ textAlign: "right" }}>

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

اسکین Actor رو می‌گیره.

| اسم     | توضیح                           |
|---------|---------------------------------|
| actorid | شناسه Actor که می‌خوای اسکین‌ش رو بگیری. |

## مقادیر برگشتی

اسکین فعلی Actor رو برمی‌گردونه.

## مثال‌ها

</div>

```c
new gMyActor;

public OnGameModeInit()
{
    gMyActor = CreateActor(179, 1153.9640, -1772.3915, 16.5920, 0.0000);
    
    new actorSkinID = GetActorSkin(gMyActor);
    // The value of `actorSkinID` is now 179
    return 1;
}
```

<div dir="rtl" style={{ textAlign: "right" }}>

## تابع‌های مرتبط

- [CreateActor](CreateActor): ساختن Actor (NPC ثابت).
- [SetActorSkin](SetActorSkin): تنظیم اسکین Actor.

</div>