---
title: strval
sidebar_label: strval
description: Mengkonversi sebuah string menjadi integer.
tags: ["string"]
---

<LowercaseNote />

## Deskripsi

Mengkonversi sebuah string menjadi integer.

| Nama           | Deskripsi                                    |
| -------------- | -------------------------------------------- |
| const string[] | String yang akan dikonversi menjadi integer. |

## Returns

Nilai integer dari sebuah string. 0 jika string bukan numerik.

## Contoh

```c
new string[4] = "250";
new iValue = strval(string); // iValue menjadi '250'
```

## Fungsi Terkait

- [strcmp](strcmp): Membanding dua string untuk mengecek apakah mereka sama.
- [strfind](strfind): Mencari sebuah string di string lainnya.
- [strdel](strdel): Menghapus bagian dari sebuah string.
- [strins](strins): Memasukkan teks kedalam sebuah string.
- [strlen](strlen): Mendapatkan panjang dari sebuah string.
- [strmid](strmid): Mengekstrak bagian dari sebuah string ke string lainnya.
- [strpack](strpack): Membungkus sebuah string menjadi string baru.
- [strcat](strcat): Menggabungkan dua buah string menjadi sebuah string.
