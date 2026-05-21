---
title: Get3DTextLabelPos
sidebar_label: Get3DTextLabelPos
description: "Obtém a posição do rótulo de texto 3D."
tags: ["3dtextlabel"]
---


<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Obtém a posição do rótulo de texto 3D.

| Nome | Descrição |
| ------------- | ---------------------------------------------------------------------------- |
| Text3D:textid | O ID do rótulo de texto 3D para obter a posição.                          |
| &Float:x | Uma variável flutuante na qual armazenar a coordenada X, passada por referência. |
| &Float:y | Uma variável flutuante na qual armazenar a coordenada Y, passada por referência. |
| &Float:z | Uma variável flutuante na qual armazenar a coordenada Z, passada por referência. |

## Exemplos

```c
new Text3D:gMyLabel;

public OnGameModeInit()
{
    gMyLabel = Create3DTextLabel("Hello World!", 0x008080FF, 30.0, 40.0, 50.0, 10.0, 0, false);

    new Float:x, Float:y, Float:z;
    Get3DTextLabelPos(gMyLabel, x, y, z);
    // x = 30.0
    // y = 40.0
    // z = 50.0
    return 1;
}
```
## Funções Relacionadas

- [GetPlayer3DTextLabelPos](GetPlayer3DTextLabelPos): Obtém a posição do rótulo de texto 3D do jogador.
