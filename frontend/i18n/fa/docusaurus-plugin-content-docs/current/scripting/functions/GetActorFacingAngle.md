---
title: GetActorFacingAngle
sidebar_label: GetActorFacingAngle
description: زاویه رو به روی Actor رو می‌گیره.
tags: ["actor"]
---

<div dir="rtl" style={{ textAlign: "right" }}>

<VersionWarn version='SA-MP 0.3.7' />

## توضیحات

زاویه رو به روی Actor رو می‌گیره.

| اسم          | توضیح                                                                                   |
| ------------ | --------------------------------------------------------------------------------------- |
| actorid      | شناسه Actor که می‌خوای زاویه‌ش رو بگیری. با [CreateActor](CreateActor) برگشت داده میشه.     |
| &Float:angle | متغیری از نوع float که با reference پاس داده میشه و زاویه Actor توش ذخیره میشه.           |

## مقادیر برگشتی

**true** - تابع با موفقیت اجرا شد.

**false** - تابع نتونست اجرا بشه. Actor مشخص شده وجود نداره.

زاویه رو به روی Actor در متغیر مشخص شده ذخیره میشه.

## مثال‌ها

</div>

```c
new Float:facingAngle;
GetActorFacingAngle(actorid, facingAngle);
```

<div dir="rtl" style={{ textAlign: "right" }}>

## تابع‌های مرتبط

- [SetActorFacingAngle](SetActorFacingAngle): تنظیم زاویه رو به روی Actor.
- [GetActorPos](GetActorPos): گرفتن موقعیت Actor.

</div>