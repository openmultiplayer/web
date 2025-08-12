---
title: db_get_field
sidebar_label: db_get_field
description: محتوای یک فیلد رو از db_query دریافت کنید.
keywords:
  - sqlite
---

<LowercaseNote />

## توضیحات

محتوای یک فیلد رو از db_query دریافت می‌کنه.

| نام               | توضیحات                            |
| ----------------- | ---------------------------------- |
| DBResult:dbresult | نتیجه‌ای که داده‌ها از اون گرفته میشه. |
| field             | فیلدی که داده‌ها از اون گرفته میشه.  |
| result[]          | نتیجه.                             |
| maxlength         | حداکثر طول فیلد.                    |

## مقدار بازگشتی

اگر handle نتیجه معتبر باشه و ستون در دسترس باشه 1 برمی‌گردونه، وگرنه 0.

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

Examples_ListNames(DB:dbConnectionHandle)
{
    // Database result set
    new DBResult:db_result_set = db_query("SELECT `name` FROM `examples`");

    // If database result set is valid
    if (db_result_set)
    {
        // Get target field index
        new target_field_index = FindFieldIndexByName(db_result_set, "name");

        // Check if field index is valid
        if (target_field_index >= 0)
        {
            // Allocate some memory to store results
            new result[256];

            // Do operations
            do
            {
                // Add value from "example" field to the return value variable
                db_get_field(db_result_set, target_field_index, result, sizeof result);
            }

            // While next row could be fetched
            while (db_next_row(db_result_set));
        }

        // Free result set
        db_free_result(db_result_set);
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

    // Create a connection to a database
    gDBConnectionHandle = db_open("example.db");

    // If connection to the database exists
    if (gDBConnectionHandle)
    {
        // Successfully created a connection to the database
        print("Successfully created a connection to database \"example.db\".");
        Examples_ListNames(gDBConnectionHandle);
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
- [db_get_field_assoc](db_get_field_assoc): محتوای فیلد با نام مشخص از سطر نتیجه فعلی رو دریافت کنید
- [db_get_field_int](db_get_field_int): محتوای فیلد به عنوان عدد صحیح با ID مشخص از سطر نتیجه فعلی رو دریافت کنید
- [db_get_field_assoc_int](db_get_field_assoc_int): محتوای فیلد به عنوان عدد صحیح با نام مشخص از سطر نتیجه فعلی رو دریافت کنید
- [db_get_field_float](db_get_field_float): محتوای فیلد به عنوان عدد اعشاری با ID مشخص از سطر نتیجه فعلی رو دریافت کنید
- [db_get_field_assoc_float](db_get_field_assoc_float): محتوای فیلد به عنوان عدد اعشاری با نام مشخص از سطر نتیجه فعلی رو دریافت کنید
- [db_get_mem_handle](db_get_mem_handle): handle حافظه برای پایگاه داده SQLite که با db_open باز شده رو دریافت کنید
- [db_get_result_mem_handle](db_get_result_mem_handle): handle حافظه برای کوئری SQLite که با db_query اجرا شده رو دریافت کنید
- [db_debug_openfiles](db_debug_openfiles): تعداد اتصالات باز پایگاه داده رو برای اهداف دیباگ دریافت کنید
- [db_debug_openresults](db_debug_openresults): تعداد نتایج باز پایگاه داده رو دریافت کنید