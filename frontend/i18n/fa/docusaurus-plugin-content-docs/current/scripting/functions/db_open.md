---
title: db_open
sidebar_label: db_open
description: این تابع برای باز کردن اتصال به فایل پایگاه داده SQLite که در پوشه `/scriptfiles` قرار دارد استفاده می‌شود.
tags: ["sqlite"]
---

<LowercaseNote />

## توضیحات

این تابع برای باز کردن اتصال به پایگاه داده SQLite که در پوشه "/scriptfiles" قرار دارد استفاده می‌شود.

| نام                                                                | توضیحات                                      |
| ------------------------------------------------------------------- | -------------------------------------------- |
| const name[]                                                        | نام فایل پایگاه داده                         |
| SQLITE_OPEN:flags = SQLITE_OPEN_READWRITE &#124; SQLITE_OPEN_CREATE | [مجوزها / پرچم‌ها](../resources/sqlite-open-flags) |

## مقادیر بازگشتی

ایندکس (شروع از 1) اتصال پایگاه داده را برمی‌گرداند.

## مثال‌ها

```c
static DB:gDBConnectionHandle;

// ...

public OnGameModeInit()
{
    // ...

    // ایجاد اتصال به پایگاه داده
    gDBConnectionHandle = db_open("example.db");

    // اگر اتصال به پایگاه داده وجود دارد
    if (gDBConnectionHandle)
    {
        // اتصال به پایگاه داده با موفقیت ایجاد شد
        print("Successfully created a connection to database \"example.db\".");
    }
    else
    {
        // ایجاد اتصال به پایگاه داده ناموفق بود
        print("Failed to open a connection to database \"example.db\".");
    }

    // ...

    return 1;
}

public OnGameModeExit()
{
    // بستن اتصال به پایگاه داده در صورت باز بودن اتصال
    if (db_close(gDBConnectionHandle))
    {
        // پاکسازی اضافی
        gDBConnectionHandle = DB:0;
    }

    // ...

    return 1;
}
```

## نکات

:::warning

در صورت عدم وجود فایل پایگاه داده SQLite با همین نام، یک فایل پایگاه داده SQLite جدید ایجاد خواهد کرد. اتصال پایگاه داده SQLite خود را با [db_close](db_close) ببندید!

:::

## توابع مرتبط

- [db_open](db_open): باز کردن اتصال به پایگاه داده SQLite
- [db_close](db_close): بستن اتصال به پایگاه داده SQLite
- [db_query](db_query): کوئری کردن پایگاه داده SQLite
- [db_free_result](db_free_result): آزادسازی حافظه نتیجه از db_query
- [db_num_rows](db_num_rows): دریافت تعداد ردیف‌ها در نتیجه
- [db_next_row](db_next_row): حرکت به ردیف بعدی
- [db_num_fields](db_num_fields): دریافت تعداد فیلدها در نتیجه
- [db_field_name](db_field_name): برگرداندن نام فیلد در ایندکس مشخص
- [db_get_field](db_get_field): دریافت محتوای فیلد با ID مشخص از ردیف نتیجه فعلی
- [db_get_field_assoc](db_get_field_assoc): دریافت محتوای فیلد با نام مشخص از ردیف نتیجه فعلی
- [db_get_field_int](db_get_field_int): دریافت محتوای فیلد به عنوان عدد صحیح با ID مشخص از ردیف نتیجه فعلی
- [db_get_field_assoc_int](db_get_field_assoc_int): دریافت محتوای فیلد به عنوان عدد صحیح با نام مشخص از ردیف نتیجه فعلی
- [db_get_field_float](db_get_field_float): دریافت محتوای فیلد به عنوان عدد اعشاری با ID مشخص از ردیف نتیجه فعلی
- [db_get_field_assoc_float](db_get_field_assoc_float): دریافت محتوای فیلد به عنوان عدد اعشاری با نام مشخص از ردیف نتیجه فعلی
- [db_get_mem_handle](db_get_mem_handle): دریافت هندل حافظه برای پایگاه داده SQLite که با db_open باز شده
- [db_get_result_mem_handle](db_get_result_mem_handle): دریافت هندل حافظه برای کوئری SQLite که با db_query اجرا شده
- [db_debug_openfiles](db_debug_openfiles): دریافت تعداد اتصالات باز پایگاه داده برای اهداف دیباگ
- [db_debug_openresults](db_debug_openresults): دریافت تعداد نتایج باز پایگاه داده

## توابع مدرن SQLite

- [DB_Open](DB_Open): باز کردن اتصال به پایگاه داده SQLite
- [DB_Close](DB_Close): بستن اتصال به پایگاه داده SQLite
- [DB_ExecuteQuery](DB_ExecuteQuery): کوئری کردن پایگاه داده SQLite
- [DB_FreeResultSet](DB_FreeResultSet): آزادسازی حافظه نتیجه از DB_ExecuteQuery
- [DB_GetRowCount](DB_GetRowCount): دریافت تعداد ردیف‌ها در نتیجه
- [DB_SelectNextRow](DB_SelectNextRow): حرکت به ردیف بعدی
- [DB_GetFieldCount](DB_GetFieldCount): دریافت تعداد فیلدها در نتیجه
- [DB_GetFieldName](DB_GetFieldName): برگرداندن نام فیلد در ایندکس مشخص
- [DB_GetFieldString](DB_GetFieldString): دریافت محتوای فیلد با ID مشخص از ردیف نتیجه فعلی
- [DB_GetFieldStringByName](DB_GetFieldStringByName): دریافت محتوای فیلد با نام مشخص از ردیف نتیجه فعلی
- [DB_GetFieldInt](DB_GetFieldInt): دریافت محتوای فیلد به عنوان عدد صحیح با ID مشخص از ردیف نتیجه فعلی
- [DB_GetFieldIntByName](DB_GetFieldIntByName): دریافت محتوای فیلد به عنوان عدد صحیح با نام مشخص از ردیف نتیجه فعلی
- [DB_GetFieldFloat](DB_GetFieldFloat): دریافت محتوای فیلد به عنوان عدد اعشاری با ID مشخص از ردیف نتیجه فعلی
- [DB_GetFieldFloatByName](DB_GetFieldFloatByName): دریافت محتوای فیلد به عنوان عدد اعشاری با نام مشخص از ردیف نتیجه فعلی
- [DB_GetMemHandle](DB_GetMemHandle): دریافت هندل حافظه برای پایگاه داده SQLite که با db_open باز شده
- [DB_GetLegacyDBResult](DB_GetLegacyDBResult): دریافت هندل حافظه برای کوئری SQLite که با DB_ExecuteQuery اجرا شده
- [DB_GetDatabaseConnectionCount](DB_GetDatabaseConnectionCount): دریافت تعداد اتصالات باز پایگاه داده برای اهداف دیباگ
- [DB_GetDatabaseResultSetCount](DB_GetDatabaseResultSetCount): دریافت تعداد نتایج باز پایگاه داده

## منابع مرتبط

- [SQLite Open Flags](../resources/sqlite-open-flags)
