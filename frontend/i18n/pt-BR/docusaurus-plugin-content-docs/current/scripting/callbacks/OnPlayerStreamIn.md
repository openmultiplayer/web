---
title: OnPlayerStreamIn
description: Este callback é chamado quando um jogador é transmitido pelo cliente de outro jogador.
tags: ["player"]
---

## Descrição

Este callback é chamado quando um jogador é transmitido pelo cliente de outro jogador.

| Nome        | Descrição                                                 |
| ----------- | --------------------------------------------------------- |
| playerid    | O ID do jogador que foi transmitido.                      |
| forplayerid | O ID do jogador que transmitiu o outro jogador.           |

## Retornos

Ele é sempre chamado primeiro em filtroscripts.

## Exemplos

```c
public OnPlayerStreamIn(playerid, forplayerid)
{
    new string[40];
    format(string, sizeof(string), "Jogador %d agora está sendo transmitido para você.", playerid);
    SendClientMessage(forplayerid, 0xFFFFFFFF, string);
    return 1;
}
```

## Notas

<TipNPCCallbacks />

## Callbacks Relacionados

Os seguintes callbacks podem ser úteis, pois estão relacionados a este callback de alguma forma. 

- [OnPlayerStreamOut](OnPlayerStreamOut): Este callback é chamado quando um jogador deixa de ser transmitido para outro jogador. 
- [OnActorStreamIn](OnActorStreamIn): Este callback é chamado quando um ator é transmitido para um jogador. 
- [OnVehicleStreamIn](OnVehicleStreamIn): Este callback é chamado quando um veículo é transmitido para um jogador. 