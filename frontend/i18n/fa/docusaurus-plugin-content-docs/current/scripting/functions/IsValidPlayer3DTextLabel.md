---
title: IsValidPlayer3DTextLabel
sidebar_label: IsValidPlayer3DTextLabel
description: چک می‌کنه که آیا 3D text label یه بازیکن معتبره یا نه.
tags: ["player", "3dtextlabel"]
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

چک می‌کنه که آیا 3D text label یه بازیکن معتبره یا نه.

| نام                 | توضیحات                                              |
| ------------------- | ---------------------------------------------------- |
| playerid            | ID بازیکن.                                            |
| PlayerText3D:textid | ID 3D text label بازیکنی که باید چک بشه.              |

## مقادیر برگشتی

این تابع **true** برمی‌گردونه اگه 3D text label بازیکن معتبر باشه، یا **false** اگه نباشه.

## مثال‌ها

```c
new PlayerText3D:playerTextId;
new Float:X, Float:Y, Float:Z;

GetPlayerPos(playerid, X, Y, Z);
playerTextId = CreatePlayer3DTextLabel(playerid, "Hello\nI'm at your position", 0x008080FF, X, Y, Z, 40.0);

if (IsValidPlayer3DTextLabel(playerid, playerTextId))
{
    // Do something
}
```

## توابع مرتبط

- [CreatePlayer3DTextLabel](CreatePlayer3DTextLabel): ساخت یه 3D Text Label فقط برای یه بازیکن خاص.
- [IsValid3DTextLabel](IsValid3DTextLabel): چک کردن اینکه 3D text label معتبره یا نه.