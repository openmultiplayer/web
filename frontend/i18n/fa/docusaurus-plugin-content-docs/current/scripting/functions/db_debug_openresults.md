---
title: db_debug_openresults
sidebar_label: db_debug_openresults
description: تعداد نتایج باز پایگاه داده را دریافت می کند
keywords:
  - sqlite
---

<LowercaseNote />

## توضیحات

این تابع تعداد نتایج باز پایگاه داده را دریافت می کند.

| نام | توضیحات |
| ---- | ----------- |

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
- [db_get_field_assoc_float](db_get_field_assoc_float): دریافت محتوای فیلد به صورت عدد اعشاری با نام مشخص از سطر نتیجه فعلی
- [db_get_mem_handle](db_get_mem_handle): دریافت دستگیره حافظه برای پایگاه داده SQLite که با db_open باز شده
- [db_get_result_mem_handle](db_get_result_mem_handle): دریافت دستگیره حافظه برای درخواست SQLite که با db_query اجرا شده
- [db_debug_openfiles](db_debug_openfiles): این تابع تعداد اتصالات باز پایگاه داده را برای اهداف عیب یابی دریافت می کند