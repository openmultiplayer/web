---
title: OnVehiclePaintjob
description: Apelat atunci când un jucător previzualizează o vopsire a unui vehicul într-un magazin de mod.
tags: ["vehicle"]
---

## Descriere

Apelat atunci când un jucător previzualizează o vopsire a unui vehicul într-un magazin de mod.

| Nume       | Descriere                                                        |
| ---------- | ---------------------------------------------------------------- |
| playerid   | ID-ul jucătorului care a schimbat vopsirea vehiculului său.      |
| vehicleid  | ID-ul vehiculului căruia i s-a schimbat lucrările de vopsire.    |
| paintjobid | ID-ul noii lucrări de vopsire.                                   |

## Returnări

Este întotdeauna numit primul în modul de joc, astfel încât returnarea 0 acolo blochează alte filterscript-uri să-l vadă.

## Exemple

```c
public OnVehiclePaintjob(playerid, vehicleid, paintjobid)
{
    new string[128];
    format(string, sizeof(string), "Ați modificat vopsirea vehiculului dvs. la %d!", paintjobid);
    SendClientMessage(playerid, 0x33AA33AA, string);
    return 1;
}
```

## Note

:::tip

Acest apel invers nu este apelat de ChangeVehiclePaintjob. Puteți utiliza OnVehicleChangePaintjob de la vSync pentru a ști când jucătorul cumpără lucrarea.

:::

## Funcții similare

- [ChangeVehiclePaintjob](../functions/ChangeVehiclePaintjob): Schimbați vopsirea unui vehicul.
- [ChangeVehicleColor](../functions/ChangeVehicleColor): Setați culoarea unui vehicul.
- [OnVehicleRespray](OnVehicleRespray): apelat atunci când un vehicul este pulverizat.
- [OnVehicleMod](OnVehicleMod): Apelat atunci când un vehicul este modificat.