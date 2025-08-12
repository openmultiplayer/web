---
title: Get3DTextLabelDrawDistance
sidebar_label: Get3DTextLabelDrawDistance
description: فاصله نمایش 3D text label رو میگیره.
tags: ["3dtextlabel"]
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

فاصله نمایش 3D text label رو میگیره.

| نام           | توضیحات                                                |
| ------------- | ----------------------------------------------------- |
| Text3D:textid | ID ‌ 3D text label که میخوایم فاصله نمایشاش رو بگیریم. |

## برگشتی

فاصله نمایش 3D text label رو به صورت float برمیگردونه.

## مثال‌ها

```c
new Text3D:gMyLabel;
new Float:drawDistance;

gMyLabel = Create3DTextLabel("Hello World!", 0x008080FF, 30.0, 40.0, 50.0, 10.0, 0, false);

drawDistance = Get3DTextLabelDrawDistance(gMyLabel);
// drawDistance = 10.0
```

## توابع مرتبط

- [Set3DTextLabelDrawDistance](Set3DTextLabelDrawDistance): تنظیم فاصله نمایش 3D text label.
- [GetPlayer3DTextLabelDrawDistance](GetPlayer3DTextLabelDrawDistance): گرفتن فاصله نمایش player 3D text label.