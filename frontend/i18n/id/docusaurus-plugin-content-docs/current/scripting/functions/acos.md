---
title: acos
sidebar_label: acos
description: Mengambil nilai kebalikan dari kosinus dalam derajat.
tags: ["math"]
---

<LowercaseNote />

## Deskripsi

Mengambil nilai kebalikan dari kosinus dalam derajat. Dalam trigonometri, arc cosinus adalah operasi kebalikan dari cosinus.

| Nama        | Deskripsi                                                    |
| ----------- | ------------------------------------------------------------ |
| Float:value | nilai yang arc cosinusnya dihitung, dalam interval [-1,+1].  |

## Returns

Sudut dalam derajat, dalam interval [0.0,180.0].

## Contoh

```c
//The arc cosine of 0.500000 is 60.000000 degrees.

public OnGameModeInit()
{
    new Float:param, Float:result;
    param = 0.5;
    result = acos(param);
    printf("The arc cosine of %f is %f degrees.", param, result);
    return 1;
}
```

## Fungsi Terkait

- [floatsin](floatsin): Dapatkan sinus dari sudut tertentu.
- [floatcos](floatcos): Dapatkan cosinus dari sudut tertentu.
- [floattan](floattan): Dapatkan garis singgung dari sudut tertentu.
- [asin](asin): Dapatkan value kebalikan dari sinus dalam derajat.
- [atan](atan): Dapatkan value kebalikan dari garis singgung dalam derajat.
- [atan2](atan2): Dapatkan value kebalikan multi-value dari sebuah garis singgung dalam derajat.
