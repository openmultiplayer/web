---
title: "Schadestatus"
sidebar_label: "Schadestatus"
description: Informatie over voertuigschade en voorbeeldcode.
---

:::note
Gebruikt door [GetVehicleDamageStatus](../functions/GetVehicleDamageStatus) en [UpdateVehicleDamageStatus](../functions/UpdateVehicleDamageStatus).
:::

Voertuigschade bestaat uit vier waarden: Panels, Doors, Lights en Tires. Elke waarde is een bitmask dat de toestand van alle panelen/deuren/lampen/banden bevat; gebruik bitwise‑operators.

Zie ook: [Panel States](../resources/panelstates), [Door States](../resources/doorstates), [Light States](../resources/lightstates), [Tire States](../resources/tirestates).

Voor het coderen/decoderen kun je hulpfuncties gebruiken (identiek aan de Engelse voorbeelden).


