---
title: OnVehicleRespray
description: Acest callback este apelat atunci când un jucător iese dintr-un magazin de mod, chiar dacă culorile nu au fost schimbate.
tags: ["vehicle"]
---

## Descriere

Acest callback este apelat atunci când un jucător iese dintr-un magazin de mod, chiar dacă culorile nu au fost schimbate. Atenție, numele este ambiguu, magazinele Pay 'n' Spray nu apelează la acest apel.

| Nume      | Descriere                                                    |
| --------- | ------------------------------------------------------------ |
| playerid  | ID-ul jucătorului care conduce vehiculul.                    |
| vehicleid | ID-ul vehiculului care a fost pulverizat.                    |
| color1    | Culoarea în care a fost schimbată culoarea principală a vehiculului.   |
| color2    | Culoarea în care a fost schimbată culoarea secundară a vehiculului.    |

## Returnări

It is always called first in gamemode so returning 0 there also blocks other filterscripts from seeing it.

## Exemple

```c
public OnVehicleRespray(playerid, vehicleid, color1, color2)
{
    new string[48];
    format(string, sizeof(string), "Ați modificat vehiculul %d în culorile %d și %d!", vehicleid, color1, color2);
    SendClientMessage(playerid, COLOR_GREEN, string);
    return 1;
}
```

## Note

:::tip

Acest apel invers nu este apelat de ChangeVehicleColor. În mod înșelător, acest apel invers nu este apelat pentru pay 'n' spray (doar modshop-uri).

Remediați aici: http://pastebin.com/G81da7N1

:::

:::warning

Erori cunoscute: previzualizarea unei componente într-un magazin de mod ar putea apela acest apel invers.

:::

## Funcții similare

- [ChangeVehicleColor](../functions/ChangeVehicleColor): Setați culoarea unui vehicul.
- [ChangeVehiclePaintjob](../functions/ChangeVehiclePaintjob): Schimbați vopsirea unui vehicul.
- [OnVehiclePaintjob](OnVehiclePaintjob): apelat atunci când se modifică vopsirea unui vehicul.
- [OnVehicleMod](OnVehicleMod): Apelat atunci când un vehicul este modificat.
- [OnEnterExitModShop](OnEnterExitModShop): apelat atunci când un vehicul intră sau iese dintr-un magazin de mod.