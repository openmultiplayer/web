---
title: GetSVarNameAtIndex
sidebar_label: GetSVarNameAtIndex
description: اسم یه sVar رو از طریق index دریافت می‌کنه.
tags: ["server variable", "svar"]
---

## توضیحات

اسم یه sVar رو از طریق index دریافت می‌کنه.

| نام                   | توضیحات                                                |
| ---------------------- | ---------------------------------------------------------- |
| index                  | index sVar.                                     |
| output[]               | یه string برای ذخیره اسم sVar که به صورت reference پاس داده می‌شه. |
| size = sizeof (output) | حداکثر طول string برگردونده شده.                     |

## مقادیر برگشتی

این تابع مقدار مشخصی برنمی‌گردونه.

## توابع مرتبط

- [GetSVarType](GetSVarType): دریافت نوع متغیر سرور.
- [GetSVarInt](GetSVarInt): دریافت یه متغیر سرور به صورت integer.
- [GetSVarFloat](GetSVarFloat): دریافت float قبلاً تنظیم شده از متغیر سرور.
- [GetSVarString](GetSVarString): دریافت string قبلاً تنظیم شده از متغیر سرور.