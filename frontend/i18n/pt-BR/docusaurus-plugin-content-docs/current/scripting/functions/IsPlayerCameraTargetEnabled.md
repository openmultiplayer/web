---
title: IsPlayerCameraTargetEnabled
sidebar_label: IsPlayerCameraTargetEnabled
description: "Verifique se o alvo da câmera do jogador está habilitado."
tags: ["player"]
---


<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Verifique se o alvo da câmera do jogador está habilitado.

| Nome | Descrição |
| -------- | -------------------- |
| playerid | O ID do jogador |

## Retornos

**true** - Habilitar.

**false** - Desativar.

## Exemplos

```c
public OnPlayerSpawn(playerid)
{
    if (IsPlayerCameraTargetEnabled(playerid))
    {
        // faça alguma coisa
    }

    return 1;
}
```
## Funções Relacionadas

- [EnablePlayerCameraTarget](EnablePlayerCameraTarget): Alterna as funções de mira da câmera para um jogador.
