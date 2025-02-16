---
title: Bullet Hit Types
sidebar_label: Bullet Hit Types
---

:::info

This page contains all of the bullet hit types which are used by [OnPlayerWeaponShot](../callbacks/OnPlayerWeaponShot).

:::

---

| Value | Definition                    |
| ----- | ----------------------------- |
| 0     | BULLET_HIT_TYPE_NONE          |
| 1     | BULLET_HIT_TYPE_PLAYER        |
| 2     | BULLET_HIT_TYPE_VEHICLE       |
| 3     | BULLET_HIT_TYPE_OBJECT        |
| 4     | BULLET_HIT_TYPE_PLAYER_OBJECT |

---

:::caution

BULLET_HIT_TYPE_PLAYER is also called for NPCs. Actors are ignored by this callback and detects as BULLET_HIT_TYPE_NONE.

:::
