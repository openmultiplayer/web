---
id: AllowAdminTeleport
title: AllowAdminTeleport
description: Esta função vai determinar se Administradores RCON vão ser teleportados para a marcação quando definirem uma.
tags: []
---

:::warning

Esta função, a partir da 0.3d está descontinuada. Por favor veja [OnPlayerClickMap](../callbacks/OnPlayerClickMap.md).

:::

## Descrição

Esta função vai determinar se Administradores RCON vão ser teleportados para a marcação quando definirem uma.

| Nome  | Descrição                              |
| ----- | -------------------------------------- |
| allow | 0 para desabilitar e 1 para habilitar. |

## Retorno

Esta função não retorna nenhum valor específico.

## Exemplos

```c
public OnGameModeInit()
{
    AllowAdminTeleport(1);
    // Outras coisas
    return 1;
}
```

## Funções Relacionadas

- [IsPlayerAdmin](IsPlayerAdmin.md): Verifica se um jogador está logado na RCON.
- [AllowPlayerTeleport](AllowPlayerTeleport.md): Ativa o teleporte por marcação para os jogadores.
