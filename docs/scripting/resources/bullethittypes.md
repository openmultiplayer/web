---
title: "Bullet Hit Types | open.mp"
description: "This page contains all of the bullet hit types which are used by OnPlayerWeaponShot."
canonical: https://open.mp/docs/scripting/resources/bullethittypes
language: en
---

# Bullet Hit Types

info

This page contains all of the bullet hit types which are used by [OnPlayerWeaponShot](https://open.mp/docs/scripting/callbacks/OnPlayerWeaponShot).

* * *

| Value | Definition |
| --- | --- |
| 0 | BULLET\_HIT\_TYPE\_NONE |
| 1 | BULLET\_HIT\_TYPE\_PLAYER |
| 2 | BULLET\_HIT\_TYPE\_VEHICLE |
| 3 | BULLET\_HIT\_TYPE\_OBJECT |
| 4 | BULLET\_HIT\_TYPE\_PLAYER\_OBJECT |

* * *

caution

BULLET\_HIT\_TYPE\_PLAYER is also called for NPCs. Actors are ignored by this callback and detects as BULLET\_HIT\_TYPE\_NONE.
