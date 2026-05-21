---
title: IsValid3DTextLabel
sidebar_label: IsValid3DTextLabel
description: "Verifica se um rótulo de texto 3D é válido."
tags: ["3dtextlabel"]
---


<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Verifica se um rótulo de texto 3D é válido.

| Nome | Descrição |
| ------------- | ------------------------------------- |
| Text3D:textid | O ID do rótulo de texto 3D a ser verificado. |

## Retornos

Esta função retorna **true** se o rótulo de texto 3D for válido ou **false** se não for.

## Exemplos

```c
new Text3D:gMyLabel;

public OnGameModeInit()
{
    gMyLabel = Create3DTextLabel("I'm at the coordinates:\n30.0, 40.0, 50.0", 0x008080FF, 30.0, 40.0, 50.0, 40.0, 0, false);

    if (IsValid3DTextLabel(gMyLabel))
    {
        // Faça alguma coisa
    }
    return 1;
}
```
## Funções Relacionadas

- [Create3DTextLabel](Create3DTextLabel): Cria uma etiqueta de texto 3D em um local específico do mundo.
- [IsValidPlayer3DTextLabel](IsValidPlayer3DTextLabel): Verifica se o rótulo de texto 3D de um jogador é válido.
