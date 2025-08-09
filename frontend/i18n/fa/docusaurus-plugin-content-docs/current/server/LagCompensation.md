---
title: "جبران تأخیر"
sidebar_label: "جبران تأخیر"
description: توضیح lag compensation.
---

جبران تأخیر برای گلوله‌های شلیک شده به طور پیش‌فرض در سرورهای SA-MP فعال است.

می‌تواند با استفاده از متغیر سرور `lagcompmode` در [server.cfg](server.cfg) یا `game.lag_compensation_mode` در [config.json](config.json) تغییر یابد.

تنظیم آن روی 0 جبران تأخیر را کاملاً غیرفعال می‌کند و بازیکنان باید شلیک‌های خود را هدایت کنند (جلوتر از اهداف شلیک کنند).

غیرفعال کردن Lag Compensation از فراخوانی [OnPlayerWeaponShot](../scripting/callbacks/OnPlayerWeaponShot) جلوگیری می‌کند.

این متغیر فقط می‌تواند در [server.cfg](server.cfg) یا [config.json](config.json) تنظیم شود.