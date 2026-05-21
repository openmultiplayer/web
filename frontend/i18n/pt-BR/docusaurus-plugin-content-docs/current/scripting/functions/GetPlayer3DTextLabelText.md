---
title: GetPlayer3DTextLabelText
sidebar_label: GetPlayer3DTextLabelText
description: "Obtém o texto do rótulo de texto 3D do jogador."
tags: ["player", "3dtextlabel"]
---


<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Obtém o texto do rótulo de texto 3D do jogador.

| Nome | Descrição |
| ------------------- | ----------------------------------------------------------- |
| playerid | O ID do jogador.                                       |
| PlayerText3D:textid | O ID do rótulo de texto 3D do jogador para obter o texto.    |
| text[] | Uma matriz na qual armazenar o texto, passado por referência. |
| len | O comprimento do texto que deve ser armazenado.               |

## Exemplos

```c
new PlayerText3D:playerTextId;
new Float:X, Float:Y, Float:Z;
new text[16];

GetPlayerPos(playerid, X, Y, Z);
playerTextId = CreatePlayer3DTextLabel(playerid, "Hello World!", 0x008080FF, X, Y, Z, 40.0);

GetPlayer3DTextLabelText(playerid, playerTextId, text, sizeof(text));
// text = "Hello, mundo!"
```
## Funções Relacionadas

- [CreatePlayer3DTextLabel](CreatePlayer3DTextLabel): Cria um rótulo de texto 3D apenas para um jogador específico.
- [UpdatePlayer3DTextLabelText](UpdatePlayer3DTextLabelText): Atualiza o texto e a cor do rótulo de texto 3D do jogador.
- [Get3DTextLabelText](Get3DTextLabelText): Obtém o texto do rótulo de texto 3D.
