---
title: strpack
description: Membungkus sebuah string
tags: ["string"]
---

## Deskripsi
String yang telah dibungkus menggunakan 75% memory lebih sedikit

| Name                        | Description                                                               |
| --------------------------- | ------------------------------------------------------------------------- |
| dest[]                      | Tempat untuk menyimpan hasil string yang sudah dibungkus                  |
| const source[]              | Sumber dari string yang akan diambil                                      |
| maxlength = sizeof (string) | Jumlah maksimal yang bisa dimasukan                                       |

## Returns

Jumlah karakter dari string yang sudah dikemas

## Contoh

```c
new str[32 char];
strpack(str, "Salam kenal semua");
```

## Fungsi yang terkait

- [strcmp](strcmp): Membandingkan dua string untuk mengecek apakah mereka sama
- [strfind](strfind): Mencari string didalam string.
- [strins](strins): Memasukan teks kedalam suatu string.
- [strlen](strlen): Mendapatkan panjang dari suatu string.
- [strmid](strmid): Mengekstrak bagian dari sebuah string ke dalam string lainnya.
- [strval](strval): Mengubah sebuah string menjadi bilangan bulat
- [strcat](strcat): Menggabungkan dua string string menjadi refrensi tujuan.
- [strdel](strdel): Menghapus bagian dari suatu string.
