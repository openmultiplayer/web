---
title: TextDrawBoxColor
sidebar_label: TextDrawBoxColor
description: "Ajusta a cor da caixa de texto (usado apenas se o parâmetro 'use' de TextDrawUseBox for 1)."
tags: ["textdraw"]
---


## Descrição

Ajusta a cor da caixa de texto (usado apenas se o parâmetro 'use' de TextDrawUseBox for 'true').

| Nome | Descrição |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Text:textid | O TextDraw para mudar |
| boxColour | A cor. A opacidade é definida pela intensidade alfa da cor (por exemplo, a cor 0x000000FF tem uma opacidade de caixa preta sólida, enquanto 0x000000AA tem uma opacidade de caixa preta semitransparente). |

## Retornos

Esta função não retorna nenhum valor específico.

## Exemplos

```c
new Text:gMyTextdraw;

public OnGameModeInit()
{
    gMyTextdraw = TextDrawCreate(123.0, 123.0, "Example");
    TextDrawUseBox(gMyTextdraw, true);
    TextDrawBoxColor(gMyTextdraw, 0xFFFFFFFF);
    return 1;
}
```
## Notas

:::tip

Se você quiser alterar a cor da caixa de um textdraw que já está sendo mostrado, não será necessário recriá-lo. Basta usar [TextDrawShowForPlayer](TextDrawShowForPlayer)/[TextDrawShowForAll](TextDrawShowForAll) após modificar o textdraw e a alteração ficará visível.

:::

## Funções Relacionadas

- [TextDrawCreate](TextDrawCreate): Crie um desenho de texto.
- [TextDrawDestroy](TextDrawDestroy): Destrua um textdraw.
- [TextDrawColor](TextDrawColor): Defina a cor do texto em um textdraw.
- [TextDrawBackgroundColor](TextDrawBackgroundColor): Defina a cor de fundo de um textdraw.
- [TextDrawAlignment](TextDrawAlignment): Define o alinhamento de um textdraw.
- [TextDrawFont](TextDrawFont): Defina a fonte de um textdraw.
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
