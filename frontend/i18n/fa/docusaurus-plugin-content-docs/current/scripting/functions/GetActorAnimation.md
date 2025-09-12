---
title: GetActorAnimation
sidebar_label: GetActorAnimation
description: انیمیشن فعلی Actor رو می‌گیره.
tags: ["actor"]
---

<div dir="rtl" style={{ textAlign: "right" }}>

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

انیمیشن فعلی Actor رو می‌گیره.

| اسم                | توضیح                                                                    |
|--------------------|--------------------------------------------------------------------------|
| actorid            | شناسه Actor که می‌خوای انیمیشنش رو بگیری.                                   |
| animationLibrary[] | آرایه‌ای که کتابخونه انیمیشن توش ذخیره میشه، که با reference پاس داده میشه.   |
| librarySize        | اندازه آرایه animationLibrary.                                             |
| animationName[]    | آرایه‌ای که اسم انیمیشن توش ذخیره میشه، که با reference پاس داده میشه.        |
| nameSize           | اندازه آرایه animationName.                                                |
| &Float:delta       | متغیری از نوع float که مقدار delta توش ذخیره میشه، با reference پاس داده میشه. |
| &bool:loop         | متغیری از نوع boolean که مقدار loop توش ذخیره میشه، با reference پاس داده میشه. |
| &bool:lockX        | متغیری از نوع boolean که مقدار lockX توش ذخیره میشه، با reference پاس داده میشه. |
| &bool:lockY        | متغیری از نوع boolean که مقدار lockY توش ذخیره میشه، با reference پاس داده میشه. |
| &bool:freeze       | متغیری از نوع boolean که مقدار freeze توش ذخیره میشه، با reference پاس داده میشه. |
| &time              | متغیری که مقدار time توش ذخیره میشه، با reference پاس داده میشه.           |

## مقادیر برگشتی

**true** اگه Actor معتبر باشه، وگرنه **false** برمی‌گردونه.

## مثال‌ها

</div>

```c
new gMyActor;

public OnGameModeInit()
{
    gMyActor = CreateActor(179, 1153.9640, -1772.3915, 16.5920, 0.0000);
    ApplyActorAnimation(gMyActor, "PED", "IDLE_CHAT", 4.1, true, true, true, true, 0);

    new animationLibrary[32],
        animationName[32],
        Float:delta,
        bool:loop,
        bool:lockX,
        bool:lockY,
        bool:freeze,
        time;
    
    GetActorAnimation(gMyActor, animationLibrary, sizeof animationLibrary, animationName, sizeof animationName, delta, loop, lockX, lockY, freeze, time);
    return 1;
}
```

<div dir="rtl" style={{ textAlign: "right" }}>

## تابع‌های مرتبط

- [CreateActor](CreateActor): ساختن Actor (NPC ثابت).
- [ApplyActorAnimation](ApplyActorAnimation): اعمال انیمیشن روی Actor.
- [ClearActorAnimations](ClearActorAnimations): پاک کردن انیمیشن‌های اعمال شده روی Actor.

</div>