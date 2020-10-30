---
id: limits
title: Limits
description: Sebuah daftar dari semua batasan yang diberlakukan oleh game/server.
tags: []
---

## Entitas In-game

| Tipe                                                           | Batasan       |
| -------------------------------------------------------------- | ------------- |
| Pemain                                                         | 1000          |
| Kendaraan (4)(6)                                               | 2000          |
| Model Kendaraan (1)                                            | Tak hingga    |
| Objek (4)(6)                                                   | 1000          |
| Dunia Virtual (_Virtual Worlds_)                               | 2,147,483,647 |
| Interior                                                       | 256           |
| Kelas                                                          | 320           |
| Ikon Peta (4)                                                  | 100           |
| Cekpoin Balap (_Race Checkpoints_) (4)                         | 1             |
| Cekpoin (4)                                                    | 1             |
| Pickup (4)                                                     | 4096          |
| Label 3D Global (4)                                            | 1024          |
| Label Teks 3D per-pemain (4)                                   | 1024          |
| String Chat Bubble                                             | 144 karakter  |
| Panjang teks SetObjectMaterialText,SetPlayerObjectMaterialText | 2048 karakter |
| Zona Gang (_Gangzone_)                                         | 1024          |
| Menu                                                           | 128           |
| Objek player terpasang                                         | 10            |
| Variable Player                                                | 800           |
| Aktor (since 0.3.7) (4)(5)                                     | 1000          |
| Ledakan                                                        | 10            |

## Properti Server

| Tipe                         | Batasan             |
| ---------------------------- | ------------------- |
| Gamemodes                    | 16                  |
| Filterscripts                | 16                  |
| Masukan Teks (Chat/Perintah) | 128 sel (512 bytes) |
| Keluaran Teks                | 144 sel (576 bytes) |
| Panjang Nama (SetPlayerName) | 24 karakter         |

## Textdraws

| Type                                                 | Limit         |
| ---------------------------------------------------- | ------------- |
| Panjang string (2)                                   | 1024 karakter |
| Yang dapat ditampilkan dalam 1 layar klien (3)       | 2048 + 256    |
| Yang dapat ditampilkan dalam 1 layar klien (sprites) | 100           |
| Dibuat oleh _server_ (Global)                        | 2048          |
| Dibuat oleh _server_ (Per-Player)                    | 256           |

## Dialog

| Tipe                                                                | Batasan |
| ------------------------------------------------------------------- | ------- |
| ID Dialog                                                           | 32768   |
| Info (Teks utama)                                                   | 4096    |
| Judul                                                               | 64      |
| Kotak Teks Masukan (_Input Text Box_) (DIALOG_STYLE_INPUT/PASSWORD) | 128     |
| Jumlah Kolom pada Daftar Tab (DIALOG_STYLE_TABLIST(\_HEADERS))      | 4       |
| Karakter Kolom pada Daftar Tab (DIALOG_STYLE_TABLIST(\_HEADERS))    | 128     |
| Karakter Baris pada Daftar Tab (DIALOG_STYLE_TABLIST(\_HEADERS))    | 256     |

Catatan:

1. Meskipun batasan model kendaraan di 0.3 adalah tak hingga, jika Anda menggunakan model kendaraan dalam jumlah besar, maka akan memengaruhi performa klien.
2. Meskipun batasan string textdraw adalah 1024 karakter, jika kode warna (contoh: ~r~) digunakan pada karakter ke-255 atau lebih, maka memungkinkan klien akan _crash_.
3. Ini memungkinkan untuk memunculkan semua Textdraw dalam satu waktu untuk satu play, bagaimanapun ini tidak direkomendasikan.
4. Untuk mengatasi batasan-batasan ini, dapat menggunakan sebuah [streamer](https://github.com/samp-incognito/samp-streamer-plugin). Streamer hanya bekerja membuat entitas, dll. yang dekat dengan pemain.
5. Dikarenakan batasan pada klien hanya dapat memunculkan hingga 51 aktor dalam satu waktu.
6. ID Kendaraan dan ID Object dimulai dari 1 dan dengan demikian memiliki rentang dari 1 hingga 1999, meskipun MAX_VEHICLES bernilai 2000.
