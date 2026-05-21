---
title: TextDrawColour
sidebar_label: TextDrawColour
description: "Define a cor do texto de um textdraw."
tags: ["textdraw"]
---


<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Define a cor do texto de um textdraw

| Nome | Descrição |
| ----------- | ----------------------------------------------- |
| Text:textid | O ID do textdraw cuja cor será alterada. |
| textColour | A cor para definir o textdraw.              |

## Retornos

Esta função não retorna nenhum valor específico.

## Exemplos

```c
new Text:gMyTextdraw;

public OnGameModeInit()
{
    gMyTextdraw = TextDrawCreate(123.0, 123.0, "Example");
    TextDrawColour(gMyTextdraw, 0x000000FF);
    return 1;
}
```
## Notas

:::tip

Caso TextDraw já esteja sendo mostrado, ele deverá ser mostrado novamente ([TextDrawShowForAll](TextDrawShowForAll)/[TextDrawShowForPlayer](TextDrawShowForPlayer)) para que as alterações desta função tenham efeito.

:::

## Funções Relacionadas

- [TextDrawCreate](TextDrawCreate): Crie um desenho de texto.
- [TextDrawDestroy](TextDrawDestroy): Destrua um textdraw.
- [TextDrawBoxColour](TextDrawBoxColour): Defina a cor da caixa em um textdraw.
- [TextDrawBackgroundColour](TextDrawBackgroundColour): Defina a cor de fundo de um textdraw.
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
