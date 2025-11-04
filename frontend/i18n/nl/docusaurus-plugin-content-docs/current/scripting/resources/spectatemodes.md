---
title: "Spectate-modi"
sidebar_label: "Spectate-modi"
description: Spectate-modi gebruikt door PlayerSpectatePlayer en PlayerSpectateVehicle.
---

:::info
Gebruikt door [PlayerSpectatePlayer](../functions/PlayerSpectatePlayer) en [PlayerSpectateVehicle](../functions/PlayerSpectateVehicle).
:::

| Type                 | Effect                                                                                                                                                                                                                               |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| SPECTATE_MODE_NORMAL | Normale spectate-modus (third person). Camera kan niet worden veranderd                                                                                                                       |
| SPECTATE_MODE_FIXED  | Gebruik [SetPlayerCameraPos](../functions/SetPlayerCameraPos) om de camera te positioneren; volgt de speler/het voertuig uit `PlayerSpectatePlayer`/`PlayerSpectateVehicle`                   |
| SPECTATE_MODE_SIDE   | Camera wordt aan de zijkant van speler/voertuig bevestigd (vergelijkbaar met first-person op een motor bij een wheelie)                                                                       |


