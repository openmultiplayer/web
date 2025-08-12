---
title: GetPlayerAttachedObject
sidebar_label: GetPlayerAttachedObject
description: داده‌های آبجکت متصل شده به بازیکن را با استفاده از ایندکس دریافت می‌کند.
tags: ["player", "object", "attachment"]
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

داده‌های آبجکت متصل شده به بازیکن را با استفاده از ایندکس دریافت می‌کند.

| نام              | توضیحات                                     |
| ---------------- | ------------------------------------------- |
| playerid         | شناسه بازیکنی که می‌خواهید داده‌هایش را بگیرید. |
| index            | ایندکس (اسلات) آبجکت (0-9).                 |
| &modelid         | مدل آبجکت متصل شده.                         |
| &bone            | استخوان آبجکت متصل شده.                     |
| &Float:offsetX   | جابه‌جایی محور X آبجکت.                      |
| &Float:offsetY   | جابه‌جایی محور Y آبجکت.                      |
| &Float:offsetZ   | جابه‌جایی محور Z آبجکت.                      |
| &Float:rotationX | چرخش محور X آبجکت.                         |
| &Float:rotationY | چرخش محور Y آبجکت.                         |
| &Float:rotationZ | چرخش محور Z آبجکت.                         |
| &Float:scaleX    | مقیاس محور X آبجکت.                        |
| &Float:scaleY    | مقیاس محور Y آبجکت.                        |
| &Float:scaleZ    | مقیاس محور Z آبجکت.                        |
| &materialColour1 | رنگ متریال 1 آبجکت.                        |
| &materialColour2 | رنگ متریال 2 آبجکت.                        |

## مقدار بازگشتی

همیشه true برمی‌گرداند.

## مثال‌ها

```c
new 
	modelid, 
	bone, 
	Float:offsetX, Float:offsetY, Float:offsetZ, 
	Float:rotationX, Float:rotationY, Float:rotationZ, 
	Float:scaleX, Float:scaleY, Float:scaleZ, 
	materialColour1, materialColour2;

// داده‌های متصل شده در ایندکس 3 را دریافت کن
GetPlayerAttachedObject(playerid, 3, modelid, bone, offsetX, offsetY, offsetZ, rotationX, rotationY, rotationZ, scaleX, scaleY, scaleZ, materialColour1, materialColour2);
```

## تابع‌های مرتبط

- [SetPlayerAttachedObject](SetPlayerAttachedObject): یک آبجکت به بازیکن متصل می‌کند
- [RemovePlayerAttachedObject](RemovePlayerAttachedObject): آبجکت متصل شده را از بازیکن حذف می‌کند
- [IsPlayerAttachedObjectSlotUsed](IsPlayerAttachedObjectSlotUsed): بررسی می‌کند که آیا آبجکتی در ایندکس مشخص به بازیکن متصل است یا نه
- [EditAttachedObject](EditAttachedObject): آبجکت متصل شده را ویرایش می‌کند.