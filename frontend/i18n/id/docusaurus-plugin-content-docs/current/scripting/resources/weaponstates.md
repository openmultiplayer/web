---
id: weaponstates
title: Keadaan Senjata
description: Konstanta Keadaan Senjata
---

| ID  | Definisi                 | Deskripsi                                          |
| --- | ------------------------ | -------------------------------------------------- |
| -1  | WEAPONSTATE_UNKNOWN      | Tidak diketahui (Diatur ketika di dalam kendaraan) |
| 0   | WEAPONSTATE_NO_BULLETS   | Senjata tidak memiliki peluru yang tersisa         |
| 1   | WEAPONSTATE_LAST_BULLET  | Senjata memiliki sisa 1 peluru                     |
| 2   | WEAPONSTATE_MORE_BULLETS | Senjata memiliki banyak peluru                     |
| 3   | WEAPONSTATE_RELOADING    | Pemain sedang memuat ulang senjatanya              |

## Fungsi Terkait

- [GetPlayerWeaponState](../functions/GetPlayerWeaponState): Memeriksa keadaan senjatanya pemain.
