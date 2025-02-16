---
title: strfind
sidebar_label: strfind
description: Mencari sebuah sub-string di dalam sebuah string.
tags: ["string"]
---

<LowercaseNote />

## Deskripsi

Mencari sebuah sub-string di dalam sebuah string.

| Nama                  | Deskripsi                                                                                                            |
| --------------------- | -------------------------------------------------------------------------------------------------------------------- |
| const string[]        | String yang ingin anda telusuri (haystack).                                                                          |
| const sub[]           | String yang ingin anda cari (needle).                                                                                |
| ignorecase (opsional) | Saat di set true, besar/kecil huruf tidak mempengaruhi - HeLLo sama dengan Hello. Saat di set false, mereka berbeda. |
| Position (opsional)   | Posisi untuk memulai pencarian                                                                                       |

## Returns

Jumlah karakter sebelum sub-string (posisi awal sub-string) atau -1 jika tidak ditemukan.

## Contoh

```c
if (strfind("Are you in here?", "you", true) != -1) //me-return 4, karena awalan 'you' (y) ada di indeks 4 dalam string
{
    SendClientMessageToAll(0xFFFFFFFF, "I found you!");
}
```

## Fungsi Terkait

- [strcmp](strcmp): Membanding dua string untuk mengecek apakah mereka sama.
- [strdel](strdel): Menghapus bagian dari sebuah string.
- [strins](strins): Memasukkan teks kedalam sebuah string.
- [strlen](strlen): Mendapatkan panjang dari sebuah string.
- [strmid](strmid): Mengekstrak bagian dari sebuah string ke string lainnya.
- [strpack](strpack): Membungkus sebuah string menjadi string baru.
- [strval](strval): Mengkonversi sebuah string menjadi integer.
- [strcat](strcat): Menggabungkan dua buah string menjadi sebuah string.
