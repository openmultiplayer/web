---
title: db_get_result_mem_handle
sidebar_label: db_get_result_mem_handle
description: memory handle مربوط به نتیجه پایگاه داده SQLite که با `db_query` اختصاص داده شده رو می‌گیره.
tags: ["sqlite"]
---

<LowercaseNote />

<VersionWarn version='SA-MP 0.3.7 R1' />

<div dir="rtl" style={{ textAlign: "right" }}>

## توضیحات

این تابع memory handle مربوط به نتیجه پایگاه داده SQLite که با [db_query](db_query) اختصاص داده شده رو می‌گیره.

| اسم  | توضیح                                                |
| ----- | ---------------------------------------------------------- |
| DB:db | شناسه کوئری (که از [db_query](db_query) برگردونده شده). |

## مقادیر برگشتی

memory handle نتیجه پایگاه داده رو برمی‌گردونه.

## مثال‌ها

</div>

```c
static DB:gDBConnectionHandle;

// ...

public OnGameModeInit()
{
    // ...

    // اتصال به پایگاه داده بساز
    gDBConnectionHandle = db_open("example.db");

    // اگه اتصال به پایگاه داده وجود داره
    if (gDBConnectionHandle)
    {
        // اتصال به پایگاه داده با موفقیت ساخته شد
        new DBResult:result_set = db_query("SELECT * FROM `examples`");
        print("Successfully created a connection to database \"example.db\".");
        if (result_set)
        {
            printf("Database connection memory handle: 0x%x", db_get_result_mem_handle(result_set));
            db_free_result(result_set);
        }
    }
    else
    {
        // اتصال به پایگاه داده شکست خورد
        print("Failed to open a connection to database \"example.db\".");
    }

    // ...

    return 1;
}

public OnGameModeExit()
{
    // اگه اتصال باز هست، اتصال به پایگاه داده رو ببند
    if (db_close(gDBConnectionHandle))
    {
        // پاک‌سازی اضافه
        gDBConnectionHandle = DB:0;
    }

    // ...

    return 1;
}
```

<div dir="rtl" style={{ textAlign: "right" }}>

## نکته‌ها

:::warning

استفاده از handle نامعتبر غیر از صفر سرور رو کرش می‌کنه! handle معتبر اتصال پایگاه داده رو با استفاده از [db_query](db_query) بگیر.

:::

## تابع‌های مرتبط

- [db_open](db_open): باز کردن اتصال به پایگاه داده SQLite
- [db_close](db_close): بستن اتصال به پایگاه داده SQLite
- [db_query](db_query): کوئری زدن به پایگاه داده SQLite
- [db_free_result](db_free_result): آزاد کردن حافظه نتیجه از db_query
- [db_num_rows](db_num_rows): گرفتن تعداد ردیف‌های موجود در نتیجه
- [db_next_row](db_next_row): رفتن به ردیف بعدی
- [db_num_fields](db_num_fields): گرفتن تعداد فیلدهای موجود در نتیجه
- [db_field_name](db_field_name): برگردوندن نام یک فیلد در یک index خاص
- [db_get_field](db_get_field): گرفتن محتوای فیلد با ID مشخص از ردیف نتیجه فعلی
- [db_get_field_assoc](db_get_field_assoc): گرفتن محتوای فیلد با نام مشخص از ردیف نتیجه فعلی
- [db_get_field_int](db_get_field_int): گرفتن محتوای فیلد به عنوان عدد صحیح با ID مشخص از ردیف نتیجه فعلی
- [db_get_field_assoc_int](db_get_field_assoc_int): گرفتن محتوای فیلد به عنوان عدد صحیح با نام مشخص از ردیف نتیجه فعلی
- [db_get_field_float](db_get_field_float): گرفتن محتوای فیلد به عنوان اعشار با ID مشخص از ردیف نتیجه فعلی
- [db_get_field_assoc_float](db_get_field_assoc_float): گرفتن محتوای فیلد به عنوان اعشار با نام مشخص از ردیف نتیجه فعلی
- [db_get_mem_handle](db_get_mem_handle): گرفتن memory handle برای پایگاه داده SQLite که با db_open باز شده.
- [db_debug_openfiles](db_debug_openfiles): گرفتن تعداد اتصالات پایگاه داده باز برای اهداف دیباگ.
- [db_debug_openresults](db_debug_openresults): گرفتن تعداد نتایج پایگاه داده باز.

</div>
