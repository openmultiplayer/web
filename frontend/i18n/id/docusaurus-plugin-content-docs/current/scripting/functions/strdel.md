---
title: strdel
sidebar_label: strdel
description: Menghapus bagian dari sebuah string.
tags: ["string"]
---

<LowercaseNote />

## Deskripsi

Menghapus bagian dari sebuah string.

| Nama     | Deskripsi                                |
| -------- | ---------------------------------------- |
| string[] | Bagian string yang akan dihapus.         |
| start    | Posisi karakter awal yang akan dihapus.  |
| end      | Posisi karakter akhir yang akan dihapus. |

## Returns

Fungsi ini tidak me-return value yang spesifik.

## Contoh

```c
new string[42] = "We will delete everything apart from this";
strdel(string, 0, 37); // string menjadi "this"
```

## Fungsi Terkait

- [strcmp](strcmp): Membanding dua string untuk mengecek apakah mereka sama.
- [strfind](strfind): Mencari sebuah string di string lainnya.
- [strins](strins): Memasukkan teks kedalam sebuah string.
- [strlen](strlen): Mendapatkan panjang dari sebuah string.
- [strmid](strmid): Mengekstrak bagian dari sebuah string ke string lainnya.
- [strpack](strpack): Membungkus sebuah string menjadi string baru.
- [strval](strval): Mengkonversi sebuah string menjadi integer.
- [strcat](strcat): Menggabungkan dua buah string menjadi sebuah string.
