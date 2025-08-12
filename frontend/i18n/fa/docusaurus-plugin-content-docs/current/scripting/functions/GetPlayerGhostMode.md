---
title: GetPlayerGhostMode
sidebar_label: GetPlayerGhostMode
description: دریافت حالت روح بازیکن.
tags: ["player"]
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

دریافت حالت روح بازیکن.

| نام     | توضیحات                                           |
| -------- | ----------------------------------------------------- |
| playerid | ID بازیکن برای دریافت حالت روحش. |

## مقادیر برگشتی

**true** - حالت روح فعال است.

**false** - حالت روح غیرفعال است.

## مثال‌ها

```c
new string[64];
format(string, sizeof(string), "Your ghost mode is %s", GetPlayerGhostMode(playerid) == true ? "enable" : "disable");
SendClientMessage(playerid, -1, string);
```

## توابع مرتبط

- [TogglePlayerGhostMode](TogglePlayerGhostMode): تغییر وضعیت حالت روح بازیکن.