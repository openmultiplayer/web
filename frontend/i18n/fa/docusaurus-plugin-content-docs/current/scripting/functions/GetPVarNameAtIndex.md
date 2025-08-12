---
title: GetPVarNameAtIndex
sidebar_label: GetPVarNameAtIndex
description: اسم pVar یه بازیکن رو از طریق index دریافت می‌کنه.
tags: ["player variable", "pvar"]
---

## توضیحات

اسم pVar یه بازیکن رو از طریق index دریافت می‌کنه.

| نام                   | توضیحات                                                    |
| ---------------------- | -------------------------------------------------------------- |
| playerid               | ID بازیکنی که می‌خوای اسم متغیرش رو دریافت کنی. |
| index                  | index متغیر بازیکن.                                |
| output[]               | یه string برای ذخیره اسم pVar که به صورت reference پاس داده می‌شه.     |
| size = sizeof (output) | حداکثر طول string برگردونده شده.                         |

## مقادیر برگشتی

این تابع مقدار مشخصی برنمی‌گردونه.

## توابع مرتبط

- [GetPVarType](GetPVarType): دریافت نوع متغیر بازیکن.
- [GetPVarInt](GetPVarInt): دریافت integer قبلاً تنظیم شده از متغیر بازیکن.
- [GetPVarFloat](GetPVarFloat): دریافت float قبلاً تنظیم شده از متغیر بازیکن.
- [GetPVarString](GetPVarString): دریافت string قبلاً تنظیم شده از متغیر بازیکن.