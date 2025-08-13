---
title: TextDrawCreate
sidebar_label: TextDrawCreate
description: یک textdraw ایجاد کنید.
tags: ["textdraw"]
---

## توضیحات

یک textdraw ایجاد کنید. Textdraw ها، همانطور که از نام مشخص است، متن (عمدتاً - می‌تواند جعبه‌ها، اسپرایت‌ها و پیش‌نمایش مدل‌ها (اسکین‌ها/خودروها/اسلحه‌ها/اشیاء هم) هستند که روی صفحه‌های بازیکنان رسم می‌شوند. برای اطلاعات کامل درباره textdraw ها این صفحه را ببینید.

| نام             | توضیحات                                              |
|------------------|----------------------------------------------------------|
| Float:x          | مختصات X (چپ/راست) برای ایجاد textdraw. |
| Float:y          | مختصات Y (بالا/پایین) برای ایجاد textdraw.    |
| const format[]   | متنی که در textdraw ظاهر می‌شود.               |
| OPEN_MP_TAGS:... | تعداد نامحدودی از آرگومان‌های هر تگ.               |

## مقادیر بازگشتی

شناسه textdraw ایجاد شده.

شناسه‌های Textdraw از **0** شروع می‌شوند.

## مثال‌ها

```c
// این متغیر برای ذخیره شناسه textdraw استفاده می‌شود
// تا بتوانیم در سراسر اسکریپت از آن استفاده کنیم
new Text:gMyTextdraw;

public OnGameModeInit()
{
    // این خط برای ایجاد textdraw استفاده می‌شود.
    // نکته: این یک textdraw بدون هیچ قالب‌بندی ایجاد می‌کند.
    gMyTextdraw = TextDrawCreate(240.0, 580.0, "Welcome to my OPEN.MP server");
    return 1;
}

public OnPlayerConnect(playerid)
{
    // این برای نشان دادن textdraw به بازیکن هنگام اتصال استفاده می‌شود.
    TextDrawShowForPlayer(playerid, gMyTextdraw);
    return 1;
}
```

## نکته‌ها

:::tip

- مختصات `x, y` مختصات بالا سمت چپ برای ناحیه text draw بر اساس "بوم" 640x480 است (بدون توجه به رزولوشن صفحه).
- اگر قصد استفاده از [TextDrawAlignment](TextDrawAlignment) با چینش 3 (`TEXT_DRAW_ALIGN_RIGHT`) را دارید، مختصات `x, y` مختصات بالا سمت راست برای text draw است.
- این تابع فقط textdraw را ایجاد می‌کند، باید از [TextDrawShowForPlayer](TextDrawShowForPlayer) یا [TextDrawShowForAll](TextDrawShowForAll) برای نمایش آن استفاده کنید.
- توصیه می‌شود هنگام ایجاد textdraw ها از اعداد کامل به جای موقعیت‌های اعشاری استفاده کنید تا طراحی سازگار با رزولوشن اطمینان حاصل شود.

:::

:::warning

کدهای mapping کلیدهای صفحه کلید (مانند ~k~~VEHICLE_ENTER_EXIT~) بعد از کاراکتر 255 کار نمی‌کنند.

:::

## توابع مرتبط

- [TextDrawDestroy](TextDrawDestroy): حذف یک textdraw.
- [TextDrawColor](TextDrawColor): تنظیم رنگ متن در یک textdraw.
- [TextDrawBoxColor](TextDrawBoxColor): تنظیم رنگ جعبه در یک textdraw.
- [TextDrawBackgroundColor](TextDrawBackgroundColor): تنظیم رنگ پس‌زمینه یک textdraw.
- [TextDrawAlignment](TextDrawAlignment): تنظیم چینش یک textdraw.
- [TextDrawFont](TextDrawFont): تنظیم فونت یک textdraw.
- [TextDrawLetterSize](TextDrawLetterSize): تنظیم اندازه حروف متن در یک textdraw.
- [TextDrawTextSize](TextDrawTextSize): تنظیم اندازه جعبه textdraw.
- [TextDrawSetOutline](TextDrawSetOutline): انتخاب اینکه آیا متن حاشیه دارد یا نه.
- [TextDrawSetShadow](TextDrawSetShadow): تغییر وضعیت سایه‌ها روی یک textdraw.
- [TextDrawSetProportional](TextDrawSetProportional): تنظیم فاصله متن در یک textdraw به نسبت متناسب.
- [TextDrawUseBox](TextDrawUseBox): تغییر وضعیت اینکه آیا textdraw جعبه دارد یا نه.
- [TextDrawSetString](TextDrawSetString): تنظیم متن در یک textdraw موجود.
- [TextDrawShowForPlayer](TextDrawShowForPlayer): نمایش textdraw برای بازیکن خاص.
- [TextDrawHideForPlayer](TextDrawHideForPlayer): مخفی کردن textdraw برای بازیکن خاص.
- [TextDrawShowForAll](TextDrawShowForAll): نمایش textdraw برای همه بازیکنان.
- [TextDrawHideForAll](TextDrawHideForAll): مخفی کردن textdraw برای همه بازیکنان.
- [IsTextDrawVisibleForPlayer](IsTextDrawVisibleForPlayer): بررسی اینکه آیا textdraw برای بازیکن نمایش داده می‌شود.
- [IsValidTextDraw](IsValidTextDraw): بررسی اینکه آیا textdraw معتبر است.
- [TextDrawGetAlignment](TextDrawGetAlignment): دریافت چینش متن یک textdraw.
- [TextDrawGetBackgroundColour](TextDrawGetBackgroundColour): دریافت رنگ پس‌زمینه یک textdraw.
- [TextDrawGetBoxColour](TextDrawGetBoxColour): دریافت رنگ جعبه یک textdraw.
- [TextDrawGetColour](TextDrawGetColour): دریافت رنگ متن یک textdraw.
- [TextDrawGetFont](TextDrawGetFont): دریافت فونت متن یک textdraw.
- [TextDrawGetLetterSize](TextDrawGetLetterSize): دریافت عرض و ارتفاع حروف.
- [TextDrawGetOutline](TextDrawGetOutline): دریافت ضخامت حاشیه متن textdraw.
- [TextDrawGetPos](TextDrawGetPos): دریافت موقعیت یک textdraw.
- [TextDrawGetPreviewModel](TextDrawGetPreviewModel): دریافت مدل پیش‌نمایش یک textdraw پیش‌نمایش 3D.
- [TextDrawGetPreviewRot](TextDrawGetPreviewRot): دریافت چرخش و زوم یک textdraw پیش‌نمایش مدل 3D.
- [TextDrawGetPreviewVehCol](TextDrawGetPreviewVehCol): دریافت رنگ‌های خودروی پیش‌نمایش یک textdraw پیش‌نمایش 3D.
- [TextDrawGetPreviewVehicleColours](TextDrawGetPreviewVehicleColours): دریافت رنگ‌های خودروی پیش‌نمایش یک textdraw پیش‌نمایش 3D.
- [TextDrawGetShadow](TextDrawGetShadow): دریافت اندازه سایه متن textdraw.
- [TextDrawGetString](TextDrawGetString): دریافت متن یک textdraw.
- [TextDrawGetTextSize](TextDrawGetTextSize): دریافت محور X و محور Y textdraw.
- [TextDrawIsBox](TextDrawIsBox): بررسی اینکه آیا textdraw جعبه است.
- [TextDrawIsProportional](TextDrawIsProportional): بررسی اینکه آیا textdraw متناسب است.
- [TextDrawIsSelectable](TextDrawIsSelectable): بررسی اینکه آیا textdraw قابل انتخاب است.
- [TextDrawSetPos](TextDrawSetPos): تنظیم موقعیت یک textdraw.
- [TextDrawSetStringForPlayer](TextDrawSetStringForPlayer): تغییر متن روی textdraw برای بازیکن خاص.

## منابع مرتبط

- [اسپرایت‌های TextDraw](../resources/textdrawsprites)