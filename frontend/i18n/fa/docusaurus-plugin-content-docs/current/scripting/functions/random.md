---
title: random
sidebar_label: random
description: دریافت یک عدد شبه-تصادفی
tags: ["core"]
---

<LowercaseNote />

## توضیحات

یک عدد شبه-تصادفی دریافت می‌کنه.

| نام  | توضیحات                                                                      |
| ---- | --------------------------------------------------------------------------- |
| max  | محدوده مقادیر (از 0 تا این مقدار منهای یک) که می‌تونه برگشت داده بشه.         |

## مقادیر بازگشتی

یک عدد تصادفی در محدوده 0 تا max-1.

## مثال‌ها

```c
new value = random(5);

// 'value' mitune 0, 1, 2, 3 ya 4 bashe. (5 meghdar momken)
new Float:RandomSpawn[][4] =
{
    // Pozisyonha, (X, Y, Z va Facing Angle)
    {-2796.9854, 1224.8180, 20.5429, 192.0335},
    {-2454.2170, 503.8759, 30.0790, 267.2932},
    {-2669.7322, -6.0874, 6.1328, 89.8853}
};


public OnPlayerSpawn(playerid)
{
    new rand = random(sizeof(RandomSpawn));

    // SetPlayerPos be dataye spawn tasadofi
    SetPlayerPos(playerid, RandomSpawn[rand][0], RandomSpawn[rand][1], RandomSpawn[rand][2]);

    // SetPlayerFacingAngle be dataye zaviye tasadofi
    SetPlayerFacingAngle(playerid, RandomSpawn[rand][3]);
    return 1;
}
```

## نکات

:::tip

استفاده از مقداری کمتر از 1 مقادیر عجیبی می‌ده.

:::