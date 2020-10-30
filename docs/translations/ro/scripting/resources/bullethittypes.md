---
title: Tipuri de lovituri de glonț
---

:::info

Se foloseste in [OnPlayerWeaponShot](../callbacks/OnPlayerWeaponShot).

:::

---

| Nume                          | Valoare |
| ----------------------------- | ------- |
| BULLET_HIT_TYPE_NONE          | 0       |
| BULLET_HIT_TYPE_PLAYER        | 1       |
| BULLET_HIT_TYPE_VEHICLE       | 2       |
| BULLET_HIT_TYPE_OBJECT        | 3       |
| BULLET_HIT_TYPE_PLAYER_OBJECT | 4       |

---

:::caution

BULLET_HIT_TYPE_PLAYER este apelat și pentru NPC-uri. Actorii sunt ignorați de acest apel invers și detectează ca BULLET_HIT_TYPE_NONE.

:::
