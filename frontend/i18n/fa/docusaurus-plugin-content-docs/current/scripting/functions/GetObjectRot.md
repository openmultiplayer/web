---
title: GetObjectRot
sidebar_label: GetObjectRot
description: چرخش فعلی یه آبجکت رو برمیگردونه.
tags: ["object"]
---

<div dir="rtl" style={{ textAlign: "right" }}>

## توضیحات

از این تابع برای گرفتن چرخش فعلی آبجکت استفاده کن. چرخش به صورت reference تو سه متغیر rotationX/rotationY/rotationZ ذخیره میشه.

| اسم             | توضیح                                                   |
| ---------------- | ------------------------------------------------------------- |
| objectid         | شناسه آبجکتی که می‌خوای چرخشش رو بگیری. |
| &Float:rotationX | متغیر برای ذخیره چرخش X، به صورت reference پاس داده میشه.    |
| &Float:rotationY | متغیر برای ذخیره چرخش Y، به صورت reference پاس داده میشه.    |
| &Float:rotationZ | متغیر برای ذخیره چرخش Z، به صورت reference پاس داده میشه.    |

## مقادیر برگشتی

چرخش آبجکت تو متغیرهای reference شده ذخیره میشه، نه تو مقدار برگشتی.

## مثال‌ها

</div>

```c
public OnGameModeInit()
{
    new objectid = CreateObject(652, 732.32690, 1940.21289, 4.27340, 357.00000, 0.00000, -76.00000);

    new Float:rotationX, Float:rotationY, Float:rotationZ;
    GetObjectRot(objectid, rotationX, rotationY, rotationZ);
    // rotationX = 357.00000
    // rotationY = 0.00000
    // rotationZ = -76.00000
    return 1;
}
```

<div dir="rtl" style={{ textAlign: "right" }}>

## تابع‌های مرتبط

- [GetObjectPos](GetObjectPos): موقعیت یه آبجکت رو برمیگردونه.
- [CreateObject](CreateObject): یه آبجکت می‌سازه.
- [DestroyObject](DestroyObject): یه آبجکت رو نابود می‌کنه.
- [IsValidObject](IsValidObject): چک می‌کنه که یه آبجکت معتبره یا نه.
- [MoveObject](MoveObject): یه آبجکت رو حرکت می‌ده.
- [StopObject](StopObject): حرکت یه آبجکت رو متوقف می‌کنه.
- [SetObjectPos](SetObjectPos): موقعیت یه آبجکت رو تنظیم می‌کنه.
- [SetObjectRot](SetObjectRot): چرخش یه آبجکت رو تنظیم می‌کنه.
- [AttachObjectToPlayer](AttachObjectToPlayer): یه آبجکت رو به بازیکن وصل می‌کنه.

</div>