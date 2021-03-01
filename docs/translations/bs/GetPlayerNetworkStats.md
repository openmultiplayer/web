---
title: GetPlayerNetworkStats
description: Dobiva mrežne statistike igrača i sprema ih u string.
tags: ["player"]
---

:::warning

Ova funkcija je dodana u SA-MP 0.3c R4 i ne radi u nižim verzijama!

:::

## Deskripcija

Dobiva mrežne statistike igrača i sprema ih u string.

| Ime         | Deskripcija                                                     |
| ----------- | --------------------------------------------------------------- |
| playerid    | ID igrača za dobiti mrežne statistike.                          |
| retstr[]    | String za pohraniti mrežne statistike, proslijeđeno referencom. |
| retstr_size | Dužina stringa koji treba pohraniti.                            |

## Returns

Ova funkcija uvijek returna (vraća) 1.

## Primjeri

```c
public OnPlayerCommandText(playerid,cmdtext[])
{
    if (!strcmp(cmdtext, "/mynetstats"))
    {
        new stats[400+1];
        GetPlayerNetworkStats(playerid, stats, sizeof(stats)); // dobijte svoje sopstvene mržne statistike
        ShowPlayerDialog(playerid, 0, DIALOG_STYLE_MSGBOX, "Moje mrežne statistike", stats, "Okay", "");
    }
    return 1;
}
```

## Zabilješke

:::tip

Ova funkcija možda neće vratiti tačne podatke kada se koristi u programu OnPlayerDisconnect ako je igrač normalno napustio sistem. Obično vraća tačne podatke ako je igrač izbačen ili je istekao tajm.

:::

## Srodne Funkcije

- [GetNetworkStats](GetNetworkStats): Dobiva mrežne statistike servera i sprema ih u string.
- [NetStats_GetConnectedTime](NetStats_GetConnectedTime): Dobij vrijeme za kojeg je igrač povezan na server.
- [NetStats_MessagesReceived](NetStats_MessagesReceived): Dohvatite broj mrežnih poruka koje je server primio od igrača.
- [NetStats_BytesReceived](NetStats_BytesReceived): Dohvatite količinu informacija (u bajtovima) koju je poslužitelj primio od igrača.
- [NetStats_MessagesSent](NetStats_MessagesSent): Dohvatite broj mrežnih poruka koje je server poslao igraču.
- [NetStats_BytesSent](NetStats_BytesSent): Dohvatite količinu informacija (u bajtovima) koje je poslužitelj poslao uređaju za reprodukciju.
- [NetStats_MessagesRecvPerSecond](NetStats_MessagesRecvPerSecond): Dohvatite broj mrežnih poruka koje je poslužitelj primio od igrača u posljednjoj sekundi.
- [NetStats_PacketLossPercent](NetStats_PacketLossPercent): Dobijte packet loss procenat igrača.
- [NetStats_ConnectionStatus](NetStats_ConnectionStatus): Dohvatite status veze igrača.
- [NetStats_GetIpPort](NetStats_GetIpPort): Nabavite IP adresu i port igrača.
