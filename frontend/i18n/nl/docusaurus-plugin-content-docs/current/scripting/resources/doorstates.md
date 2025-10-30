---
title: "Deurstatussen"
sidebar_label: "Deurstatussen"
description: Byte‑indeling en bijbehorende deurstatusbits.
---

:::note
Gebruikt door [GetVehicleDamageStatus](../functions/GetVehicleDamageStatus) en [UpdateVehicleDamageStatus](../functions/UpdateVehicleDamageStatus).
:::

Deurstatussen worden per deur in 1 byte opgeslagen: bit 0 geopend, bit 1 beschadigd, bit 2 verwijderd.

De bytes (van rechts naar links): 1=motorkap, 2=kofferbak, 3=bestuurdersdeur, 4=passagiersdeur.

Zie de Engelse pagina voor de volledige ASCII‑overzichtstabellen en code‑wrapper.


