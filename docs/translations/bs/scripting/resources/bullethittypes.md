---
title: Vrste Pogodaka Mecima
---

:::info

Ova stranica sadrži sve tipove pogodaka mecima koje koristi [OnPlayerWeaponShot](../callbacks/OnPlayerWeaponShot).

:::

---

| Vrijednost | Definicija                    |
| ---------- | ----------------------------- |
| 0          | BULLET_HIT_TYPE_NONE          |
| 1          | BULLET_HIT_TYPE_PLAYER        |
| 2          | BULLET_HIT_TYPE_VEHICLE       |
| 3          | BULLET_HIT_TYPE_OBJECT        |
| 4          | BULLET_HIT_TYPE_PLAYER_OBJECT |

---

:::caution

BULLET_HIT_TYPE_PLAYER je također pozvan za NPC-ove. Ovaj callback ignorira aktore i detektuje ih kao BULLET_HIT_TYPE_NONE.

:::
