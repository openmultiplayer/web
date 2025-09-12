---
title: DisableNameTagLOS
sidebar_label: DisableNameTagLOS
description: بررسی خط دید برچسب نام را غیرفعال می‌کند تا بازیکنان بتوانند برچسب نام‌ها را از میان آبجکت‌ها ببینند.
tags: []
---

## توضیحات

بررسی خط دید برچسب نام را غیرفعال می‌کند تا بازیکنان بتوانند برچسب نام‌ها را از میان آبجکت‌ها ببینند.

## مثال‌ها

```c
public OnGameModeInit()
{
    DisableNameTagLOS();
    return 1;
}
```

## نکات

:::warning

این تا زمان ریستارت سرور قابل برگشت نیست.

:::

:::tip

همچنین می‌توانید خط دید برچسب نام‌ها را از طریق [config.json](../../server/config.json) غیرفعال کنید

```json
"use_nametag_los": false,
```

:::

## توابع مرتبط

- [ShowNameTags](ShowNameTags): روشن یا خاموش کردن برچسب نام‌ها.
- [ShowPlayerNameTagForPlayer](ShowPlayerNameTagForPlayer): نمایش یا مخفی کردن برچسب نام برای بازیکن مشخص.