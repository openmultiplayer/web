---
title: Set3DTextLabelDrawDistance
sidebar_label: Set3DTextLabelDrawDistance
description: "Define a distância de desenho do rótulo de texto 3D."
tags: ["3dtextlabel"]
---


<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Define a distância de desenho do rótulo de texto 3D.

| Nome | Descrição |
| ------------------ | -------------------------------------------------------------- |
| Text3D:textid | O ID do rótulo de texto 3D para definir a distância de desenho.          |
| Float:drawDistance | A distância de onde você consegue ver o rótulo de texto 3D. |

## Retornos

Esta função sempre retorna true.

## Exemplos

```c
new Text3D:gMyLabel;

gMyLabel = Create3DTextLabel("Hello World!", 0x008080FF, 30.0, 40.0, 50.0, 10.0, 0, false);

Set3DTextLabelDrawDistance(gMyLabel, 20.0);
// A distância de visão mudou de 10.0 para 20.0
```
## Funções Relacionadas

- [Get3DTextLabelDrawDistance](Get3DTextLabelDrawDistance): Obtém a distância de desenho do rótulo de texto 3D.
- [SetPlayer3DTextLabelDrawDistance](SetPlayer3DTextLabelDrawDistance): Define a distância de desenho do rótulo de texto 3D do jogador.
