---
title: TextDrawAlignment
sidebar_label: TextDrawAlignment
description: "Defina o alinhamento do texto em um desenho de texto."
tags: ["textdraw"]
---


## Descrição

Defina o alinhamento do texto em um desenho de texto.

| Parameter | Descrição |
| ------------------------- | --------------------------------------------------------------------------- |
| Text:textid | O ID do textdraw para definir o alinhamento.                             |
| TEXT_DRAW_ALIGN:alignment | `TEXT_DRAW_ALIGN_LEFT`/`TEXT_DRAW_ALIGN_CENTER`/`TEXT_DRAW_ALIGN_RIGHT` |

## Retornos

Esta função não retorna nenhum valor específico.

## Exemplos

```c
/*
    TEXT_DRAW_ALIGN_LEFT
    TEXT_DRAW_ALIGN_CENTER
    TEXT_DRAW_ALIGN_RIGHT
*/

new Text:gMyTextdraw;

public OnGameModeInit()
{
    gMyTextdraw = TextDrawCreate(320.0, 425.0, "This is an example textdraw");
    TextDrawAlignment(gMyTextdraw, TEXT_DRAW_ALIGN_CENTER); // Alinhe o texto do textdraw no centro
    return 1;
}
```
## Notas

:::warning

Para alinhamento TEXT_DRAW_ALIGN_CENTER (centro), os valores x e y de TextSize precisam ser trocados, consulte as notas em [TextDrawTextSize](TextDrawTextSize), também a coordenada de posição se torna a posição do centro do desenho de texto e não das bordas esquerda/superior.

:::

:::tip

Caso o textdraw já esteja sendo mostrado, ele deve ser mostrado novamente ([TextDrawShowForAll](TextDrawShowForAll)/[TextDrawShowForPlayer](TextDrawShowForPlayer)) para mostrar as alterações desta função.

:::

## Funções Relacionadas

- [TextDrawCreate](TextDrawCreate): Crie um desenho de texto.
- [TextDrawDestroy](TextDrawDestroy): Destrua um textdraw.
- [TextDrawGetAlignment](TextDrawGetAlignment): Obtém o alinhamento do texto de um textdraw.
- [TextDrawColor](TextDrawColor): Defina a cor do texto em um textdraw.
- [TextDrawBoxColor](TextDrawBoxColor): Defina a cor da caixa em um textdraw.
- [TextDrawBackgroundColor](TextDrawBackgroundColor): Defina a cor de fundo de um textdraw.
- [TextDrawFont](TextDrawFont): Define a fonte de um textdraw.
- [TextDrawLetterSize](TextDrawLetterSize): Defina o tamanho da letra do texto em um textdraw.
- [TextDrawTextSize](TextDrawTextSize): Defina o tamanho de uma caixa de desenho de texto.
- [TextDrawSetOutline](TextDrawSetOutline): Escolha se o texto possui contorno.
- [TextDrawSetShadow](TextDrawSetShadow): Alterna sombras em um textdraw.
- [TextDrawSetProportional](TextDrawSetProportional): Dimensione o espaçamento do texto em um textdraw para uma proporção proporcional.
- [TextDrawUseBox](TextDrawUseBox): Alterna se o textdraw possui caixa ou não.
- [TextDrawSetString](TextDrawSetString): Defina o texto em um textdraw existente.
- [TextDrawShowForPlayer](TextDrawShowForPlayer): Mostra um textdraw para um determinado jogador.
- [TextDrawHideForPlayer](TextDrawHideForPlayer): Oculta um textdraw para um determinado jogador.
- [TextDrawShowForAll](TextDrawShowForAll): Mostra um textdraw para todos os jogadores.
- [TextDrawHideForAll](TextDrawHideForAll): Oculta um textdraw para todos os jogadores.
