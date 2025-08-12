---
title: db_field_name
sidebar_label: db_field_name
description: نام فیلد در شاخص مشخص شده را برمی گرداند.
keywords:
  - sqlite
---

<LowercaseNote />

## توضیحات

نام فیلد را در شاخص مشخص برمی گرداند.

| نام              | توضیحات                                                        |
| ----------------- | ------------------------------------------------------------------ |
| DBResult:dbresult | نتیجه ای که داده ها از آن دریافت می شود؛ توسط [db_query](db_query) برگردانده شده. |
| field             | شاخص فیلدی که نام آن باید دریافت شود.                         |
| result[]          | نتیجه.                                                        |
| maxlength         | حداکثر طول فیلد.                                       |

## مقادیر بازگشتی

اگر دستگیره مجموعه نتیجه معتبر باشد 1 را برمی گرداند، در غیر این صورت 0.

## مثال ها

```c
static DB:gDBConnectionHandle;

public OnGameModeInit()
{
    // ...

    // ایجاد اتصال به پایگاه داده
    gDBConnectionHandle = db_open("example.db");

    // اگر اتصال به پایگاه داده وجود دارد
    if (gDBConnectionHandle)
    {
        // انتخاب اولین ورودی در جدول "join_log"
        new DBResult:db_result_set = db_query(g_DBConnection, "SELECT * FROM `join_log` LIMIT 1");

        // اگر دستگیره مجموعه نتیجه معتبر است
        if (db_result_set)
        {
            // دریافت تعداد فیلدها از مجموعه نتیجه
            new columns = db_num_fields(db_result_set);

            // تخصیص مقداری حافظه برای ذخیره نام فیلدها
            new field_name[32];

            // تکرار در تمام شاخص های ستون
            for (new column_index; index < column_index; index++)
            {
                // ذخیره نام ستون با شاخص i در "field_name"
                db_field_name(db_result_set, index, field_name, sizeof field_name);

                // چاپ "field_name"
                printf("Field name at index %d: \"%s\"", index, field_name);
            }

            // آزاد کردن مجموعه نتیجه
            db_free_result(db_result_set);
        }
    }
    else
    {
        // ایجاد اتصال به پایگاه داده ناموفق بود
        print("Failed to open a connection to database \"example.db\".");
    }
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

استفاده از دستگیره نامعتبر غیر از صفر سرور شما را کراش می کند! برای دریافت دستگیره اتصال معتبر پایگاه داده از [db_query](db_query) استفاده کنید.

:::

## توابع مرتبط

- [db_open](db_open): باز کردن اتصال به پایگاه داده SQLite
- [db_close](db_close): بستن اتصال به پایگاه داده SQLite
- [db_query](db_query): درخواست از پایگاه داده SQLite
- [db_free_result](db_free_result): آزاد کردن حافظه نتیجه از db_query
- [db_num_rows](db_num_rows): دریافت تعداد سطرها در نتیجه
- [db_next_row](db_next_row): رفتن به سطر بعدی
- [db_num_fields](db_num_fields): دریافت تعداد فیلدها در نتیجه
- [db_get_field](db_get_field): دریافت محتوای فیلد با شناسه مشخص از سطر نتیجه فعلی
- [db_get_field_assoc](db_get_field_assoc): دریافت محتوای فیلد با نام مشخص از سطر نتیجه فعلی
- [db_get_field_int](db_get_field_int): دریافت محتوای فیلد به صورت عدد صحیح با شناسه مشخص از سطر نتیجه فعلی
- [db_get_field_assoc_int](db_get_field_assoc_int): دریافت محتوای فیلد به صورت عدد صحیح با نام مشخص از سطر نتیجه فعلی
- [db_get_field_float](db_get_field_float): دریافت محتوای فیلد به صورت عدد اعشاری با شناسه مشخص از سطر نتیجه فعلی
- [db_get_field_assoc_float](db_get_field_assoc_float): دریافت محتوای فیلد به صورت عدد اعشاری با نام مشخص از سطر نتیجه فعلی
- [db_get_mem_handle](db_get_mem_handle): دریافت دستگیره حافظه برای پایگاه داده SQLite که با db_open باز شده
- [db_get_result_mem_handle](db_get_result_mem_handle): دریافت دستگیره حافظه برای درخواست SQLite که با db_query اجرا شده
- [db_debug_openfiles](db_debug_openfiles): این تابع تعداد اتصالات باز پایگاه داده را برای اهداف عیب یابی دریافت می کند
- [db_debug_openresults](db_debug_openresults): این تابع تعداد نتایج باز پایگاه داده را دریافت می کند