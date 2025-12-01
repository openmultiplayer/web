---
title: GetActorPoolSize
sidebar_label: GetActorPoolSize
description: بالاترین actorid که در سرور ساخته شده رو می‌گیره.
tags: ["actor"]
---

<div dir="rtl" style={{ textAlign: "right" }}>

<VersionWarn version='SA-MP 0.3.7' />

## توضیحات

بالاترین actorid که در سرور ساخته شده رو می‌گیره. توجه داشته باش که در SA:MP این تابع خراب هست و حتی وقتی هیچ Actor وجود نداره هم `0` برمی‌گردونه. open.mp این مشکل رو برطرف کرده‌ن و `-1` برمی‌گردونن، ولی همچنین این تابع رو deprecated کردن و به جاش `MAX_ACTORS` یا `foreach` رو پیشنهاد میدن.

## مثال‌ها

</div>

```c
SetAllActorsHealth(Float:health)
{
    for(new i = 0, j = GetActorPoolSize(); i <= j; i++)
    {
        if (IsValidActor(i))
        {
            SetActorHealth(i, health);
        }
    }
}
```

<div dir="rtl" style={{ textAlign: "right" }}>

## تابع‌های مرتبط

- [CreateActor](CreateActor): ساختن Actor (NPC ثابت).
- [IsValidActor](IsValidActor): چک کردن معتبر بودن شناسه Actor.
- [SetActorHealth](SetActorHealth): تنظیم سلامتی Actor.

</div>