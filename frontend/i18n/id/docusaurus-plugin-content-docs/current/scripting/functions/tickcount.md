---
title: tickcount
sidebar_label: tickcount
description: Fungsi ini mengembalikan angka milisekon saat dari server menyala.
tags: []
---

<LowercaseNote />

## Deskripsi

Fungsi ini dapat digunakan untuk mengganti GetTickCount, pada saat mengembalikan angka milisekon dari saat server menyala.

| Nama           | Deskripsi                                                                                                                                                                                |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| &granularity=0 | Saat return, nilai ini berisi jumlah tik yang akan dicentang oleh waktu internal sistem per detik. Oleh karena itu, nilai ini menunjukkan keakuratan nilai return dari fungsi ini. |

## Returns

Jumlah milidetik sejak server menyala. Untuk sel 32-bit, hitungan ini akan melebihi setelah kira-kira 24 hari operasi berkelanjutan.

## Fungsi Terkait

- [GetTickCount](GetTickCount): Mendapatkan waktu uptime server.
