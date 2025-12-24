---
title: DB_GetMemHandle
sidebar_label: DB_GetMemHandle
description: memory handle مربوط به یک اتصال پایگاه داده SQLite که با `DB_Open` باز شده رو می‌گیره.
tags: ["sqlite"]
---

<div dir="rtl" style={{ textAlign: "right" }}>

## توضیحات

این تابع memory handle مربوط به یک اتصال پایگاه داده SQLite که با [DB_Open](DB_Open) باز شده رو می‌گیره.

| اسم  | توضیح                                                            |
| ----- | ---------------------------------------------------------------------- |
| DB:db | شناسه اتصال پایگاه داده (که از [DB_Open](DB_Open) برگردونده شده). |

## مقادیر برگشتی

memory handle اتصال پایگاه داده رو برمی‌گردونه.

## مثال‌ها

</div>

```c
static DB:gDBConnectionHandle;

// ...

public OnGameModeInit()
{
    // ...

    // اتصال به پایگاه داده بساز
    gDBConnectionHandle = DB_Open("example.db");

    // اگه اتصال به پایگاه داده وجود داره
    if (gDBConnectionHandle)
    {
        // اتصال به پایگاه داده با موفقیت ساخته شد
        print("Successfully created a connection to database \"example.db\".");
        printf("Database connection memory handle: 0x%x", DB_GetMemHandle(gDBConnectionHandle));
    }
    else
    {
        // اتصال به پایگاه داده شکست خورد
        print("Failed to open a connection to database \"example.db\".");
    }

    // ...

    return 1;
}

public OnGameModeExit()
{
    // اگه اتصال باز هست، اتصال به پایگاه داده رو ببند
    if (DB_Close(gDBConnectionHandle))
    {
        // پاک‌سازی اضافه
        gDBConnectionHandle = DB:0;
    }

    // ...

    return 1;
}
```

<div dir="rtl" style={{ textAlign: "right" }}>

## نکته‌ها

:::warning

استفاده از handle نامعتبر غیر از صفر سرور رو کرش می‌کنه! handle معتبر اتصال پایگاه داده رو با استفاده از [DB_ExecuteQuery](DB_ExecuteQuery) بگیر.

:::

## تابع‌های مرتبط

- [DB_Open](DB_Open): باز کردن اتصال به پایگاه داده SQLite
- [DB_Close](DB_Close): بستن اتصال به پایگاه داده SQLite
- [DB_ExecuteQuery](DB_ExecuteQuery): کوئری زدن به پایگاه داده SQLite
- [DB_FreeResultSet](DB_FreeResultSet): آزاد کردن حافظه نتیجه از DB_ExecuteQuery
- [DB_GetRowCount](DB_GetRowCount): گرفتن تعداد ردیف‌های موجود در نتیجه
- [DB_SelectNextRow](DB_SelectNextRow): رفتن به ردیف بعدی
- [DB_GetFieldCount](DB_GetFieldCount): گرفتن تعداد فیلدهای موجود در نتیجه
- [DB_GetFieldName](DB_GetFieldName): برگردوندن نام یک فیلد در یک index خاص
- [DB_GetFieldString](DB_GetFieldString): گرفتن محتوای فیلد با ID مشخص از ردیف نتیجه فعلی
- [DB_GetFieldStringByName](DB_GetFieldStringByName): گرفتن محتوای فیلد با نام مشخص از ردیف نتیجه فعلی
- [DB_GetFieldInt](DB_GetFieldInt): گرفتن محتوای فیلد به عنوان عدد صحیح با ID مشخص از ردیف نتیجه فعلی
- [DB_GetFieldIntByName](DB_GetFieldIntByName): گرفتن محتوای فیلد به عنوان عدد صحیح با نام مشخص از ردیف نتیجه فعلی
- [DB_GetFieldFloat](DB_GetFieldFloat): گرفتن محتوای فیلد به عنوان اعشار با ID مشخص از ردیف نتیجه فعلی
- [DB_GetFieldFloatByName](DB_GetFieldFloatByName): گرفتن محتوای فیلد به عنوان اعشار با نام مشخص از ردیف نتیجه فعلی
- [DB_GetMemHandle](DB_GetMemHandle): گرفتن memory handle برای پایگاه داده SQLite که با DB_Open باز شده.
- [DB_GetLegacyDBResult](DB_GetLegacyDBResult): گرفتن memory handle برای کوئری SQLite که با DB_ExecuteQuery اجرا شده.
- [DB_GetDatabaseConnectionCount](DB_GetDatabaseConnectionCount): گرفتن تعداد اتصالات پایگاه داده باز برای اهداف دیباگ.
- [DB_GetDatabaseResultSetCount](DB_GetDatabaseResultSetCount): گرفتن تعداد نتایج پایگاه داده باز.

</div>
