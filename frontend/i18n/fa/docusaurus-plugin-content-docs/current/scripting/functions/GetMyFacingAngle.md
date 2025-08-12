---
title: GetMyFacingAngle
sidebar_label: GetMyFacingAngle
description: زاویه فعلی NPC رو برمیگردونه.
tags: []
---

<div dir="rtl" style={{ textAlign: "right" }}>

## توضیحات

زاویه فعلی NPC رو برمیگردونه.

| اسم                 | توضیح                                                             |
| -------------------- | ---------------------------------------------------------------- |
| &Float:Angle         | متغیر float برای ذخیره زاویه، به صورت reference پاس داده میشه.               |

## مقادیر برگشتی

زاویه تو متغیر مشخص شده ذخیره میشه.

## مثال‌ها

</div>

```c
public OnPlayerText(playerid, text[])
{
new Float:Angle;
GetMyFacingAngle(Angle);
printf("الان در زاویه %f رو به رو هستم!", Angle);

```

<div dir="rtl" style={{ textAlign: "right" }}>

## تابع‌های مرتبط

- [SetMyFacingAngle](../functions/SetMyFacingAngle): زاویه NPC رو تنظیم می‌کنه.

</div>