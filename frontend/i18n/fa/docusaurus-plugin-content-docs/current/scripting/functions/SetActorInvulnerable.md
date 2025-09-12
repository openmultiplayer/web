---
title: SetActorInvulnerable
sidebar_label: SetActorInvulnerable
description: آسیب نپذیری actor رو تغییر می‌ده.
tags: ["actor"]
---

<VersionWarn version='SA-MP 0.3.7' />

## توضیحات

آسیب نپذیری actor رو تغییر می‌ده.

| نام              | توضیحات                                                        |
| ----------------- | ------------------------------------------------------------------ |
| actorid           | ID actor که آسیب نپذیری‌ش رو می‌خوایم تنظیم کنیم.                        |
| bool:invulnerable | 'false' برای آسیب پذیر کردن، 'true' برای آسیب نپذیر کردن. |

## مقدار برگشتی

**true** - موفقیت

**false** - شکست (مثلاً Actor ساخته نشده).

## مثال‌ها

```c
new gMyActor;

public OnGameModeInit()
{
    gMyActor = CreateActor(179, 316.1, -134.0, 999.6, 90.0); // Actor as a salesperson in Ammunation.
    SetActorInvulnerable(gMyActor, true);
    return 1;
}
```

## نکات

:::warning

وقتی آسیب نپذیر تنظیم بشه، actor دیگه [OnPlayerGiveDamageActor](OnPlayerGiveDamageActor) رو صدا نمی‌زنه. بازیکنا تغییر وضعیت آسیب نپذیری actor رو فقط وقتی می‌بینن که دوباره براشون restream بشه.

:::

## توابع مرتبط

- [IsActorInvulnerable](IsActorInvulnerable): بررسی اینکه آیا actor آسیب نپذیر هست یا نه.