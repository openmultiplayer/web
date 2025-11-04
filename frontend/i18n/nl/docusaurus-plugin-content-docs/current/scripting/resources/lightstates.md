---
title: "Lichtstatussen"
sidebar_label: "Lichtstatussen"
description: Byte‑indeling en bijbehorende lichtstatusbits.
---

:::note
Gebruikt door [GetVehicleDamageStatus](../functions/GetVehicleDamageStatus) en [UpdateVehicleDamageStatus](../functions/UpdateVehicleDamageStatus).
:::

Lichtschade wordt in 1 byte opgeslagen: bit 0 = voor‑links, bit 2 = voor‑rechts, bit 6 = achterlichten. 1 = kapot, 0 = heel. Zie [Light States](/docs/scripting/resources/lightstates) voor volledige voorbeelden en ASCII‑overzichten.


