---
title: GetMyPos
sidebar_label: GetMyPos
description: موقعیت NPC رو برمیگردونه
tags: ["npc"]
---

<div dir="rtl" style={{ textAlign: "right" }}>

## توضیحات

موقعیت NPC رو برمیگردونه. 
 
| اسم      | توضیح                                                        |
| --------- | ---------------------------------------------------------------|
| &Float:x  | متغیر float برای ذخیره مختصات X، به صورت reference پاس داده میشه. |
| &Float:y  | متغیر float برای ذخیره مختصات Y، به صورت reference پاس داده میشه. |
| &Float:z  | متغیر float برای ذخیره مختصات Z، به صورت reference پاس داده میشه. |

## مقادیر برگشتی

این تابع هیچ مقدار مشخصی برنمیگردونه.  

## مثال

</div>

```c
new Float:x, Float:y, Float:z;
GetMyPos(x,y,z);
printf("الان تو موقعیت %f, %f, %f هستم!",x,y,z);
```

<div dir="rtl" style={{ textAlign: "right" }}>

## تابع‌های مرتبط

- [SetMyPos](SetMyPos): موقعیت فعلی NPC رو تنظیم می‌کنه.

</div>