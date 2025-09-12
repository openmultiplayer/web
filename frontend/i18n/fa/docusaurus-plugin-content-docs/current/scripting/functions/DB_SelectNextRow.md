---
title: DB_SelectNextRow
sidebar_label: DB_SelectNextRow
description: به ردیف بعدی مجموعه نتایج تخصیص یافته با `DB_ExecuteQuery` حرکت می‌کند.
keywords:
  - sqlite
tags: ["sqlite"]
---

## توضیحات

این تابع به ردیف بعدی مجموعه نتایج تخصیص یافته با [DB_ExecuteQuery](DB_ExecuteQuery) حرکت می‌کند.

| نام              | توضیحات                                      |
| ----------------- | -------------------------------------------- |
| DBResult:dbresult | نتیجه [DB_ExecuteQuery](DB_ExecuteQuery).    |

## مقادیر بازگشتی

**true** را برمی‌گرداند اگر هندل مجموعه نتایج معتبر باشد و هنوز به آخرین ردیف نرسیده باشد، در غیر این صورت **false**.

## مثال‌ها

```c
// examples.inc

// ...

Examples_ListNames(DB:dbConnectionHandle)
{
    // مجموعه نتایج پایگاه داده
    new DBResult:db_result_set = DB_ExecuteQuery("SELECT `name` FROM `examples`");

    // اگر مجموعه نتایج پایگاه داده معتبر است
    if (db_result_set)
    {
        // تخصیص حافظه برای ذخیره نتایج
        new result[256];

        // انجام عملیات
        do
        {
            // افزودن مقدار از فیلد "example" به متغیر مقدار بازگشتی
            DB_GetFieldStringByName(db_result_set, "name", result, sizeof result);
        }

        // تا زمانی که ردیف بعدی قابل دریافت باشد
        while (DB_SelectNextRow(db_result_set));

        // آزادسازی مجموعه نتایج
        DB_FreeResultSet(db_result_set);
    }
}
```

```c
// mode.pwn

// ...

#include <examples>

static DB:gDBConnectionHandle;

// ...

public OnGameModeInit()
{
    // ...

    // ایجاد اتصال به پایگاه داده
    gDBConnectionHandle = DB_Open("example.db");

    // اگر اتصال به پایگاه داده وجود دارد
    if (gDBConnectionHandle)
    {
        // اتصال به پایگاه داده با موفقیت ایجاد شد
        print("Successfully created a connection to database \"example.db\".");
        Examples_ListNames(gDBConnectionHandle);
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
    if (DB_Close(gDBConnectionHandle))
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

استفاده از هندل نامعتبر غیر از صفر سرور شما را کرش خواهد کرد! یک هندل اتصال پایگاه داده معتبر با استفاده از [DB_ExecuteQuery](DB_ExecuteQuery) دریافت کنید.

:::

## توابع مرتبط

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