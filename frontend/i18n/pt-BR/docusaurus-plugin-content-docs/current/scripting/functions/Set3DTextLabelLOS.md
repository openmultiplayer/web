---
title: Set3DTextLabelLOS
sidebar_label: Set3DTextLabelLOS
description: "Define a linha de visão do rótulo de texto 3D."
tags: ["3dtextlabel"]
---


<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Define a linha de visão do rótulo de texto 3D.

| Nome | Descrição |
| ------------- | ------------------------------------------------------------------------------ |
| Text3D:textid | O ID do rótulo de texto 3D para definir a linha de visão.                          |
| bool:enable | (false/true) Teste a linha de visão para que este texto não possa ser visto através de objetos |

## Exemplos

```c
new Text3D:gMyLabel;

gMyLabel = Create3DTextLabel("Hello World!", 0x008080FF, 30.0, 40.0, 50.0, 40.0, 0, true);

Set3DTextLabelLOS(gMyLabel, false);
// A linha de visão mudou de 'true' para 'false'
```
## Funções Relacionadas

- [Get3DTextLabelLOS](Get3DTextLabelLOS): Obtém a linha de visão do rótulo de texto 3D.
- [SetPlayer3DTextLabelLOS](SetPlayer3DTextLabelLOS): Define a linha de visão do rótulo de texto 3D do jogador.
