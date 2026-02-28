---
title: Estados de Arma
sidebar_label: Estados de Arma
description: Constantes de estado de arma.
---

Os seguintes estados de arma estão disponíveis e são usados pela função [GetPlayerWeaponState](../functions/GetPlayerWeaponState):

| ID  | Definition               | Description                                                                                                                      |
| --- | ------------------------ | -------------------------------------------------------------------------------------------------------------------------------- |
| -1  | WEAPONSTATE_UNKNOWN      | Desconhecido (definido quando está em veículo, em espectador ou quando o [estado do jogador](../functions/GetPlayerState) é PLAYER_STATE_SPAWNED) |
| 0   | WEAPONSTATE_NO_BULLETS   | A arma atual do jogador não possui munição restante                                                                              |
| 1   | WEAPONSTATE_LAST_BULLET  | A arma atual do jogador possui apenas uma bala restante                                                                          |
| 2   | WEAPONSTATE_MORE_BULLETS | A arma atual do jogador possui mais de uma bala restante                                                                         |
| 3   | WEAPONSTATE_RELOADING    | O jogador está recarregando sua arma atual                                                                                       |
