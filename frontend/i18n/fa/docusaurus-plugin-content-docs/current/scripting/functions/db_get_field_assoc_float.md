---
title: db_get_field_assoc_float
sidebar_label: db_get_field_assoc_float
description: محتویات فیلد را به صورت عدد اعشاری با نام فیلد مشخص شده دریافت می کند.
keywords:
  - sqlite
---

<LowercaseNote />

## توضیحات

این تابع محتویات فیلد را به صورت عدد اعشاری از نام فیلد مشخص شده دریافت می کند.

| نام              | توضیحات                         |
| ----------------- | ----------------------------------- |
| DBResult:dbresult | نتیجه ای که داده ها از آن دریافت می شود     |
| field[]           | نام فیلدی که داده ها از آن دریافت می شود |

## مقادیر بازگشتی

مقدار دریافت شده به صورت عدد اعشاری.

## مثال

```c
// examples.inc

// ...

Float:Examples_CalculateSum(DB:dbConnectionHandle)
{
    // متغیر مقدار بازگشتی
    new Float:ret;

    // مجموعه نتیجه پایگاه داده
    new DBResult:db_result_set = db_query("SELECT `value` FROM `examples`");

    // اگر مجموعه نتیجه پایگاه داده معتبر است
    if (db_result_set)
    {
        // انجام عملیات ها
        do
        {
            // اضافه کردن مقدار از فیلد "example" به متغیر مقدار بازگشتی
            ret += db_get_field_assoc_float(db_result_set, "value");
        }

        // تا زمانی که سطر بعدی قابل دریافت باشد
        while (db_next_row(db_result_set));

        // آزاد کردن مجموعه نتیجه
        db_free_result(db_result_set);
    }

    // برگرداندن مجموع محاسبه شده
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

    // ایجاد اتصال به پایگاه داده
    gDBConnectionHandle = db_open("example.db");

    // اگر اتصال به پایگاه داده وجود دارد
    if (gDBConnectionHandle)
    {
        // با موفقیت اتصال به پایگاه داده ایجاد شد
        print("Successfully created a connection to database \"example.db\".");
        printf("Calculated sum: %f", Examples_CalculateSum(gDBConnectionHandle));
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
- [db_field_name](db_field_name): نام فیلد در شاخص مشخص را برمی گرداند
- [db_get_field](db_get_field): دریافت محتوای فیلد با شناسه مشخص از سطر نتیجه فعلی
- [db_get_field_assoc](db_get_field_assoc): دریافت محتوای فیلد با نام مشخص از سطر نتیجه فعلی
- [db_get_field_int](db_get_field_int): دریافت محتوای فیلد به صورت عدد صحیح با شناسه مشخص از سطر نتیجه فعلی
- [db_get_field_assoc_int](db_get_field_assoc_int): دریافت محتوای فیلد به صورت عدد صحیح با نام مشخص از سطر نتیجه فعلی
- [db_get_field_float](db_get_field_float): دریافت محتوای فیلد به صورت عدد اعشاری با شناسه مشخص از سطر نتیجه فعلی
- [db_get_mem_handle](db_get_mem_handle): دریافت دستگیره حافظه برای پایگاه داده SQLite که با db_open باز شده
- [db_get_result_mem_handle](db_get_result_mem_handle): دریافت دستگیره حافظه برای درخواست SQLite که با db_query اجرا شده
- [db_debug_openfiles](db_debug_openfiles): این تابع تعداد اتصالات باز پایگاه داده را برای اهداف عیب یابی دریافت می کند
- [db_debug_openresults](db_debug_openresults): این تابع تعداد نتایج باز پایگاه داده را دریافت می کند