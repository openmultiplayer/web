---
title: GetMenuColumnHeader
sidebar_label: GetMenuColumnHeader
description: هدر ستون مشخص شده رو برمیگردونه.
tags: ["menu"]
---

<VersionWarn version='omp v1.1.0.2612' />

<div dir="rtl" style={{ textAlign: "right" }}>

## توضیحات

هدر ستون مشخص شده رو برمیگردونه.

| اسم                   | توضیح                                                        |
| --------------------- | ------------------------------------------------------------ |
| Menu:menuid           | شناسه منو.                                                    |
| column                | ستون.                                                        |
| header[]              | آرایه‌ای برای ذخیره کردن متن، به صورت reference پاس داده میشه. |
| len = sizeof (header) | طول متنی که باید ذخیره بشه.                                 |

## مقادیر برگشتی

این تابع همیشه **true** برمیگردونه.

## مثال‌ها

</div>

```c
new text[32];

// Get the menu header text in the column 1
GetMenuColumnHeader(menuid, 1, text, sizeof(text));
```

<div dir="rtl" style={{ textAlign: "right" }}>

## تابع‌های مرتبط

- [CreateMenu](CreateMenu): یک منو می‌سازه.

</div>