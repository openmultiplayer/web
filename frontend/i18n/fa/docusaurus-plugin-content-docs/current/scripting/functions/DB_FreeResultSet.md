---
title: DB_FreeResultSet
sidebar_label: DB_FreeResultSet
description: حافظه نتیجه تخصیص یافته از DB_ExecuteQuery را آزاد می کند.
keywords:
  - sqlite
tags: ["sqlite"]
---

## توضیحات

حافظه نتیجه تخصیص یافته از DB_ExecuteQuery را آزاد می کند.

| نام              | توضیحات                                                            |
| ----------------- | ---------------------------------------------------------------------- |
| DBResult:dbresult | مجموعه نتیجه ای که باید آزاد شود که توسط [DB_ExecuteQuery](DB_ExecuteQuery) تخصیص یافته |

## مقادیر بازگشتی

در صورت معتبر بودن دستگیره مجموعه نتیجه **true** و در غیر این صورت **false** برمی گرداند.

## مثال ها

```c
// entity_storage.inc

EntityStorage_SpawnAll(DB:connectionHandle)
{
    // انتخاب تمام ورودی ها در جدول "entities"
    new DBResult:db_result_set = DB_ExecuteQuery(connectionHandle, "SELECT * FROM `entities`");

    // اگر دستگیره مجموعه نتیجه پایگاه داده معتبر است
    if (db_result_set)
    {
        // کاری انجام بده...

        // مجموعه نتیجه را آزاد کن
        DB_FreeResultSet(db_result_set);
    }
}
```

```c
// mode.pwn

#include <entity_storage>

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
        // با موفقیت اتصال به پایگاه داده ایجاد شد
        print("Successfully created a connection to database \"example.db\".");
        EntityStorage_SpawnAll(gDBConnectionHandle);
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
    if (DB_Close(gDBConnectionHandle))
    {
        // پاکسازی اضافی
        gDBConnectionHandle = DB:0;
    }

    // ...

    return 1;
}
```

## توابع مرتبط

- [DB_Open](DB_Open): باز کردن اتصال به پایگاه داده SQLite
- [DB_Close](DB_Close): بستن اتصال به پایگاه داده SQLite
- [DB_ExecuteQuery](DB_ExecuteQuery): درخواست از پایگاه داده SQLite
- [DB_FreeResultSet](DB_FreeResultSet): آزاد کردن حافظه نتیجه از DB_ExecuteQuery
- [DB_GetRowCount](DB_GetRowCount): دریافت تعداد سطرها در نتیجه
- [DB_SelectNextRow](DB_SelectNextRow): رفتن به سطر بعدی
- [DB_GetFieldCount](DB_GetFieldCount): دریافت تعداد فیلدها در نتیجه
- [DB_GetFieldName](DB_GetFieldName): نام فیلد در شاخص مشخص را برمی گرداند
- [DB_GetFieldString](DB_GetFieldString): دریافت محتوای فیلد با شناسه مشخص از سطر نتیجه فعلی
- [DB_GetFieldStringByName](DB_GetFieldStringByName): دریافت محتوای فیلد با نام مشخص از سطر نتیجه فعلی
- [DB_GetFieldInt](DB_GetFieldInt): دریافت محتوای فیلد به صورت عدد صحیح با شناسه مشخص از سطر نتیجه فعلی
- [DB_GetFieldIntByName](DB_GetFieldIntByName): دریافت محتوای فیلد به صورت عدد صحیح با نام مشخص از سطر نتیجه فعلی
- [DB_GetFieldFloat](DB_GetFieldFloat): دریافت محتوای فیلد به صورت عدد اعشاری با شناسه مشخص از سطر نتیجه فعلی
- [DB_GetFieldFloatByName](DB_GetFieldFloatByName): دریافت محتوای فیلد به صورت عدد اعشاری با نام مشخص از سطر نتیجه فعلی
- [DB_GetMemHandle](DB_GetMemHandle): دریافت دستگیره حافظه برای پایگاه داده SQLite که با db_open باز شده
- [DB_GetLegacyDBResult](DB_GetLegacyDBResult): دریافت دستگیره حافظه برای درخواست SQLite که با DB_ExecuteQuery اجرا شده
- [DB_GetDatabaseConnectionCount](DB_GetDatabaseConnectionCount): این تابع تعداد اتصالات باز پایگاه داده را برای اهداف عیب یابی دریافت می کند
- [DB_GetDatabaseResultSetCount](DB_GetDatabaseResultSetCount): این تابع تعداد نتایج باز پایگاه داده را دریافت می کند