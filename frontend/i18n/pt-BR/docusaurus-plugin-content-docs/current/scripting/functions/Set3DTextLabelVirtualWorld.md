---
title: Set3DTextLabelVirtualWorld
sidebar_label: Set3DTextLabelVirtualWorld
description: "Define o ID do mundo virtual do rótulo de texto 3D."
tags: ["3dtextlabel"]
---


<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Define o ID do mundo virtual do rótulo de texto 3D.

| Nome | Descrição |
| ------------- | ---------------------------------------------------------- |
| Text3D:textid | O ID do rótulo de texto 3D para definir o ID do mundo virtual.   |
| virtualWorld | O mundo virtual no qual você pode ver o Texto 3D |

## Exemplos

```c
new Text3D:gMyLabel;

gMyLabel = Create3DTextLabel("Hello World!", 0x008080FF, 30.0, 40.0, 50.0, 10.0, 20, false);

Set3DTextLabelVirtualWorld(gMyLabel, 60);
// O ID do mundo virtual mudou de '20' para '60'
```
## Funções Relacionadas

- [Get3DTextLabelVirtualWorld](Get3DTextLabelVirtualWorld): Obtém o ID do mundo virtual do rótulo de texto 3D.
- [SetPlayer3DTextLabelVirtualWorld](SetPlayer3DTextLabelVirtualWorld): Define o ID do mundo virtual do rótulo de texto 3D do jogador.
