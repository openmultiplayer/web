---
title: Get3DTextLabelVirtualWorld
sidebar_label: Get3DTextLabelVirtualWorld
description: "Obtém o ID do mundo virtual do rótulo de texto 3D."
tags: ["3dtextlabel"]
---


<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Obtém o ID do mundo virtual do rótulo de texto 3D.

| Nome | Descrição |
| ------------- | ----------------------------------------------------------- |
| Text3D:textid | O ID do rótulo de texto 3D para obter a identificação do mundo virtual. |

## Retornos

Retorna o ID do mundo virtual do rótulo de texto 3D.

## Exemplos

```c
new Text3D:gMyLabel;
new worldid;

gMyLabel = Create3DTextLabel("Hello World!", 0x008080FF, 30.0, 40.0, 50.0, 10.0, 20, false);

worldid = Get3DTextLabelVirtualWorld(gMyLabel);
// id do mundo = 20
```
## Funções Relacionadas

- [Set3DTextLabelVirtualWorld](Set3DTextLabelVirtualWorld): Define o ID do mundo virtual do rótulo de texto 3D.
- [GetPlayer3DTextLabelVirtualWorld](GetPlayer3DTextLabelVirtualWorld): Obtém o ID do mundo virtual do rótulo de texto 3D do jogador.
