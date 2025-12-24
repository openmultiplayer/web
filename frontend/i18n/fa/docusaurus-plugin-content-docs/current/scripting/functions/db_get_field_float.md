---
title: db_get_field_float
sidebar_label: db_get_field_float
description: محتوای یک فیلد رو به صورت عدد اعشاری با ایندکس فیلد مشخص شده دریافت می‌کنه.
tags: ["sqlite"]
---

<LowercaseNote />

## توضیحات

این فانکشن محتوای یک فیلد رو به صورت عدد اعشاری با ایندکس فیلد مشخص شده دریافت می‌کنه.

| نام               | توضیحات                            |
| ----------------- | ---------------------------------- |
| DBResult:dbresult | نتیجه‌ای که داده‌ها ازش گرفته می‌شن.  |
| field = 0         | فیلدی که داده‌هاش گرفته می‌شن.       |

## مقدار بازگشتی

مقدار دریافت شده به صورت عدد اعشاری.

## مثال

```c
// examples.inc

// ...

static FindFieldIndexByName(DBResult:dbResultSet, const fieldName[])
{
    // Return value variable with default return value
    new ret = -1;

    // Field count
    new field_count = db_num_fields(dbResultSet);

    // Current field name
    new current_field_name[32];

    // Iterate through all fields
    for (new field_index; field_index < field_count; field_index++)
    {
        // Get field name
        if (db_field_name(dbResultSet, field_index, current_field_name, sizeof current_field_name))
        {
            // Compare searched field name to current field name
            if (!strcmp(fieldName, current_field_name))
            {
                // Success, store field index to return value variable
                ret = field_index;

                // Break out of the loop
                break;
            }
        }
    }

    // Return found field index or "-1"
    return ret;
}

Float:Examples_CalculateSum(DB:dbConnectionHandle)
{
    // Return value variable
    new Float:ret;

    // Database result set
    new DBResult:db_result_set = db_query("SELECT `value` FROM `examples`");

    // If database result set is valid
    if (db_result_set)
    {
        // Get target field index
        new target_field_index = FindFieldIndexByName(db_result_set, "value");

        // Check if field index is valid
        if (target_field_index >= 0)
        {
            // Do operations
            do
            {
                // Add value from "example" field to the return value variable
                ret += db_get_field_float(db_result_set, target_field_index);
            }

            // While next row could be fetched
            while (db_next_row(db_result_set));
        }

        // Free result set
        db_free_result(db_result_set);
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
    gDBConnectionHandle = db_open("example.db");

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

استفاده از هندل نامعتبر غیر از صفر باعث کرش سرورت می‌شه! یه هندل اتصال معتبر به پایگاه داده با استفاده از [db_query](db_query) دریافت کن.

:::

## فانکشن‌های مرتبط

- [db_open](db_open): اتصال به پایگاه داده SQLite را باز می‌کند
- [db_close](db_close): اتصال به پایگاه داده SQLite را می‌بندد
- [db_query](db_query): کوئری روی پایگاه داده SQLite اجرا می‌کند
- [db_free_result](db_free_result): حافظه نتیجه از db_query را آزاد می‌کند
- [db_num_rows](db_num_rows): تعداد ردیف‌ها در نتیجه را دریافت می‌کند
- [db_next_row](db_next_row): به ردیف بعدی می‌رود
- [db_num_fields](db_num_fields): تعداد فیلدها در نتیجه را دریافت می‌کند
- [db_field_name](db_field_name): نام فیلد در ایندکس مشخص را برمی‌گرداند
- [db_get_field](db_get_field): محتوای فیلد با ID مشخص از ردیف فعلی را دریافت می‌کند
- [db_get_field_assoc](db_get_field_assoc): محتوای فیلد با نام مشخص از ردیف فعلی را دریافت می‌کند
- [db_get_field_int](db_get_field_int): محتوای فیلد به عنوان عدد صحیح با ID مشخص از ردیف فعلی را دریافت می‌کند
- [db_get_field_assoc_int](db_get_field_assoc_int): محتوای فیلد به عنوان عدد صحیح با نام مشخص از ردیف فعلی را دریافت می‌کند
- [db_get_field_assoc_float](db_get_field_assoc_float): محتوای فیلد به عنوان عدد اعشاری با نام مشخص از ردیف فعلی را دریافت می‌کند
- [db_get_mem_handle](db_get_mem_handle): هندل حافظه برای پایگاه داده SQLite که با db_open باز شده را دریافت می‌کند
- [db_get_result_mem_handle](db_get_result_mem_handle): هندل حافظه برای کوئری SQLite که با db_query اجرا شده را دریافت می‌کند
- [db_debug_openfiles](db_debug_openfiles): تعداد اتصالات باز پایگاه داده را برای اهداف دیباگ دریافت می‌کند
- [db_debug_openresults](db_debug_openresults): تعداد نتایج باز پایگاه داده را دریافت می‌کند
