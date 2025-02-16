---
title: OnUnoccupiedVehicleUpdate
sidebar_label: OnUnoccupiedVehicleUpdate
description: Acest callback este apelat atunci când clientul unui jucător actualizează/sincronizează poziția unui vehicul pe care nu îl conduce.
tags: ["vehicle"]
---

## Descriere

Acest callback este apelat atunci când clientul unui jucător actualizează/sincronizează poziția unui vehicul pe care nu îl conduce. Acest lucru se poate întâmpla în afara vehiculului sau când jucătorul este pasagerul unui vehicul care nu are șofer.

| Name           | Descriere                                                                                                                                                      |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| vehicleid      | ID-ul jucătorului care a trimis o actualizare de sincronizare a poziției vehiculului.                                                                                                      |
| playerid       | ID-ul jucătorului care a trimis o sincronizare a poziției vehiculului                                                                                        |
| passenger_seat | ID-ul scaunului dacă jucătorul este pasager. 0=nu în vehicul, 1=pasager din față, 2=spate stânga 3=spate dreapta 4+ este pentru autocar/autobuz etc. cu multe locuri pentru pasageri. |
| new_x          | Noua coordonată X a vehiculului. Acest parametru a fost adăugat în 0,3z. Lasă-l afară dacă folosești o versiune anterioară.                                                 |
| new_y          | Noua coordonată Y a vehiculului. Acest parametru a fost adăugat în 0,3z. Lasă-l afară dacă folosești o versiune anterioară.                                                 |
| new_z          | Noua coordonată Z a vehiculului. Acest parametru a fost adăugat în 0,3z. Lasă-l afară dacă folosești o versiune anterioară.                                                 |
| vel_x          | Noua viteză X a vehiculului. Acest parametru a fost adăugat în 0,3z R4. Lasă-l afară dacă folosești o versiune anterioară.                                                |
| vel_y          | Noua viteză X a vehiculului. Acest parametru a fost adăugat în 0,3z R4. Lasă-l afară dacă folosești o versiune anterioară.                                                |
| vel_z          | Noua viteză X a vehiculului. Acest parametru a fost adăugat în 0,3z R4. Lasă-l afară dacă folosești o versiune anterioară.                                                |

## Returnări

Este întotdeauna numit primul în filterscript-uri, așa că returnarea 0 acolo blochează și alte scripturi să-l vadă.

## Exemple

```c
public OnUnoccupiedVehicleUpdate(vehicleid, playerid, passenger_seat, Float:new_x, Float:new_y, Float:new_z, Float:vel_x, Float:vel_y, Float:vel_z)
{
    // Verificați dacă s-a mutat departe
    if (GetVehicleDistanceFromPoint(vehicleid, new_x, new_y, new_z) > 50.0)
    {
        // Respinge actualizarea
        return 0;
    }

    return 1;
}
```

## Note

:::warning

Acest apel invers este apelat foarte frecvent pe secundă per vehicul neocupat. Ar trebui să vă abțineți de la implementarea unor calcule intensive sau operațiuni intensive de scriere/citire a fișierelor în acest apel invers. GetVehiclePos va returna coordonatele vechi ale vehiculului înainte de această actualizare.

:::

## Funcții similare