---
title: "Spelerstatussen"
sidebar_label: "Spelerstatussen"
description: Lijst van spelerstatussen gebruikt door GetPlayerState en OnPlayerStateChange.
tags: ["player"]
---

Deze pagina bevat de lijst met spelerstatussen gebruikt door [GetPlayerState](../functions/GetPlayerState) en de callback [OnPlayerStateChange](../callbacks/OnPlayerStateChange).

## Statussen

| ID  | Macro                                | Beschrijving                                                                        |
| --- | ------------------------------------ | ----------------------------------------------------------------------------------- |
| 0   | PLAYER_STATE_NONE                    | Standaardstatus tijdens initialisatie                                               |
| 1   | PLAYER_STATE_ONFOOT                  | Speler is te voet                                                                   |
| 2   | PLAYER_STATE_DRIVER                  | Speler bestuurt een voertuig                                                        |
| 3   | PLAYER_STATE_PASSENGER               | Speler is passagier in een voertuig                                                 |
| 4   | PLAYER_STATE_EXIT_VEHICLE            | Speler stapt uit een voertuig (voornamelijk intern)                                 |
| 5   | PLAYER_STATE_ENTER_VEHICLE_DRIVER    | Speler stapt in als bestuurder (voornamelijk intern)                                |
| 6   | PLAYER_STATE_ENTER_VEHICLE_PASSENGER | Speler stapt in als passagier (voornamelijk intern)                                 |
| 7   | PLAYER_STATE_WASTED                  | Speler is dood of in klasseselectie                                                 |
| 8   | PLAYER_STATE_SPAWNED                 | Speler is zojuist gespawned                                                         |
| 9   | PLAYER_STATE_SPECTATING              | Speler is in spectatormodus                                                         |


