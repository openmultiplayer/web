---
title: DB_GetLegacyDBResult
sidebar_label: DB_GetLegacyDBResult
description: handle حافظه برای نتیجه پایگاه داده SQLite که با `DB_ExecuteQuery` اختصاص داده شده رو دریافت می‌کنه.
keywords:
  - sqlite
tags: ["sqlite"]
---

## توضیحات

این تابع handle حافظه برای نتیجه پایگاه داده SQLite که با [DB_ExecuteQuery](DB_ExecuteQuery) اختصاص داده شده رو دریافت می‌کنه.

| نام             | توضیحات                                                                         |
| --------------- | ------------------------------------------------------------------------------- |
| DBResult:result | ایندکس کوئری (توسط [DB_ExecuteQuery](DB_ExecuteQuery) برگردونده میشه). |

## مقدار بازگشتی

handle حافظه handle نتیجة پایگاه داده رو برمی‌گردونه.

## مثال‌ها

```c
static DB:gDBConnectionHandle;

// ...

public OnGameModeInit()
{
    // ...

    // Create a connection to a database
    gDBConnectionHandle = DB_Open("example.db");

    // If connection to the database exists
    if (gDBConnectionHandle)
    {
        // Successfully created a connection to the database
        new DBResult:result_set = DB_ExecuteQuery("SELECT * FROM `examples`");
        print("Successfully created a connection to database \"example.db\".");
        if (result_set)
        {
            printf("Database connection memory handle: 0x%x", DB_GetLegacyDBResult(result_set));
            DB_FreeResultSet(result_set);
        }
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
    if (DB_Close(gDBConnectionHandle))
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

استفاده از یک handle نامعتبر غیر از صفر سرور شما رو کرش می‌کنه! یک handle اتصال پایگاه داده معتبر رو با استفاده از [DB_ExecuteQuery](DB_ExecuteQuery) دریافت کنید.

:::

## توابع مرتبط

- [DB_Open](DB_Open): اتصال به پایگاه داده SQLite باز کنید
- [DB_Close](DB_Close): اتصال به پایگاه داده SQLite بسته کنید
- [DB_ExecuteQuery](DB_ExecuteQuery): پایگاه داده SQLite رو کوئری کنید
- [DB_FreeResultSet](DB_FreeResultSet): حافظه نتیجه رو از DB_ExecuteQuery آزاد کنید
- [DB_GetRowCount](DB_GetRowCount): تعداد سطرهای یک نتیجه رو دریافت کنید
- [DB_SelectNextRow](DB_SelectNextRow): به سطر بعدی بروید
- [DB_GetFieldCount](DB_GetFieldCount): تعداد فیلدهای یک نتیجه رو دریافت کنید
- [DB_GetFieldName](DB_GetFieldName): نام یک فیلد در ایندکس مشخص رو برگردونه
- [DB_GetFieldString](DB_GetFieldString): محتوای فیلد با ID مشخص از سطر نتیجه فعلی رو دریافت کنید
- [DB_GetFieldStringByName](DB_GetFieldStringByName): محتوای فیلد با نام مشخص از سطر نتیجه فعلی رو دریافت کنید
- [DB_GetFieldInt](DB_GetFieldInt): محتوای فیلد به عنوان عدد صحیح با ID مشخص از سطر نتیجه فعلی رو دریافت کنید
- [DB_GetFieldIntByName](DB_GetFieldIntByName): محتوای فیلد به عنوان عدد صحیح با نام مشخص از سطر نتیجه فعلی رو دریافت کنید
- [DB_GetFieldFloat](DB_GetFieldFloat): محتوای فیلد به عنوان عدد اعشاری با ID مشخص از سطر نتیجه فعلی رو دریافت کنید
- [DB_GetFieldFloatByName](DB_GetFieldFloatByName): محتوای فیلد به عنوان عدد اعشاری با نام مشخص از سطر نتیجه فعلی رو دریافت کنید
- [DB_GetMemHandle](DB_GetMemHandle): handle حافظه برای پایگاه داده SQLite که با db_open باز شده رو دریافت کنید
- [DB_GetLegacyDBResult](DB_GetLegacyDBResult): handle حافظه برای کوئری SQLite که با DB_ExecuteQuery اجرا شده رو دریافت کنید
- [DB_GetDatabaseConnectionCount](DB_GetDatabaseConnectionCount): تعداد اتصالات باز پایگاه داده رو برای اهداف دیباگ دریافت کنید
- [DB_GetDatabaseResultSetCount](DB_GetDatabaseResultSetCount): تعداد نتایج باز پایگاه داده رو دریافت کنید