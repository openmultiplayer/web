---
title: SetPlayerChatBubble
sidebar_label: SetPlayerChatBubble
description: "Cria um balão de bate-papo acima da etiqueta com o nome do jogador."
tags: ["player"]
---


## Descrição

Cria um balão de bate-papo acima da etiqueta com o nome do jogador.

| Nome | Descrição |
| ------------------ | ---------------------------------------------------------------- |
| playerid | O jogador que deve ter o balão de bate-papo.                    |
| const text[] | O texto a ser exibido.                                             |
| colour | A cor do texto |
| Float:drawDistance | A distância de onde os jogadores conseguem ver o balão de bate-papo. |
| expireTime | O tempo em milissegundos durante o qual a bolha deve ser exibida.      |
| OPEN_MP_TAGS:... | Número indefinido de argumentos de qualquer tag.                       |

## Retornos

Esta função não retorna nenhum valor específico.

## Exemplos

```c
public OnPlayerText(playerid, text[])
{
    SetPlayerChatBubble(playerid, text, 0xFF0000FF, 100.0, 10000);
    return 1;
}
```
## Notas

:::tip

Você não pode ver seus próprios balões de bate-papo. O mesmo se aplica às etiquetas de texto 3D anexadas.

:::

:::tip

- Você pode usar a incorporação de cores para várias cores na mensagem.
- Usar '-1' como cor tornará o texto branco (pela simples razão de que -1, quando representado em notação hexadecimal, é 0xFFFFFFFF).

:::

## Funções Relacionadas

- [Attach3DTextLabelToPlayer](Attach3DTextLabelToPlayer): Anexe uma etiqueta de texto 3D a um jogador.
