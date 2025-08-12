---
title: GetActorSpawnInfo
sidebar_label: GetActorSpawnInfo
description: نقطه spawn اولیه Actor رو می‌گیره.
tags: ["actor"]
---

<div dir="rtl" style={{ textAlign: "right" }}>

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

نقطه spawn اولیه Actor رو می‌گیره.

| اسم               | توضیح                                                                    |
|-------------------|--------------------------------------------------------------------------|
| actorid           | شناسه Actor که می‌خوای نقطه spawn ش رو بگیری                                |
| &skin             | متغیری که اسکین توش ذخیره میشه، که با reference پاس داده میشه.              |
| &Float:spawnX     | متغیری از نوع float که مختصات X spawn توش ذخیره میشه، با reference پاس داده میشه. |
| &Float:spawnY     | متغیری از نوع float که مختصات Y spawn توش ذخیره میشه، با reference پاس داده میشه. |
| &Float:spawnZ     | متغیری از نوع float که مختصات Z spawn توش ذخیره میشه، با reference پاس داده میشه. |
| &Float:spawnAngle | متغیری از نوع float که زاویه spawn توش ذخیره میشه، با reference پاس داده میشه.   |

## مقادیر برگشتی

**true** اگه Actor معتبر باشه، وگرنه **false** برمی‌گردونه.

## مثال‌ها

</div>

```c
new gMyActor;

public OnGameModeInit()
{
    gMyActor = CreateActor(179, 1153.9640, -1772.3915, 16.5920, 0.0000);

    new skin,
        Float:spawnX,
        Float:spawnY,
        Float:spawnZ,
        Float:spawnAngle;
    
    GetActorSpawnInfo(gMyActor, skin, spawnX, spawnY, spawnZ, spawnAngle);
    return 1;
}
```

<div dir="rtl" style={{ textAlign: "right" }}>

## تابع‌های مرتبط

- [CreateActor](CreateActor): ساختن Actor (NPC ثابت).
- [GetActorPos](GetActorPos): گرفتن موقعیت Actor.
- [SetActorPos](SetActorPos): تنظیم موقعیت Actor.
- [GetActorSkin](GetActorSkin): گرفتن اسکین Actor.
- [SetActorSkin](SetActorSkin): تنظیم اسکین Actor.

</div>