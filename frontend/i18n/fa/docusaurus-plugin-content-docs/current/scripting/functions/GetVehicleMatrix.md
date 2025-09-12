---
title: GetVehicleMatrix
sidebar_label: GetVehicleMatrix
description: ماتریس چرخش واقعی وسیله نقلیه رو دریافت می‌کنه.
tags: ["vehicle"]
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

ماتریس چرخش واقعی وسیله نقلیه رو دریافت می‌کنه.

## پارامترها

| نام          | توضیحات                                                                    |
|---------------|--------------------------------------------------------------------------------|
| vehicleid     | ID وسیله نقلیه.                                                         |
| &Float:rightX | متغیر float برای ذخیره مختصات rightX که به صورت reference پاس داده می‌شه. |
| &Float:rightY | متغیر float برای ذخیره مختصات rightY که به صورت reference پاس داده می‌شه. |
| &Float:rightZ | متغیر float برای ذخیره مختصات rightZ که به صورت reference پاس داده می‌شه. |
| &Float:upX    | متغیر float برای ذخیره مختصات upX که به صورت reference پاس داده می‌شه.    |
| &Float:upY    | متغیر float برای ذخیره مختصات upY که به صورت reference پاس داده می‌شه.    |
| &Float:upZ    | متغیر float برای ذخیره مختصات upZ که به صورت reference پاس داده می‌شه.    |
| &Float:atX    | متغیر float برای ذخیره مختصات atX که به صورت reference پاس داده می‌شه.    |
| &Float:atY    | متغیر float برای ذخیره مختصات atY که به صورت reference پاس داده می‌شه.    |
| &Float:atZ    | متغیر float برای ذخیره مختصات atZ که به صورت reference پاس داده می‌شه.    |

## مثال‌ها

```c
new 
    Float:rightX,
    Float:rightY,
    Float:rightZ,
    Float:upX,
    Float:upY,
    Float:upZ,
    Float:atX,
    Float:atY,
    Float:atZ;

GetVehicleMatrix(vehicleid, rightX, rightY, rightZ, upX, upY, upZ, atX, atY, atZ);
```

## توابع مرتبط

- [GetVehicleRotationQuat](GetVehicleRotationQuat): چرخش یه وسیله نقلیه در همه محورها رو به صورت quaternion برمی‌گردونه.