---
title: TextDrawBackgroundColour
sidebar_label: TextDrawBackgroundColour
description: "Ajusta a cor de fundo da área de desenho de texto (o contorno/sombra, não a caixa."
tags: ["textdraw"]
---


<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Ajusta a cor de fundo da área de desenho de texto (o contorno/sombra, não a caixa. Para a cor da caixa, consulte [TextDrawBoxColour](TextDrawBoxColour)).

| Nome | Descrição |
| ---------------- | ------------------------------------------------------ |
| Text:textid | O ID do textdraw para definir a cor de fundo de |
| backgroundColour | A cor com a qual o textdraw deve ser definido.         |

## Retornos

Esta função não retorna nenhum valor específico.

## Exemplos

```c
new Text:gMyTextdraw;

public OnGameModeInit()
{
    gMyTextdraw = TextDrawCreate(320.0, 425.0, "This is an example textdraw");
    TextDrawUseBox(gMyTextdraw, true);
    TextDrawBackgroundColour(gMyTextdraw, 0xFFFFFFFF); // Defina a cor de fundo do gMyTextdraw como branco
    return 1;
}
```
## Notas

:::tip

Se [TextDrawSetOutline](TextDrawSetOutline) for usado com tamanho > 0, a cor do contorno corresponderá à cor usada em TextDrawBackgroundColour. Alterar o valor da cor parece alterar a cor usada em TextDrawColour.

:::

:::tip

Se você quiser alterar a cor de fundo de um textdraw que já está sendo mostrado, não será necessário recriá-lo. Basta usar [TextDrawShowForPlayer](TextDrawShowForPlayer)/[TextDrawShowForAll](TextDrawShowForAll) após modificar o textdraw e a alteração ficará visível.

:::

## Funções Relacionadas

- [TextDrawCreate](TextDrawCreate): Crie um desenho de texto.
- [TextDrawDestroy](TextDrawDestroy): Destrua um textdraw.
- [TextDrawColour](TextDrawColour): Defina a cor do texto em um textdraw.
- [TextDrawBoxColour](TextDrawBoxColour): Defina a cor da caixa em um textdraw.
- [TextDrawAlignment](TextDrawAlignment): Define o alinhamento de um textdraw.
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
