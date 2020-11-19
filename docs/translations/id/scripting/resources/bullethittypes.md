---
id: bullethittypes
title: Jenis Peluru yang Ditembakkan
---

:::info

ID ini untuk digunakan dengan [OnPlayerWeaponShot](../callbacks/OnPlayerWeaponShot).

:::

---

| Nama                          | Nilai |
| ----------------------------- | ----- |
| BULLET_HIT_TYPE_NONE          | 0     |
| BULLET_HIT_TYPE_PLAYER        | 1     |
| BULLET_HIT_TYPE_VEHICLE       | 2     |
| BULLET_HIT_TYPE_OBJECT        | 3     |
| BULLET_HIT_TYPE_PLAYER_OBJECT | 4     |

---

:::caution

BULLET_HIT_TYPE_PLAYER juga digunakan untuk NPC. Actor diabaikan oleh callback ini dan terdeteksi sebagai BULLET_HIT_TYPE_NONE.

:::
