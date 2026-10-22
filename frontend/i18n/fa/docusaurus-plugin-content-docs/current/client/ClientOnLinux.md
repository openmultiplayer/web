---
title: "کلاینت open.mp در لینوکس"
sidebar_label: "کلاینت open.mp در لینوکس"
description: راهنمای اجرای کلاینت open.mp در لینوکس.
---

# راهنمای اجرای کلاینت open.mp در لینوکس

لانچر open.mp را می‌توان در لینوکس به دو روش اجرا کرد:

- **با رابط گرافیکی** و از طریق Proton. در این حالت به لانچر کامل همراه با مرورگر سرورها دسترسی دارید. این روش به Microsoft Edge WebView2 Runtime و نسخه‌ای از لانچر که از Wine پشتیبانی کند نیاز دارد.
- **از طریق خط فرمان** و با هر نسخه‌ای از Wine. این روش با همه نسخه‌های لانچر کار می‌کند و به WebView2 نیاز ندارد، اما رابط گرافیکی ندارد: هر فرمان فقط به یک سرور متصل می‌شود.

هر دو روش با تنظیم یکسان prefix شروع می‌شوند. سپس **فقط یکی** از دو گزینه را دنبال کنید.

## تنظیم prefix

فرمان‌های زیر از `~/Games/openmp` به‌عنوان prefix و از `~/Downloads` برای فایل‌های دانلودشده استفاده می‌کنند. مسیرها را متناسب با سیستم خود تغییر دهید و در همه مراحل از **همان prefix** استفاده کنید. فرمان‌ها را در bash یا zsh اجرا کنید. اگر از fish استفاده می‌کنید، ابتدا `bash` را وارد کنید.

:::tip

روش خط فرمان با prefix ساخته‌شده در Lutris یا Bottles هم کار می‌کند، به شرطی که GTA San Andreas و لانچر از قبل در آن نصب شده باشند. در این صورت به [گزینه B](#option-b-command-line-only-any-wine) بروید.

:::

1. [umu-launcher](https://github.com/Open-Wine-Components/umu-launcher) را از بسته‌های توزیع خود (`umu-launcher` در Arch/CachyOS، Fedora و توزیع‌های دیگر) یا از صفحه انتشارهای آن نصب کنید. این ابزار برنامه‌های ویندوز را از طریق Proton و بدون Steam اجرا می‌کند.

2. این متغیرها را در ترمینال تنظیم کنید. همه فرمان‌های بعدی از آن‌ها استفاده می‌کنند:

```
export WINEPREFIX="$HOME/Games/openmp"
export GAMEID=umu-omplauncher
export STORE=none
```

اگر می‌خواهید از نسخه مشخصی از Proton استفاده کنید، `PROTONPATH` را هم روی پوشه آن تنظیم کنید؛ برای مثال `export PROTONPATH="$HOME/.local/share/Steam/compatibilitytools.d/Proton-CachyOS Latest"`. اگر آن را تنظیم نکنید، umu-run نسخه GE-Proton را دانلود و استفاده می‌کند.

3. prefix را بسازید. اجرای نخست کمی زمان می‌برد:

```
umu-run wineboot
```

4. پوشه GTA San Andreas را به داخل prefix کپی کنید؛ برای نمونه در `~/Games/openmp/drive_c/Games/GTA San Andreas`. خود پوشه را کپی کنید و از symlink استفاده نکنید.

5. نسخه قابل‌حمل لانچر open.mp، یعنی `omp-launcher.exe` را از [آخرین انتشار](https://github.com/openmultiplayer/launcher/releases/latest) دانلود و در prefix قرار دهید. این فایل بدون نصب اجرا می‌شود. از `omp-launcher-setup.exe` استفاده نکنید؛ چون نصب‌کننده تلاش می‌کند WebView2 را خودش نصب کند و در prefix با خطا روبه‌رو می‌شود.

```
mkdir -p "$WINEPREFIX/drive_c/Games/omp-launcher"
curl -fL https://github.com/openmultiplayer/launcher/releases/latest/download/omp-launcher.exe -o "$WINEPREFIX/drive_c/Games/omp-launcher/omp-launcher.exe"
```

prefix آماده است. حالا **فقط یکی** از این گزینه‌ها را دنبال کنید:

- اگر لانچر کامل با مرورگر سرورها را می‌خواهید، [گزینه A: رابط گرافیکی لانچر](#option-a-launcher-gui-proton) را انتخاب کنید. **پیشنهادی.**
- اگر فقط می‌خواهید با فرمان به یک سرور وصل شوید، [گزینه B: فقط خط فرمان](#option-b-command-line-only-any-wine) را انتخاب کنید.

## گزینه A: رابط گرافیکی لانچر (Proton) {#option-a-launcher-gui-proton}

:::warning

رابط گرافیکی به **Proton** نیاز دارد. در Wine معمولی، پنجره لانچر سفید می‌ماند.

:::

### آزمایش‌شده با:

- umu-launcher با Proton-CachyOS 11.0 و WebView2 Runtime 156
- SteamOS 3.9.5 روی Steam Deck با GE-Proton از طریق Lutris
- Fedora Silverblue 44 با GE-Proton از طریق Lutris (UMU-Proton در این پیکربندی کار نکرد)
- Arch Linux با KDE Plasma روی Wayland، PipeWire و Proton-CachyOS-SLR از طریق نسخه Steam بازی GTA:SA (به نسخه 1.0 برگشت داده شد و در SLR اجرا می‌شود)

:::note

اگر رابط گرافیکی را با پیکربندی دیگری راه‌اندازی کرده‌اید (نسخه دیگری از Proton یا Wine، Lutris، Bottles، Heroic، Steam یا محیط دسکتاپ دیگر)، لطفاً در Discord یا GitHub پروژه open.mp گزارش دهید و توزیع، محیط دسکتاپ، نسخه Wine یا Proton و نسخه WebView2 را ذکر کنید تا به این فهرست اضافه شود.

:::

### روش کار:

1. نسخه x86 از WebView2 Runtime را دانلود و در prefix نصب کنید. پنجره لانچر بر پایه آن ساخته شده است:

```
curl -fL "https://go.microsoft.com/fwlink/p/?LinkId=2124701" -o ~/Downloads/MicrosoftEdgeWebView2RuntimeInstallerX86.exe
umu-run ~/Downloads/MicrosoftEdgeWebView2RuntimeInstallerX86.exe /silent /install
```

نصب‌کننده پنجره‌ای نشان نمی‌دهد. اگر خروجی ترمینال روی `ntsync: up and running.` متوقف شد، ممکن است نصب‌کننده هنوز در حال اجرا باشد. این طبیعی است؛ پیش از ادامه صبر کنید تا فرمان تمام شود و اعلان خط فرمان دوباره ظاهر شود.

2. لانچر را برای این اجرا با غیرفعال‌کردن Xalia اجرا کنید:

```
PROTON_USE_XALIA=0 umu-run "$WINEPREFIX/drive_c/Games/omp-launcher/omp-launcher.exe"
```

در نخستین اجرا، لانچر فایل‌های کلاینت open.mp را به‌طور خودکار دانلود می‌کند. در تنظیمات، مسیر بازی را روی پوشه GTA San Andreas خود قرار دهید (در مثال، `C:\Games\GTA San Andreas`) و سپس یک سرور را انتخاب و بازی را شروع کنید.

3. لانچر را به منوی برنامه‌ها اضافه کنید تا از این پس مانند هر برنامه دیگری اجرا شود. Proton خودش ورودی منو ایجاد نمی‌کند. این فرمان را یک بار از همان ترمینال اجرا کنید:

```
mkdir -p "$HOME/.local/share/applications" "$HOME/.local/share/icons"
curl -fL https://raw.githubusercontent.com/openmultiplayer/launcher/master/src-tauri/icons/128x128.png -o "$HOME/.local/share/icons/openmp-launcher.png"
PROTON_ENV=${PROTONPATH:+"\"PROTONPATH=$PROTONPATH\""}
cat > "$HOME/.local/share/applications/omp-launcher.desktop" <<EOF
[Desktop Entry]
Type=Application
Name=open.mp launcher
Comment=مرورگر سرورهای open.mp و SA-MP
Exec=env "WINEPREFIX=$WINEPREFIX" GAMEID=umu-omplauncher STORE=none PROTON_USE_XALIA=0 $PROTON_ENV umu-run "$WINEPREFIX/drive_c/Games/omp-launcher/omp-launcher.exe"
Icon=$HOME/.local/share/icons/openmp-launcher.png
Categories=Game;
EOF
```

اکنون «open.mp launcher» در منوی برنامه‌ها نمایش داده می‌شود و می‌توانید آن را به نوار وظیفه یا دسکتاپ سنجاق کنید. `PROTON_USE_XALIA=0` مانع کند شدن لانچر به‌دلیل دستیار دسترس‌پذیری Proton می‌شود.

:::tip

در Wine، لانچر با رندر نرم‌افزاری (`--disable-gpu`) اجرا می‌شود که از مسیر GPU در آن محیط سریع‌تر است. برای فرستادن گزینه‌های دیگر Chromium، `OMP_WEBVIEW2_ARGS` را تنظیم کنید. برای استفاده از GPU، آن را خالی بگذارید.

:::

## گزینه B: فقط خط فرمان (هر نسخه‌ای از Wine) {#option-b-command-line-only-any-wine}

:::warning

رابط گرافیکی قابل‌استفاده‌ای در دسترس نیست. این روش باید در یک prefix مربوط به Wine و با آرگومان‌های خط فرمان اجرا شود.

:::

### آزمایش‌شده با:

- Lutris: wine-ge 8-26 32-bit prefix
- Bottles: soda-9.0-1

### روش کار:

1. [کلاینت SA-MP](https://www.sa-mp.mp/downloads/) را دانلود و نصب کنید و هنگام نصب، پوشه GTA San Andreas از مرحله تنظیم prefix را انتخاب کنید. رابط گرافیکی فایل‌های SA-MP را خودکار دانلود می‌کند، اما در روش خط فرمان باید آن‌ها را نصب کنید:

```
umu-run ~/Downloads/sa-mp-0.3.7-R5-1-install.exe
```

از نام فایل نسخه‌ای که دانلود کرده‌اید استفاده کنید.

2. آخرین DLL کلاینت open.mp را دانلود کنید. [api.open.mp/launcher](https://api.open.mp/launcher) را باز کنید و در بخش `versions`، موردی را که بالاترین شماره را دارد پیدا کنید. `ompPluginDownload` آن مورد (برای نمونه `https://assets.open.mp/omp-client-7.dll`) را دانلود کنید و مطمئن شوید MD5 با `ompPluginChecksum` همان مورد مطابقت دارد. از `ompPluginDownload` بالای صفحه استفاده نکنید، چون به کلاینت قدیمی اشاره می‌کند.

3. نام فایل را به `omp-client.dll` تغییر دهید (شماره نسخه را حذف کنید) و آن را در پوشه `AppData\Local\mp.open.launcher\omp\` کاربر اصلی prefix ذخیره کنید.

در prefix مربوط به umu، فرمان‌های زیر هر دو مرحله را انجام می‌دهند و MD5 را هم بررسی می‌کنند:

```
OMP_DIR="$WINEPREFIX/drive_c/users/steamuser/AppData/Local/mp.open.launcher/omp"
mkdir -p "$OMP_DIR"
read -r URL MD5 < <(curl -fsSL https://api.open.mp/launcher | python3 -c 'import json,sys; v=json.load(sys.stdin)["versions"]; e=v[max(v,key=int)]; print(e["ompPluginDownload"], e["ompPluginChecksum"])')
curl -fL "$URL" -o "$OMP_DIR/omp-client.dll"
echo "$MD5  $OMP_DIR/omp-client.dll" | md5sum -c
```

خط آخر باید `OK` را نمایش دهد.

4. لانچر را با آدرس سرور و پوشه بازی به‌عنوان آرگومان، از خط فرمان prefix (umu-run، Lutris یا Bottles) اجرا کنید؛ یا برای اجرای آسان‌تر یک اسکریپت .bat بنویسید.

### نمونه فرمان اجرا

```
Z:\path\to\omp-launcher.exe -h server.ip -p port -n user.name -g Z:\home\yourname\path\to\gta-san-andreas\install\
```

در prefix مربوط به umu که در بالا تنظیم شد:

```
umu-run "$WINEPREFIX/drive_c/Games/omp-launcher/omp-launcher.exe" -h server.ip -p port -n user.name -g "C:\Games\GTA San Andreas"
```

:::tip

اگر نمونه بالا کافی نیست، omp-launcher.exe را با گزینه `--help` اجرا کنید تا اطلاعات بیشتری درباره گزینه‌ها ببینید.

:::

## عیب‌یابی

| مشکل | راه‌حل پیشنهادی |
| -------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| پنجره لانچر سفید می‌ماند | از Wine معمولی استفاده می‌کنید. لانچر را از طریق Proton اجرا کنید (بخش رابط گرافیکی را ببینید). |
| پنجره خالی با `PROTON_ENABLE_WAYLAND=1` | WebView2 پنجره خود را در Wayland بومی نمایش نمی‌دهد. این متغیر را تنظیم نکنید تا لانچر از طریق XWayland اجرا شود. |
| خطای WebView2 با کد `0x80070002` هنگام اجرا | WebView2 Runtime در این prefix نصب نشده است. آن را در همان prefix لانچر نصب کنید. |
| خطای WebView2 با کد `0x80070005` بلافاصله پس از بستن | فرایند WebView2 مربوط به اجرای قبلی لانچر هنوز بسته نشده است. چند ثانیه صبر کنید و دوباره اجرا کنید. |
| بازی هنگام مکث از کار می‌افتد | یک قلم کم است. برای رفع مشکل، بسته allfonts را با winetricks نصب کنید. |
| پیام ورود به سرور نمایش داده نمی‌شود | گزینه “Prefer system libraries” را در Lutris روشن یا خاموش کنید. |
| کادر سیاه ظاهر می‌شود و بازی بارگیری نمی‌شود | شاید پارامترهای اجرا در CLI ناقص باشند. فرمان اجرا را بررسی کنید. |
