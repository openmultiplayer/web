---
title: Is3DTextLabelStreamedIn
sidebar_label: Is3DTextLabelStreamedIn
description: "Verifica se um rótulo de texto 3D é transmitido para um jogador."
tags: ["3dtextlabel"]
---


<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Verifica se um rótulo de texto 3D é transmitido para um jogador.

| Nome | Descrição |
| ------------- | ---------------------------- |
| playerid | O ID do jogador.        |
| Text3D:textid | O ID do rótulo de texto 3D. |

## Retornos

Esta função retorna **true** se o rótulo de texto 3D for transmitido para o jogador ou **false** se não for.

## Exemplos

```c
new Text3D:gMyLabel;

public OnGameModeInit()
{
    gMyLabel = Create3DTextLabel("I'm at the coordinates:\n30.0, 40.0, 50.0", 0x008080FF, 30.0, 40.0, 50.0, 40.0, 0, false);
    return 1;
}

public OnPlayerSpawn(playerid)
{
    if (Is3DTextLabelStreamedIn(playerid, gMyLabel))
    {
        // Faça alguma coisa
    }
    return 1;
}
```
## Funções Relacionadas

- [Create3DTextLabel](Create3DTextLabel): Cria uma etiqueta de texto 3D em um local específico do mundo.
- [IsPlayerStreamedIn](IsPlayerStreamedIn): Verifica se um jogador está transmitindo para outro player.
