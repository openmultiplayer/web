---
title: Textdraws
sidebar_label: Textdraws
description: "Como o nome indica, um textdraw é um texto desenhado na tela de um jogador."
---


## O que é um Textdraw?

Como o nome indica, um textdraw é um texto desenhado na tela de um jogador. Ao contrário das [mensagens do cliente](../functions/SendClientMessage) ou do [texto do jogo](../functions/GameTextForPlayer), no entanto, os textdraws podem ser mostrados na tela do jogador por um período de tempo indefinido. Textdraws podem ser textos simples na tela, como o endereço de um site, ou textdraws dinâmicos com scripts complexos, como barras de progresso.

Esta ferramenta de 'editor de textdraw' pode tornar o design de textdraws muito mais fácil.

---

## Sorteios de texto globais

Textdraws globais podem ser criados e mostrados a todos os jogadores. Porém, existe um [limite](limits) de quantos podem ser criados. Isso significa que se você tiver um servidor com 500 jogadores, não será possível criar mais de 4 textdraws por jogador. É aí que entra o **player**-textdraws. Veja mais abaixo. Aqui está uma lista de todas as funções relacionadas ao **global** textdraws:

- [TextDrawCreate](../functions/TextDrawCreate): Crie um desenho de texto.
- [TextDrawDestroy](../functions/TextDrawDestroy): Destrua um textdraw.
- [TextDrawColor](../functions/TextDrawColor): Defina a cor do texto em um textdraw.
- [TextDrawBoxColor](../functions/TextDrawBoxColor): Defina a cor da caixa em um textdraw.
- [TextDrawBackgroundColor](../functions/TextDrawBackgroundColor): Define a cor de fundo de um textdraw.
- [TextDrawAlignment](../functions/TextDrawAlignment): Define o alinhamento de um textdraw.
- [TextDrawFont](../functions/TextDrawFont): Defina a fonte de um textdraw.
- [TextDrawLetterSize](../functions/TextDrawLetterSize): Defina o tamanho da letra do texto em um textdraw.
- [TextDrawTextSize](../functions/TextDrawTextSize): Defina o tamanho de uma caixa de desenho de texto.
- [TextDrawSetOutline](../functions/TextDrawSetOutline): Escolha se o texto possui contorno.
- [TextDrawSetShadow](../functions/TextDrawSetShadow): Alterna sombras em um textdraw.
- [TextDrawSetProportional](../functions/TextDrawSetProportional): Dimensione o espaçamento do texto em um textdraw para uma proporção proporcional.
- [TextDrawUseBox](../functions/TextDrawUseBox): Alterna se o textdraw possui caixa ou não.
- [TextDrawSetString](../functions/TextDrawSetString): Defina o texto em um textdraw existente.
- [TextDrawShowForPlayer](../functions/TextDrawShowForPlayer): Mostra um textdraw para um determinado jogador.
- [TextDrawHideForPlayer](../functions/TextDrawHideForPlayer): Oculta um textdraw para um determinado jogador.
- [TextDrawShowForAll](../functions/TextDrawShowForAll): Mostra um textdraw para todos os jogadores.
- [TextDrawHideForAll](../functions/TextDrawHideForAll): Oculta um textdraw para todos os jogadores.
- [IsTextDrawVisibleForPlayer](../functions/IsTextDrawVisibleForPlayer): Verifica se um textdraw é mostrado para o jogador.
- [IsValidTextDraw](../functions/IsValidTextDraw): Verifica se um textdraw é válido.
- [TextDrawGetAlignment](../functions/TextDrawGetAlignment): Obtém o alinhamento do texto de um textdraw.
- [TextDrawGetBackgroundColour](../functions/TextDrawGetBackgroundColour): Obtém a cor de fundo de um textdraw.
- [TextDrawGetBoxColour](../functions/TextDrawGetBoxColour): Obtém a cor da caixa de um textdraw.
- [TextDrawGetColour](../functions/TextDrawGetColour): Obtém a cor do texto de um textdraw.
- [TextDrawGetFont](../functions/TextDrawGetFont): Obtém a fonte do texto de um textdraw.
- [TextDrawGetLetterSize](../functions/TextDrawGetLetterSize): Obtém a largura e a altura das letras.
- [TextDrawGetOutline](../functions/TextDrawGetOutline): Obtém a espessura do contorno do texto de um textdraw.
- [TextDrawGetPos](../functions/TextDrawGetPos): Obtém a posição de um textdraw.
- [TextDrawGetPreviewModel](../functions/TextDrawGetPreviewModel): Obtém o modelo de visualização de um textdraw de visualização 3D.
- [TextDrawGetPreviewRot](../functions/TextDrawGetPreviewRot): Obtém a rotação e o zoom de um desenho de texto de visualização de modelo 3D.
- [TextDrawGetPreviewVehCol](../functions/TextDrawGetPreviewVehCol): Obtém as cores do veículo de visualização de um textdraw de visualização 3D.
- [TextDrawGetPreviewVehicleColours](../functions/TextDrawGetPreviewVehicleColours): Obtém as cores do veículo de visualização de um textdraw de visualização 3D.
- [TextDrawGetShadow](../functions/TextDrawGetShadow): Obtém o tamanho da sombra do texto de um textdraw.
- [TextDrawGetString](../functions/TextDrawGetString): Obtém o texto de um textdraw.
- [TextDrawGetTextSize](../functions/TextDrawGetTextSize): Obtém o eixo X e o eixo Y do textdraw.
- [TextDrawIsBox](../functions/TextDrawIsBox): Verifica se um textdraw é caixa.
- [TextDrawIsProportional](../functions/TextDrawIsProportional): Verifica se um textdraw é proporcional.
- [TextDrawIsSelectable](../functions/TextDrawIsSelectable): Verifica se um textdraw é selecionável.
- [TextDrawSetPos](../functions/TextDrawSetPos): Define a posição de um textdraw.
- [TextDrawSetStringForPlayer](../functions/TextDrawSetStringForPlayer): Altera o texto em um textdraw para um jogador específico.

---

## Player-textdraws

Player-textdraws são criados apenas para um jogador específico. Até 256 textdraws podem ser criados PER-PLAYER. São 128.000 em um servidor com 500 jogadores. Um pouco mais de 2048. Player-textdraws deve ser usado para coisas que não são 'estáticas'. Não os utilize para exibir o endereço de um site, por exemplo, mas para um indicador de saúde do veículo.

- [CreatePlayerTextDraw](../functions/CreatePlayerTextDraw): Crie um player-textdraw.
- [PlayerTextDrawDestroy](../functions/PlayerTextDrawDestroy): Destrua um jogador-textdraw.
- [PlayerTextDrawColor](../functions/PlayerTextDrawColor): Defina a cor do texto em um player-textdraw.
- [PlayerTextDrawBoxColor](../functions/PlayerTextDrawBoxColor): Defina a cor da caixa do player-textdraw.
- [PlayerTextDrawBackgroundColor](../functions/PlayerTextDrawBackgroundColor): Defina a cor de fundo de um player-textdraw.
- [PlayerTextDrawAlignment](../functions/PlayerTextDrawAlignment): Define o alinhamento de um player-textdraw.
- [PlayerTextDrawFont](../functions/PlayerTextDrawFont): Defina a fonte de um player-textdraw.
- [PlayerTextDrawLetterSize](../functions/PlayerTextDrawLetterSize): Defina o tamanho da letra do texto em um player-textdraw.
- [PlayerTextDrawTextSize](../functions/PlayerTextDrawTextSize): Defina o tamanho de uma caixa de desenho de texto do jogador (ou área clicável para [PlayerTextDrawSetSelectable](../functions/PlayerTextDrawSetSelectable)).
- [PlayerTextDrawSetOutline](../functions/PlayerTextDrawSetOutline): Alterna o contorno em um player-textdraw.
- [PlayerTextDrawSetShadow](../functions/PlayerTextDrawSetShadow): Defina a sombra em um player-textdraw.
- [PlayerTextDrawSetProportional](../functions/PlayerTextDrawSetProportional): Dimensione o espaçamento do texto em um player-textdraw para uma proporção proporcional.
- [PlayerTextDrawUseBox](../functions/PlayerTextDrawUseBox): Ative a caixa em um player-textdraw.
- [PlayerTextDrawSetString](../functions/PlayerTextDrawSetString): Define o texto de um player-textdraw.
- [PlayerTextDrawShow](../functions/PlayerTextDrawShow): Mostra um desenho de texto do jogador.
- [PlayerTextDrawHide](../functions/PlayerTextDrawHide): Ocultar um player-textdraw.
- [IsPlayerTextDrawVisible](../functions/IsPlayerTextDrawVisible): Verifica se um player-textdraw é mostrado para o jogador.
- [IsValidPlayerTextDraw](../functions/IsValidPlayerTextDraw): Verifica se um player-textdraw é válido.
- [PlayerTextDrawBackgroundColour](../functions/PlayerTextDrawBackgroundColour): Ajusta a cor de fundo de um player-textdraw.
- [PlayerTextDrawBoxColour](../functions/PlayerTextDrawBoxColour): Define a cor da caixa de um textdraw (PlayerTextDrawUseBox ).
- [PlayerTextDrawColour](../functions/PlayerTextDrawColour): Define a cor do texto de um player-textdraw.
- [PlayerTextDrawGetAlignment](../functions/PlayerTextDrawGetAlignment): Obtém o alinhamento do texto de um player-textdraw.
- [PlayerTextDrawGetBackgroundColour](../functions/PlayerTextDrawGetBackgroundColour): Obtém a cor de fundo de um player-textdraw.
- [PlayerTextDrawGetBoxColour](../functions/PlayerTextDrawGetBoxColour): Obtém a cor da caixa de um player-textdraw.
- [PlayerTextDrawGetColour](../functions/PlayerTextDrawGetColour): Obtém a cor do texto de um player-textdraw.
- [PlayerTextDrawGetFont](../functions/PlayerTextDrawGetFont): Obtém a fonte do texto de um player-textdraw.
- [PlayerTextDrawGetLetterSize](../functions/PlayerTextDrawGetLetterSize): Obtém a largura e a altura das letras.
- [PlayerTextDrawGetOutline](../functions/PlayerTextDrawGetOutline): Obtenha o tamanho do contorno em um player-textdraw.
- [PlayerTextDrawGetPos](../functions/PlayerTextDrawGetPos): Obtém a posição de um player-textdraw.
- [PlayerTextDrawGetPreviewModel](../functions/PlayerTextDrawGetPreviewModel): Obtém o modelo de visualização de um player-textdraw de visualização 3D.
- [PlayerTextDrawGetPreviewRot](../functions/PlayerTextDrawGetPreviewRot): Obtém a rotação e o zoom de um player-textdraw de visualização de modelo 3D.
- [PlayerTextDrawGetPreviewVehicleColours](../functions/PlayerTextDrawGetPreviewVehicleColours): Obtém as cores do veículo de visualização de um player-textdraw de visualização 3D.
- [PlayerTextDrawGetShadow](../functions/PlayerTextDrawGetShadow): Obtenha o tamanho da sombra em um player-textdraw.
- [PlayerTextDrawGetString](../functions/PlayerTextDrawGetString): Obtém o texto de um player-textdraw.
- [PlayerTextDrawGetTextSize](../functions/PlayerTextDrawGetTextSize): Obtém o eixo X e o eixo Y do tamanho do texto player-textdraw.
- [PlayerTextDrawIsBox](../functions/PlayerTextDrawIsBox): Verifica se um player-textdraw é box.
- [PlayerTextDrawIsProportional](../functions/PlayerTextDrawIsProportional): Verifica se o player-textdraw é proporcional.
- [PlayerTextDrawIsSelectable](../functions/PlayerTextDrawIsSelectable): Verifica se um player-textdraw pode ser selecionado.
- [PlayerTextDrawSetPos](../functions/PlayerTextDrawSetPos): Define a posição de um jogador-textdraw.
- [PlayerTextDrawSetPreviewVehicleColours](../functions/PlayerTextDrawSetPreviewVehicleColours): Defina a cor de um veículo em uma visualização do modelo player-textdraw (se um veículo for mostrado).

---

## Declaração de Variável

Ao criar um textdraw, você deve sempre decidir se o textdraw que você vai criar deve ser global (por exemplo, o endereço do seu site, anúncio global) ou se será diferente por jogador (por exemplo, mortes, mortes, pontuação).

### Textdraw Global

Um textdraw global é o mais fácil de criar e requer apenas uma variável. Esta variável é necessária para modificar o textdraw e mostrá-lo aos jogadores posteriormente. A declaração para tal textdraw precisa ser uma variável global na maioria dos casos. A variável textdraw também precisa ser prefixada com a tag _Text:_ e deve ser inicializada com o valor _Text:INVALID_TEXT_DRAW_. Se você omitir a inicialização, o textdraw poderá entrar em conflito com outros à medida que você adicionar mais textdraws.

```c
new Text:gMyText = Text:INVALID_TEXT_DRAW;
```
### Textdraw por jogador

Um textdraw por jogador é exatamente igual a um textdraw 'global' normal, mas cria apenas o textdraw para um único jogador.

Isto é útil para textdraws que são únicos para cada jogador, como uma barra de 'estatísticas' mostrando suas mortes ou pontuação.

Isso pode ser usado para evitar ultrapassar o limite global de textdraws, já que você pode criar 256 textdraws por jogador.

Eles também são mais fáceis de gerenciar, pois se destroem automaticamente quando o jogador se desconecta.

```c
new PlayerText:gMyPlayerText = PlayerText:INVALID_TEXT_DRAW;
```
:::info

IMPORTANT NOTE: Ainda é necessário um array para a variável, pois o ID dos textdraws pode diferir de jogador para jogador, pois outros jogadores podem ter mais ou menos textdraws criados que o outro.

:::

Os nomes das funções diferem apenas ligeiramente, com 'TextDraw' tornando-se 'PlayerTextDraw', com uma exceção: [CreatePlayerTextDraw](../functions/CreatePlayerTextDraw) ('TextDrawSetString' torna-se 'PlayerTextDrawSetString').

---

## Criando o Textdraw

![Imagem:320px-Textdraw_map.png](https://assets.open.mp/assets/images/textdraws/320px-Textdraw_map.png)

Depois de declarar uma variável/matriz para armazenar o ID do(s) seu(s) textdraw(s), você pode prosseguir para criar o próprio textdraw. Para textdraws globais que são sempre criados, o código deve ser colocado em [OnGameModeInit](../callbacks/OnGameModeInit). Para criar o textdraw deve ser utilizada a função [TextDrawCreate](../functions/TextDrawCreate).

Note que esta função apenas cria o textdraw, outras funções são usadas para modificá-lo e mostrá-lo ao(s) jogador(es).

**Parâmetros:**

TextDrawCreate(Float:x, Float:y, texto[])

| Nome | Descrição |
| ------ | -------------------------------------------- |
| x | Coordenada X na qual criar o textdraw |
| y | Coordenada Y na qual criar o textdraw |
| text[] | O texto no textdraw.                    |

**Valores de retorno:**

O ID do textdraw criado

Vamos prosseguir com a criação do textdraw:

```c
public OnGameModeInit()
{
    gMyText = TextDrawCreate(320.0, 240.0, "Hello World!");
    return 1;
}
```
Criamos um textdraw no centro da tela que diz "Hello World!".

---

## Configurando a fonte

Existem 4 fontes disponíveis para texto textdraw:

![Imagem:320px-Textdraw_map.png](https://assets.open.mp/assets/images/textdraws/Textdraw_font_styles.png)

| ID | Informações | Dicas |
| --- | -------------------------------------------------------------- | ------------------------------------------------------ |
| 0 | A fonte _San Andreas_.                                        | Use para cabeçalho ou títulos, não para uma página inteira.            |
| 1 | Fonte clara que inclui caracteres maiúsculos e minúsculos. | Pode ser usado para muito texto.                         |
| 2 | Fonte clara, mas inclui apenas letras maiúsculas.                 | Pode ser usado em vários casos.                      |
| 3 | _Fonte GTA_ | Mantém a qualidade quando ampliado. Útil para textos grandes. |

A partir de SA-MP 0.3d, uma nova fonte (id 4) pode ser definida. Isso é usado em combinação com as funções [TextDrawCreate](../functions/TextDrawCreate) e [TextDrawTextSize](../functions/TextDrawTextSize) para mostrar um 'sprite' de textura na tela do jogador. Abordaremos isso mais tarde.

---

## Mostrando o desenho do texto

Para este exemplo, o textdraw foi criado globalmente em OnGameModeInit e será mostrado ao jogador quando ele entrar no servidor.

Para mostrar um textdraw para um único jogador, a função [TextDrawShowForPlayer](../functions/TextDrawShowForPlayer) é usada.

**Parâmetros:**

TextDrawShowForPlayer(playerid, Texto:texto)

| Nome | Descrição |
| -------- | --------------------------------------------- |
| playerid | O ID do jogador para mostrar o textdraw para |
| text | O ID do textdraw para mostrar |

**Valores de retorno:**

Esta função não retorna nenhum valor específico.

O playerid é passado por OnPlayerConnect e o desenho de texto ID é armazenado na variável 'gMyText'.

```c
public OnGameModeInit()
{
    gMyText = TextDrawCreate(320.0, 320.0, "Hello World!");
    return 1;
}

public OnPlayerConnect(playerid)
{
    TextDrawShowForPlayer(playerid, gMyText);
    return 1;
}
```
---

## Dicas Diversas

- Tente usar números inteiros ao especificar posições, isso garante a melhor compatibilidade em diferentes resoluções.
- As fontes parecem ter melhor aparência com uma proporção de X para Y de 1 para 4 (por exemplo, se x = 0,5, então y deve ser 2).
