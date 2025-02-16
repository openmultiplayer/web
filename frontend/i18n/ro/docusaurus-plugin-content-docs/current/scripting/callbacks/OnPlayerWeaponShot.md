---
title: OnPlayerWeaponShot
description: Acest callback este apelat atunci când un jucător trage o lovitură dintr-o armă.
tags: ["player"]
---

## Descriere

Acest callback este apelat atunci când un jucător trage o lovitură dintr-o armă. Sunt acceptate doar armele cu gloanțe. Este acceptată doar trecerea pasagerilor (nu șoferul și nu loviturile de vrăbii de mare/vânători).

| Nume                    | Descriere                                                                                                            |
|-------------------------|----------------------------------------------------------------------------------------------------------------------|
| playerid                | ID-ul jucătorului care a împușcat o armă.                                                                            |
| WEAPON:weaponid         | ID-ul [armei](../resources/weaponids) împușcat de jucător.                                                           |
| BULLET_HIT_TYPE:hittype | [Tipul](../resources/bullethittypes) a obiectului lovit (niciunul, jucătorul, vehiculul sau obiectul (jucătorului)). |
| hitid                   | ID-ul jucătorului, vehiculului sau obiectului care a fost lovit.                                                     |
| Float:fX                | Coordonata X pe care a lovit împușcătura.                                                                            |
| Float:fY                | Coordonata Y pe care a lovit împușcătura.                                                                            |
| Float:fZ       | Coordonata Z pe care a lovit împușcătura.                                                                 |

## Returnări

0 - Preveniți glonțul să provoace daune.

1 - Lăsați glonțul să provoace daune.

Este întotdeauna numit primul în filterscript-uri, așa că returnarea 0 acolo blochează și alte scripturi să-l vadă.

## Exemple

```c
public OnPlayerWeaponShot(playerid, WEAPON:weaponid, BULLET_HIT_TYPE:hittype, hitid, Float:fX, Float:fY, Float:fZ)
{
    new szString[144];
    format(szString, sizeof(szString), "Arma %i trasă. hittype: %i hitid: %i poziție: %f, %f, %f", weaponid, hittype, hitid, fX, fY, fZ);
    SendClientMessage(playerid, -1, szString);
    return 1;
}
```

## Note

:::tip

Acest apel invers este apelat numai când este activată compensarea întârzierii. Dacă hittype este:

- `BULLET_HIT_TYPE_NONE`: parametrii fX, fY și fZ sunt coordonate normale, vor da 0,0 pentru coordonate dacă nu a fost lovit nimic (de exemplu, obiect îndepărtat pe care glonțul nu poate ajunge);
- Altele: fX, fY și fZ sunt decalaje relativ la hitid.

:::

:::tip

[GetPlayerLastShotVectors](../functions/GetPlayerLastShotVectors) poate fi folosit în acest apel invers pentru informații mai detaliate despre vectorul glonț.

:::

:::warning

Bug(e) cunoscut(e):

- nu este apelat dacă ați tras în vehicul ca șofer sau dacă vă uitați în spate cu scopul activat (trageți în aer).
- Se numește `BULLET_HIT_TYPE_VEHICLE` cu hitidul corect (vehiculul jucătorului lovit) dacă împușci un jucător care se află într-un vehicul. Nu va fi numit deloc `BULLET_HIT_TYPE_PLAYER`.
- Remediat parțial în SA-MP 0.3.7: Dacă date false ale armelor sunt trimise de un utilizator rău intenționat, alți clienți jucători se pot bloca sau se pot bloca. Pentru a combate acest lucru, verificați dacă arma raportată poate de fapt să tragă gloanțe.

:::

## Funcții similare

- [GetPlayerLastShotVectors](../functions/GetPlayerLastShotVectors): Preia vectorului ultimei lovituri trase de un jucator.