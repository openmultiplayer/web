---
title: "کلاینت open.mp روی لینوکس"
sidebar_label: "کلاینت open.mp روی لینوکس"
description: راهنمای نحوه اجرای کلاینت open.mp روی لینوکس.
---

# راهنمای نحوه اجرای کلاینت open.mp روی لینوکس

:::warning

شما رابط گرافیکی کاربری کاری دریافت نمی‌کنید، این باید در یک prefix Wine از طریق آرگومان‌های خط فرمان اجرا شود.

:::

### تست شده روی:

- Lutris: wine-ge 8-26 prefix 32-bit
- Bottles: soda-9.0-1

### نحوه کار:

1. مطمئن شوید که prefix Wine ایجاد شده با GTA San Andreas نصب شده دارید.
2. لانچر [open.mp](https://github.com/openmultiplayer/launcher/releases/latest) را دانلود کنید و داخل prefix Wine نصب کنید.
3. [کلاینت SA-MP](https://github.com/KrustyKoyle/files.sa-mp.com-Archive) را دانلود کنید و در همان Wine Prefix نصب کنید.
4. [omp-client.dll](https://assets.open.mp/omp-client.dll) را دانلود کنید و آن را در پوشه `AppData\Local\mp.open.launcher\omp\` کاربر اصلی در prefix خود کپی کنید.

در نهایت، می‌توانید لانچر open.mp را از طریق CLI prefix های Wine اجرا کنید یا آن را در اسکریپت .bat بنویسید تا راه‌اندازی آسان شود.

### دستور راه‌اندازی نمونه

```
Z:\path\to\omp-launcher.exe -h server.ip -p port -n user.name -g Z:\home\yourname\path\to\gta-san-andreas\install\
```

:::tip

می‌توانید omp-launcher.exe را با فلگ --help اجرا کنید تا اطلاعات بیشتری در مورد فلگ‌ها دریافت کنید، در صورتی که مثال بالا کافی نباشد.

:::

## عیب‌یابی

| مشکل                                          | راه‌حل احتمالی                                                                        |
| -------------------------------------------- | ----------------------------------------------------------------------------------- |
| بازی هنگام pause کردن کرش می‌کند             | فونت گمشده وجود دارد، با نصب allfonts از طریق winetricks تعمیر کنید.              |
| prompt ورود در سرور نمایش داده نمی‌شود       | سعی کنید تنظیم "Prefer system libraries" را در lutris فعال/غیرفعال کنید.         |
| جعبه سیاه ظاهر می‌شود و بازی بارگذاری نمی‌شود | ممکن است پارامترهای راه‌اندازی در CLI را گم کرده باشید. لطفاً دستور راه‌اندازی خود را بررسی کنید. |