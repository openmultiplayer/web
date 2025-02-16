---
title: strcmp
sidebar_label: strcmp
description: Fungsi ini membandingkan kedua string untuk mengecek apakah mereka sama.
tags: ["string"]
---

<LowercaseNote />

## Deskripsi

Fungsi ini membandingkan kedua string untuk mengecek apakah mereka sama.

| Nama                  | Deskripsi                                                                                                                                    |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| string1               | String pertama yang akan di bandingkan.                                                                                                      |
| string2               | String kedua yang akan di bandingkan.                                                                                                        |
| ignorecase (opsional) | Saat di set true, besar/kecil huruf tidak mempengaruhi - HeLLo sama dengan Hello. Saat di set false, mereka berbeda.                         |
| length (opsional)     | Saat panjang nya di set, karakter pertama x akan di bandingkan - "Hello" dan "Hell No" dengan panjang nya 4 akan melaporkan string nya sama. |

## Returns

0 jika stringnya sama dengan lainnya pada panjang tertentu;1 atau -1 jika sebuah karakter tidak sama: string1[i] - string2[i] ('i' mewakili indeks karakter dimulai dari 0);perbedaan jumlah karakter jika satu string cocok dengan bagian dari string lain.

## Contoh

```c
new string1[] = "Hello World";
new string2[] = "Hello World";

// Cek apakah string nya sama
if (!strcmp(string1, string2))

new string3[] = "Hell";

// Cek apakah 4 karakter string awal sama
if (!strcmp(string2, string3, false, 4))

// Cek string kosong dengan isnull()
if (!strcmp(string1, string2) && !isnull(string1) && !isnull(string2))

// Definisi dari isnull():
#if !defined isnull
    #define isnull(%1) ((!(%1[0])) || (((%1[0]) == '\1') && (!(%1[1]))))
#endif
```

## Catatan

:::warning

Fungsi ini me-return 0 jika stringnya kosong. Cek string kosong dengan isnull(). Jika anda bandingkan strings dari sebuah file teks, anda harus mempertimbangkan karakter khusus seperti 'carriage return' dan 'new line' (\r \n), seperti yang telah disertakan, saat menggunakan fread.

:::

## Fungsi Terkait

- [strfind](strfind): Mencari sebuah string di string lainnya.
- [strdel](strdel): Menghapus bagian dari sebuah string.
- [strins](strins): Memasukkan teks kedalam sebuah string.
- [strlen](strlen): Mendapatkan panjang dari sebuah string.
- [strmid](strmid): Mengekstrak bagian dari sebuah string ke string lainnya.
- [strpack](strpack): Membungkus sebuah string menjadi string baru.
- [strval](strval): Mengkonversi sebuah string menjadi integer.
- [strcat](strcat): Menggabungkan dua buah string menjadi sebuah string.
- http://www.compuphase.com/pawn/String_Manipulation.pdf
