---
title: GetActorPos
sidebar_label: GetActorPos
description: موقعیت Actor رو می‌گیره.
tags: ["actor"]
---

<div dir="rtl" style={{ textAlign: "right" }}>

<VersionWarn version='SA-MP 0.3.7' />

## توضیحات

موقعیت Actor رو می‌گیره.

| اسم      | توضیح                                                                           |
| -------- | ------------------------------------------------------------------------------- |
| actorid  | شناسه Actor که می‌خوای موقعیت‌ش رو بگیری. با CreateActor برگشت داده میشه.           |
| &Float:x | متغیری از نوع float که با reference پاس داده میشه و مختصات X Actor توش ذخیره میشه. |
| &Float:y | متغیری از نوع float که با reference پاس داده میشه و مختصات Y Actor توش ذخیره میشه. |
| &Float:z | متغیری از نوع float که با reference پاس داده میشه و مختصات Z Actor توش ذخیره میشه. |

## مقادیر برگشتی

**true** - تابع با موفقیت اجرا شد.

**false** - تابع نتونست اجرا بشه. Actor مشخص شده وجود نداره.

موقعیت Actor در متغیرهای مشخص شده ذخیره میشه.

## مثال‌ها

</div>

```c
new Float:x, Float:y, Float:z;
GetActorPos(actorid, x, y, z);
```

<div dir="rtl" style={{ textAlign: "right" }}>

## تابع‌های مرتبط

- [SetActorPos](SetActorPos): تنظیم موقعیت Actor.

</div>