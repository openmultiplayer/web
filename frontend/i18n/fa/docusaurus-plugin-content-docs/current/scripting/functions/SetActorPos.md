---
title: SetActorPos
sidebar_label: SetActorPos
description: موقعیت actor رو تنظیم می‌کنه.
tags: ["actor"]
---

<VersionWarn version='SA-MP 0.3.7' />

## توضیحات

موقعیت actor رو تنظیم می‌کنه.

| نام    | توضیحات                                                          |
| ------- | -------------------------------------------------------------------- |
| actorid | ID actor که موقعیتش رو می‌خوایم تنظیم کنیم. از CreateActor برمی‌گرده. |
| Float:x | مختصات X که actor باید توش قرار بگیره.                           |
| Float:y | مختصات Y که actor باید توش قرار بگیره.                           |
| Float:z | مختصات Z که actor باید توش قرار بگیره.                           |

## مقدار برگشتی

**true** - تابع با موفقیت اجرا شد.

**false** - تابع اجرا نشد. actor مشخص شده وجود نداره.

## مثال‌ها

```c
new gMyActor;

public OnGameModeInit()
{
    gMyActor = CreateActor(24, 2050.7544, -1920.0621, 13.5485, -180.0);
    return 1;
}

// Somewhere else
SetActorPos(gMyActor, 2062.2332, -1908.1423, 13.5485);
```

## نکات

:::tip

وقتی actor رو با [CreateActor](CreateActor) می‌سازی، موقعیتش رو مشخص می‌کنی. نیاز نیست از این تابع استفاده کنی مگر اینکه بخوای بعداً موقعیتش رو تغییر بدی.

:::

## توابع مرتبط

- [GetActorPos](GetActorPos): گرفتن موقعیت actor.
- [CreateActor](CreateActor): ساخت actor (static NPC).