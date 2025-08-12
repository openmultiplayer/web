---
title: Get3DTextLabelLOS
sidebar_label: Get3DTextLabelLOS
description: line-of-sight 3D text label رو میگیره.
tags: ["3dtextlabel"]
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

line-of-sight 3D text label رو میگیره.

| نام           | توضیحات                                                |
| ------------- | ----------------------------------------------------- |
| Text3D:textid | ID ‌ 3D text label که میخوایم line-of-sight اش رو بگیریم. |

## برگشتی

line-of-sight 3D text label رو به صورت boolean (`false`/`true`) برمیگردونه.

## مثال‌ها

```c
new Text3D:gMyLabel;
new bool:testLOS;

gMyLabel = Create3DTextLabel("Hello World!", 0x008080FF, 30.0, 40.0, 50.0, 10.0, 0, true);

testLOS = Get3DTextLabelLOS(gMyLabel);
// testLOS = true
```

## توابع مرتبط

- [Set3DTextLabelLOS](Set3DTextLabelLOS): تنظیم line-of-sight 3D text label.
- [GetPlayer3DTextLabelLOS](GetPlayer3DTextLabelLOS): گرفتن line-of-sight player 3D text label.