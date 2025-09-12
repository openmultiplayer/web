---
title: db_get_mem_handle
sidebar_label: db_get_mem_handle
description: handle حافظه برای اتصال پایگاه داده SQLite که با `db_open` باز شده رو دریافت می‌کنه.
keywords:
  - sqlite
---

<LowercaseNote />

<VersionWarn version='SA-MP 0.3.7 R1' />

## توضیحات

این تابع handle حافظه برای اتصال پایگاه داده SQLite که با [db_open](db_open) باز شده رو دریافت می‌کنه.

| نام   | توضیحات                                                                       |
| ----- | ---------------------------------------------------------------------------- |
| DB:db | ایندکس اتصال پایگاه داده (توسط [db_open](db_open) برگردونده میشه). |

## مقدار بازگشتی

handle حافظه handle اتصال پایگاه داده رو برمی‌گردونه.

## مثال‌ها

```c
static DB:gDBConnectionHandle;

// ...

public OnGameModeInit()
{
    // ...

    // Create a connection to a database
    gDBConnectionHandle = db_open("example.db");

    // If connection to the database exists
    if (gDBConnectionHandle)
    {
        // Successfully created a connection to the database
        print("Successfully created a connection to database \"example.db\".");
        printf("Database connection memory handle: 0x%x", db_get_mem_handle(gDBConnectionHandle));
    }
    else
    {
        // Failed to create a connection to the database
        print("Failed to open a connection to database \"example.db\".");
    }

    // ...

    return 1;
}

public OnGameModeExit()
{
    // Close the connection to the database if connection is open
    if (db_close(gDBConnectionHandle))
    {
        // Extra cleanup
        gDBConnectionHandle = DB:0;
    }

    // ...

    return 1;
}
```

## نکات

:::warning

استفاده از یک handle نامعتبر غیر از صفر سرور شما رو کرش می‌کنه! یک handle اتصال پایگاه داده معتبر رو با استفاده از [db_query](db_query) دریافت کنید.

:::

## توابع مرتبط

- [db_open](db_open): اتصال به پایگاه داده SQLite باز کنید
- [db_close](db_close): اتصال به پایگاه داده SQLite بسته کنید
- [db_query](db_query): پایگاه داده SQLite رو کوئری کنید
- [db_free_result](db_free_result): حافظه نتیجه رو از db_query آزاد کنید
- [db_num_rows](db_num_rows): تعداد سطرهای یک نتیجه رو دریافت کنید
- [db_next_row](db_next_row): به سطر بعدی بروید
- [db_num_fields](db_num_fields): تعداد فیلدهای یک نتیجه رو دریافت کنید
- [db_field_name](db_field_name): نام یک فیلد در ایندکس مشخص رو برگردونه
- [db_get_field](db_get_field): محتوای فیلد با ID مشخص از سطر نتیجه فعلی رو دریافت کنید
- [db_get_field_assoc](db_get_field_assoc): محتوای فیلد با نام مشخص از سطر نتیجه فعلی رو دریافت کنید
- [db_get_field_int](db_get_field_int): محتوای فیلد به عنوان عدد صحیح با ID مشخص از سطر نتیجه فعلی رو دریافت کنید
- [db_get_field_assoc_int](db_get_field_assoc_int): محتوای فیلد به عنوان عدد صحیح با نام مشخص از سطر نتیجه فعلی رو دریافت کنید
- [db_get_field_float](db_get_field_float): محتوای فیلد به عنوان عدد اعشاری با ID مشخص از سطر نتیجه فعلی رو دریافت کنید
- [db_get_field_assoc_float](db_get_field_assoc_float): محتوای فیلد به عنوان عدد اعشاری با نام مشخص از سطر نتیجه فعلی رو دریافت کنید
- [db_get_result_mem_handle](db_get_result_mem_handle): handle حافظه برای کوئری SQLite که با db_query اجرا شده رو دریافت کنید
- [db_debug_openfiles](db_debug_openfiles): تعداد اتصالات باز پایگاه داده رو برای اهداف دیباگ دریافت کنید
- [db_debug_openresults](db_debug_openresults): تعداد نتایج باز پایگاه داده رو دریافت کنید