---
title: IsValid3DTextLabel
sidebar_label: IsValid3DTextLabel
description: چک می‌کنه که آیا یه 3D text label معتبره یا نه.
tags: ["3dtextlabel"]
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

چک می‌کنه که آیا یه 3D text label معتبره یا نه.

| نام           | توضیحات                                |
| ------------- | -------------------------------------- |
| Text3D:textid | ID 3D text label که باید چک بشه.      |

## مقادیر برگشتی

این تابع **true** برمی‌گردونه اگه 3D text label معتبر باشه، یا **false** اگه نباشه.

## مثال‌ها

```c
new Text3D:gMyLabel;

public OnGameModeInit()
{
    gMyLabel = Create3DTextLabel("I'm at the coordinates:\n30.0, 40.0, 50.0", 0x008080FF, 30.0, 40.0, 50.0, 40.0, 0, false);

    if (IsValid3DTextLabel(gMyLabel))
    {
        // Do something
    }
    return 1;
}
```

## توابع مرتبط

- [Create3DTextLabel](Create3DTextLabel): ساخت یه 3D Text Label در یه مکان خاص در دنیا.
- [IsValidPlayer3DTextLabel](IsValidPlayer3DTextLabel): چک کردن اینکه 3D text label یه بازیکن معتبره یا نه.