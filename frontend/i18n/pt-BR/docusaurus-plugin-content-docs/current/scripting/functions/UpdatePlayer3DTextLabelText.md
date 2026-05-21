---
title: UpdatePlayer3DTextLabelText
sidebar_label: UpdatePlayer3DTextLabelText
description: "Atualiza o texto e a cor do rótulo de texto 3D do jogador."
tags: ["player", "3dtextlabel"]
---


## Descrição

Atualiza o texto e a cor do rótulo de texto 3D do jogador

| Nome | Descrição |
| ------------------- | ------------------------------------------------------------- |
| playerid | O ID do jogador para o qual o rótulo de texto 3D foi criado. |
| PlayerText3D:textid | O rótulo de texto 3D que você deseja atualizar.                         |
| colour | A cor que o rótulo de texto 3D deverá ter a partir de agora.          |
| const text[] | O novo texto que o rótulo de texto 3D deverá ter a partir de agora. |
| OPEN_MP_TAGS:... | Número indefinido de argumentos de qualquer tag.                    |

## Retornos

Esta função não retorna nenhum valor específico.

## Notas

:::warning

Se text[] estiver vazio, o servidor/clientes próximos ao texto podem travar! (Corrigido em open.mp)

:::

## Funções Relacionadas

- [CreatePlayer3DTextLabel](CreatePlayer3DTextLabel): Crie uma etiqueta de texto 3D para um jogador.
- [DeletePlayer3DTextLabel](DeletePlayer3DTextLabel): Exclua o rótulo de texto 3D de um jogador.
- [GetPlayer3DTextLabelText](GetPlayer3DTextLabelText): Obtém o texto do rótulo de texto 3D do jogador.
- [GetPlayer3DTextLabelColour](GetPlayer3DTextLabelColour): Obtém a cor do rótulo de texto 3D do jogador.
- [Update3DTextLabelText](Update3DTextLabelText): Altere o texto de uma etiqueta de texto 3D.
