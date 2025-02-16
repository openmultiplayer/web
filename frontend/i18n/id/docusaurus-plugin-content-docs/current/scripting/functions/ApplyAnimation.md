---
title: ApplyAnimation
sidebar_label: ApplyAnimation
description: Digunakan untuk mengaplikasikan animasi ke pemain.
tags: []
---

## Deskripsi

Mengaplikasikan animasi ke pemain.

| Nama       | Deskripsi                                                                                                                                                                                                                                                                                                 |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| playerid   | ID dari pemain yang akan di aplikasikan animasi                                                                                                                                                                                                                                                           |
| animlib[]  | library animasi yang akan digunakan untuk mengaplikasikan animasi                                                                                                                                                                                                                                                       |
| animname[] | Nama animasi yang akan diterapkan, dengan library yang sudah ditentukan.                                                                                                                                                                                                                                            |
| fDelta     | Kecepatan untuk memainkan animasi (gunakan 4.1).                                                                                                                                                                                                                                                                    |
| loop       | Jika di atur menjadi 1, animasi akan melakukan perulangan. Jika di atur menjadi 0, animasi akan mengulang hanya sekali.                                                                                                                                                                                                                              |
| lockx      | Jika di atur menjadi 0, pemain dikembalikan ke kordinat x lama mereka setelah animasi selesai (untuk animasi yang menggerakkan pemain seperti berjalan). 1 tidak akan mengembalikan ke yang lama. position.                                                                                                             |
| locky      | Sama seperti di atas tetapi untuk sumbu Y. Harus tetap sama dengan parameter sebelumnya.                                                                                                                                                                                                                          |
| freeze     | Mengatur ke 1 akan membuat pemain membeku di akhir animasi. 0 tidak akan membeku.                                                                                                                                                                                                                             |
| time       | Waktu dalam millidetik. Untuk pengulangan yang tidak pernah berakhir harus menggunakan 0.                                                                                                                                                                                                                                                |
| forcesync  |  Mengaturnya menjadi 1 membuat server menyinkronkan animasi kepada semua pemain lain dalam radius streaming (opsional). 2 berfungsi sama dengan 1, tetapi hanya akan menerapkan animasi ke pemain yang di-streaming, tetapi bukan pemain yang sebenarnya sedang dianimasikan (berguna untuk animasi NPC dan animasi yang terus-menerus saat pemain sedang streaming) |

## Returns

Fungsi ini selalu mengembalikan 1, bahkan jika pemain yang ditentukan tidak ada, atau salah satu parameter tidak valid (misalkan library tidak valid).

## Contoh

```c
ApplyAnimation(playerid, "PED", "WALK_DRUNK", 4.1, 1, 1, 1, 1, 1, 1);
```

## Catatan

:::tip

parameter opsional 'forcesync' bawaannya adalah 0, dalam banyak kasus tidak diperlukan karena pemain menyinkronkan animasi itu sendiri. Parameter 'forcesync' dapat memaksa semua pemain yang dapat melihat 'playerid' untuk memutar animasi terlepas dari apakah pemain melakukan animasi itu atau tidak. Ini berguna dalam keadaan di mana pemain tidak dapat menyinkronkan animasi itu sendiri. Misalnya, mereka mungkin dijeda.

:::

:::warning

Animasi yang invalid dapat menyebabkan game pemain menjadi crash/tidak berjalan.

:::

## Fungsi Terkait

- [ClearAnimations](ClearAnimations): membersihkan animasi pada pemain yang sedang berlangsung.
- [SetPlayerSpecialAction](SetPlayerSpecialAction): Mengatur tindakan khusus pemain.
