---
title: SpawnPlayer
description: (Re)Spawna um jogador.
tags: ["player"]
---

## Descrição

(Re)Spawna um jogador.

| Nome     | Descrição                  |
| -------- | -------------------------- |
| playerid | O ID do jogador a spawnar. |

## Retorno

1: A função foi executada com sucesso.

0: A função falhou ao ser executada. Isso significa que o jogador não está conectado.

## Exemplos

```c
if (strcmp(cmdtext, "/spawn", true) == 0)
{
    SpawnPlayer(playerid);
    return 1;
}
```

## Notas

:::tip

Mata o jogador se ele tiver no veículo e depois ele spawna com uma garrafa na mão.

:::

## Funções Relacionadas

- [SetSpawnInfo](SetSpawnInfo.md): Define a configuração de spawn de um jogador.
- [AddPlayerClass](AddPlayerClass.md): Adiciona uma classe.
- [OnPlayerSpawn](../callbacks/OnPlayerSpawn.md): É chamado quando um jogador spawna.
