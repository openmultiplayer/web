---
title: Tipos de Hit
---

:::info

Para ser usado com [OnPlayerWeaponShot](../callbacks/OnPlayerWeaponShot).

:::

---

| Nome                          | Valor |
| ----------------------------- | ----- |
| BULLET_HIT_TYPE_NONE          | 0     |
| BULLET_HIT_TYPE_PLAYER        | 1     |
| BULLET_HIT_TYPE_VEHICLE       | 2     |
| BULLET_HIT_TYPE_OBJECT        | 3     |
| BULLET_HIT_TYPE_PLAYER_OBJECT | 4     |

---

:::caution

BULLET_HIT_TYPE_PLAYER também é chamado para NPCs. Atores são ignorados por esta callback e detetados como BULLET_HIT_TYPE_NONE.

:::
