---
title: GetVehicleTower
sidebar_label: GetVehicleTower
description: ID کابینی که به یه وسیله نقلیه وصل شده رو دریافت می‌کنه.
tags: ["vehicle"]
---

:::warning

این تابع deprecated شده، [GetVehicleCab](GetVehicleCab) رو ببین.

:::

## توضیحات

ID کابینی که به یه وسیله نقلیه وصل شده رو دریافت می‌کنه.

| نام      | توضیحات                                  |
| --------- | -------------------------------------------- |
| vehicleid | ID وسیله نقلیه‌ای که می‌خوای کابین‌ش رو بگیری.     |

## مقادیر برگشتی

ID وسیله نقلیه کابین یا **0** اگه هیچ کابینی وصل نباشه.

## مثال‌ها

```c
new cabId = GetVehicleTower(vehicleid);
```

## توابع مرتبط

- [GetVehicleTrailer](GetVehicleTrailer): دریافت ID تریلری که به یه وسیله نقلیه وصل شده.