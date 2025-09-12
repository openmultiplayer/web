---
title: GetActorHealth
sidebar_label: GetActorHealth
description: سلامتی یک اکتور رو دریافت کن.
tags: ["actor"]
---

<VersionWarn version='SA-MP 0.3.7' />

## توضیحات

سلامتی یک اکتور رو دریافت کن.

| نام           | توضیحات                                                                           |
| ------------- | ------------------------------------------------------------------------------- |
| actorid       | آی‌دی اکتوری که می‌خوای سلامتیش رو بگیری.                                           |
| &Float:health | متغیر اعشاری که به صورت مرجع ارسال می‌شه و سلامتی اکتور توش ذخیره می‌شه.              |

## مقدار برگشتی

**true** - موفق

**false** - ناموفق (مثلاً اکتور ایجاد نشده باشه).

نکته: سلامتی اکتور در متغیر مشخص شده ذخیره می‌شه، نه در مقدار برگشتی.

## مثال‌ها

```c
new gMyActor;

public OnGameModeInit()
{
    gMyActor = CreateActor(179, 316.1, -134.0, 999.6, 90.0); // Actor as salesperson in Ammunation
    
    SetActorHealth(gMyActor, 100.0);

    new Float:actorHealth;
    GetActorHealth(gMyActor, actorHealth);
    printf("Actor ID %d has %.2f health.", gMyActor, actorHealth);
    return 1;
}
```

## تابع‌های مرتبط

- [CreateActor](CreateActor): یک اکتور (NPC ثابت) ایجاد کن.
- [SetActorHealth](SetActorHealth): سلامتی اکتور رو تنظیم کن.
- [SetActorInvulnerable](SetActorInvulnerable): اکتور رو غیرقابل آسیب کن.
- [IsActorInvulnerable](IsActorInvulnerable): چک کن اکتور غیرقابل آسیبه یا نه.