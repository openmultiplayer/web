---
title: strmid
sidebar_label: strmid
description: Mengekstrak bagian dari sebuah string ke string lainnya.
tags: ["string"]
---

<LowercaseNote />

## Deskripsi

Mengekstrak bagian dari sebuah string ke string lainnya.

| Name                  | Deskripsi                                                   |
| --------------------- | ----------------------------------------------------------- |
| dest[]                | Tempat string untuk menyimpan hasil ekstrak karakter.       |
| const source[]        | String untuk mengekstrak karakter.                          |
| start                 | Posisi karakter awal.                                       |
| end                   | Posisi karakter akhir.                                      |
| maxlength=sizeof dest | Panjang karakter. (Akan menjadi ukuran dest secara default) |

## Returns

Jumlah karakter yang diekstrak ke dest[]

## Contoh

```c
strmid(string, "Extract 'HELLO' without the !!!!: HELLO!!!!", 34, 39); //string berisi "HELLO"
```

## Fungsi Terkait

- [strcmp](strcmp): Membanding dua string untuk mengecek apakah mereka sama.
- [strfind](strfind): Mencari sebuah string di string lainnya.
- [strins](strins): Memasukkan teks kedalam sebuah string.
- [strlen](strlen): Mendapatkan panjang dari sebuah string.
- [strpack](strpack): Membungkus sebuah string menjadi string baru.
- [strval](strval): Mengkonversi sebuah string menjadi integer.
- [strcat](strcat): Menggabungkan dua buah string menjadi sebuah string.
- [strdel](strdel): Menghapus bagian dari sebuah string.
