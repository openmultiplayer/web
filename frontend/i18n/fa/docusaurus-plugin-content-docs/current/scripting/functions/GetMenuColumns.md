---
title: GetMenuColumns
sidebar_label: GetMenuColumns
description: تعداد ستون‌های فعال رو برمیگردونه.
tags: ["menu"]
---

<VersionWarn version='omp v1.1.0.2612' />

<div dir="rtl" style={{ textAlign: "right" }}>

## توضیحات

تعداد ستون‌های فعال رو برمیگردونه.

| اسم        | توضیح                                      |
| ----------- | ------------------------------------------- |
| Menu:menuid | شناسه منو که می‌خوای ستون‌هاش رو بگیری. |

## مقادیر برگشتی

تعداد ستون‌های فعال رو برمیگردونه.

## مثال‌ها

</div>

```c
new columns = GetMenuColumns(menuid);
```

<div dir="rtl" style={{ textAlign: "right" }}>

## تابع‌های مرتبط

- [GetMenuItems](GetMenuItems): آیتم‌های منو رو برمیگردونه.
- [GetMenuItem](GetMenuItem): متن سلول مشخص شده رو برمیگردونه - بر اساس ستون و ردیف.

</div>