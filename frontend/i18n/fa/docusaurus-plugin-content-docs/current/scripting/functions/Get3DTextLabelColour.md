---
title: Get3DTextLabelColour
sidebar_label: Get3DTextLabelColour
description: رنگ 3D text label رو میگیره.
tags: ["3dtextlabel"]
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

رنگ 3D text label رو میگیره.

| نام           | توضیحات                                       |
| ------------- | -------------------------------------------- |
| Text3D:textid | ID ‌ 3D text label که میخوایم رنگاش رو بگیریم. |

## برگشتی

رنگ 3D text label رو برمیگردونه.

## مثال‌ها

```c
new Text3D:gMyLabel;

gMyLabel = Create3DTextLabel("Hello World!", 0x008080FF, 30.0, 40.0, 50.0, 40.0, 0, false);

new colour = Get3DTextLabelColour(gMyLabel);
// colour = 0x008080FF
```

## توابع مرتبط

- [GetPlayer3DTextLabelColour](GetPlayer3DTextLabelColour): گرفتن رنگ player 3D text label.