---
title: SetVehicleNumberPlate
sidebar_label: SetVehicleNumberPlate
description: پلاک یه ماشین رو تنظیم می‌کنه.
tags: ["vehicle"]
---

## توضیحات

پلاک یه ماشین رو تنظیم می‌کنه.

| نام                 | توضیحات                                            |
| ------------------- | ------------------------------------------------------ |
| vehicleid           | ID ماشینی که می‌خوای پلاکش رو تنظیم کنی.      |
| const numberPlate[] | متنی که باید روی پلاک نمایش داده بشه. |

## مقدار برگشتی

**true** - تابع با موفقیت اجرا شد.

**false** - تابع در اجرا ناکام بود. ماشین وجود نداره

## مثال‌ها

```c
new
	vehicleid = CreateVehicle(542, 2074.73, 1089.89, 10.51, 0.0, -1, -1, -1);
SetVehicleNumberPlate(vehicleid, "ABCD 123");
```

## نکات

:::tip

- این تابع بررسی خطای داخلی نداره.
- به ماشین‌هایی که پلاک ندارن (قایق، هواپیما و غیره) پلاک اختصاصی تخصیص نده چون باعث پردازش غیرضروری در client می‌شه.
- ماشین باید دوباره spawn یا re-stream بشه تا تغییرات اعمال بشن.
- روی هر پلاک محدودیت 32 کاراکتر وجود داره (شامل رنگ‌های embedded).
- طول متنی که می‌تونه روی پلاک دیده بشه حدود 9 تا 10 کاراکتر هست، کاراکترهای بیشتر باعث تقسیم شدن متن می‌شه.
- بعضی مدل‌های ماشین پلاک برعکس دارن، مثل Boxville (498) (به عنوان جایگزین این ماشین می‌تونی از مدل 609 استفاده کنی که یه Boxville تکراری هست (یا Boxburg) ولی با پلاک معمولی). 

:::

:::tip

می‌تونی از color embedding روی متن پلاک استفاده کنی.

:::

## توابع مرتبط

- [GetVehicleNumberPlate](GetVehicleNumberPlate): پلاک یه ماشین رو دریافت می‌کنه.
- [SetVehicleToRespawn](SetVehicleToRespawn): یه ماشین رو respawn می‌کنه.
- [ChangeVehicleColor](ChangeVehicleColor): رنگ یه ماشین رو تنظیم می‌کنه.
- [ChangeVehiclePaintjob](ChangeVehiclePaintjob): paintjob یه ماشین رو تغییر می‌ده.