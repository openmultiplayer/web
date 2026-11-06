---
title: "Klien open.mp di Linux"
sidebar_label: "Klien open.mp di Linux"
description: Panduan menjalankan klien open.mp di Linux.
---

# Panduan menjalankan klien open.mp di Linux

Launcher open.mp dapat dijalankan di Linux dengan dua cara:

- **Dengan GUI**, melalui Proton. Anda mendapat launcher lengkap dengan peramban server. Cara ini memerlukan Microsoft Edge WebView2 Runtime dan versi launcher yang mendukung Wine.
- **Melalui baris perintah**, dengan Wine apa pun. Cara ini berfungsi dengan semua versi launcher dan tidak memerlukan WebView2, tetapi tidak menyediakan GUI: setiap perintah hanya menghubungkan Anda ke satu server.

Kedua cara dimulai dengan penyiapan prefix yang sama. Setelah itu, ikuti **salah satu saja** dari kedua opsi.

## Menyiapkan prefix

Perintah di bawah menggunakan `~/Games/openmp` sebagai prefix dan `~/Downloads` untuk unduhan. Sesuaikan jalurnya dengan sistem Anda, dan selalu gunakan **prefix yang sama** di setiap langkah. Jalankan perintah ini di bash atau zsh. Jika Anda menggunakan fish, ketik `bash` terlebih dahulu.

:::tip

Cara baris perintah juga berfungsi dengan prefix yang dibuat melalui Lutris atau Bottles, jika GTA San Andreas dan launcher sudah terpasang di dalamnya. Dalam hal ini, lanjutkan ke [Opsi B](#option-b-command-line-only-any-wine).

:::

1. Instal [umu-launcher](https://github.com/Open-Wine-Components/umu-launcher) dari paket distribusi Anda (`umu-launcher` di Arch/CachyOS, Fedora, dan distribusi lainnya) atau dari halaman rilisnya. Alat ini menjalankan program Windows melalui Proton tanpa Steam.

2. Atur variabel berikut di terminal. Semua perintah di bawah akan menggunakannya:

```
export WINEPREFIX="$HOME/Games/openmp"
export GAMEID=umu-omplauncher
export STORE=none
```

Jika ingin menggunakan Proton tertentu, atur juga `PROTONPATH` ke foldernya, misalnya `export PROTONPATH="$HOME/.local/share/Steam/compatibilitytools.d/Proton-CachyOS Latest"`. Jika tidak diatur, umu-run akan mengunduh dan menggunakan GE-Proton.

3. Buat prefix. Proses pertama kali akan memerlukan waktu:

```
umu-run wineboot
```

4. Salin folder GTA San Andreas ke dalam prefix, misalnya ke `~/Games/openmp/drive_c/Games/GTA San Andreas`. Salin foldernya langsung, bukan symlink.

5. Unduh launcher portabel open.mp, `omp-launcher.exe`, dari [rilis terbaru](https://github.com/openmultiplayer/launcher/releases/latest) ke dalam prefix. Launcher ini dapat dijalankan tanpa instalasi. Jangan gunakan `omp-launcher-setup.exe`, karena installer mencoba memasang WebView2 sendiri dan gagal di dalam prefix.

```
mkdir -p "$WINEPREFIX/drive_c/Games/omp-launcher"
curl -fL https://github.com/openmultiplayer/launcher/releases/latest/download/omp-launcher.exe -o "$WINEPREFIX/drive_c/Games/omp-launcher/omp-launcher.exe"
```

Prefix sudah siap. Sekarang ikuti **salah satu saja** dari opsi berikut:

- Pilih [Opsi A: GUI launcher](#option-a-launcher-gui-proton) jika Anda ingin launcher lengkap dengan peramban server. **Disarankan.**
- Pilih [Opsi B: Hanya baris perintah](#option-b-command-line-only-any-wine) jika Anda hanya ingin terhubung ke server melalui perintah.

## Opsi A: GUI launcher (Proton) {#option-a-launcher-gui-proton}

:::warning

GUI memerlukan **Proton**. Di Wine standar, jendela launcher akan tetap putih.

:::

### Diuji pada:

- umu-launcher dengan Proton-CachyOS 11.0, WebView2 Runtime 156
- SteamOS 3.9.5 di Steam Deck dengan GE-Proton melalui Lutris
- Fedora Silverblue 44 dengan GE-Proton melalui Lutris (UMU-Proton tidak berfungsi dalam konfigurasi ini)
- Arch Linux dengan KDE Plasma di Wayland, PipeWire, dan Proton-CachyOS-SLR melalui salinan GTA:SA dari Steam (diturunkan ke versi 1.0, dijalankan di SLR)

:::note

Apakah GUI berhasil di konfigurasi lain (Proton atau Wine lain, Lutris, Bottles, Heroic, Steam, atau lingkungan desktop lain)? Laporkan di Discord atau GitHub open.mp dengan menyertakan distribusi, lingkungan desktop, versi Wine atau Proton, dan versi WebView2 agar dapat ditambahkan ke daftar ini.

:::

### Langkah-langkah:

1. Unduh WebView2 Runtime versi x86 dan instal ke dalam prefix. Jendela launcher dibuat dengan teknologi ini:

```
curl -fL "https://go.microsoft.com/fwlink/p/?LinkId=2124701" -o ~/Downloads/MicrosoftEdgeWebView2RuntimeInstallerX86.exe
umu-run ~/Downloads/MicrosoftEdgeWebView2RuntimeInstallerX86.exe /silent /install
```

Installer tidak menampilkan jendela. Jika output berhenti di `ntsync: up and running.`, installer mungkin masih berjalan. Ini normal; tunggu sampai perintah selesai dan prompt shell muncul kembali sebelum melanjutkan.

2. Jalankan launcher dengan Xalia dinonaktifkan untuk sesi ini:

```
PROTON_USE_XALIA=0 umu-run "$WINEPREFIX/drive_c/Games/omp-launcher/omp-launcher.exe"
```

Saat pertama kali dijalankan, launcher akan mengunduh file klien open.mp secara otomatis. Di pengaturan, atur lokasi game ke folder GTA San Andreas Anda (`C:\Games\GTA San Andreas` pada contoh), lalu pilih server dan mulai bermain.

3. Tambahkan launcher ke menu aplikasi agar dapat dijalankan seperti aplikasi lainnya. Proton tidak membuat entri menu secara otomatis. Jalankan ini satu kali dari terminal yang sama:

```
mkdir -p "$HOME/.local/share/applications" "$HOME/.local/share/icons"
curl -fL https://raw.githubusercontent.com/openmultiplayer/launcher/master/src-tauri/icons/128x128.png -o "$HOME/.local/share/icons/openmp-launcher.png"
PROTON_ENV=${PROTONPATH:+"\"PROTONPATH=$PROTONPATH\""}
cat > "$HOME/.local/share/applications/omp-launcher.desktop" <<EOF
[Desktop Entry]
Type=Application
Name=open.mp launcher
Comment=Peramban server untuk open.mp dan SA-MP
Exec=env "WINEPREFIX=$WINEPREFIX" GAMEID=umu-omplauncher STORE=none PROTON_USE_XALIA=0 $PROTON_ENV umu-run "$WINEPREFIX/drive_c/Games/omp-launcher/omp-launcher.exe"
Icon=$HOME/.local/share/icons/openmp-launcher.png
Categories=Game;
EOF
```

“open.mp launcher” kini muncul di menu aplikasi dan dapat disematkan ke taskbar atau desktop. `PROTON_USE_XALIA=0` mencegah asisten aksesibilitas Proton memperlambat launcher.

:::tip

Di Wine, launcher menggunakan rendering perangkat lunak (`--disable-gpu`), yang lebih cepat daripada jalur GPU di sana. Untuk meneruskan flag Chromium lainnya, atur `OMP_WEBVIEW2_ARGS`. Kosongkan nilainya untuk menggunakan GPU.

:::

## Opsi B: Hanya baris perintah (Wine apa pun) {#option-b-command-line-only-any-wine}

:::warning

GUI yang berfungsi TIDAK tersedia. Opsi ini harus dijalankan di prefix Wine melalui argumen baris perintah.

:::

### Diuji pada:

- Lutris: wine-ge 8-26 32-bit prefix
- Bottles: soda-9.0-1

### Langkah-langkah:

1. Unduh [klien SA-MP](https://www.sa-mp.mp/downloads/) dan instal dengan mengarahkan installer ke folder GTA San Andreas dari penyiapan prefix. GUI mengunduh file SA-MP secara otomatis, tetapi cara baris perintah memerlukan file tersebut sudah terpasang:

```
umu-run ~/Downloads/sa-mp-0.3.7-R5-1-install.exe
```

Gunakan nama file sesuai versi yang Anda unduh.

2. Unduh DLL klien open.mp terbaru. Buka [api.open.mp/launcher](https://api.open.mp/launcher) dan lihat bagian `versions`: pilih entri dengan nomor tertinggi, unduh `ompPluginDownload` miliknya (misalnya `https://assets.open.mp/omp-client-7.dll`), lalu pastikan MD5-nya cocok dengan `ompPluginChecksum` pada entri tersebut. Jangan gunakan `ompPluginDownload` di bagian atas halaman karena itu mengarah ke klien lama.

3. Simpan file dengan nama `omp-client.dll` (ganti namanya dan hapus nomor versi) di folder `AppData\Local\mp.open.launcher\omp\` milik pengguna utama di prefix Anda.

Di prefix umu, perintah berikut menjalankan kedua langkah tersebut sekaligus memeriksa MD5:

```
OMP_DIR="$WINEPREFIX/drive_c/users/steamuser/AppData/Local/mp.open.launcher/omp"
mkdir -p "$OMP_DIR"
read -r URL MD5 < <(curl -fsSL https://api.open.mp/launcher | python3 -c 'import json,sys; v=json.load(sys.stdin)["versions"]; e=v[max(v,key=int)]; print(e["ompPluginDownload"], e["ompPluginChecksum"])')
curl -fL "$URL" -o "$OMP_DIR/omp-client.dll"
echo "$MD5  $OMP_DIR/omp-client.dll" | md5sum -c
```

Baris terakhir harus menampilkan `OK`.

4. Jalankan launcher dengan server dan folder game sebagai argumen melalui baris perintah prefix (umu-run, Lutris, atau Bottles), atau buat skrip .bat agar launcher mudah dijalankan.

### Contoh perintah untuk menjalankan

```
Z:\path\to\omp-launcher.exe -h server.ip -p port -n user.name -g Z:\home\yourname\path\to\gta-san-andreas\install\
```

Di prefix umu yang disiapkan di atas:

```
umu-run "$WINEPREFIX/drive_c/Games/omp-launcher/omp-launcher.exe" -h server.ip -p port -n user.name -g "C:\Games\GTA San Andreas"
```

:::tip

Jalankan omp-launcher.exe dengan flag `--help` untuk melihat informasi flag lainnya jika contoh di atas belum cukup.

:::

## Pemecahan masalah

| Masalah | Solusi yang disarankan |
| -------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| Jendela launcher tetap putih | Anda menjalankan Wine standar. Jalankan launcher melalui Proton (lihat bagian GUI). |
| Jendela kosong dengan `PROTON_ENABLE_WAYLAND=1` | WebView2 tidak menampilkan jendelanya di Wayland native. Biarkan variabel ini tidak disetel agar launcher berjalan melalui XWayland. |
| Kesalahan WebView2 `0x80070002` saat mulai | WebView2 Runtime belum ada di prefix ini. Instal ke prefix yang sama dengan launcher. |
| Kesalahan WebView2 `0x80070005` tepat setelah ditutup | Proses WebView2 dari launcher sebelumnya belum berhenti. Tunggu beberapa detik lalu jalankan lagi. |
| Game mogok saat dijeda | Ada font yang hilang. Instal allfonts melalui winetricks untuk memperbaikinya. |
| Prompt login server tidak muncul | Coba aktifkan atau nonaktifkan pengaturan “Prefer system libraries” di Lutris. |
| Kotak hitam muncul dan game tidak dimuat | Parameter peluncuran CLI mungkin belum lengkap. Periksa perintah peluncuran Anda. |
