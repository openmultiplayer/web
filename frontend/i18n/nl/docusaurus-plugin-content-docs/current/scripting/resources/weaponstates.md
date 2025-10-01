---
title: "Wapenstatussen"
sidebar_label: "Wapenstatussen"
description: Constants voor wapenstatus.
---

De volgende wapenstatussen zijn beschikbaar (gebruikt door [GetPlayerWeaponState](../functions/GetPlayerWeaponState)):

| ID  | Definitie                | Beschrijving                                                                                                      |
| --- | ------------------------ | ----------------------------------------------------------------------------------------------------------------- |
| -1  | WEAPONSTATE_UNKNOWN      | Onbekend (bijv. in voertuig, spectate of wanneer [player state](../functions/GetPlayerState) PLAYER_STATE_SPAWNED is) |
| 0   | WEAPONSTATE_NO_BULLETS   | Huidig wapen heeft geen munitie                                                                                   |
| 1   | WEAPONSTATE_LAST_BULLET  | Huidig wapen heeft nog één kogel                                                                                   |
| 2   | WEAPONSTATE_MORE_BULLETS | Huidig wapen heeft meer dan één kogel                                                                              |
| 3   | WEAPONSTATE_RELOADING    | Speler is aan het herladen                                                                                        |


