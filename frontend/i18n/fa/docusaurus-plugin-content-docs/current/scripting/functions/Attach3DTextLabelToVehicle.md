---
title: Attach3DTextLabelToVehicle
sidebar_label: Attach3DTextLabelToVehicle
description: یک برچسب متنی سه‌بعدی را به یک وسیله نقلیه خاص متصل می‌کند.
tags: ["vehicle", "3dtextlabel"]
---

## توضیحات

یک برچسب متنی سه‌بعدی را به یک وسیله نقلیه خاص متصل می‌کند.

| نام           | توضیحات                                                                                     |
| ------------- | ------------------------------------------------------------------------------------------- |
| Text3D:textid | برچسب متنی سه‌بعدی که می‌خواهید متصل کنید.                                                    |
| parentid      | وسیله نقلیه‌ای که می‌خواهید برچسب متنی سه‌بعدی را به آن متصل کنید.                             |
| Float:offsetX | مختصات فاصله-X وسیله نقلیه بازیکن (وسیله نقلیه `0.0, 0.0, 0.0` است).                      |
| Float:offsetY | مختصات فاصله-Y وسیله نقلیه بازیکن (وسیله نقلیه `0.0, 0.0, 0.0` است).                      |
| Float:offsetZ | مختصات فاصله-Z وسیله نقلیه بازیکن (وسیله نقلیه `0.0, 0.0, 0.0` است).                      |

## مقدار بازگشتی

این تابع هیچ مقدار خاصی برنمی‌گرداند.

## مثال‌ها

```c
new
    Text3D:gVehicle3dText[MAX_VEHICLES], // ایجاد TextLabel برای استفاده بعدی
    gVehicleId;

public OnGameModeInit()
{
    gVehicleId = CreateVehicle(510, 0.0, 0.0, 15.0, 5, 0, 120); // ایجاد وسیله نقلیه.
    gVehicle3dText[gVehicleId] = Create3DTextLabel("متن نمونه", 0xFF0000AA, 0.0, 0.0, 0.0, 50.0, 0, 1);
    Attach3DTextLabelToVehicle(gVehicle3dText[gVehicleId], gVehicleId, 0.0, 0.0, 2.0); // اتصال برچسب متنی به وسیله نقلیه.
    return 1;
}

public OnGameModeExit()
{
    Delete3DTextLabel(gVehicle3dText[gVehicleId]);
    return 1;
}
```

## توابع مرتبط

- [Create3DTextLabel](Create3DTextLabel): ایجاد یک برچسب متنی سه‌بعدی.
- [Delete3DTextLabel](Delete3DTextLabel): حذف یک برچسب متنی سه‌بعدی.
- [Get3DTextLabelAttachedData](Get3DTextLabelAttachedData): دریافت اطلاعات متصل شده برچسب متنی سه‌بعدی.
- [Attach3DTextLabelToPlayer](Attach3DTextLabelToPlayer): اتصال یک برچسب متنی سه‌بعدی به بازیکن.
- [Update3DTextLabelText](Update3DTextLabelText): تغییر متن یک برچسب متنی سه‌بعدی.
- [CreatePlayer3DTextLabel](CreatePlayer3DTextLabel): ایجاد یک برچسب متنی سه‌بعدی برای یک بازیکن.
- [DeletePlayer3DTextLabel](DeletePlayer3DTextLabel): حذف برچسب متنی سه‌بعدی بازیکن.
- [UpdatePlayer3DTextLabelText](UpdatePlayer3DTextLabelText): تغییر متن برچسب متنی سه‌بعدی بازیکن.