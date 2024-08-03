---
title: GetNetworkStats
description: Funkcija koja dobiva mrežne statistike servera i pohranjuje ih u string (niz).
tags: []
---

## Deskripcija

Funkcija koja dobiva mrežne statistike servera i pohranjuje ih u string (niz).

| Ime         | Deskripcija                                                              |
| ----------- | ------------------------------------------------------------------------ |
| retstr[]    | Niz (string) za pohranjivanje mrežne statistike, proslijeđen referencom. |
| retstr_size | Dužina stringa (niza) koji se pohranjuje.                                |

## Returns

Ova funkcija uvijek returna (vraća) 1.

## Primjeri

```c
public OnPlayerCommandText(playerid,cmdtext[])
{
    if (!strcmp(cmdtext, "/netstats"))
    {
        new stats[400+1];
        GetNetworkStats(stats, sizeof(stats)); // funkcija pomoću koje dobivamo mrežne statistike servera
        ShowPlayerDialog(playerid, 0, DIALOG_STYLE_MSGBOX, "Server Network Stats", stats, "Close", "");
    }
    return 1;
}
```

```
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

- [GetPlayerNetworkStats](GetPlayerNetworkStats): Ova funkcija dobiva mrežne statistike igrača i sprema ih u string (niz).
- [NetStats_GetConnectedTime](NetStats_GetConnectedTime): Dobij vrijeme za koje je igrač povezan.
- [NetStats_MessagesReceived](NetStats_MessagesReceived): Dobij broj mrežnih poruka koje je server primio od igrača.
- [NetStats_BytesReceived](NetStats_BytesReceived): Dobij količinu informacija (u bajtovima) koju je server primio od igrača.
- [NetStats_MessagesSent](NetStats_MessagesSent): Dobij broj mrežnih poruka koje je server poslao igraču.
- [NetStats_BytesSent](NetStats_BytesSent): Dobij količinu informacija (u bajtovima) koju je server poslao igraču.
- [NetStats_MessagesRecvPerSecond](NetStats_MessagesRecvPerSecond): Dobij broj mrežnih poruka koje je server primio od igrača u posljednjoj sekundi.
- [NetStats_PacketLossPercent](NetStats_PacketLossPercent): Dobij procenat gubitka paketa (packet loss) igrača.
- [NetStats_ConnectionStatus](NetStats_ConnectionStatus): Dobij status veze igrača.
- [NetStats_GetIpPort](NetStats_GetIpPort): Dobij IP i port igrača.
