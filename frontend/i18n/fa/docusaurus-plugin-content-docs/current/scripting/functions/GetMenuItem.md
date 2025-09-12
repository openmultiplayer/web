---
title: GetMenuItem
sidebar_label: GetMenuItem
description: متن سلول مشخص شده رو برمیگردونه - بر اساس ستون و ردیف.
tags: ["menu"]
---

<VersionWarn version='omp v1.1.0.2612' />

<div dir="rtl" style={{ textAlign: "right" }}>

## توضیحات

متن سلول مشخص شده رو برمیگردونه - بر اساس ستون و ردیف.

| اسم      | توضیح                                                                 |
| --------- | ----------------------------------------------------------------- |
| Menu:menuid  | شناسه منو.  |
| column | ستون. |
| row | ردیفی که می‌خوای متنش رو بگیری. |
| cell[] | آرایه‌ای برای ذخیره کردن متن، به صورت reference پاس داده میشه. |
| len | طول رشته‌ای که باید ذخیره بشه. |

## مقادیر برگشتی

این تابع همیشه true برمیگردونه.

## مثال‌ها

</div>

```c
new text[32];

// متن آیتم منو تو ستون ۱ و ردیف ۲ رو بگیر
GetMenuItem(menuid, 1, 2, text, sizeof(text));
```

<div dir="rtl" style={{ textAlign: "right" }}>

## تابع‌های مرتبط

- [GetMenuItems](GetMenuItems): آیتم‌های منو رو برمیگردونه.
- [GetMenuColumns](GetMenuColumns): تعداد ستون‌های فعال رو برمیگردونه.

</div>