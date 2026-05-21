---
title: IsPlayerStreamedIn
sidebar_label: IsPlayerStreamedIn
description: "Verifica se um jogador está sendo transmitido no cliente de outro player."
tags: ["player"]
---


## Descrição

Verifica se um jogador está sendo transmitido no cliente de outro player.

| Nome | Descrição |
| ----------- | ------------------------------------------------------------- |
| playerid | O ID do jogador a ser verificado é transmitido. |
| forplayerid | O ID do jogador para verificar se o playerid foi transmitido. |

## Retornos

**true** – O jogador está sendo transmitido.

**false** - O jogador não está transmitindo.

## Exemplos

```c
if (IsPlayerStreamedIn(playerid, 0))
{
	SendClientMessage(playerid, -1, "ID 0 can see you.");
}
```
## Notas

:::tip

**Servidor SA-MP:** Os jogadores transmitem se estiverem a mais de 200,0 metros de distância (consulte [server.cfg](../../server/server.cfg) - **stream_distance**)

**servidor open.mp:** Os jogadores transmitem se estiverem a mais de 200,0 metros de distância (consulte [config.json](../../server/config.json) - **network.stream_radius**)

:::

## Funções Relacionadas

- [IsActorStreamedIn](IsActorStreamedIn): Verifica se um ator está sendo transmitido para um jogador.
- [IsVehicleStreamedIn](IsVehicleStreamedIn): Verifica se um veículo foi transmitido para um jogador.

## Callbacks Relacionadas

- [OnPlayerStreamIn](../callbacks/OnPlayerStreamIn): Chamado quando um jogador faz streaming para outro jogador.
- [OnPlayerStreamOut](../callbacks/OnPlayerStreamOut): Chamado quando um jogador faz streaming para outro jogador.
- [OnVehicleStreamIn](../callbacks/OnVehicleStreamIn): Chamado quando um veículo chega para um jogador.
- [OnVehicleStreamOut](../callbacks/OnVehicleStreamOut): Chamado quando um veículo sai para um jogador.
