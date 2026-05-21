---
title: EnableTirePopping
sidebar_label: EnableTirePopping
description: "Com esta função você pode ativar ou desativar o estouro de pneus."
tags: []
---


## Descrição

Com esta função você pode ativar ou desativar o estouro de pneus.

| Nome | Descrição |
| ----------- | -------------------------------------------------- |
| bool:enable | 'true' para ativar, 'false' para desativar o estouro do pneu. |

## Retornos

Esta função não retorna nenhum valor específico.

## Exemplos

```c
public OnGameModeInit()
{
    // Isso desativará o estouro de pneus no seu gamemode.
    EnableTirePopping(false);
    return 1;
}
```
## Notas

:::warning

- Esta função foi removida em SA-MP 0.3.
- O estouro de pneus está habilitado por padrão.
- Se quiser desativar o estouro de pneus, você terá que criar um script manualmente usando [OnVehicleDamageStatusUpdate](../callbacks/OnVehicleDamageStatusUpdate).

:::

## Funções Relacionadas

- [SetPlayerTeam](SetPlayerTeam): Defina a equipe de um jogador.
