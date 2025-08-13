---
title: Set3DTextLabelDrawDistance
sidebar_label: Set3DTextLabelDrawDistance
description: فاصله رسم 3D text label رو تنظیم می‌کنه.
tags: ["3dtextlabel"]
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

فاصله رسم 3D text label رو تنظیم می‌کنه.

| نام               | توضیحات                                                    |
| ------------------ | -------------------------------------------------------------- |
| Text3D:textid      | ID ای از 3D text label برای تنظیم فاصله رسم.          |
| Float:drawDistance | فاصله‌ای که از اون می‌تونی 3D Text Label رو ببینی. |

## مقدار برگشتی

این تابع همیشه true برمی‌گردونه.

## مثال‌ها

```c
new Text3D:gMyLabel;

gMyLabel = Create3DTextLabel("Hello World!", 0x008080FF, 30.0, 40.0, 50.0, 10.0, 0, false);

Set3DTextLabelDrawDistance(gMyLabel, 20.0);
// The draw distance changed from 10.0 to 20.0
```

## توابع مرتبط

- [Get3DTextLabelDrawDistance](Get3DTextLabelDrawDistance): گرفتن فاصله رسم 3D text label.
- [SetPlayer3DTextLabelDrawDistance](SetPlayer3DTextLabelDrawDistance): تنظیم فاصله رسم player 3D text label.