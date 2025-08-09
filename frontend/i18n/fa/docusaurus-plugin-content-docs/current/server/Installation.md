---
title: "راه اندازی سرور"
sidebar_label: "راه اندازی سرور"
description: راه اندازی سرور
---

**این آموزش برای کسانی است که می‌خواهند گیم مود خود را از سرور SA:MP به سرور open.mp منتقل کنند.**

:::note

اگر از پلاگین FCNPC استفاده می‌کنید، لطفاً فعلاً متوقف شوید زیرا این پلاگین در حال حاضر برای open.mp کار نمی‌کند.

:::

## گام 1

آخرین نسخه فایل‌های سرور open.mp را از [https://github.com/openmultiplayer/open.mp/releases](https://github.com/openmultiplayer/open.mp/releases/latest) دانلود کنید

![](<https://raw.githubusercontent.com/adib-yg/openmp-server-installation/refs/heads/main/screenshots/Screenshot%20(1).png>)

- `open.mp-win-x86.zip` سرور **ویندوز**
- `open.mp-linux-x86.tar.gz` سرور **لینوکس**
- `open.mp-linux-x86-dynssl.tar.gz` سرور **لینوکس** (Dynamic SSL)

## گام 2

محتویات آرشیو `.zip` یا `.tar.gz` را روی دیسک خود extract کنید

![](<https://raw.githubusercontent.com/adib-yg/openmp-server-installation/refs/heads/main/screenshots/Screenshot%20(3).png>)

:::note

- **components:** کامپوننت‌های open.mp
- **filterscripts:** فایل‌های فیلتر اسکریپت سرور شما (اسکریپت‌های جانبی)
- **gamemodes:** فایل‌های گیم مود سرور شما (اسکریپت‌های اصلی)
- **models:** مدل‌های سفارشی سرور شما (بافت‌ها .txd .dff)
- **plugins:** فایل‌های پلاگین سرور شما (پلاگین‌های قدیمی)
- **qawno:** برنامه ویرایشگر Pawn و include های سرور شما
- **scriptfiles:** فایل‌های INI یا چیزهای دیگر.
- **bans.json:** فایل لیست بن
- **config.json:** فایل پیکربندی سرور
- **omp-server.exe:** برنامه سرور open.mp
- **omp-server.pdb:** فایل دیباگ سرور open.mp

:::

## گام 3

فایل گیم مود `.pwn` خود را در پوشه **gamemodes** قرار دهید

## گام 4

include های مورد نیاز (مثلاً `sscanf2.inc`، `streamer.inc`) را در پوشه **qawno/include** قرار دهید

:::note

اگر از include های YSI-4 در گیم مود خود استفاده می‌کنید، به [YSI-5.x](https://github.com/pawn-lang/YSI-Includes/releases) بروزرسانی کنید

:::

## گام 5

پلاگین‌های مورد نیاز (مثلاً `sscanf.dll`، `streamer.dll`) را در پوشه **plugins** قرار دهید

<hr />

:::warning

اگر از پلاگین‌های زیر در جدول استفاده می‌کنید، باید نسخه‌ای از پلاگین که با omp سازگار است قرار دهید!

پلاگین‌های زیر را در پوشه **../components** قرار دهید، نه در پوشه **../plugins**!

:::

| پلاگین            | OMP                                                                          |
| ----------------- | ---------------------------------------------------------------------------- |
| Pawn.CMD          | https://github.com/katursis/Pawn.CMD/releases/tag/3.4.0-omp                  |
| Pawn.RakNet       | https://github.com/katursis/Pawn.RakNet/releases/tag/1.6.0-omp               |
| sampvoice         | https://github.com/AmyrAhmady/sampvoice/releases/tag/v3.1.5-omp              |
| discord-connector | https://github.com/maddinat0r/samp-discord-connector/releases/tag/v0.3.6-pre |
| SKY               | به جای آن از Pawn.RakNet استفاده کنید                                      |
| YSF               | شما نیازی به YSF ندارید زیرا open.mp قبلاً بیشتر همان native ها را اعلان کرده |
| FCNPC             | در حال حاضر پشتیبانی نمی‌شود                                                      |

## گام 6

برنامه IDE qawno واقع در **Server/qawno/qawno.exe** را باز کنید

![](<https://raw.githubusercontent.com/adib-yg/openmp-server-installation/refs/heads/main/screenshots/Screenshot%20(5).png>)

## گام 7

**CTRL + O** فشار دهید سپس به پوشه **../gamemodes** بروید و فایل گیم مود `.pwn` خود را باز کنید

## گام 8

پیدا کنید

```pawn
#include <a_samp>
```

جایگزین کنید با

```pawn
#include <open.mp>
```

سپس **F5** فشار دهید تا کامپایل شود.

## گام 9

فایل **[config.json](https://www.open.mp/docs/server/config.json)** را با Notepad یا IDE های دیگر باز کنید

![](<https://raw.githubusercontent.com/adib-yg/openmp-server-installation/refs/heads/main/screenshots/Screenshot%20(9).png>)

## گام 10

**config.json** را ویرایش کنید

![](<https://raw.githubusercontent.com/adib-yg/openmp-server-installation/refs/heads/main/screenshots/Screenshot%20(11).png>)

پیدا کنید

```json
"main_scripts": [
    "gungame 1"
],
```

جایگزین کنید با

```json
"main_scripts": [
    "your_gamemode_amx_file_name 1"
],
```

<hr />

پیدا کنید

```json
"legacy_plugins": [],
```

پلاگین‌های مورد نیاز را مشخص کنید

```json
"legacy_plugins": [
    "crashdetect",
    "mysql",
    "sscanf",
    "streamer",
    "PawnPlus",
    "pawn-memory"
],
```

<hr />

پیدا کنید

```json
"side_scripts": []
```

فیلتر اسکریپت‌های خود را مشخص کنید

```json
"side_scripts": [
    "filterscripts/file_name"
]
```

<hr />

پیدا کنید

```json
"rcon": {
    "allow_teleport": false,
    "enable": false,
    "password": "changeme1"
},
```

رمز عبور قوی برای rcon وارد کنید:

```json
"rcon": {
    "allow_teleport": false,
    "enable": false,
    "password": "151sd80hgse32q1oi0v8dsge166"
},
```

**CTRL + S** فشار دهید تا تغییرات ذخیره شود.

:::tip

راهنمایی در مورد نحوه تبدیل `server.cfg` به `config.json` در https://www.open.mp/docs/server/config.json موجود است

:::

## گام 11

سرور را اجرا کنید

- **ویندوز**

برنامه `omp-server.exe` را باز کنید

![](<https://raw.githubusercontent.com/adib-yg/openmp-server-installation/refs/heads/main/screenshots/Screenshot%20(10).png>)

- **لینوکس**

```bash
./omp-server
```

## خطاها و هشدارهای کامپایلر

- **warning 213: tag mismatch: expected tag "?", but found none ("\_")**:

مثال:

```pawn
TogglePlayerControllable(playerid, 1);
// ->
TogglePlayerControllable(playerid, true);
```

<br />

```pawn
TextDrawFont(textid, 1);
// ->
TextDrawFont(textid, TEXT_DRAW_FONT_1);
```

<br />

```pawn
GivePlayerWeapon(playerid, 4, 1);
// ->
GivePlayerWeapon(playerid, WEAPON_KNIFE, 1);
```

اما می‌توانید فعلاً آن را نادیده بگیرید:

```pawn
#define NO_TAGS
#include <open.mp>

// اگر هشدار همچنان رخ می‌دهد
// از #pragma warning disable 213 استفاده کنید
```

<br />

<hr />

- **warning 234: function is deprecated (symbol "TextDrawColor") Use `TextDrawColour**

**CTRL + F** در qawno فشار دهید و همه `TextDrawColor` را با `TextDrawColour` جایگزین کنید

![](<https://raw.githubusercontent.com/adib-yg/openmp-server-installation/refs/heads/main/screenshots/Screenshot%20(7).png>)

<br />

یا اگر ترجیح می‌دهید می‌توانید از املای ترکیبی استفاده کنید:

```pawn
#define MIXED_SPELLINGS
#include <open.mp>
```

<br />

<hr />

- **warning 234: function is deprecated (symbol "GetPlayerPoolSize") This function is fundamentally broken.**
- **warning 234: function is deprecated (symbol "GetVehiclePoolSize") This function is fundamentally broken.**
- **warning 234: function is deprecated (symbol "GetActorPoolSize") This function is fundamentally broken.**

`GetPlayerPoolSize()` را با `MAX_PLAYERS` جایگزین کنید

`GetVehiclePoolSize()` را با `MAX_VEHICLES` جایگزین کنید

`GetActorPoolSize()` را با `MAX_ACTORS` جایگزین کنید

<hr />

- **warning 234: function is deprecated (symbol "SHA256_PassHash") Use BCrypt for hashing passwords**

از پلاگین [samp-bcrypt](https://github.com/Sreyas-Sreelal/samp-bcrypt) برای hash کردن رمزهای عبور استفاده کنید. SHA-256 امن نیست.

<hr />

- **warning 214: possibly a "const" array argument was intended: "?"**
- **warning 239: literal array/string passed to a non-const parameter**

مثال:

```pawn
public MyFunction(string[])
// ->
public MyFunction(const string[])
```

<br />

<hr />

- **error 025: function heading differs from prototype**

مثال:

```pawn
public OnPlayerDeath(playerid, killerid, reason)
// ->
public OnPlayerDeath(playerid, killerid, WEAPON:reason)
```

<br />

```pawn
public OnPlayerEditAttachedObject(playerid, response, index, modelid, boneid, Float:fOffsetX, Float:fOffsetY, Float:fOffsetZ, Float:fRotX, Float:fRotY, Float:fRotZ, Float:fScaleX, Float:fScaleY, Float:fScaleZ)
// ->
public OnPlayerEditAttachedObject(playerid, EDIT_RESPONSE:response, index, modelid, boneid, Float:fOffsetX, Float:fOffsetY, Float:fOffsetZ, Float:fRotX, Float:fRotY, Float:fRotZ, Float:fScaleX, Float:fScaleY, Float:fScaleZ)
```

<br />

<hr />

:::note

ابزار بروزرسانی نیز وجود دارد که سعی می‌کند کد قدیمی untagged و const-incorrect را پیدا کرده و بروزرسانی کند.

https://github.com/openmultiplayer/upgrade

قبلاً در پوشه `/qawno/upgrader` گنجانده شده.

:::

## خطاها و هشدارهای Runtime

```
[Info] Couldn't announce legacy network to open.mp list.
[Info] [Server Error] Status: 406
[Info] [Server Error] Message: {"error":"failed to query server: socket read timed out"}
[Info] This won't affect the server's behaviour.
```

- سرور شما از وبسایت open.mp در دسترس نیست.
- احتمالاً سرور را به صورت محلی اجرا می‌کنید.
- فایروال اتصال را مسدود کرده است.

**این هشدار بر رفتار سرور تأثیر نخواهد گذاشت.**

<br />

<hr />

```
[Warning] Insufficient specifiers given to `format`: "?" < 1
```

تعداد specifier ها کمتر از آرگومان‌هایی است که در format ارسال می‌کنید. مثال:

```pawn
new string[32];
new mp[32] = ".MP";

format(string, sizeof(string), "OPEN", mp);
// [Warning] Insufficient specifiers given to `format`: "OPEN" < 1

// باید باشد:
format(string, sizeof(string), "OPEN%s", mp);
//                                  ^^
```

## اسناد مفید

توابع و callback های اسکریپت‌نویسی جدید را بررسی کنید: https://www.open.mp/docs/server/omp-functions

اگر کاملاً تازه‌کار در برنامه‌نویسی Pawn هستید: [readme-beginner](https://github.com/openmultiplayer/omp-stdlib/blob/master/documentation/readme-beginner.md)

اگر در سطح متوسط برنامه‌نویسی Pawn هستید: [readme-intermediate](https://github.com/openmultiplayer/omp-stdlib/blob/master/documentation/readme-intermediate.md)

اگر در سطح خبره برنامه‌نویسی Pawn هستید: [readme-expert](https://github.com/openmultiplayer/omp-stdlib/blob/master/documentation/readme-expert.md)

پست بلاگ: [Porting to open.mp](https://www.open.mp/blog/porting)

## کمک

اگر همچنان مشکلی در اجرای سرور دارید، لطفاً به سرور رسمی Discord open.mp بپیوندید: https://discord.gg/samp

در کانال [#openmp-support](https://discord.com/channels/231799104731217931/966398440051445790) سوال کنید.