---
title: GetObjectSyncRotation
sidebar_label: GetObjectSyncRotation
description: sync rotation یک آبجکت رو می‌گیره.
tags: ["object"]
---

<VersionWarn version='omp v1.1.0.2612' />

<div dir="rtl" style={{ textAlign: "right" }}>

## توضیحات

sync rotation یک آبجکت رو می‌گیره.

| اسم     | توضیح           |
|----------|-----------------------|
| objectid | شناسه آبجکت. |

## مقادیر برگشتی

sync rotation آبجکت رو به صورت boolean (`true`/`false`) برمی‌گردونه.

## مثال‌ها

</div>

```c
new objectid = CreateObject(...);
new parentid = CreateObject(...);
AttachObjectToObject(objectid, parentid, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, false);

new bool:syncRotation = GetObjectSyncRotation(objectid);
// syncRotation = false
```

<div dir="rtl" style={{ textAlign: "right" }}>

## تابع‌های مرتبط

- [AttachObjectToObject](AttachObjectToObject): اتصال آبجکت به آبجکت دیگر.
- [GetPlayerObjectSyncRotation](GetPlayerObjectSyncRotation): گرفتن sync rotation آبجکت بازیکن.

</div>