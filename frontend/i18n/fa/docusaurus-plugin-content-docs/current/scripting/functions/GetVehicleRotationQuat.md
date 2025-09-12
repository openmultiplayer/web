---
title: GetVehicleRotationQuat
sidebar_label: GetVehicleRotationQuat
description: چرخش یه وسیله نقلیه در همه محورها رو به صورت quaternion برمی‌گردونه.
tags: ["vehicle"]
---

## توضیحات

چرخش یه وسیله نقلیه در همه محورها رو به صورت quaternion برمی‌گردونه.

| نام      | توضیحات                                                                          |
| --------- | ------------------------------------------------------------------------------------ |
| vehicleid | ID وسیله نقلیه‌ای که می‌خوای چرخش‌ش رو دریافت کنی.                                        |
| &Float:w  | متغیر float برای ذخیره اولین زاویه quaternion که به صورت reference پاس داده می‌شه.  |
| &Float:x  | متغیر float برای ذخیره دومین زاویه quaternion که به صورت reference پاس داده می‌شه. |
| &Float:y  | متغیر float برای ذخیره سومین زاویه quaternion که به صورت reference پاس داده می‌شه.  |
| &Float:z  | متغیر float برای ذخیره چهارمین زاویه quaternion که به صورت reference پاس داده می‌شه. |

## مقادیر برگشتی

**true** - تابع با موفقیت اجرا شد.

**false** - تابع موفق به اجرا نشد. یعنی وسیله نقلیه مشخص شده وجود نداره.

چرخش وسیله نقلیه در متغیرهای مشخص شده ذخیره می‌شه.

## مثال‌ها

```c
new 
    Float:w,
    Float:x,
    Float:y,
    Float:z;

GetVehicleRotationQuat(vehicleid, w, x, y, z);
```

## نکات

:::tip

- هیچ نسخه 'set' از این تابع وجود نداره؛ نمی‌تونی چرخش یه وسیله نقلیه رو SET کنی (جز زاویه Z)
- این تابع ممکنه برای وسایل نقلیه غیراشغال مقادیر نادرست برگردونه. دلیلش اینه که سطر سوم ماتریس چرخش داخلی وسیله نقلیه خراب می‌شه اگه وقتی غیراشغاله آپدیت بشه.

:::

## توابع مرتبط

- [GetVehicleZAngle](GetVehicleZAngle): بررسی زاویه فعلی یه وسیله نقلیه.
- [GetVehicleRotation](GetVehicleRotation): دریافت چرخش یه وسیله نقلیه در محور XYZ.
- [GetVehicleMatrix](GetVehicleMatrix): دریافت ماتریس چرخش واقعی وسیله نقلیه.