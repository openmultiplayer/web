---
title: db_close
sidebar_label: db_close
description: اتصال پایگاه داده SQLite که با `db_open` باز شده را می‌بندد.
tags: ["sqlite"]
---

<LowercaseNote />

## توضیحات

اتصال پایگاه داده SQLite که با [db_open](db_open) باز شده را می‌بندد.

| نام   | توضیحات                                                                             |
| ----- | ---------------------------------------------------------------------------------- |
| DB:db | handle اتصال پایگاه داده برای بستن (که توسط [db_open](db_open) برگردانده شده). |

## مقادیر بازگشتی

**true** - تابع با موفقیت اجرا شد.

**false** - تابع اجرا نشد. این می‌تواند به معنای نامعتبر بودن handle اتصال پایگاه داده باشد.

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
        // با موفقیت اتصال به پایگاه داده ایجاد شد
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
    // بستن اتصال به پایگاه داده اگر اتصال باز است
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

استفاده از handle نامعتبر غیر از صفر سرور شما را کرش می‌کند! handle معتبر اتصال پایگاه داده را با استفاده از [db_open](db_open) دریافت کنید.

:::

## توابع مرتبط

- [db_open](db_open): باز کردن اتصال به پایگاه داده SQLite
- [db_close](db_close): بستن اتصال به پایگاه داده SQLite
- [db_query](db_query): جستجو در پایگاه داده SQLite
- [db_free_result](db_free_result): آزاد کردن حافظه نتیجه از db_query
- [db_num_rows](db_num_rows): دریافت تعداد ردیف‌ها در نتیجه
- [db_next_row](db_next_row): حرکت به ردیف بعدی
- [db_num_fields](db_num_fields): دریافت تعداد فیلدها در نتیجه
- [db_field_name](db_field_name): برگرداندن نام فیلد در یک index خاص
- [db_get_field](db_get_field): دریافت محتوای فیلد با ID مشخص از ردیف فعلی نتیجه
- [db_get_field_assoc](db_get_field_assoc): دریافت محتوای فیلد با نام مشخص از ردیف فعلی نتیجه
- [db_get_field_int](db_get_field_int): دریافت محتوای فیلد به صورت integer با ID مشخص از ردیف فعلی نتیجه
- [db_get_field_assoc_int](db_get_field_assoc_int): دریافت محتوای فیلد به صورت integer با نام مشخص از ردیف فعلی نتیجه
- [db_get_field_float](db_get_field_float): دریافت محتوای فیلد به صورت float با ID مشخص از ردیف فعلی نتیجه
- [db_get_field_assoc_float](db_get_field_assoc_float): دریافت محتوای فیلد به صورت float با نام مشخص از ردیف فعلی نتیجه
- [db_get_mem_handle](db_get_mem_handle): دریافت handle حافظه برای پایگاه داده SQLite که با db_open باز شده.
- [db_get_result_mem_handle](db_get_result_mem_handle): دریافت handle حافظه برای کوئری SQLite که با db_query اجرا شده.
- [db_debug_openfiles](db_debug_openfiles): تابع تعداد اتصالات باز پایگاه داده را برای اهداف دیباگ دریافت می‌کند.
- [db_debug_openresults](db_debug_openresults): تابع تعداد نتایج باز پایگاه داده را دریافت می‌کند.

## توابع مدرن SQLite

- [DB_Open](DB_Open): باز کردن اتصال به پایگاه داده SQLite
- [DB_Close](DB_Close): بستن اتصال به پایگاه داده SQLite
- [DB_ExecuteQuery](DB_ExecuteQuery): جستجو در پایگاه داده SQLite
- [DB_FreeResultSet](DB_FreeResultSet): آزاد کردن حافظه نتیجه از DB_ExecuteQuery
- [DB_GetRowCount](DB_GetRowCount): دریافت تعداد ردیف‌ها در نتیجه
- [DB_SelectNextRow](DB_SelectNextRow): حرکت به ردیف بعدی
- [DB_GetFieldCount](DB_GetFieldCount): دریافت تعداد فیلدها در نتیجه
- [DB_GetFieldName](DB_GetFieldName): برگرداندن نام فیلد در یک index خاص
- [DB_GetFieldString](DB_GetFieldString): دریافت محتوای فیلد با ID مشخص از ردیف فعلی نتیجه
- [DB_GetFieldStringByName](DB_GetFieldStringByName): دریافت محتوای فیلد با نام مشخص از ردیف فعلی نتیجه
- [DB_GetFieldInt](DB_GetFieldInt): دریافت محتوای فیلد به صورت integer با ID مشخص از ردیف فعلی نتیجه
- [DB_GetFieldIntByName](DB_GetFieldIntByName): دریافت محتوای فیلد به صورت integer با نام مشخص از ردیف فعلی نتیجه
- [DB_GetFieldFloat](DB_GetFieldFloat): دریافت محتوای فیلد به صورت float با ID مشخص از ردیف فعلی نتیجه
- [DB_GetFieldFloatByName](DB_GetFieldFloatByName): دریافت محتوای فیلد به صورت float با نام مشخص از ردیف فعلی نتیجه
- [DB_GetMemHandle](DB_GetMemHandle): دریافت handle حافظه برای پایگاه داده SQLite که با db_open باز شده.
- [DB_GetLegacyDBResult](DB_GetLegacyDBResult): دریافت handle حافظه برای کوئری SQLite که با DB_ExecuteQuery اجرا شده.
- [DB_GetDatabaseConnectionCount](DB_GetDatabaseConnectionCount): تابع تعداد اتصالات باز پایگاه داده را برای اهداف دیباگ دریافت می‌کند.
- [DB_GetDatabaseResultSetCount](DB_GetDatabaseResultSetCount): تابع تعداد نتایج باز پایگاه داده را دریافت می‌کند.
