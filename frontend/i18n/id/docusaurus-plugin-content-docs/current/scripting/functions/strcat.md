---
title: strcat
sidebar_label: strcat
description: Fungsi ini menggabungkan dua buah string menjadi sebuah string.
tags: ["string"]
---

<LowercaseNote />

## Deskripsi

Fungsi ini menggabungkan dua buah string menjadi sebuah string.

| Nama                  | Deskripsi                                 |
| --------------------- | ----------------------------------------- |
| dest[]                | Hasil dari string yang akan digabungkan.  |
| const source[]        | String awal.                              |
| maxlength=sizeof dest | Panjang maksimum dari hasil penggabungan. |

## Returns

Panjang dari Hasil string yang telah digabungkan.

## Contoh

```c
new string[40] = "Hello";
strcat(string, " World!");

// string nya menjadi 'Hello World!'
```

## Fungsi Terkait

- [strcmp](strcmp): Membanding dua string untuk mengecek apakah mereka sama.
- [strfind](strfind): Mencari sebuah string di string lainnya.
- [strdel](strdel): Menghapus bagian dari sebuah string.
- [strins](strins): Memasukkan teks kedalam sebuah string.
- [strlen](strlen): Mendapatkan panjang dari sebuah string.
- [strmid](strmid): Mengekstrak bagian dari sebuah string ke string lainnya.
- [strpack](strpack): Membungkus sebuah string menjadi string baru.
- [strval](strval): Mengkonversi sebuah string menjadi integer.
