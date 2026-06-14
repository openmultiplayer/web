---
title: TextDrawSetShadow
sidebar_label: TextDrawSetShadow
description: "Define o tamanho da sombra do texto de um textdraw."
tags: ["textdraw"]
---


## Descrição

Define o tamanho da sombra do texto de um textdraw.

| Nome | Descrição |
| ----------- | ------------------------------------------------------------------------------------------------------- |
| Text:textid | O ID do textdraw para definir o tamanho da sombra.                                                       |
| shadowSize | O tamanho da sombra. 1 é geralmente usado para um tamanho de sombra normal. 0 desativa a sombra completamente. |

## Retornos

**true** - A função foi executada com sucesso.

**false** - Falha na execução da função. O textdraw não existe.

## Exemplos

```c
new Text:gMyTextdraw;

public OnGameModeInit()
{
    gMyTextdraw = TextDrawCreate(100.0, 33.0, "Example TextDraw");
    TextDrawSetShadow(gMyTextdraw, 1);
    return 1;
}
```
## Notas

:::tip

A sombra pode ser cortada pela área da caixa se o tamanho for muito grande para a área.

:::

:::tip

Se você quiser alterar a sombra de um textdraw que já está sendo mostrado, não será necessário recriá-lo. Basta usar [TextDrawShowForPlayer](TextDrawShowForPlayer)/[TextDrawShowForAll](TextDrawShowForAll) após modificar o textdraw e a alteração ficará visível.

:::

## Funções Relacionadas

- [TextDrawCreate](TextDrawCreate): Crie um desenho de texto.
- [TextDrawDestroy](TextDrawDestroy): Destrua um textdraw.
- [TextDrawGetShadow](TextDrawGetShadow): Obtém o tamanho da sombra do texto de um textdraw.
- [TextDrawColor](TextDrawColor): Defina a cor do texto em um textdraw.
- [TextDrawBoxColor](TextDrawBoxColor): Defina a cor da caixa em um textdraw.
- [TextDrawBackgroundColor](TextDrawBackgroundColor): Define a cor de fundo de um textdraw.
- [TextDrawAlignment](TextDrawAlignment): Define o alinhamento de um textdraw.
- [TextDrawFont](TextDrawFont): Define a fonte de um textdraw.
- [TextDrawLetterSize](TextDrawLetterSize): Defina o tamanho da letra do texto em um textdraw.
- [TextDrawTextSize](TextDrawTextSize): Defina o tamanho de uma caixa de desenho de texto.
- [TextDrawSetOutline](TextDrawSetOutline): Escolha se o texto possui contorno.
- [TextDrawSetProportional](TextDrawSetProportional): Dimensione o espaçamento do texto em um textdraw para uma proporção proporcional.
- [TextDrawUseBox](TextDrawUseBox): Alterna se o textdraw possui caixa ou não.
- [TextDrawSetString](TextDrawSetString): Defina o texto em um textdraw existente.
- [TextDrawShowForPlayer](TextDrawShowForPlayer): Mostra um textdraw para um determinado jogador.
- [TextDrawHideForPlayer](TextDrawHideForPlayer): Oculta um textdraw para um determinado jogador.
- [TextDrawShowForAll](TextDrawShowForAll): Mostra um textdraw para todos os jogadores.
- [TextDrawHideForAll](TextDrawHideForAll): Oculta um textdraw para todos os jogadores.
