---
title: Get3DTextLabelPos
sidebar_label: Get3DTextLabelPos
description: موقعیت 3D text label رو میگیره.
tags: ["3dtextlabel"]
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

موقعیت 3D text label رو میگیره.

| نام           | توضیحات                                                                 |
| ------------- | ---------------------------------------------------------------------- |
| Text3D:textid | ID ‌ 3D text label که میخوایم موقعیتاش رو بگیریم.                        |
| &Float:x      | یه متغیر float که مختصات X رو توش ذخیره میکنیم، با reference پاس میشه.    |
| &Float:y      | یه متغیر float که مختصات Y رو توش ذخیره میکنیم، با reference پاس میشه.    |
| &Float:z      | یه متغیر float که مختصات Z رو توش ذخیره میکنیم، با reference پاس میشه.    |

## مثال‌ها

```c
new Text3D:gMyLabel;

public OnGameModeInit()
{
    gMyLabel = Create3DTextLabel("Hello World!", 0x008080FF, 30.0, 40.0, 50.0, 10.0, 0, false);

    new Float:x, Float:y, Float:z;
    Get3DTextLabelPos(gMyLabel, x, y, z);
    // x = 30.0
    // y = 40.0
    // z = 50.0
    return 1;
}
```

## توابع مرتبط

- [GetPlayer3DTextLabelPos](GetPlayer3DTextLabelPos): گرفتن موقعیت player 3D text label.