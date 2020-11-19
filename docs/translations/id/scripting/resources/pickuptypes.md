---
id: pickuptypes
title: Tipe Pickup
description: Informasi tentang tipe pickup
---

### Tipe Pickup yang Tersedia

:::note

ID lainnya ada yang tidak terdokumentasi atau serupa dengan tipe 1 (tapi jangan digunakan hanya karena sama seperti ID 1, ID tersebut mungkin memiliki efek-samping seperti ID 18 dan 20).

:::

| ID  | Deskripsi                                                                                                                                                                                  |
| --- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 0   | Pickup tidak selalu muncul. Jika muncul, pickup-nya tidak dapan diambil dan tidak memicu OnPlayerPickUpPickup dan tetap di situ setelah server dimatikan.                                  |
| 1   | Selalu tersedia. Mematikan skrip pickup, seperti tapal kuda dan cangkang kerang yang membolehkannya hanya aksi yang sudah di-skrip saja. Akan memicu OnPlayerPickUpPickup setiap detiknya. |
| 2   | Menghilang setelah diambil, muncul kembali setelah 30 detik jika player berada pada jarak paling sedikit 15 meter.                                                                         |
| 3   | Hilang setelah diambil, muncul kembali setelah mati.                                                                                                                                       |
| 4   | Hilang setelah 15 hingga 20 detik. Muncul kembali setelah mati.                                                                                                                            |
| 8   | Hilang setelah diambil, tapi tidak ada efek apapun.                                                                                                                                        |
| 11  | Meledak beberapa detik setelah dibuat. (bom?)                                                                                                                                              |
| 12  | Meledak beberapa detik setelah dibuat.                                                                                                                                                     |
| 13  | Tidak terlihat. Memicu suara cekpoin ketika diambil dengan kendaraan, tapi tidak memicu OnPlayerPickUpPickup.                                                                              |
| 14  | Hilang setelah diambil, hanya bisa diambil dengan kendaraan. Memicu suara cekpoin.                                                                                                         |
| 15  | Sama seperti tipe 2                                                                                                                                                                        |
| 18  | Serupa dengan tipe 1. Menekan tombol Tab (KEY_ACTION) membuatnya menghilang, tapi penekanan tombol tidak memicu OnPlayerPickUpPickup.                                                      |
| 19  | Hilang setelah diambil, tapi tidak muncul kembali. Memunculkan suara "uang terambil" ketika diambil.                                                                                       |
| 20  | Serupa dengan tipe 1. Hilang setelah mengambil gambarnya dengan senjata Camera, yang di mana memicu "Snapshot # out of 0" message. Mengambil gambar tidak memicu OnPlayerPickUpPickup      |
| 22  | Sama seperti tipe 3                                                                                                                                                                        |
