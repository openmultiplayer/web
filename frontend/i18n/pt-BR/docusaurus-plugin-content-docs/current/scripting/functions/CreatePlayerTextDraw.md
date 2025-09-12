---
title: CreatePlayerTextDraw
sidebar_label: CreatePlayerTextDraw
description: Cria um textdraw para um único jogador.
tags: ["player", "textdraw", "playertextdraw"]
---

## Descrição

Cria um textdraw para um único jogador. Isso pode ser usado como uma alternativa ao limite de textdraws globais.

| Nome             | Descrição                                       |
| ---------------- | ----------------------------------------------- |
| playerid         | O ID do jogador para criar o textdraw          |
| Float:x          | Coordenada X                                    |
| Float:y          | Coordenada Y                                    |
| const format[]   | O texto no textdraw.                           |
| OPEN_MP_TAGS:... | Número indefinido de argumentos de qualquer tag. |

## Retorno

O ID do textdraw criado

## Exemplos

```c
// Esta variável é usada para armazenar o id do textdraw
// para que possamos usá-lo em todo o script
new PlayerText:welcomeText[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    // Primeiro, cria o textdraw
    welcomeText[playerid] = CreatePlayerTextDraw(playerid, 320.0, 240.0, "Bem-vindo ao meu servidor OPEN.MP");

    // Agora mostra ele
    PlayerTextDrawShow(playerid, welcomeText[playerid]);
    return 1;
}
```

## Notas

:::tip

Textdraws de jogador são automaticamente destruídos quando um jogador se desconecta.

:::

:::warning

Códigos de mapeamento de teclas do teclado (como ~k~~VEHICLE_ENTER_EXIT~) não funcionam além do 255º caractere.

:::

## Funções Relacionadas

- [PlayerTextDrawDestroy](PlayerTextDrawDestroy): Destrói um textdraw de jogador.
- [PlayerTextDrawColor](PlayerTextDrawColor): Define a cor do texto em um textdraw de jogador.
- [PlayerTextDrawBoxColor](PlayerTextDrawBoxColor): Define a cor da caixa de um textdraw de jogador.
- [PlayerTextDrawBackgroundColor](PlayerTextDrawBackgroundColor): Define a cor de fundo de um textdraw de jogador.
- [PlayerTextDrawAlignment](PlayerTextDrawAlignment): Define o alinhamento de um textdraw de jogador.
- [PlayerTextDrawFont](PlayerTextDrawFont): Define a fonte de um textdraw de jogador.
- [PlayerTextDrawLetterSize](PlayerTextDrawLetterSize): Define o tamanho da letra do texto em um textdraw de jogador.
- [PlayerTextDrawTextSize](PlayerTextDrawTextSize): Define o tamanho de uma caixa de textdraw de jogador (ou área clicável para PlayerTextDrawSetSelectable).
- [PlayerTextDrawSetOutline](PlayerTextDrawSetOutline): Alterna o contorno em um textdraw de jogador.
- [PlayerTextDrawSetShadow](PlayerTextDrawSetShadow): Define a sombra em um textdraw de jogador.
- [PlayerTextDrawSetProportional](PlayerTextDrawSetProportional): Escala o espaçamento do texto em um textdraw de jogador para uma proporção proporcional.
- [PlayerTextDrawUseBox](PlayerTextDrawUseBox): Alterna a caixa em um textdraw de jogador.
- [PlayerTextDrawSetString](PlayerTextDrawSetString): Define o texto de um textdraw de jogador.
- [PlayerTextDrawShow](PlayerTextDrawShow): Mostra um textdraw de jogador.
- [PlayerTextDrawHide](PlayerTextDrawHide): Esconde um textdraw de jogador.
- [IsPlayerTextDrawVisible](IsPlayerTextDrawVisible): Verifica se um textdraw de jogador está sendo mostrado para o jogador.
- [IsValidPlayerTextDraw](IsValidPlayerTextDraw): Verifica se um textdraw de jogador é válido.
- [PlayerTextDrawBackgroundColour](PlayerTextDrawBackgroundColour): Ajusta a cor de fundo de um textdraw de jogador.
- [PlayerTextDrawBoxColour](PlayerTextDrawBoxColour): Define a cor da caixa de um textdraw (PlayerTextDrawUseBox).
- [PlayerTextDrawColour](PlayerTextDrawColour): Define a cor do texto de um textdraw de jogador.
- [PlayerTextDrawGetAlignment](PlayerTextDrawGetAlignment): Obtém o alinhamento do texto de um textdraw de jogador.
- [PlayerTextDrawGetBackgroundColour](PlayerTextDrawGetBackgroundColour): Obtém a cor de fundo de um textdraw de jogador.
- [PlayerTextDrawGetBoxColour](PlayerTextDrawGetBoxColour): Obtém a cor da caixa de um textdraw de jogador.
- [PlayerTextDrawGetColour](PlayerTextDrawGetColour): Obtém a cor do texto de um textdraw de jogador.
- [PlayerTextDrawGetFont](PlayerTextDrawGetFont): Obtém a fonte do texto de um textdraw de jogador.
- [PlayerTextDrawGetLetterSize](PlayerTextDrawGetLetterSize): Obtém a largura e altura das letras.
- [PlayerTextDrawGetOutline](PlayerTextDrawGetOutline): Obtém o tamanho do contorno em um textdraw de jogador.
- [PlayerTextDrawGetPos](PlayerTextDrawGetPos): Obtém a posição de um textdraw de jogador.
- [PlayerTextDrawGetPreviewModel](PlayerTextDrawGetPreviewModel): Obtém o modelo de visualização de um textdraw de jogador de visualização 3D.
- [PlayerTextDrawGetPreviewRot](PlayerTextDrawGetPreviewRot): Obtém a rotação e zoom de um textdraw de jogador de visualização de modelo 3D.
- [PlayerTextDrawGetPreviewVehicleColours](PlayerTextDrawGetPreviewVehicleColours): Obtém as cores do veículo de visualização de um textdraw de jogador de visualização 3D.
- [PlayerTextDrawGetShadow](PlayerTextDrawGetShadow): Obtém o tamanho da sombra em um textdraw de jogador.
- [PlayerTextDrawGetString](PlayerTextDrawGetString): Obtém o texto de um textdraw de jogador.
- [PlayerTextDrawGetTextSize](PlayerTextDrawGetTextSize): Obtém o eixo X e eixo Y do tamanho do texto do textdraw de jogador.
- [PlayerTextDrawIsBox](PlayerTextDrawIsBox): Verifica se um textdraw de jogador é uma caixa.
- [PlayerTextDrawIsProportional](PlayerTextDrawIsProportional): Verifica se um textdraw de jogador é proporcional.
- [PlayerTextDrawIsSelectable](PlayerTextDrawIsSelectable): Verifica se um textdraw de jogador é selecionável.
- [PlayerTextDrawSetPos](PlayerTextDrawSetPos): Define a posição de um textdraw de jogador.
- [PlayerTextDrawSetPreviewVehicleColours](PlayerTextDrawSetPreviewVehicleColours): Define a cor de um veículo em uma visualização de modelo de textdraw de jogador (se um veículo for mostrado).

## Recursos Relacionados

- [TextDraw Sprites](../resources/textdrawsprites)