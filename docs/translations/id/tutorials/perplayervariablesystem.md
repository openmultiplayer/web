---
title: Per-player variable system
description: Sistem per-player variable (atau pendeknya, PVar) adalah cara baru untuk membuat variabel player dalam bentuk yang efisien membuat method secara global, artinya mereka dapan menggunakan gamemode server dan filterscripts secara bersamaan.
---

Sistem per-player variable (atau pendeknya, PVar) adalah cara baru untuk membuat variabel player dalam bentuk yang efisien membuat method secara global, artinya mereka dapan menggunakan gamemode server dan filterscripts secara bersamaan.

Hal ini mirip dengan [SVars](servervariablesystem), namun dalam basis per-player. Lihat 2 post terakhir di dalam thread ini untuk mempelajari lebih lanjut perbedaan antara pawn properties dan PVars.

## Keuntungan

Sistem baru diperkenalkan di SA-MP 0.3a R5 server di update dengan beberapa keuntungan besar dalam membuat array sized MAX_PLAYERS.

- PVars dapat di bagi/akses keseluruh skrip gamemode dan filterscripts, memudahkan anda untuk memodularisasikan kodingan anda.

- PVars akan otomatis terhapus setelah player logout dari server (setelah OnPlayerDisconnect), berarti anda tidak perlu mereset secara manual variable untuk player selanjutnya bergabung.

- Tidak perlu struktur info enums/player yang kompleks.

- Menghemat memori dengan tidak mengalokasi elemen array pawn untuk playerids dimana tidak akan pernah digunakan.

- Anda dapat dengan mudah menghitung dan mencetak/menyimpan PVar list. Ini membuat debugging dan penyimpanan info player lebih mudah.

- Bahkan jika PVar belum dibuat, tetap akan mengembalikan nilai default 0.

- PVar dapat menyimpan string yang sangat besar menggunakan memori yang dialokasikan secara dinamis.

- Anda dapat Set, Get, Create PVar didalam ingame.

## Kelemahan

- PVars beberapa kali lebih lambat dari variabel biasa. Secara umum lebih menguntungkan untuk mengakali memori speed, daripada sebaliknya.

## Functions

Berikut adalah Functions untuk mengatur dan menerima player variable:

- [SetPVarInt](../scripting/functions/SetPVarInt) Mengatur sebuah integer dari sebuah player variable.
- [GetPVarInt](../scripting/functions/GetPVarInt) Mengambil nilai integer sebelumnya dari sebuah player variable.
- [SetPVarString](../scripting/functions/SetPVarString) Mengatur sebuah string dari sebuah player variable.
- [GetPVarString](../scripting/functions/GetPVarString) Mengambil nilai string sebelumnya dari sebuah player variable.
- [SetPVarFloat](../scripting/functions/SetPVarFloat) Mengatur sebuah float dari sebuah player variable.
- [GetPVarFloat](../scripting/functions/GetPVarFloat) Mengambil nilai float sebelumnya dari sebuah player variable.
- [DeletePVar](../scripting/functions/DeletePVar) Menghapus sebuah player variable.

```c
#define PLAYER_VARTYPE_NONE   (0)
#define PLAYER_VARTYPE_INT    (1)
#define PLAYER_VARTYPE_STRING (2)
#define PLAYER_VARTYPE_FLOAT  (3)
```
