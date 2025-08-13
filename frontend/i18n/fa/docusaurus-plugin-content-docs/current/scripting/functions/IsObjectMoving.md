---
title: IsObjectMoving
sidebar_label: IsObjectMoving
description: چک می‌کنه که آیا objectid داده شده در حال حرکته یا نه.
tags: ["object"]
---

## توضیحات

چک می‌کنه که آیا objectid داده شده در حال حرکته یا نه.

| نام      | توضیحات                                              |
| -------- | ---------------------------------------------------- |
| objectid | objectid ای که می‌خوای چک کنی که در حال حرکته یا نه. |

## مقادیر برگشتی

**true** اگه آبجکت در حال حرکت باشه، **false** اگه نباشه.

## مثال‌ها

```c
new gAirportGate;

public OnGameModeInit()
{
    gAirportGate = CreateObject(980, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0);

    MoveObject(gAirportGate, 0.0, 0.0, 15.0, 1.00);

	if (IsObjectMoving(gAirportGate))
	{
		StopObject(gAirportGate);
	}
    return 1;
}

```

## توابع مرتبط

- [MoveObject](MoveObject): حرکت دادن یه آبجکت.
- [StopObject](StopObject): متوقف کردن حرکت یه آبجکت.

## callback های مرتبط

- [OnObjectMoved](../callbacks/OnObjectMoved): وقتی آبجکت حرکتش متوقف می‌شه فراخوانی می‌شه.