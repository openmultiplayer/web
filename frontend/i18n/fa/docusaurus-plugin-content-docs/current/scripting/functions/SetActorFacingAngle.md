---
title: SetActorFacingAngle
sidebar_label: SetActorFacingAngle
description: زاویه رو به رو بودن actor رو تنظیم می‌کنه.
tags: ["actor"]
---

<VersionWarn version='SA-MP 0.3.7' />

## توضیحات

زاویه رو به رو بودن actor رو تنظیم می‌کنه.

| نام        | توضیحات                                                              |
| ----------- | ------------------------------------------------------------------------ |
| actorid     | ID actor که زاویه رو به رو بودنش رو می‌خوایم تنظیم کنیم. از CreateActor برمی‌گرده. |
| Float:angle | زاویه رو به رو که برای actor تنظیم می‌شه.                                   |

## مقدار برگشتی

**true** - تابع با موفقیت اجرا شد.

**false** - تابع اجرا نشد. actor مشخص شده وجود نداره.

## مثال‌ها

```c
new MyActor;

public OnGameModeInit()
{
    MyActor = CreateActor(38, 0.0, 0.0, 3.0, 90.0);
    return 1;
}

// Somewhere else
SetActorFacingAngle(MyActor, 180.0);
```

## نکات

:::tip

وقتی actor رو با [CreateActor](CreateActor) می‌سازی، زاویه رو به رو بودنش رو مشخص می‌کنی. نیاز نیست از این تابع استفاده کنی مگر اینکه بخوای بعداً زاویه‌ش رو تغییر بدی.

:::

:::warning

بازیکنا زاویه تغییر یافته actor رو فقط وقتی می‌بینن که دوباره براشون restream بشه.

:::

## توابع مرتبط

- [GetActorFacingAngle](GetActorFacingAngle): گرفتن زاویه رو به رو بودن actor.
- [SetActorPos](SetActorPos): تنظیم موقعیت actor.