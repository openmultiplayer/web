---
title: DB_GetFieldName
sidebar_label: DB_GetFieldName
description: نام فیلد در ایندکس مشخص شده رو برمی‌گردونه.
tags: ["sqlite"]
---

## توضیحات

نام یک فیلد در ایندکس مشخص رو برمی‌گردونه.

| نام                    | توضیحات                                                                         |
| ---------------------- | ------------------------------------------------------------------------------- |
| DBResult:result        | نتیجه‌ای که داده‌ها از اون گرفته میشه؛ توسط [DB_ExecuteQuery](DB_ExecuteQuery) برگردونده میشه. |
| field                  | ایندکس فیلدی که اسمش رو می‌خواید.                                               |
| output[]               | نتیجه.                                                                          |
| size = sizeof (output) | حداکثر طول فیلد.                                                                |

## مقدار بازگشتی

اگر handle نتیجه معتبر باشه **true** برمی‌گردونه، وگرنه **false**.

## مثال‌ها

```c
static DB:gDBConnectionHandle;

public OnGameModeInit()
{
    // ...

    // Create a connection to a database
    gDBConnectionHandle = DB_Open("example.db");

    // If connection to the database exists
    if (gDBConnectionHandle)
    {
        // Select first entry in table "join_log"
        new DBResult:db_result_set = DB_ExecuteQuery(g_DBConnection, "SELECT * FROM `join_log` LIMIT 1");

        // If result set handle is valid
        if (db_result_set)
        {
            // Get the number of fields from result set
            new columns = DB_GetRowCount(db_result_set);

            // Allocate some memory for storing field names
            new field_name[32];

            // Iterate through all column indices
            for (new column_index; index < column_index; index++)
            {
                // Store the name of the i indexed column name into "field_name"
                DB_GetFieldName(db_result_set, index, field_name, sizeof field_name);

                // Print "field_name"
                printf("Field name at index %d: \"%s\"", index, field_name);
            }

            // Frees the result set
            DB_FreeResultSet(db_result_set);
        }
    }
    else
    {
        // Failed to create a connection to the database
        print("Failed to open a connection to database \"example.db\".");
    }
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
