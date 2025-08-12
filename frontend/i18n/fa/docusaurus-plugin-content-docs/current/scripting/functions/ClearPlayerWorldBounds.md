---
title: ClearPlayerWorldBounds
sidebar_label: ClearPlayerWorldBounds
description: بازنشانی مرزهای دنیای بازیکن به مرزهای پیش‌فرض دنیا.
tags: ["player"]
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

بازنشانی مرزهای دنیای بازیکن به مرزهای پیش‌فرض دنیا.

| نام      | توضیحات                                                    |
| -------- | --------------------------------------------------------- |
| playerid | ID بازیکنی که مرزهای دنیایش بازنشانی/پاک خواهد شد. |

## مقدار بازگشتی

**true** - تابع با موفقیت اجرا شد.

**false** - تابع در اجرا ناکام بود.

## مثال‌ها

```c
public OnPlayerSpawn(playerid)
{
    SetPlayerWorldBounds(playerid, 20.0, 0.0, 20.0, 0.0);
    return 1;
}

public OnPlayerDeath(playerid, killerid, WEAPON:reason)
{
    ClearPlayerWorldBounds(playerid);
    return 1;
}
```

## نکات

:::tip

مرزهای دنیای یک بازیکن همچنین می‌توانند با تنظیم آن‌ها به 20000.0000، -20000.0000، 20000.0000، -20000.0000 بازنشانی شوند. اینها مقادیر پیش‌فرض هستند. با این حال، ما استفاده از ClearPlayerWorldBounds را برای بازنشانی مرزهای دنیای بازیکن برای وضوح پیشنهاد می‌کنیم.

:::

## توابع مرتبط

- [SetPlayerWorldBounds](SetPlayerWorldBounds): تنظیم مرزهای دنیا برای بازیکن. بازیکن‌ها نمی‌توانند از مرزها خارج شوند (به داخل فشرده خواهند شد).
- [GetPlayerWorldBounds](GetPlayerWorldBounds): دریافت مرزهای دنیای بازیکن.