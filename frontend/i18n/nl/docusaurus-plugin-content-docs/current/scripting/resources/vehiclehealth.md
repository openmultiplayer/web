---
title: "Voertuig health"
sidebar_label: "Voertuig health"
description: Waarden voor voertuig health.
---

:::info
De waarde (0–1000) voor [SetVehicleHealth](../functions/SetVehicleHealth)/[GetVehicleHealth](../functions/GetVehicleHealth). 0 explodeert; 1000 is onbeschadigd.
:::

| Health | Effect op motor                                   |
| ---------- | ------------------------------------------------- |
| > 650      | Geen problemen                                    |
| 550–650    | Oververhit; witte rook                            |
| 390–550    | Zwaar oververhit; grijze rook                     |
| 250–390    | Erg heet; zwarte rook                             |
| < 250      | Vliegt in brand; explodeert snel zonder reparatie |
