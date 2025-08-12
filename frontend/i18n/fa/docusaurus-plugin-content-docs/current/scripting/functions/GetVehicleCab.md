---
title: GetVehicleCab
sidebar_label: GetVehicleCab
description: ID کابینی که به یه وسیله نقلیه وصل شده رو دریافت می‌کنه.
tags: ["vehicle"]
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

ID کابینی که به یه وسیله نقلیه وصل شده رو دریافت می‌کنه.

| نام      | توضیحات                                  |
| --------- | -------------------------------------------- |
| vehicleid | ID وسیله نقلیه‌ای که می‌خوای کابین‌ش رو بگیری.     |

## مقادیر برگشتی

ID وسیله نقلیه کابین یا **0** اگه هیچ کابینی وصل نباشه.

## مثال‌ها

```c
new cabId = GetVehicleCab(vehicleid);
```

## توابع مرتبط

- [GetVehicleTrailer](GetVehicleTrailer): دریافت ID تریلری که به یه وسیله نقلیه وصل شده.