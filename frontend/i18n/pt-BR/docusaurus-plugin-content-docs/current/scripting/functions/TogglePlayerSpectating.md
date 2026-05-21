---
title: TogglePlayerSpectating
sidebar_label: TogglePlayerSpectating
description: "Alterne se um jogador está no modo espectador ou não."
tags: ["player"]
---


## Descrição

Alterne se um jogador está no modo espectador ou não. Enquanto estiver no modo espectador, um jogador pode assistir (assistir) outros jogadores e veículos. Depois de usar esta função, [PlayerSpectatePlayer](PlayerSpectatePlayer) ou [PlayerSpectateVehicle](PlayerSpectateVehicle) precisa ser usado.

## Parâmetros

| Nome | Descrição |
| ----------- | ------------------------------------------------------- |
| playerid | O ID do jogador que deve assistir.               |
| bool:toggle | **true** para ativar a visualização e **false** para desativar. |

## Retornos

**true** – A função foi executada com sucesso.

**false** - Falha na execução da função. O jogador não existe.

## Exemplos

```c
public OnPlayerDeath(playerid, killerid, WEAPON:reason)
{
    TogglePlayerSpectating(playerid, true);
    PlayerSpectatePlayer(playerid, killerid);
    return 1;
}
```
## Notas

:::tip

Quando o modo espectador estiver desabilitado, OnPlayerSpawn será chamado automaticamente, se você deseja restaurar o estado do jogador antes de ser espectador, você terá que lidar com isso em OnPlayerSpawn. Observe também que o jogador também pode ir para a seleção de classe antes, se tiver usado F4 durante o espectador, um jogador também CAN morre no modo espectador devido a várias falhas.

:::

:::tip

Quando um jogador está no modo espectador, seu HUD fica oculto, tornando-o útil para configurar a câmera de um jogador sem o HUD. Além disso, objetos próximos à câmera do jogador serão transmitidos, tornando isso útil para interpolar câmeras.

:::

:::warning

Se o jogador não for carregado antes de definir o status de espectador para false, a conexão poderá ser encerrada inesperadamente.

:::

## Funções Relacionadas

- [PlayerSpectatePlayer](PlayerSpectatePlayer): Espectar um jogador.
- [PlayerSpectateVehicle](PlayerSpectateVehicle): Visualize um veículo.
