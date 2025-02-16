---
title: OnPlayerSpawn
description: Este evento é chamado quando um jogador spawna.
tags: ["player"]
---

## Descrição

Este evento é chamado quando um spawna. (Após chamada da função SpawnPlayer)

| Nome     | Descrição                        |
| -------- | ---------------------------------- |
| playerid | ID do jogador que spawnou. |

## Retorno

0 - Impedirá que outros filterscripts  recebam este retorno de chamada.

1 - Indica que este retorno de chamada será passado para o próximo filterscript.

É sempre chamado primeiro nos filterscripts.

## Exemplos

```c
public OnPlayerSpawn(playerid)
{
    new PlayerName[MAX_PLAYER_NAME],
    string[40];
    GetPlayerName(playerid, PlayerName, sizeof(PlayerName));
    format(string, sizeof(string), "%s foi spawnado com sucesso.", PlayerName);
    SendClientMessageToAll(0xFFFFFFFF, string);
    return 1;
}
```

## Notas

:::tip

O jogo às vezes deduz $100 dos jogadores após o spawn.

:::

## Funções Relacionadas

- [SpawnPlayer](../functions/SpawnPlayer): Forçar um jogador a spawnar.
- [AddPlayerClass](../functions/AddPlayerClass): Adiciona uma Classe.
- [SetSpawnInfo](../functions/SetSpawnInfo): Define a configuração de spawn para um jogador.