---
title: VectorSize
sidebar_label: VectorSize
description: norm (طول) بردار داده شده رو برمی‌گردونه.
tags: ["math"]
---

## توضیحات

norm (طول) بردار داده شده رو برمی‌گردونه.

| نام     | توضیحات                           |
| ------- | ------------------------------------- |
| Float:x | بزرگی بردار روی محور X. |
| Float:y | بزرگی بردار روی محور Y. |
| Float:z | بزرگی بردار روی محور Z. |

## مقدار برگشتی

norm (طول) بردار داده شده به صورت float.

## مثال‌ها

```c
stock Float:GetDistanceBetweenPoints(Float:x1, Float:y1, Float:z1, Float:x2, Float:y2, Float:z2)
{
    return VectorSize(x1-x2, y1-y2, z1-z2);
}
```

## توابع مرتبط

- [GetPlayerDistanceFromPoint](GetPlayerDistanceFromPoint): فاصله بین یک بازیکن و یک نقطه رو بدست بیار.
- [GetVehicleDistanceFromPoint](GetVehicleDistanceFromPoint): فاصله بین یک وسیله نقلیه و یک نقطه رو بدست بیار.
- [floatsqroot](floatsqroot): جذر یک مقدار اعشاری رو محاسبه کن.
