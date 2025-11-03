---
title: مشکلات رایج سرور
sidebar_label: مشکلات رایج سرور
---

## سرور بلافاصله پس از شروع کرش می‌کند

معمولاً خطایی در فایل server.cfg شما یا گیم مود شما گم شده است. فایل server_log.txt را بررسی کنید و دلیل باید در پایین قرار گرفته باشد. اگر نبود، فایل crashinfo.txt را بررسی کنید. راه‌حل بهتر برای پیدا کردن علت کرش استفاده از پلاگین Crash detect توسط Zeex/0x5A656578 ([لینک](https://github.com/Y-Less/samp-plugin-crashdetect)) است که اطلاعات بیشتری مثل شماره خطوط، نام توابع، مقادیر پارامتر و غیره خواهد داد. اگر اسکریپت در حالت debug کامپایل شده باشد (فلگ -d3) تا کامپایلر اطلاعات اضافی در مورد همه این موارد را در خروجی .amx قرار دهد.

## سرور کار نمی‌کند - فایروال غیرفعال است

شما باید پورت‌های خود را forward کنید تا بازیکنان بتوانند به سرور شما بپیوندند. می‌توانید پورت‌های خود را با استفاده از PF Port Checker forward کنید. آن را از: www.portforward.com دانلود کنید اگر پورت‌ها forward نشده‌اند به این معنی است که باید آنها را در روتر خود باز کنید. می‌توانید فهرست روتر را در [https://portforward.com/router.htm](https://portforward.com/router.htm) بررسی کنید

همه اطلاعات در مورد نحوه forward کردن پورت‌ها را دارد.

## 'Packet was modified'

خطایی که معمولاً به عنوان:

```
[hh:mm:ss] Packet was modified, sent by id: <id>, ip: <ip>:<port>
```

نشان داده می‌شود زمانی اتفاق می‌افتد که بازیکن timeout شود یا در حال حاضر مشکلات اتصال داشته باشد.

## 'Warning: client exceeded messageslimit'

خطایی که معمولاً به عنوان:

```
Warning: client exceeded 'messageslimit' (1) <ip>:<port> (<count>) Limit: x/sec
```

نشان داده می‌شود زمانی اتفاق می‌افتد که تعداد پیام‌های در ثانیه که کلاینت به سرور ارسال می‌کند بیش از حد باشد.

## 'Warning: client exceeded ackslimit'

خطایی که معمولاً به عنوان:

```
Warning: client exceeded 'ackslimit' <ip>:<port> (<count>) Limit: x/sec
```

نشان داده می‌شود زمانی اتفاق می‌افتد که حد acks بیش از حد باشد.

## 'Warning: client exceeded messageholelimit'

خطایی که معمولاً به عنوان:

```
Warning: client exceeded 'messageholelimit' (<type>) <ip>:<port> (<count>) Limit: x
```

نشان داده می‌شود زمانی اتفاق می‌افتد که حد message hole بیش از حد باشد.

## 'Warning: Too many out-of-order messages'

خطایی که معمولاً به عنوان:

```
Warning: Too many out-of-order messages from player <ip>:<port> (<count>) Limit: x (messageholelimit)
```

نشان داده می‌شود زمانی اتفاق می‌افتد که 'پیام‌های خارج از ترتیب' از تنظیم messageholelimit دوباره استفاده می‌کند.

برای اطلاعات بیشتر در مورد این موضوع، به [اینجا](ControllingServer#rcon-commands) مراجعه کنید

## بازیکنان مدام خطای "Unacceptable NickName" دریافت می‌کنند اما معتبر است

اگر مطمئن هستید که از نام قابل قبولی استفاده می‌کنید و سرور روی ویندوز اجرا می‌شود، سعی کنید گزینه سازگاری samp-server.exe را به Windows 98 تغییر دهید و باید بعد از restart سرور تعمیر شود.

سرورهای ویندوز با up time بالا نیز ممکن است باعث بروز این مشکل شوند. این در حدود 50 روز up time سرور مشاهده شده است. برای حل آن، reboot لازم است.

## `MSVCR___.dll`/`MSVCP___.dll` پیدا نشد

این مشکل به طور منظم در سرورهای ویندوز هنگام تلاش برای بارگذاری پلاگینی که با نسخه بالاتری از Visual C++ runtime نسبت به آنچه در حال حاضر روی کامپیوتر شما نصب است توسعه یافته رخ می‌دهد. برای رفع این مشکل، کتابخانه‌های مناسب Microsoft Visual C++ runtime را دانلود کنید. توجه کنید که سرور SA-MP 32 bit است، بنابراین همچنین باید نسخه 32 bit (x86) از runtime را بدون توجه به معماری دانلود کنید. نسخه runtime که به طور خاص نیاز دارید با اعداد در نام فایل مشخص شده (جدول زیر را ببینید)، اگرچه نصب همه آنها ضرری ندارد. این کتابخانه‌ها stack نمی‌شوند، یا به عبارت دیگر: اگر فقط نسخه 2015 را نصب کنید، runtime های 2013 و نسخه‌های قبلی را دریافت نخواهید کرد.

| شماره نسخه | Runtime                                       |
| -------------- | --------------------------------------------- |
| 10.0           | Microsoft Visual C++ 2010 x86 Redistributable |
| 11.0           | Microsoft Visual C++ 2012 x86 Redistributable |
| 12.0           | Microsoft Visual C++ 2013 x86 Redistributable |
| 14.0           | Microsoft Visual C++ 2015 x86 Redistributable |