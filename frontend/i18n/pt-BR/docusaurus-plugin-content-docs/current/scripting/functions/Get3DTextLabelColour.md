---
title: Get3DTextLabelColour
sidebar_label: Get3DTextLabelColour
description: "Obtém a cor do rótulo do texto 3D."
tags: ["3dtextlabel"]
---


<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Obtém a cor do rótulo do texto 3D.

| Nome | Descrição |
| ------------- | ------------------------------------------------- |
| Text3D:textid | O ID do rótulo de texto 3D para obter a cor. |

## Retornos

Retorna a cor do rótulo do texto 3D.

## Exemplos

```c
new Text3D:gMyLabel;

gMyLabel = Create3DTextLabel("Hello World!", 0x008080FF, 30.0, 40.0, 50.0, 40.0, 0, false);

new colour = Get3DTextLabelColour(gMyLabel);
// cor = 0x008080FF
```
## Funções Relacionadas

- [GetPlayer3DTextLabelColour](GetPlayer3DTextLabelColour): Obtém a cor do rótulo de texto 3D do jogador.
