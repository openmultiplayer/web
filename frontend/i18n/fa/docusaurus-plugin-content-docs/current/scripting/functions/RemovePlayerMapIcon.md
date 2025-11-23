---
title: RemovePlayerMapIcon
sidebar_label: RemovePlayerMapIcon
description: یک map icon که قبلاً با SetPlayerMapIcon برای بازیکن تنظیم شده رو حذف می‌کنه.
tags: ["player"]
---

## توضیحات

یک map icon که قبلاً با SetPlayerMapIcon برای بازیکن تنظیم شده رو حذف می‌کنه.

| نام     | توضیح                                                                     |
| -------- | ------------------------------------------------------------------------------- |
| playerid | ID بازیکنی که می‌خوایم iconش رو حذف کنیم.                                      |
| iconid   | ID iconی که می‌خوایم حذف کنیم. این پارامتر دوم SetPlayerMapIcon هست. |

## مقادیر بازگشتی

**true** - function با موفقیت اجرا شد.

**false** - اجرای function ناموفق بوده.

## مثال‌ها

```c
SetPlayerMapIcon(playerid, 12, 2204.9468, 1986.2877, 16.7380, 52, 0);

// Baadan
RemovePlayerMapIcon(playerid, 12);
```

## توابع مرتبط

- [SetPlayerMapIcon](SetPlayerMapIcon): برای یک بازیکن mapicon می‌سازه.