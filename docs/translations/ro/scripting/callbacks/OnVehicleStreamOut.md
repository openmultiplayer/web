---
title: OnVehicleStreamOut
description: Acest callback este apelat atunci când un vehicul este transmis în flux pentru clientul unui jucător (este atât de departe încât acesta nu îl poate vedea).
tags: ["vehicle"]
---

## Descriere

Acest callback este apelat atunci când un vehicul este transmis în flux pentru clientul unui jucător (este atât de departe încât acesta nu îl poate vedea).

| Nume        | Descriere                                                    |
| ----------- | ------------------------------------------------------------ |
| vehicleid   | ID-ul vehiculului care a ieșit.                              |
| forplayerid | ID-ul jucătorului care nu mai transmite vehiculul.           |

## Returnări

Este întotdeauna numit primul în filterscript-uri.

## Exemple

```c
public OnVehicleStreamOut(vehicleid, forplayerid)
{
    new string[48];
    format(string, sizeof(string), "Clientul dvs. nu mai transmite vehiculul %d", vehicleid);
    SendClientMessage(forplayerid, 0xFFFFFFFF, string);
    return 1;
}
```

## Note

<TipNPCCallbacks />

## Funcții similare