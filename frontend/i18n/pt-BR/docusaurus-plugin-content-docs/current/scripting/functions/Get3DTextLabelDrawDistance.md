---
title: Get3DTextLabelDrawDistance
sidebar_label: Get3DTextLabelDrawDistance
description: "Obtém a distância de desenho do rótulo de texto 3D."
tags: ["3dtextlabel"]
---


<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Obtém a distância de desenho do rótulo de texto 3D.

| Nome | Descrição |
| ------------- | -------------------------------------------------------- |
| Text3D:textid | O ID do rótulo de texto 3D do qual obter a distância de desenho. |

## Retornos

Retorna a distância de desenho do rótulo de texto 3D como flutuante.

## Exemplos

```c
new Text3D:gMyLabel;
new Float:drawDistance;

gMyLabel = Create3DTextLabel("Hello World!", 0x008080FF, 30.0, 40.0, 50.0, 10.0, 0, false);

drawDistance = Get3DTextLabelDrawDistance(gMyLabel);
// distância de desenho = 10,0
```
## Funções Relacionadas

- [Set3DTextLabelDrawDistance](Set3DTextLabelDrawDistance): Define a distância de desenho do rótulo de texto 3D.
- [GetPlayer3DTextLabelDrawDistance](GetPlayer3DTextLabelDrawDistance): Obtém a distância de desenho do rótulo de texto 3D do jogador.
