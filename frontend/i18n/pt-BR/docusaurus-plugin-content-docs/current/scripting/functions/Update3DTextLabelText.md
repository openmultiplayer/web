---
title: Update3DTextLabelText
sidebar_label: Update3DTextLabelText
description: "Atualiza o texto e a cor do rótulo de texto 3D."
tags: ["3dtextlabel"]
---


## Descrição

Atualiza o texto e a cor do rótulo de texto 3D.

| Nome | Descrição |
| ---------------- | ------------------------------------------------------------- |
| Text3D:textid | O rótulo de texto 3D que você deseja atualizar.                         |
| colour | A cor que o rótulo de texto 3D deverá ter a partir de agora.          |
| const text[] | O novo texto que o rótulo de texto 3D deverá ter a partir de agora. |
| OPEN_MP_TAGS:... | Número indefinido de argumentos de qualquer tag.                    |

## Retornos

Esta função não retorna nenhum valor específico.

## Exemplos

```c
new Text3D:mylabel;

public OnGameModeInit()
{
    mylabel = Create3DTextLabel("I'm at the coordinates:\n30.0,40.0,50.0", 0x008080FF, 30.0, 40.0, 50.0, 40.0, 0);

    Update3DTextLabelText(mylabel, 0xFF0000FF, "New text.");
    return 1;
}
```
## Notas

:::warning

Se text[] estiver vazio, o servidor/clientes próximos ao texto podem travar! (Corrigido em open.mp)

:::

## Funções Relacionadas

- [Create3DTextLabel](Create3DTextLabel): Crie uma etiqueta de texto 3D.
- [Delete3DTextLabel](Delete3DTextLabel): Exclua um rótulo de texto 3D.
- [Get3DTextLabelText](Get3DTextLabelText): Obtém o texto do rótulo de texto 3D.
- [Get3DTextLabelColour](Get3DTextLabelColour): Obtém a cor do rótulo do texto 3D.
- [Attach3DTextLabelToPlayer](Attach3DTextLabelToPlayer): Anexe uma etiqueta de texto 3D a um jogador.
- [Attach3DTextLabelToVehicle](Attach3DTextLabelToVehicle): Anexe uma etiqueta de texto 3D a um veículo.
- [CreatePlayer3DTextLabel](CreatePlayer3DTextLabel): Crie uma etiqueta de texto 3D para um jogador.
- [DeletePlayer3DTextLabel](DeletePlayer3DTextLabel): Exclua o rótulo de texto 3D de um jogador.
- [UpdatePlayer3DTextLabelText](UpdatePlayer3DTextLabelText): Altere o texto do rótulo de texto 3D de um jogador.
