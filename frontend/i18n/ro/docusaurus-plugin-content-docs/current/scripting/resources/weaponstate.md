---
title: Statusurile armelor
sidebar_label: Statusurile armelor
description: Constantele pentru statusurile armelor
---

| ID  | Definitie                | Descriere                               |
| --- | ------------------------ | --------------------------------------- |
| -1  | WEAPONSTATE_UNKNOWN      | Necunoscuta (Seteaza cand e in vehicul) |
| 0   | WEAPONSTATE_NO_BULLETS   | Arma nu mai are gloante ramase          |
| 1   | WEAPONSTATE_LAST_BULLET  | Arma mai are decat un singur glont      |
| 2   | WEAPONSTATE_MORE_BULLETS | Arma are mai multe gloante              |
| 3   | WEAPONSTATE_RELOADING    | Jucatorul isi reincarca arma            |

## Functii relatate

- [GetPlayerWeaponState](../functions/GetPlayerWeaponState): Verifica starea armei unui jucator
