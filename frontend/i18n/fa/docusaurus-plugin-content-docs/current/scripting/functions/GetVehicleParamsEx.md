---
title: GetVehicleParamsEx
sidebar_label: GetVehicleParamsEx
description: پارامترهای یه وسیله نقلیه رو دریافت می‌کنه.
tags: ["vehicle"]
---

## توضیحات

پارامترهای یه وسیله نقلیه رو دریافت می‌کنه.

| نام            | توضیحات                                                         |
| --------------- | ------------------------------------------------------------------- |
| vehicleid       | ID وسیله نقلیه‌ای که می‌خوای پارامترهاش رو دریافت کنی.                   |
| &bool:engine    | دریافت وضعیت موتور. اگه 1 باشه، موتور روشنه.                |
| &bool:lights    | دریافت وضعیت چراغ‌های وسیله نقلیه. اگه 1 باشه چراغ‌ها روشنن.            |
| &bool:alarm     | دریافت وضعیت آژیر وسیله نقلیه. اگه 1 باشه آژیر (یا قبلاً) داشته صدا می‌کرده. |
| &bool:doors     | دریافت وضعیت قفل درها. اگه 1 باشه درها قفلن.        |
| &bool:bonnet    | دریافت وضعیت کاپوت. اگه 1 باشه، بازه.                        |
| &bool:boot      | دریافت وضعیت صندوق عقب. 1 یعنی بازه.                      |
| &bool:objective | دریافت وضعیت objective. 1 یعنی objective روشنه.              |

## مقادیر برگشتی

**true** - موفق

**false** - ناموفق (ID وسیله نقلیه نامعتبر).

پارامترهای وسیله نقلیه در متغیرهای reference شده ذخیره می‌شن، نه در مقدار برگشتی.

## مثال‌ها

```c
new
	bool:engine, bool:lights, bool:alarm, bool:doors, bool:bonnet, bool:boot, bool:objective;
GetVehicleParamsEx(vehicleid, engine, lights, alarm, doors, bonnet, boot, objective);
//This would cause all the variable above, to become the status of its subject.
```

## نکات

:::tip

اگه یه پارامتر تنظیم نشده باشه (SetVehicleParamsEx قبلاً استفاده نشده)، مقدار -1 ('تنظیم نشده') خواهد بود.

:::

## توابع مرتبط

- [SetVehicleParamsEx](SetVehicleParamsEx): تنظیم پارامترهای یه وسیله نقلیه برای همه بازیکنا.