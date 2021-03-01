---
title: GetPlayerIp
description: Nabavite navedenu IP adresu igrača i spremite je u string.
tags: ["player"]
---

## Deskripcija

Nabavite navedenu IP adresu igrača i spremite je u string.

| Ime      | Deskripcija                                                    |
| -------- | -------------------------------------------------------------- |
| playerid | ID igrača za dobiti IP adresu.                                 |
| ip[]     | String za pohraniti IP adresu igrača, proslijeđeno referencom. |
| len      | Maksimalna dužina IP adrese (preporučljivo 16).                |

## Returns

IP adresa igrača pohranjena je u navedenom nizu.

## Primjeri

```c
public OnPlayerConnect(playerid)
{
    new plrIP[16];
    GetPlayerIp(playerid, plrIP, sizeof(plrIP));
    if (!strcmp(plrIP, "127.0.0.1"))
    {
        SendClientMessage(playerid, 0xFFFFFFFF, "Dobrodošao na svoj server, gazda :)");
    }
    return 1;
}
```

## Zabilješke

:::tip

PAWN razlikuje velika i mala slova (case-sensitive). GetPlayerIP neće raditi. Ova funkcija ne radi kada se koristi u programu OnPlayerDisconnect jer je igrač već isključen. Vratit će nevaljani IP (255.255.255.255). Spremite IP adrese igrača pod OnPlayerConnect ako ih treba koristiti pod OnPlayerDisconnect.

:::

## Srodne Funkcije

- [NetStats_GetIpPort](NetStats_GetIpPort): Nabavite IP adresu i port igrača.
- [GetPlayerName](GetPlayerName): Dobij ime igrača.
- [GetPlayerPing](GetPlayerPing): Dobij ping igrača.
- [GetPlayerVersion](GetPlayerVerion): Dobij verziju igračevog klijenta.
- [OnIncomingConnection](../callbacks/OnIncomingConnection): Pozvano kada igrač pokušava da se konektuje na server.
- [OnPlayerConnect](../callbacks/OnPlayerConnect): Pozvano kada se igrač konektuje na server.
- [OnPlayerDisconnect](../callbacks/OnPlayerDisconnect): Pozvano kada igrač napusti server.
