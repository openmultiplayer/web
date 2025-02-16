---
title: OnVehicleStreamIn
sidebar_label: OnVehicleStreamIn
description: Apelat atunci când un vehicul este transmis în flux la clientul unui jucător.
tags: ["vehicle"]
---

## Descriere

Numit atunci când un vehicul este transmis în flux la clientul unui jucător.

| Nume        | Descriere                                              |
| ----------- | ------------------------------------------------------ |
| vehicleid   | ID-ul vehiculului care a transmis în flux pentru jucător. |
| forplayerid | ID-ul jucătorului pentru care vehiculul a fost transmis în flux.  |

## Returnari

Acesta este întotdeauna numit primul în filterscripts.

## Exemple

```c
public OnVehicleStreamIn(vehicleid, forplayerid)
{
    new string[32];
    format(string, sizeof(string), "Acum poti sa vezi vehiculul %d.", vehicleid);
    SendClientMessage(forplayerid, 0xFFFFFFFF, string);
    return 1;
}
```

## Notite

<TipNPCCallbacks />

## Functii Relatate
