---
title: PlayerSpectatePlayer
sidebar_label: PlayerSpectatePlayer
description: "Faz um jogador assistir (observar) outro jogador."
tags: ["player"]
---


## Descrição

Faz um jogador assistir (observar) outro jogador.

| Nome | Descrição |
| ------------------ | ----------------------------------------------------------------------------------------- |
| playerid | O ID do jogador que irá assistir.                                                  |
| targetplayerid | O ID do jogador que deve ser assistido.                                            |
| SPECTATE_MODE:mode | O [modo](../resources/spectatemodes) para assistir (opcional; o padrão é 'normal'). |

## Retornos

**true** – A função foi executada com sucesso.

**false** - Falha na execução da função. Um dos jogadores especificados não existe.

## Exemplos

```c
public OnPlayerDeath(playerid, killerid, WEAPON:reason)
{
    TogglePlayerSpectating(playerid, 1);
    PlayerSpectatePlayer(playerid, killerid);
    return 1;
}
```
## Notas

:::warning

- O pedido é CRITICAL! Certifique-se de usar TogglePlayerSpectating antes de PlayerSpectatePlayer.
- o mundo virtual e o interior de playerid e targetplayerid devem ser os mesmos para que esta função funcione corretamente.

:::

## Funções Relacionadas

- [PlayerSpectateVehicle](PlayerSpectateVehicle): Visualize um veículo.
- [TogglePlayerSpectating](TogglePlayerSpectating): Iniciar ou parar de assistir.
- [GetPlayerSpectateID](GetPlayerSpectateID): Obtém o ID do jogador ou veículo que o jogador está assistindo (assistindo).
- [GetPlayerSpectateType](GetPlayerSpectateType): Obtém o tipo de espectador do jogador.

## Recursos relacionados

- [Modos de espectador](../resources/spectatemodes)
