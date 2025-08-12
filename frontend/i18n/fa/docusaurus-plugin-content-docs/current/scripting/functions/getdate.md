---
title: getdate
sidebar_label: getdate
description: تاریخ فعلی سرور را دریافت می‌کنه که در متغیرهای &year، &month و &day ذخیره می‌شه.
tags: ["time", "date"]
---

<LowercaseNote />

## توضیحات

تاریخ فعلی سرور را دریافت می‌کنه که در متغیرهای &year، &month و &day ذخیره می‌شه.

| نام      | توضیحات                                                     |
| -------- | ---------------------------------------------------------- |
| &year=0  | متغیری که سال توش ذخیره می‌شه، به عنوان مرجع پاس داده می‌شه.  |
| &month=0 | متغیری که ماه توش ذخیره می‌شه، به عنوان مرجع پاس داده می‌شه. |
| &day=0   | متغیری که روز توش ذخیره می‌شه، به عنوان مرجع پاس داده می‌شه.  |

## مقدار برگشتی

تعداد روزهای گذشته از شروع سال.

## مثال‌ها

```c
new Year, Month, Day, Days;
Days = getdate(Year, Month, Day);
printf("%02d/%02d/%d", Day, Month, Year);
printf("Days since the start of the year: %d", Days);
```

## تابع‌های مرتبط

- [gettime](gettime): زمان فعلی سرور رو به عنوان unix timestamp دریافت می‌کنه.