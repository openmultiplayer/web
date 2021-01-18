---
title: GetNetworkStats
description: Dobiva mrežne statistike servera i pohranjuje ih u string.
tags: []
---

:::warning

Ova funkcija je dodana u SA-MP 0.3c R4 i ne radi u nižim verzijama!

:::

## Deskripcija

Dobiva mrežne statistike servera i pohranjuje ih u string.

| Ime         | Deskripcija                                                                      |
| ----------- | -------------------------------------------------------------------------------- |
| retstr[]    | String u koji se pohranjuju mrežne statistike servera, proslijeđenih referencom. |
| retstr_size | Dužina stringa za pohranu.                                                       |

## Returns

Ova funkcija uvijek returna (vraća) 1.

## Primjeri

```c
public OnPlayerCommandText(playerid,cmdtext[])
{
    if (!strcmp(cmdtext, "/netstats"))
    {
        new stats[400+1];
        GetNetworkStats(stats, sizeof(stats)); // dobij mrežne statistike servera
        ShowPlayerDialog(playerid, 0, DIALOG_STYLE_MSGBOX, "Mrezne statistike servera", stats, "Close", "");
    }
    return 1;
}
```

```p
Server Ticks: 200
Messages in Send buffer: 0
Messages sent: 142
Bytes sent: 8203
Acks sent: 11
Acks in send buffer: 0
Messages waiting for ack: 0
Messages resent: 0
Bytes resent: 0
Packetloss: 0.0%
Messages received: 54
Bytes received: 2204
Acks received: 0
Duplicate acks received: 0
Inst. KBits per second: 28.8
KBits per second sent: 10.0
KBits per second received: 2.7
```

## Srodne Funkcije

- [GetPlayerNetworkStats](GetPlayerNetworkStats): Dobija mrežne statistike igrača i pohranjuje ih u string.
- [NetStats_GetConnectedTime](NetStats_GetConnectedTime): Dobij vrijeme za koje je igrač konektovan na server.
- [NetStats_MessagesReceived](NetStats_MessagesReceived): Dohvatite broj mrežnih poruka koje je server primio od igrača.
- [NetStats_BytesReceived](NetStats_BytesReceived): Dohvatite količinu informacija (u bajtovima) koju je poslužitelj primio od igrača.
- [NetStats_MessagesSent](NetStats_MessagesSent): Dohvatite broj mrežnih poruka koje je server poslao igraču.
- [NetStats_BytesSent](NetStats_BytesSent): Dohvatite količinu informacija (u bajtovima) koje je poslužitelj poslao uređaju za reprodukciju.
- [NetStats_MessagesRecvPerSecond](NetStats_MessagesRecvPerSecond): Dohvatite broj mrežnih poruka koje je poslužitelj primio od igrača u posljednjoj sekundi.
- [NetStats_PacketLossPercent](NetStats_PacketLossPercent): Dobijte packet loss procenat igrača.
- [NetStats_ConnectionStatus](NetStats_ConnectionStatus): Dohvatite status veze igrača.
- [NetStats_GetIpPort](NetStats_GetIpPort): Nabavite IP adresu i port igrača.
