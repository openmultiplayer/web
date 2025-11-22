---
title: ChangeVehiclePaintjob
sidebar_label: ChangeVehiclePaintjob
description: Baguhin ang paintjob ng sasakyan (para sa mga payak na kulay tingnan ang ChangeVehicleColor).
tags: ["vehicle"]
---

## Description

Change a vehicle's paintjob (for plain colors see ChangeVehicleColor).

| Name       | Description                                                                                           |
| ---------- | ----------------------------------------------------------------------------------------------------- |
| vehicleid  | Ang ID ng sasakyan na babaguhin ang paintjob                                                          |
| paintjobid | Ang ID ng [paintjob](../resources/paintjobs) na gagamitin. Gamitin ang 3 para matanggal ang paintjob. |

## Returns

Ang function na ito ay palaging nagbabalik ng 1 (tagumpay), kahit na ang sasakyang dumaan ay hindi nilikha.

:::warning

Kung itim ang kulay ng sasakyan , maaaring hindi makita ang paintjob. Mas mainam na gawing puti ang sasakyan bago ilapat ang painjob sa pamamagitan ng paggamit ng ChangeVehicleColor(vehicleid,1,1);

:::

## Examples

```c
new rand = random(3); // Magiging 0 1 o 2 (lahat ay valid)
ChangeVehicleColor(GetPlayerVehicleID(playerid),1,1); // siguraduhing puti ito para sa mas magandang resulta
ChangeVehiclePaintjob(GetPlayerVehicleID(playerid), rand); // binabago ang paintjob ng kasalukuyang sasakyan ng player sa isang random
```

## Related Functions

- [ChangeVehicleColor](ChangeVehicleColor): I-set ang kulay ng isang sasakyan.
- [OnVehiclePaintjob](../callbacks/OnVehiclePaintjob): Tinatawag kapag binago ang paintjob ng sasakyan.