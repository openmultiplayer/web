---
title: GetPlayerCameraTargetActor
description: Dozvoljava vam da dobijete ID aktora aktora kojeg igrač gleda (u bilo kojem).
tags: ["player"]
---

:::warning

Ova funkcija je dodana u SA-MP 0.3.7 i ne radi u nižim verzijama!

:::

## Deskripcija

 Dozvoljava vam da uzmete ID aktora aktora kojeg igrač gleda (u bilo kojem).

| Ime      | Deskripcija                                 |
| -------- | ------------------------------------------- |
| playerid | ID igrača za kojeg želimo izvršiti funkciju |

## Returns

ID aktora kojeg igrač gleda.

## Primjeri

```c
new bool:ActorHandsup[MAX_ACTORS];

public OnPlayerConnect(playerid)
{
    EnablePlayerCameraTarget(playerid, 1);
    return 1;
}

public OnPlayerUpdate(playerid)
{
    // Sanzja koje aktora igrač gleda
    new playerTargetActor = GetPlayerCameraTargetActor(playerid);

    // Ukoliko gledaju u bilo kojeg aktora
    if (playerTargetActor != INVALID_ACTOR_ID)
    {
        // Sačuvaj oružje igrača da bismo provjerili da li su naoružani
        new playerWeapon = GetPlayerWeapon(playerid);

        // Dobijanje igračevih komandi da bismo provjerili da li ciljaju
        new keys, updown, leftright;
        GetPlayerKeys(playerid, keys, updown, leftright);

        // Ukoliko aktor jos uvijek nije podigao ruke u vis, I igrač je NAORUŽAN
        if (!ActorHandsup[playerTargetActor] && playerWeapon >= 22 && playerWeapon <= 42 && keys & KEY_AIM)
        {
            // Postavljanje animacije podizanja ruku u vis
            ApplyActorAnimation(playerTargetActor, "SHOP", "SHP_HandsUp_Scr",4.1,0,0,0,1,0);

            // Postavljanje 'ActorHandsup' na true, da se animacija ne bi ponavljala
            ActorHandsup[playerTargetActor] = true;
        }
    }
    return 1;
}
```

## Zabilješke

:::tip

Ovaj funkcija vam samo govori u kojeg aktora (ako postoji) igrač gleda. Da biste saznali da li ciljaju na njih, morate koristiti GetPlayerTargetActor.

:::

:::warning

Ovaj funkcija je isključena po default-u radi uštede propusnosti. Koristite EnablePlayerCameraTarget da bi ste uključili za svakog igrača.

:::

## Srodne Funkcije

- [GetPlayerTargetActor](GetPlayerTargetActor): Dobij id aktora koji je naciljan od strane nekog igrača.
- [GetPlayerCameraTargetPlayer](GetPlayerCameratargetPlayer): Dobij ID igrača u kojeg igrač gleda.
- [GetPlayerCameraTargetVehicle](GetPlayerCameraTargetVehicle): Dobij ID vozila u kojeg igrač gleda.
- [GetPlayerCameraTargetObject](GetPlayerCameraTargetObject): Dobij ID object a player is looking at.
- [GetPlayerCameraFrontVector](GetPlayerCaemraFrontVector): Dobij prednji vektor kamere igrača.
