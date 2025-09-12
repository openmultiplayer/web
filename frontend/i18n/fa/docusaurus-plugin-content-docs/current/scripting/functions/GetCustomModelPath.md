---
title: GetCustomModelPath
sidebar_label: GetCustomModelPath
description: مسیر یک مدل سفارشی را دریافت می‌کنه.
tags: ["custom model", "custom skin", "simple model"]
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

مسیر یک مدل سفارشی را دریافت می‌کنه.

| نام       | توضیحات                                                     |
| --------- | ---------------------------------------------------------- |
| modelid   | آیدی مدل سفارشی که می‌خوای مسیرش رو دریافت کنی.           |
| dffPath[] | آرایه‌ای که مسیر dff توش ذخیره می‌شه، به عنوان مرجع پاس داده می‌شه. |
| dffSize   | طول مسیر dff که باید ذخیره بشه.                            |
| txdPath[] | آرایه‌ای که مسیر txd توش ذخیره می‌شه، به عنوان مرجع پاس داده می‌شه. |
| txdSize   | طول مسیر txd که باید ذخیره بشه.                            |

## مثال‌ها

```c
new
    modelid = -2000,
    dffPath[64],
    txdPath[64];

GetCustomModelPath(modelid, dffPath, sizeof(dffPath), txdPath, sizeof(txdPath));

printf("[Custom model id %d path]\n\
    dff: %s\n\
    txd: %s", 
    modelid, dffPath, txdPath);
```

## تابع‌های مرتبط

- [AddSimpleModel](AddSimpleModel): یک مدل ساده سفارشی جدید اضافه می‌کنه.
- [AddSimpleModelTimed](AddSimpleModelTimed): یک مدل ساده سفارشی جدید اضافه می‌کنه.
- [IsValidCustomModel](IsValidCustomModel): بررسی می‌کنه که آیا آیدی مدل سفارشی معتبره یا نه.