---
title: Set3DTextLabelVirtualWorld
sidebar_label: Set3DTextLabelVirtualWorld
description: virtual world id ای 3D text label رو تنظیم می‌کنه.
tags: ["3dtextlabel"]
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

virtual world id ای 3D text label رو تنظیم می‌کنه.

| نام          | توضیحات                                                |
| ------------- | ---------------------------------------------------------- |
| Text3D:textid | ID ای از 3D text label برای تنظیم virtual world id.   |
| virtualWorld  | virtual world که در اون می‌تونی 3D Text رو ببینی |

## مثال‌ها

```c
new Text3D:gMyLabel;

gMyLabel = Create3DTextLabel("Hello World!", 0x008080FF, 30.0, 40.0, 50.0, 10.0, 20, false);

Set3DTextLabelVirtualWorld(gMyLabel, 60);
// The virtual world id changed from '20' to '60'
```

## توابع مرتبط

- [Get3DTextLabelVirtualWorld](Get3DTextLabelVirtualWorld): گرفتن virtual world id ای 3D text label.
- [SetPlayer3DTextLabelVirtualWorld](SetPlayer3DTextLabelVirtualWorld): تنظیم virtual world id ای player 3D text label.