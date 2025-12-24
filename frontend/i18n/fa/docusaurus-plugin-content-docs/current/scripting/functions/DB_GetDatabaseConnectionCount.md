---
title: DB_GetDatabaseConnectionCount
sidebar_label: DB_GetDatabaseConnectionCount
description: تعداد اتصالات باز پایگاه داده را برای اهداف عیب یابی دریافت می کند.
tags: ["sqlite"]
---

## توضیحات

این تابع تعداد اتصالات باز پایگاه داده را برای اهداف عیب یابی دریافت می کند.

این تابع هیچ پارامتری ندارد.

## مثال ها

```c
printf("Database connection count: %d", DB_GetDatabaseConnectionCount());
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
