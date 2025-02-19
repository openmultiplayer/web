---
title: OnPlayerStreamOut
sidebar_label: OnPlayerStreamOut
description: Este callback é chamado quando um jogador é destreado pelo cliente de outro jogador.
tags: ["player"]
---

## Descrição

Este callback é chamado quando um jogador é destreado pelo cliente de outro jogador.

| Nome        | Descrição                                     |
| ----------- | --------------------------------------------- |
| playerid    | O jogador que foi destreado.                 |
| forplayerid | O jogador que destreou o outro jogador.      |

## Retornos

Ele é sempre chamado primeiro em filtroscripts.

## Exemplos

```c
public OnPlayerStreamOut(playerid, forplayerid)
{
    new string[80];
    format(string, sizeof(string), "Seu computador acaba de descarregar o jogador ID %d", playerid);
    SendClientMessage(forplayerid, 0xFF0000FF, string);
    return 1;
}
```

## Notas

<TipNPCCallbacks />

## Callbacks Relacionados

Os seguintes callbacks podem ser úteis, pois estão relacionados a este callback de alguma forma. 

- [OnPlayerStreamIn](OnPlayerStreamIn): Este callback é chamado quando um jogador é transmitido para outro jogador. 
- [OnActorStreamIn](OnActorStreamIn): Este callback é chamado quando um ator é transmitido para um jogador. 
- [OnVehicleStreamIn](OnVehicleStreamIn): Este callback é chamado quando um veículo é transmitido para um jogador. 