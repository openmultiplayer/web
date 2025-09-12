---
title: Is3DTextLabelStreamedIn
sidebar_label: Is3DTextLabelStreamedIn
description: چک می‌کنه که آیا یه 3D text label برای بازیکن stream شده یا نه.
tags: ["3dtextlabel"]
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

چک می‌کنه که آیا یه 3D text label برای بازیکن stream شده یا نه.

| نام           | توضیحات                      |
| ------------- | ---------------------------- |
| playerid      | ID بازیکن.                    |
| Text3D:textid | ID 3D text label.            |

## مقادیر برگشتی

این تابع **true** برمی‌گردونه اگه 3D text label برای بازیکن stream شده باشه، یا **false** اگه نشده باشه.

## مثال‌ها

```c
new Text3D:gMyLabel;

public OnGameModeInit()
{
    gMyLabel = Create3DTextLabel("I'm at the coordinates:\n30.0, 40.0, 50.0", 0x008080FF, 30.0, 40.0, 50.0, 40.0, 0, false);
    return 1;
}

public OnPlayerSpawn(playerid)
{
    if (Is3DTextLabelStreamedIn(playerid, gMyLabel))
    {
        // Do something
    }
    return 1;
}
```

## توابع مرتبط

- [Create3DTextLabel](Create3DTextLabel): یه 3D Text Label در مکان خاصی از دنیا می‌سازه.
- [IsPlayerStreamedIn](IsPlayerStreamedIn): چک می‌کنه که آیا یه بازیکن برای بازیکن دیگه stream شده یا نه.