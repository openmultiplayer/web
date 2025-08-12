---
title: GetObjectPos
sidebar_label: GetObjectPos
description: موقعیت یه آبجکت رو برمیگردونه.
tags: ["object"]
---

<div dir="rtl" style={{ textAlign: "right" }}>

## توضیحات

موقعیت یه آبجکت رو برمیگردونه.

| اسم     | توضیح                                                         |
| -------- | ------------------------------------------------------------------- |
| objectid | شناسه آبجکتی که می‌خوای موقعیتش رو بگیری.                       |
| &Float:x | متغیر برای ذخیره مختصات X، به صورت reference پاس داده میشه. |
| &Float:y | متغیر برای ذخیره مختصات Y، به صورت reference پاس داده میشه. |
| &Float:z | متغیر برای ذخیره مختصات Z، به صورت reference پاس داده میشه. |

## مقادیر برگشتی

**true** - تابع با موفقیت اجرا شد.

**false** - تابع اجرا نشد. آبجکت مشخص شده وجود نداره.

## مثال‌ها

</div>

```c
public OnGameModeInit()
{
    new objectid = CreateObject(2587, 2001.195679, 1547.113892, 14.283400, 0.0, 0.0, 96.0);

    new Float:x, Float:y, Float:z;
    GetObjectPos(objectid, x, y, z);
    // x = 2001.195679
    // y = 1547.113892
    // z = 14.283400
    return 1;
}
```

<div dir="rtl" style={{ textAlign: "right" }}>

## تابع‌های مرتبط

- [CreateObject](CreateObject): یه آبجکت می‌سازه.
- [DestroyObject](DestroyObject): یه آبجکت رو نابود می‌کنه.
- [IsValidObject](IsValidObject): چک می‌کنه که یه آبجکت معتبره یا نه.
- [MoveObject](MoveObject): یه آبجکت رو حرکت می‌ده.
- [StopObject](StopObject): حرکت یه آبجکت رو متوقف می‌کنه.
- [SetObjectPos](SetObjectPos): موقعیت یه آبجکت رو تنظیم می‌کنه.
- [SetObjectRot](SetObjectRot): چرخش یه آبجکت رو تنظیم می‌کنه.
- [GetObjectRot](GetObjectRot): چرخش یه آبجکت رو چک می‌کنه.
- [AttachObjectToPlayer](AttachObjectToPlayer): یه آبجکت رو به بازیکن وصل می‌کنه.

</div>