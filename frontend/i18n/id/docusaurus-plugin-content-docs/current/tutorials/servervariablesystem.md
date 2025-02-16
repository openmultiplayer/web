---
title: Server variable system

description: Server variable system (disingkat, SVar) adalah cara baru untung membuat server variabel dalam cara mudah membuat method yang efisien, dengan begitu cara ini bisa dipakai di gamemode server dan filterscripts dalam waktu bersamaan.
---

**Server variable system** (disingkat, **SVar**) adalah cara baru untung membuat server variabel dalam cara mudah membuat method yang efisien, dengan begitu cara ini bisa dipakai di gamemode server dan filterscripts dalam waktu bersamaan.

Sistem ini mirip seperti [PVars](perplayervariablesystem), tetapi tidak terikat player ID.

:::warning

Sistem ini dikenalkan pada SA-MP 0.3.7 R2-1 dan tidak akan bisa berjalan pada versi dibawahnya!

:::

:::note

Sistem SVar ini mirip seperti PVars, tetapi variabel dibuat secara keseluruhan server, tidak terikat pada semua player ID, dan akan tetap sampai gamemode berganti.

:::

## Keuntungan

- SVars dapat di bagi/akses seluruh skrip gamemode dan filterscripts.

- Anda bisa dengan mudahnya menghitung dan menyimpan daftar SVar. Dengan ini memudahkan proses debugging.

- Walaupun SVar belum dibuat sama sekali, nilainya akan kembali ke nilai default yaitu 0.

- SVars dapat menampung string yang sangat besar menggunakan memori yang dialokasikan secara dinamis.

- Anda dapat Set, Get, dan Create SVars ingame.

## Kekurangan

- SVars lebih lambat dari variabel regular. Secara umum lebih menguntungkan untuk mengoptimalisasi memori untuk kecepatan, daripada sebaliknya.

## Fungsi yang Berelasi

- [SetSVarInt](../scripting/functions/SetSVarInt): mengatur sebuah nilai integer didalam variabel server.
- [GetSVarInt](../scripting/functions/GetSVarInt): mengambil nilai pemain yang sedang bermain dala bentuk integer.
- [SetSVarString](../scripting/functions/SetSVarString): mengatur sebuah nilai string didalam variabel server.
- [GetSVarString](../scripting/functions/GetSVarString): mengambil nilai yang sebelumnya telah diatur stringnya di dalam variabel server.
- [SetSVarFloat](../scripting/functions/SetSVarFloat): mengatur sebuah nilai float didalam server variabel.
- [GetSVarFloat](../scripting/functions/GetSVarFloat): mengambil nilai yang sebelumnya telah diatur floatnya di dalam variabel server.
- [DeleteSVar](../scripting/functions/DeleteSVar): hapus sebuah variabel server.
