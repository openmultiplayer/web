---
title: IsValidMenu
sidebar_label: IsValidMenu
description: چک می‌کنه که آیا ID یه menu معتبره یا نه.
tags: ["menu"]
---

## توضیحات

چک می‌کنه که آیا ID یه menu معتبره یا نه.

| نام         | توضیحات                       |
| ----------- | ----------------------------- |
| Menu:menuid | ID menu که باید چک بشه.       |

## مقادیر برگشتی

**true** - menu معتبره.

**false** - menu معتبر نیست.

## توابع مرتبط

- [CreateMenu](CreateMenu): ساخت یه menu.
- [DestroyMenu](DestroyMenu): نابود کردن menu مشخص شده.
- [DisableMenu](DisableMenu): غیرفعال کردن یه menu.
- [DisableMenuRow](DisableMenuRow): غیرفعال کردن یه سطر خاص در menu برای همه بازیکنا.
- [AddMenuItem](AddMenuItem): اضافه کردن یه آیتم به menu مشخص شده.
- [SetMenuColumnHeader](SetMenuColumnHeader): تنظیم header برای یکی از ستون‌های menu.
- [IsMenuDisabled](IsMenuDisabled): چک کردن اینکه menu غیرفعال هست یا نه.
- [IsMenuRowDisabled](IsMenuRowDisabled): چک کردن اینکه سطر menu غیرفعال هست یا نه.

## callback های مرتبط

- [OnPlayerSelectedMenuRow](../callbacks/OnPlayerSelectedMenuRow): وقتی بازیکن یه سطر از menu انتخاب می‌کنه فراخوانی می‌شه.
- [OnPlayerExitedMenu](../callbacks/OnPlayerExitedMenu): وقتی بازیکن از menu خارج می‌شه فراخوانی می‌شه.