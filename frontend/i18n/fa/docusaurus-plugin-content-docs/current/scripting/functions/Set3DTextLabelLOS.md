---
title: Set3DTextLabelLOS
sidebar_label: Set3DTextLabelLOS
description: line-of-sight ای 3D text label رو تنظیم می‌کنه.
tags: ["3dtextlabel"]
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

line-of-sight ای 3D text label رو تنظیم می‌کنه.

| نام          | توضیحات                                                                    |
| ------------- | ------------------------------------------------------------------------------ |
| Text3D:textid | ID ای از 3D text label برای تنظیم line-of-sight.                          |
| bool:enable   | (false/true) تست line-of-sight تا این متن نتونه از پشت اجسام دیده بشه |

## مثال‌ها

```c
new Text3D:gMyLabel;

gMyLabel = Create3DTextLabel("Hello World!", 0x008080FF, 30.0, 40.0, 50.0, 40.0, 0, true);

Set3DTextLabelLOS(gMyLabel, false);
// The line-of-sight changed from 'true' to 'false'
```

## توابع مرتبط

- [Get3DTextLabelLOS](Get3DTextLabelLOS): گرفتن line-of-sight ای 3D text label.
- [SetPlayer3DTextLabelLOS](SetPlayer3DTextLabelLOS): تنظیم line-of-sight ای player 3D text label.