---
title: TextDrawFont
sidebar_label: TextDrawFont
description: "Altera a fonte do texto."
tags: ["textdraw"]
---


## Descrição

Altera a fonte do texto.

| Nome | Descrição |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Text:textid | O TextDraw para mudar |
| TEXT_DRAW_FONT:font | Existem quatro estilos de fonte, conforme mostrado abaixo. O valor da fonte 4 especifica que este é um sprite txd; 5 especifica que este textdraw pode exibir modelos de visualização. Um valor de fonte maior que 5 não é exibido e qualquer valor maior que 16 trava o cliente. |

Estilos disponíveis:
![Estilos disponíveis](https://assets.open.mp/assets/images/textdraws/Textdraw_font_styles.png)

Fontes disponíveis:
![Fontes disponíveis](https://assets.open.mp/assets/images/textdraws/Textdraw_Fonts.png)

## Retornos

Esta função não retorna nenhum valor específico.

## Exemplos

```c
/*
    TEXT_DRAW_FONT_0
    TEXT_DRAW_FONT_1
    TEXT_DRAW_FONT_2
    TEXT_DRAW_FONT_3
    TEXT_DRAW_FONT_SPRITE_DRAW
    TEXT_DRAW_FONT_MODEL_PREVIEW
*/

new Text:gMyTextdraw;

public OnGameModeInit()
{
    gMyTextdraw = TextDrawCreate(320.0, 425.0, "This is an example textdraw");
    TextDrawFont(gMyTextdraw, TEXT_DRAW_FONT_2);
    return 1;
}
```
## Notas

:::tip

Se você quiser alterar a fonte de um textdraw que já está sendo mostrado, não será necessário recriá-lo. Basta usar [TextDrawShowForPlayer](TextDrawShowForPlayer)/[TextDrawShowForAll](TextDrawShowForAll) após modificar o textdraw e a alteração ficará visível.

:::

## Funções Relacionadas

- [TextDrawCreate](TextDrawCreate): Crie um desenho de texto.
- [TextDrawDestroy](TextDrawDestroy): Destrua um textdraw.
- [TextDrawGetFont](TextDrawGetFont): Obtém a fonte do texto de um textdraw.
- [TextDrawColor](TextDrawColor): Defina a cor do texto em um textdraw.
- [TextDrawBoxColor](TextDrawBoxColor): Defina a cor da caixa em um textdraw.
- [TextDrawBackgroundColor](TextDrawBackgroundColor): Defina a cor de fundo de um textdraw.
- [TextDrawAlignment](TextDrawAlignment): Define o alinhamento de um textdraw.
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
