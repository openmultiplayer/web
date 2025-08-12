---
title: DB_GetFieldFloatByName
sidebar_label: DB_GetFieldFloatByName
description: محتوای فیلد رو به صورت عدد اعشاری با نام فیلد مشخص شده دریافت می‌کنه.
keywords:
  - sqlite
tags: ["sqlite"]
---

## توضیحات

این فانکشن محتوای فیلد رو به صورت عدد اعشاری از نام فیلد مشخص شده دریافت می‌کنه.

| نام             | توضیحات                               |
| --------------- | ------------------------------------- |
| DBResult:result | نتیجه‌ای که داده‌ها ازش گرفته می‌شن     |
| const field[]   | نام فیلدی که داده‌هاش گرفته می‌شن      |

## مقدار بازگشتی

مقدار دریافت شده به صورت عدد اعشاری.

## مثال

```c
// examples.inc

// ...

Float:Examples_CalculateSum(DB:dbConnectionHandle)
{
    // Return value variable
    new Float:ret;

    // Database result set
    new DBResult:db_result_set = DB_ExecuteQuery("SELECT `value` FROM `examples`");

    // If database result set is valid
    if (db_result_set)
    {
        // Do operations
        do
        {
            // Add value from "example" field to the return value variable
            ret += DB_GetFieldFloatByName(db_result_set, "value");
        }

        // While next row could be fetched
        while (DB_SelectNextRow(db_result_set));

        // Free result set
        DB_FreeResultSet(db_result_set);
    }

    // Return calculated sum
    return ret;
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

    // Create a connection to a database
    gDBConnectionHandle = DB_Open("example.db");

    // If connection to the database exists
    if (gDBConnectionHandle)
    {
        // Successfully created a connection to the database
        print("Successfully created a connection to database \"example.db\".");
        printf("Calculated sum: %f", Examples_CalculateSum(gDBConnectionHandle));
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

استفاده از هندل نامعتبر غیر از صفر باعث کرش سرورت می‌شه! یه هندل اتصال معتبر به پایگاه داده با استفاده از [DB_ExecuteQuery](DB_ExecuteQuery) دریافت کن.

:::

## فانکشن‌های مرتبط

- [DB_Open](DB_Open): اتصال به پایگاه داده SQLite را باز می‌کند
- [DB_Close](DB_Close): اتصال به پایگاه داده SQLite را می‌بندد
- [DB_ExecuteQuery](DB_ExecuteQuery): کوئری روی پایگاه داده SQLite اجرا می‌کند
- [DB_FreeResultSet](DB_FreeResultSet): حافظه نتیجه از DB_ExecuteQuery را آزاد می‌کند
- [DB_GetRowCount](DB_GetRowCount): تعداد ردیف‌ها در نتیجه را دریافت می‌کند
- [DB_SelectNextRow](DB_SelectNextRow): به ردیف بعدی می‌رود
- [DB_GetFieldCount](DB_GetFieldCount): تعداد فیلدها در نتیجه را دریافت می‌کند
- [DB_GetFieldName](DB_GetFieldName): نام فیلد در ایندکس مشخص را برمی‌گرداند
- [DB_GetFieldString](DB_GetFieldString): محتوای فیلد با ID مشخص از ردیف فعلی را دریافت می‌کند
- [DB_GetFieldStringByName](DB_GetFieldStringByName): محتوای فیلد با نام مشخص از ردیف فعلی را دریافت می‌کند
- [DB_GetFieldInt](DB_GetFieldInt): محتوای فیلد به عنوان عدد صحیح با ID مشخص از ردیف فعلی را دریافت می‌کند
- [DB_GetFieldIntByName](DB_GetFieldIntByName): محتوای فیلد به عنوان عدد صحیح با نام مشخص از ردیف فعلی را دریافت می‌کند
- [DB_GetFieldFloat](DB_GetFieldFloat): محتوای فیلد به عنوان عدد اعشاری با ID مشخص از ردیف فعلی را دریافت می‌کند
- [DB_GetFieldFloatByName](DB_GetFieldFloatByName): محتوای فیلد به عنوان عدد اعشاری با نام مشخص از ردیف فعلی را دریافت می‌کند
- [DB_GetMemHandle](DB_GetMemHandle): هندل حافظه برای پایگاه داده SQLite که با db_open باز شده را دریافت می‌کند
- [DB_GetLegacyDBResult](DB_GetLegacyDBResult): هندل حافظه برای کوئری SQLite که با DB_ExecuteQuery اجرا شده را دریافت می‌کند
- [DB_GetDatabaseConnectionCount](DB_GetDatabaseConnectionCount): تعداد اتصالات باز پایگاه داده را برای اهداف دیباگ دریافت می‌کند
- [DB_GetDatabaseResultSetCount](DB_GetDatabaseResultSetCount): تعداد نتایج باز پایگاه داده را دریافت می‌کند