---
title: TextDrawTextSize
sidebar_label: TextDrawTextSize
description: "Altere o tamanho de um textdraw (caixa se TextDrawUseBox estiver habilitado e/ou área clicável para uso com TextDrawSetSelectable)."
tags: ["textdraw"]
---


## Descrição

Altere o tamanho de um textdraw (caixa se [TextDrawUseBox](TextDrawUseBox) estiver habilitado e/ou área clicável para uso com [TextDrawSetSelectable](TextDrawSetSelectable)).

| Nome | Descrição |
| ------------ | -------------------------------------------------------------------------------------- |
| Text:textid | O TextDraw para definir o tamanho.                                                       |
| Float:width | O tamanho no eixo X (esquerda/direita) seguindo a mesma grade de 640x480 de TextDrawCreate. |
| Float:height | O tamanho no eixo Y (para cima/para baixo) seguindo a mesma grade de 640x480 de TextDrawCreate.    |

## Retornos

Esta função não retorna nenhum valor específico.

## Exemplos

```c
new Text:gMyTextdraw;

public OnGameModeInit()
{
    gMyTextdraw = TextDrawCreate(100.0, 33.0, "Example TextDraw");
    TextDrawTextSize(gMyTextdraw, 2.0, 3.6);
    return 1;
}
```
## Notas

:::tip

- Os x e y têm significados diferentes com valores TextDrawAlignment diferentes: 1 (esquerda): são o canto mais direito da caixa, coordenadas absolutas. 2 (centro): eles precisam ser invertidos (trocar os dois) e o valor x é a largura total da caixa. 3 (direita): x e y são as coordenadas do canto mais esquerdo da caixa
- Usar o tipo de fonte 4 (sprite) e 5 (visualização do modelo) converte X e Y desta função das coordenadas de canto para WIDTH e HEIGHT (offsets).
- A caixa TextDraw inicia 10,0 unidades para cima e 5,0 para a esquerda como origem (coordenada TextDrawCreate).
- Esta função define a área clicável para uso com TextDrawSetSelectable, seja uma caixa mostrada ou não.

:::

:::tip

- Se quiser alterar o tamanho do texto de um textdraw que já está mostrado, não é necessário recriá-lo. Basta usar [TextDrawShowForPlayer](TextDrawShowForPlayer)/[TextDrawShowForAll](TextDrawShowForAll) após modificar o textdraw e a alteração ficará visível.

:::

## Funções Relacionadas

- [TextDrawCreate](TextDrawCreate): Crie um desenho de texto.
- [TextDrawDestroy](TextDrawDestroy): Destrua um textdraw.
- [TextDrawGetTextSize](TextDrawGetTextSize): Obtém o eixo X e o eixo Y do textdraw.
- [TextDrawColor](TextDrawColor): Defina a cor do texto em um textdraw.
- [TextDrawBoxColor](TextDrawBoxColor): Defina a cor da caixa em um textdraw.
- [TextDrawBackgroundColor](TextDrawBackgroundColor): Defina a cor de fundo de um textdraw.
- [TextDrawAlignment](TextDrawAlignment): Define o alinhamento de um textdraw.
- [TextDrawFont](TextDrawFont): Define a fonte de um textdraw.
- [TextDrawLetterSize](TextDrawLetterSize): Defina o tamanho da letra do texto em um textdraw.
- [TextDrawSetOutline](TextDrawSetOutline): Escolha se o texto possui contorno.
- [TextDrawSetShadow](TextDrawSetShadow): Alterna sombras em um textdraw.
- [TextDrawSetProportional](TextDrawSetProportional): Dimensione o espaçamento do texto em um textdraw para uma proporção proporcional.
- [TextDrawUseBox](TextDrawUseBox): Alterna se o textdraw possui caixa ou não.
- [TextDrawSetString](TextDrawSetString): Defina o texto em um textdraw existente.
- [TextDrawShowForPlayer](TextDrawShowForPlayer): Mostra um textdraw para um determinado jogador.
- [TextDrawHideForPlayer](TextDrawHideForPlayer): Oculta um textdraw para um determinado jogador.
- [TextDrawShowForAll](TextDrawShowForAll): Mostra um textdraw para todos os jogadores.
- [TextDrawHideForAll](TextDrawHideForAll): Oculta um textdraw para todos os jogadores.
