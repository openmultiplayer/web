---
title: Get3DTextLabelText
sidebar_label: Get3DTextLabelText
description: "Obtém o texto do rótulo de texto 3D."
tags: ["3dtextlabel"]
---


<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Obtém o texto do rótulo de texto 3D.

| Nome | Descrição |
| ------------- | ----------------------------------------------------------- |
| Text3D:textid | O ID do rótulo de texto 3D do qual obter o texto.             |
| const text[] | Uma matriz na qual armazenar o texto, passado por referência. |
| len | O comprimento do texto que deve ser armazenado.               |

## Exemplos

```c
new Text3D:gMyLabel;

public OnGameModeInit()
{
    gMyLabel = Create3DTextLabel("Hello World!", 0x008080FF, 30.0, 40.0, 50.0, 40.0, 0, false);

    new text[16];
    Get3DTextLabelText(gMyLabel, text, sizeof(text));
    // O `texto` será 'Hello, World!'
    return 1;
}
```
## Funções Relacionadas

- [Create3DTextLabel](Create3DTextLabel): Crie uma etiqueta de texto 3D.
- [Update3DTextLabelText](Update3DTextLabelText): Atualiza o texto e a cor do rótulo de texto 3D.
- [GetPlayer3DTextLabelText](GetPlayer3DTextLabelText): Obtém o texto do rótulo de texto 3D do jogador.
