---
title: db_num_fields
sidebar_label: db_num_fields
description: تعداد فیلدهای موجود در نتیجه‌ای که از db_query برگردونده شده رو می‌گیره.
tags: ["sqlite"]
---

<LowercaseNote />

<VersionWarn version='SA-MP 0.3.7 R1' />

<div dir="rtl" style={{ textAlign: "right" }}>

## توضیحات

تعداد فیلدهای موجود در نتیجه‌ای که از db_query برگردونده شده رو می‌گیره.

| اسم        | توضیح                                         |
| ----------- | ---------------------------------------------- |
| DBResult:dbresult | نتیجه‌ای که از db_query برگردونده شده. |

## مقادیر برگشتی

تعداد فیلدها در نتیجه.

## مثال‌ها

</div>

```c
// انتخاب چندین فیلد از جدول "players"
new DBResult:db_result = db_query(db_handle, "SELECT `name`, `score`, `money` FROM `players`");

// چک کن که آیا کوئری موفق بوده
if (db_result)
{
    new fields = db_num_fields(db_result);
    printf("Number of fields in result: %d", fields); // خروجی: Number of fields in result: 3
    
    // نام‌های تمام فیلدها رو چاپ کن
    for (new i = 0; i < fields; i++)
    {
        new field_name[32];
        db_field_name(db_result, i, field_name, sizeof(field_name));
        printf("Field %d: %s", i, field_name);
    }
    
    // آزاد کردن حافظه
    db_free_result(db_result);
}
```

<div dir="rtl" style={{ textAlign: "right" }}>

## نکته‌ها

:::tip

این تابع برای دریافت تعداد ستون‌های موجود در نتیجه کوئری مفیده. می‌تونی از این اطلاعات برای حلقه زدن روی فیلدها استفاده کنی.

:::

:::warning

نتایج باید بعد از اتمام کار با db_free_result آزاد بشن. عدم انجام این کار باعث memory leak میشه.

:::

## تابع‌های مرتبط

- [db_open](db_open): باز کردن اتصال به پایگاه داده SQLite
- [db_close](db_close): بستن اتصال به پایگاه داده SQLite
- [db_query](db_query): کوئری زدن به پایگاه داده SQLite
- [db_free_result](db_free_result): آزاد کردن حافظه نتیجه از db_query
- [db_num_rows](db_num_rows): گرفتن تعداد ردیف‌های موجود در نتیجه
- [db_next_row](db_next_row): رفتن به ردیف بعدی
- [db_field_name](db_field_name): برگردوندن نام یک فیلد در یک index خاص

</div>
