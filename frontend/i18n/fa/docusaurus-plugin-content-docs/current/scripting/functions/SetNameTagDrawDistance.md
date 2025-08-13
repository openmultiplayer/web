---
title: SetNameTagDrawDistance
sidebar_label: SetNameTagDrawDistance
description: حداکثر فاصله برای نمایش نام بازیکنا رو تنظیم می‌کنه.
tags: []
---

## توضیحات

حداکثر فاصله برای نمایش نام بازیکنا رو تنظیم می‌کنه.

| نام           | توضیح          |
| -------------- | -------------------- |
| Float:distance | فاصله برای تنظیم. |

## مقادیر بازگشتی

این function هیچ مقدار خاصی بر نمی‌گردونه.

## مثال‌ها

```c
SetNameTagDrawDistance(20.0);
```

## نکات

:::tip

فاصله پیش‌فرض 70.0 واحد SA هست

:::

## توابع مرتبط

- [LimitGlobalChatRadius](LimitGlobalChatRadius): فاصله بین بازیکنای لازم برای مشاهده chatشون رو محدود می‌کنه.
- [ShowNameTags](ShowNameTags): nametagها رو روشن یا خاموش می‌کنه.
- [ShowPlayerNameTagForPlayer](ShowPlayerNameTagForPlayer): برای یک بازیکن مشخص nametag رو نشون می‌ده یا پنهان می‌کنه.