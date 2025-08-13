---
title: LimitPlayerMarkerRadius
sidebar_label: LimitPlayerMarkerRadius
description: شعاع نشانگر بازیکن را تنظیم کن.
tags: ["player"]
---

## توضیحات

شعاع نشانگر بازیکن را تنظیم می‌کند.

| نام                 | توضیحات                                 |
| ------------------- | ------------------------------------ |
| Float:markerRadius  | شعاعی که نشانگرها در آن نمایش داده می‌شوند |

## مقدار بازگشتی

این تابع مقدار خاصی بازنمی‌گرداند.

## مثال‌ها

```c
public OnGameModeInit()
{
    LimitPlayerMarkerRadius(100.0);
}
```

## توابع مرتبط

- [ShowPlayerMarkers](ShowPlayerMarkers): تصمیم بگیر که آیا سرور باید نشانگرها را روی رادار نمایش دهد.
- [SetPlayerMarkerForPlayer](SetPlayerMarkerForPlayer): نشانگر بازیکن را تنظیم کن.
- [LimitGlobalChatRadius](LimitGlobalChatRadius): فاصله بین بازیکنان مورد نیاز برای دیدن چت آن‌ها را محدود کن.