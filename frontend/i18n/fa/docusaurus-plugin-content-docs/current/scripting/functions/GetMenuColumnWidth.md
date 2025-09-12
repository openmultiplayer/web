---
title: GetMenuColumnWidth
sidebar_label: GetMenuColumnWidth
description: عرض یکی از دو ستون رو برمیگردونه.
tags: ["menu"]
---

<VersionWarn version='omp v1.1.0.2612' />

<div dir="rtl" style={{ textAlign: "right" }}>

## توضیحات

عرض یکی از دو ستون رو برمیگردونه.

| اسم                | توضیح                                                                  |
| ------------------- | ----------------------------------------------------------------------------- |
| Menu:menuid         | شناسه منو.                                                             |
| &Float:column1Width | متغیر float برای ذخیرع عرض ستون ۱، به صورت reference پاس داده میشه. |
| &Float:column2Width | متغیر float برای ذخیره عرض ستون ۲، به صورت reference پاس داده میشه. |

## مقادیر برگشتی

این تابع همیشه **true** برمیگردونه.

## مثال‌ها

</div>

```c
new Float:column1Width, Float:column2Width;
GetMenuColumnWidth(menuid, column1Width, column2Width);

// یا می‌تونی فقط عرض ستون ۱ رو بگیری
new Float:column1Width;
GetMenuColumnWidth(menuid, column1Width);
```

<div dir="rtl" style={{ textAlign: "right" }}>

## تابع‌های مرتبط

- [GetMenuPos](GetMenuPos): موقعیت x/y منو روی صفحه رو برمیگردونه.

</div>