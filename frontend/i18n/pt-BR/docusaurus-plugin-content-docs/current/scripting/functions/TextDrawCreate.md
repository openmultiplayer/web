---
title: TextDrawCreate
sidebar_label: TextDrawCreate
description: "Cria um desenho de texto."
tags: ["textdraw"]
---


## Descrição

Cria um desenho de texto. Textdraws são, como o nome indica, texto (principalmente - pode haver caixas, sprites e visualizações de modelos (skins/veículos/armas/objetos também) que é desenhado nas telas de um jogador. Consulte esta página para obter informações abrangentes sobre textdraws.

| Nome | Descrição |
| ---------------- | -------------------------------------------------------- |
| Float:x | A coordenada X (esquerda/direita) na qual criar o textdraw. |
| Float:y | A coordenada Y (para cima/para baixo) na qual criar o textdraw.    |
| const format[] | O texto que aparecerá no textdraw.               |
| OPEN_MP_TAGS:... | Número indefinido de argumentos de qualquer tag.               |

## Retornos

O ID do textdraw criado.

Textdraw IDs começa em **0**.

## Exemplos

```c
// Esta variável é usada para armazenar o id do textdraw
// para que possamos usá-lo em todo o script
new Text:gMyTextdraw;

public OnGameModeInit()
{
    // Esta linha é usada para criar o textdraw.
    // Nota: Isso cria um textdraw sem qualquer formatação.
    gMyTextdraw = TextDrawCreate(240.0, 580.0, "Welcome to my OPEN.MP server");
    return 1;
}

public OnPlayerConnect(playerid)
{
    //Isso é usado para mostrar ao jogador o textdraw quando ele se conecta.
    TextDrawShowForPlayer(playerid, gMyTextdraw);
    return 1;
}
```
## Notas

:::tip

- A coordenada `x, y` é a coordenada superior esquerda para a área de desenho de texto com base em uma "tela" de 640x480 (independentemente da resolução da tela).
- Se você planeja usar [TextDrawAlignment](TextDrawAlignment) com alinhamento 3 (`TEXT_DRAW_ALIGN_RIGHT`), a coordenada `x, y` é a coordenada superior direita para o desenho do texto.
- Esta função apenas CREATES o textdraw, você deve usar [TextDrawShowForPlayer](TextDrawShowForPlayer) ou [TextDrawShowForAll](TextDrawShowForAll) para mostrá-lo.
- Recomenda-se usar números WHOLE em vez de posições decimais ao criar desenhos de texto para garantir um design de resolução amigável.

:::

:::warning

Os códigos de mapeamento de teclas do teclado (como `~k~~VEHICLE_ENTER_EXIT~`) não funcionam além do 255º caractere.

:::

## Funções Relacionadas

- [TextDrawDestroy](TextDrawDestroy): Destrua um textdraw.
- [TextDrawColor](TextDrawColor): Defina a cor do texto em um textdraw.
- [TextDrawBoxColor](TextDrawBoxColor): Defina a cor da caixa em um textdraw.
- [TextDrawBackgroundColor](TextDrawBackgroundColor): Defina a cor de fundo de um textdraw.
- [TextDrawAlignment](TextDrawAlignment): Define o alinhamento de um textdraw.
- [TextDrawFont](TextDrawFont): Define a fonte de um textdraw.
- [TextDrawLetterSize](TextDrawLetterSize): Defina o tamanho da letra do texto em um textdraw.
- [TextDrawTextSize](TextDrawTextSize): Defina o tamanho de uma caixa de desenho de texto.
- [TextDrawSetOutline](TextDrawSetOutline): Escolha se o texto possui contorno.
- [TextDrawSetShadow](TextDrawSetShadow): Alterna sombras em um textdraw.
- [TextDrawSetProportional](TextDrawSetProportional): Dimensione o espaçamento do texto em um textdraw para uma proporção proporcional.
- [TextDrawUseBox](TextDrawUseBox): Alterna se o textdraw possui caixa ou não.
- [TextDrawSetString](TextDrawSetString): Defina o texto em um textdraw existente.
- [TextDrawShowForPlayer](TextDrawShowForPlayer): Mostra um desenho de texto para um determinado jogador.
- [TextDrawHideForPlayer](TextDrawHideForPlayer): Oculta um textdraw para um determinado jogador.
- [TextDrawShowForAll](TextDrawShowForAll): Mostra um textdraw para todos os jogadores.
- [TextDrawHideForAll](TextDrawHideForAll): Oculta um textdraw para todos os jogadores.
- [IsTextDrawVisibleForPlayer](IsTextDrawVisibleForPlayer): Verifica se é mostrado um textdraw para o jogador.
- [IsValidTextDraw](IsValidTextDraw): Verifica se um textdraw é válido.
- [TextDrawGetAlignment](TextDrawGetAlignment): Obtém o alinhamento do texto de um textdraw.
- [TextDrawGetBackgroundColour](TextDrawGetBackgroundColour): Obtém a cor de fundo de um textdraw.
- [TextDrawGetBoxColour](TextDrawGetBoxColour): Obtém a cor da caixa de um textdraw.
- [TextDrawGetColour](TextDrawGetColour): Obtém a cor do texto de um textdraw.
- [TextDrawGetFont](TextDrawGetFont): Obtém a fonte do texto de um textdraw.
- [TextDrawGetLetterSize](TextDrawGetLetterSize): Obtém a largura e a altura das letras.
- [TextDrawGetOutline](TextDrawGetOutline): Obtém a espessura do contorno do texto de um textdraw.
- [TextDrawGetPos](TextDrawGetPos): Obtém a posição de um textdraw.
- [TextDrawGetPreviewModel](TextDrawGetPreviewModel): Obtém o modelo de visualização de um textdraw de visualização 3D.
- [TextDrawGetPreviewRot](TextDrawGetPreviewRot): Obtém a rotação e o zoom de um desenho de texto de visualização de modelo 3D.
- [TextDrawGetPreviewVehCol](TextDrawGetPreviewVehCol): Obtém as cores do veículo de visualização de um textdraw de visualização 3D.
- [TextDrawGetPreviewVehicleColours](TextDrawGetPreviewVehicleColours): Obtém as cores do veículo de visualização de um textdraw de visualização 3D.
- [TextDrawGetShadow](TextDrawGetShadow): Obtém o tamanho da sombra do texto de um textdraw.
- [TextDrawGetString](TextDrawGetString): Obtém o texto de um textdraw.
- [TextDrawGetTextSize](TextDrawGetTextSize): Obtém o eixo X e o eixo Y do textdraw.
- [TextDrawIsBox](TextDrawIsBox): Verifica se um textdraw é caixa.
- [TextDrawIsProportional](TextDrawIsProportional): Verifica se um textdraw é proporcional.
- [TextDrawIsSelectable](TextDrawIsSelectable): Verifica se um textdraw é selecionável.
- [TextDrawSetPos](TextDrawSetPos): Define a posição de um textdraw.
- [TextDrawSetStringForPlayer](TextDrawSetStringForPlayer): Altera o texto em um textdraw para um jogador específico.

## Recursos relacionados

- [Sprites TextDraw](../resources/textdrawsprites)
