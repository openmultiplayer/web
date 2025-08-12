---
title: GetMenuPos
sidebar_label: GetMenuPos
description: موقعیت x/y منو روی صفحه رو برمیگردونه.
tags: ["menu"]
---

<VersionWarn version='omp v1.1.0.2612' />

<div dir="rtl" style={{ textAlign: "right" }}>

## توضیحات

موقعیت x/y منو روی صفحه رو برمیگردونه.

| اسم        | توضیح                                                                |
| ----------- | -------------------------------------------------------------------------- |
| Menu:menuid | شناسه منو.                                                        |
| &Float:x    | متغیر float برای ذخیره موقعیت X، به صورت reference پاس داده میشه. |
| &Float:y    | متغیر float برای ذخیره موقعیت Y، به صورت reference پاس داده میشه. |

## مقادیر برگشتی

این تابع همیشه true برمیگردونه.

## مثال‌ها

</div>

```c
new Float:x, Float:y;
GetMenuPos(menuid, x, y);
```

<div dir="rtl" style={{ textAlign: "right" }}>

## تابع‌های مرتبط

- [GetMenuColumnWidth](GetMenuColumnWidth): عرض ستون‌ها رو برمیگردونه.

</div>