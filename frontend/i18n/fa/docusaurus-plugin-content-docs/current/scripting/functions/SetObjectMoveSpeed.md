---
title: SetObjectMoveSpeed
sidebar_label: SetObjectMoveSpeed
description: سرعت حرکت یک object رو تنظیم می‌کنه.
tags: ["object"]
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

سرعت حرکت یک object رو تنظیم می‌کنه.

| نام        | توضیح                                               |
|-------------|-----------------------------------------------------------|
| objectid    | ID object ای که می‌خوایم سرعت حرکتش رو تنظیم کنیم.            |
| Float:speed | سرعتی که object با اون حرکت می‌کنه (واحد در ثانیه). |

## مقادیر بازگشتی

`true` - function با موفقیت اجرا شد.

`false` - اجرای function ناموفق بوده. object مشخص شده وجود نداره.

## مثال‌ها

```c
new objectid = CreateObject(985, 1003.39154, -643.33423, 122.35060,   0.00000, 1.00000, 24.00000);
MoveObject(objectid, 1003.3915, -643.3342, 114.5122,  0.8);

SetObjectMoveSpeed(objectid, 1.5);
// Sorat harakat az 0.8 be 1.5 taghyir kard
```

## توابع مرتبط

- [MoveObject](MoveObject): object رو با سرعت مشخص به موقعیت جدید می‌بره.
- [GetObjectMoveSpeed](GetObjectMoveSpeed): سرعت حرکت object رو دریافت می‌کنه.
- [SetPlayerObjectMoveSpeed](SetPlayerObjectMoveSpeed): سرعت حرکت player-object رو تنظیم می‌کنه.