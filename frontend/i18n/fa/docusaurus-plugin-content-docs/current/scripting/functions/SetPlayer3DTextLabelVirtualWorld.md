---
title: SetPlayer3DTextLabelVirtualWorld
sidebar_label: SetPlayer3DTextLabelVirtualWorld
description: virtual world id مربوط به 3D text label پلیر رو تنظیم می‌کنه.
tags: ["player", "3dtextlabel"]
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

virtual world id مربوط به 3D text label پلیر رو تنظیم می‌کنه.

| نام                 | توضیحات                                                    |
| ------------------- | --------------------------------------------------------- |
| playerid            | آیدی پلیر                                                  |
| PlayerText3D:textid | آیدی 3D text label پلیر که virtual world اون رو می‌خوایم تنظیم کنیم |
| virtualWorld        | virtual world که توش می‌تونی 3D Text رو ببینی            |

## مثال‌ها

```c
new PlayerText3D:playerTextId;
new Float:X, Float:Y, Float:Z;

GetPlayerPos(playerid, X, Y, Z);
playerTextId = CreatePlayer3DTextLabel(playerid, "Hello\nI'm at your position", 0x008080FF, X, Y, Z, 40.0);

SetPlayer3DTextLabelVirtualWorld(playerid, playerTextId, 60);
```

## نکات

:::warning

برای player 3D text label ها virtual world پشتیبانی نشده.
این تابع هیچ کاری نمی‌کنه و اصلاً کار نمی‌کنه!

:::

## توابع مرتبط

- [GetPlayer3DTextLabelVirtualWorld](GetPlayer3DTextLabelVirtualWorld): virtual world id مربوط به 3D text label پلیر رو دریافت می‌کنه.
- [Set3DTextLabelVirtualWorld](Set3DTextLabelVirtualWorld): virtual world id مربوط به 3D text label رو تنظیم می‌کنه.