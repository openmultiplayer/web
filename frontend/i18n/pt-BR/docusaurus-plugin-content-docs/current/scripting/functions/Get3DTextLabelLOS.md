---
title: Get3DTextLabelLOS
sidebar_label: Get3DTextLabelLOS
description: "Obtém a linha de visão do rótulo de texto 3D."
tags: ["3dtextlabel"]
---


<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Obtém a linha de visão do rótulo de texto 3D.

| Nome | Descrição |
| ------------- | -------------------------------------------------------- |
| Text3D:textid | O ID do rótulo de texto 3D para obter a linha de visão. |

## Retornos

Retorna a linha de visão do rótulo de texto 3D como booleano (`false`/`true`).

## Exemplos

```c
new Text3D:gMyLabel;
new bool:testLOS;

gMyLabel = Create3DTextLabel("Hello World!", 0x008080FF, 30.0, 40.0, 50.0, 10.0, 0, true);

testLOS = Get3DTextLabelLOS(gMyLabel);
// testeLOS = verdadeiro
```
## Funções Relacionadas

- [Set3DTextLabelLOS](Set3DTextLabelLOS): Define a linha de visão do rótulo de texto 3D.
- [GetPlayer3DTextLabelLOS](GetPlayer3DTextLabelLOS): Obtém a linha de visão do rótulo de texto 3D do jogador.
