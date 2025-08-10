---
title: ClearPlayerWorldBounds
sidebar_label: ClearPlayerWorldBounds
description: Redefine os limites do mundo do jogador para os limites padrão do mundo.
tags: ["player"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Redefine os limites do mundo do jogador para os limites padrão do mundo.

| Nome     | Descrição                                                  |
| -------- | ---------------------------------------------------------- |
| playerid | O ID do jogador para redefinir/limpar os limites do mundo. |

## Retorno

**true** - A função foi executada com sucesso.

**false** - A função falhou ao executar.

## Exemplos

```c
public OnPlayerSpawn(playerid)
{
    SetPlayerWorldBounds(playerid, 20.0, 0.0, 20.0, 0.0);
    return 1;
}

public OnPlayerDeath(playerid, killerid, WEAPON:reason)
{
    ClearPlayerWorldBounds(playerid);
    return 1;
}
```

## Notas

:::tip

Os limites do mundo de um jogador também podem ser redefinidos configurando-os para 20000.0000, -20000.0000, 20000.0000, -20000.0000. Esses são os valores padrão. No entanto, sugerimos usar ClearPlayerWorldBounds para redefinir os limites do mundo do jogador para maior clareza.

:::

## Funções Relacionadas

- [SetPlayerWorldBounds](SetPlayerWorldBounds): Define os limites do mundo para um jogador. Os jogadores não podem sair dos limites (eles serão empurrados de volta).
- [GetPlayerWorldBounds](GetPlayerWorldBounds): Obtém os limites do mundo de um jogador.