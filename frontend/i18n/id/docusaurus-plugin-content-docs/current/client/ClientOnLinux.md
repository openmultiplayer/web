---
title: "Open.MP Klien di linux"
sidebar_label: "Open.MP Klien di linux"
description: "Bagaimana cara menjalankan klien Open.MP di linux"
---

# Bagaimana cara menjalankan klien Open.MP di linux

:::warning

You DO NOT get a working GUI, this must be executed in a Wine prefix via command line arguments.

:::

### Diuji pada:

- Lutris: wine-ge 8-26 32-bit prefix
- Bottles: soda-9.0-1

### Bagaimana caranya:

1. Pastikan kamu punya Wine yang dibuat dengan menginstall GTA San Andreas Multiplayer
2. Download [Open.MP Launcher](https://github.com/openmultiplayer/launcher/releases/latest) dan diinstall di Wine
3. Download [SA-MP client](https://github.com/KrustyKoyle/files.sa-mp.com-Archive) dan diinstall di Wine
4. Downloadd [omp-client.dll](https://assets.open.mp/omp-client.dll) lalu copy file tersebut ke folder `AppData\Local\mp.open.launcher\omp\`

Finally, you can execute the open.mp launcher through the Wine prefixes CLI or write it to a .bat script for easy launching.


### Contoh
```
Z:\path\to\omp-launcher.exe -h server.ip -p port -n user.name -g Z:\home\yourname\path\to\gta-san-andreas\install\
```

:::tip

Kamu bisa menjalankan omp-launcher.exe dengan flag --help untuk mendapatkan informasi lebih lanjut

:::

### Mengatasi masalah

| Masalah | Seharusnya diperbaiki |
|---------|-----------------------|
| Game ngecrash ketika dijeda | Ada font yang hilang, install semua font melalui winetricks untuk mengatasi masalah ini |
| Tidak menampilkan prompt login di server | Coba aktifkan/nonaktifkan pengaturan "Prefer system libraries" di lutris |
| Munculnya kotak hitam sehingga game tidak bisa memuat | Kamu mungkin melewatkan parameter pada CLI. Silahkan diperiksa lagi |
