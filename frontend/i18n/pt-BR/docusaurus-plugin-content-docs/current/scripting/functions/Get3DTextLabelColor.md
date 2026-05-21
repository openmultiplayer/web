---
title: Get3DTextLabelColor
sidebar_label: Get3DTextLabelColor
description: "Obtém a cor do rótulo do texto 3D."
tags: ["3dtextlabel"]
---


:::warning

Esta função está obsoleta. Consulte [Get3DTextLabelColour](Get3DTextLabelColour).

:::

## Descrição

Obtém a cor do rótulo do texto 3D.

| Nome | Descrição |
| ------------- | ------------------------------------------------ |
| Text3D:textid | O ID do rótulo de texto 3D para obter a cor. |

## Retornos

Retorna a cor do rótulo do texto 3D.

## Exemplos

```c
new Text3D:gMyLabel;

gMyLabel = Create3DTextLabel("Hello World!", 0x008080FF, 30.0, 40.0, 50.0, 40.0, 0, false);

new color =  Get3DTextLabelColor(gMyLabel);
// cor = 0x008080FF
```
## Funções Relacionadas

- [GetPlayer3DTextLabelColor](GetPlayer3DTextLabelColor): Obtém a cor do rótulo de texto 3D do jogador.
