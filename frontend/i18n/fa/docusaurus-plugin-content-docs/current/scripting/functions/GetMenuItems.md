---
title: GetMenuItems
sidebar_label: GetMenuItems
description: تعداد ردیف‌های ستون مشخص شده رو برمیگردونه.
tags: ["menu"]
---

<VersionWarn version='omp v1.1.0.2612' />

<div dir="rtl" style={{ textAlign: "right" }}>

## توضیحات

تعداد ردیف‌های ستون مشخص شده رو برمیگردونه.

| اسم        | توضیح         |
| ----------- | ------------------- |
| Menu:menuid | شناسه منو. |
| column      | ستون.         |

## مقادیر برگشتی

تعداد ردیف‌ها رو برمیگردونه.

## مثال‌ها

</div>

```c
// تعداد ردیف‌های منو تو ستون ۱ رو بگیر
new items = GetMenuItems(menuid, 1);
```

<div dir="rtl" style={{ textAlign: "right" }}>

## تابع‌های مرتبط

- [GetMenuColumns](GetMenuColumns): تعداد ستون‌های فعال رو برمیگردونه.
- [GetMenuItem](GetMenuItem): متن سلول مشخص شده رو برمیگردونه - بر اساس ستون و ردیف.

</div>