---
title: Dialog Styles
sidebar_label: Dialog Styles
---

:::note

- Em [OnDialogResponse](../callbacks/OnDialogResponse), pressionar **button1** define **response** para **1**, enquanto pressionar **button2** define **response** para **0**.
- Todo dialog tem um button2 opcional. Para que ele não seja mostrado, mantenha o parâmetro vazio, como no primeiro exemplo. Os jogadores não poderão clicá-lo, mas eles ainda poderão apertar ESC e chamar [OnDialogResponse](../callbacks/OnDialogResponse) com **response** = **0**.
- [ShowPlayerDialog](../functions/ShowPlayerDialog): As cores embutidas podem ser utilizadas nos parâmetros: **caption**, **info**, **button1** e **button2**.

:::

- Esta página descreve o comportamento de [ShowPlayerDialog](../functions/ShowPlayerDialog) e [OnDialogResponse](../callbacks/OnDialogResponse).
- Por várias limitações, visite a página de [Limites](limits).
- Para exemplos de resposta, o seguinte código será usado:

```c
public OnDialogResponse( playerid, dialogid, response, listitem, inputtext[ ] )
{
    printf( "playerid = %d, dialogid = YOUR_DIALOGID, response = %d, listitem = %d, inputtext = '%s' (size: %d)", playerid, response, listitem, inputtext, strlen( inputtext ) );
    return 1;
}
```

## Estilo 0: `DIALOG_STYLE_MSGBOX`

![](https://assets.open.mp/assets/images/dialogStyles/Dialog_style_msgbox.png)

Visualização:

:::note

- **\t** adiciona um TAB (mais espaço).
- **\n** cria uma nova linha.
- Cores embutidas não resetarão após \n ou \t

:::

```c
ShowPlayerDialog(playerid, YOUR_DIALOGID, DIALOG_STYLE_MSGBOX, "Caption", "Info\n\tInfo", "Button 1", "");
```

### Saída de Resposta

:::note

- **listitem** é sempre **-1**.
- **inputtext** é sempre vazio.

:::

```c
// Botão pressionado
playerid = 0, dialogid = YOUR_DIALOGID, response = 1, listitem = -1, inputtext = '' (size: 0)

// ESC pressionado (já que o segundo botão não está visível)
playerid = 0, dialogid = YOUR_DIALOGID, response = 0, listitem = -1, inputtext = '' (size: 0)
```

## Estilo 1: `DIALOG_STYLE_INPUT`

![](https://assets.open.mp/assets/images/dialogStyles/Dialog_style_input.png)

Visualização:

:::note

- **\t** adiciona um TAB (mais espaço).
- **\n** cria uma nova linha.
- Cores embutidas não resetarão após \n ou \t

:::

```c
ShowPlayerDialog(playerid, YOUR_DIALOGID, DIALOG_STYLE_INPUT, "Caption", "Enter information below:", "Button 1", "Button 2");
```

### Saída de Resposta

:::note

- **listitem** é sempre **-1**.
- **inputtext** é o texto escrito pelo usuário, incluindo possíveis cores.

:::

```c
// Escreveu "input" e apertou o botão esquerdo
playerid = 0, dialogid = YOUR_DIALOGID, response = 1, listitem = -1, inputtext = 'input' (size: 5)

// Escreveu "input" e apertou o botão direito
playerid = 0, dialogid = YOUR_DIALOGID, response = 0, listitem = -1, inputtext = 'input' (size: 5)
```

## Estilo 2: `DIALOG_STYLE_LIST`

![](https://assets.open.mp/assets/images/dialogStyles/Dialog_style_list.png)

Visualização:

:::note

- **\t** adiciona um TAB (mais espaço).
- **\n** cria uma nova linha.
- Cores embutidas não resetarão após \n ou \t

:::

```c
ShowPlayerDialog(playerid, YOUR_DIALOGID, DIALOG_STYLE_LIST, "Caption", "Item 0\n{FFFF00}Item 1\nItem 2", "Button 1", "Button 2");
```

### Saída da Resposta:

:::note

- **listitem** é o número da linha selecionado, iniciando em **0**.
- **inputtext** é o texto contido no item, incluindo as cores.

:::

```c
// Selecionou o primeiro item e apertou o botão esquerdo
playerid = 0, dialogid = YOUR_DIALOGID, response = 1, listitem = 0, inputtext = 'Item 0' (size: 6)

// Selecionou o segundo item e apertou o botão direito
playerid = 0, dialogid = YOUR_DIALOGID, response = 0, listitem = 1, inputtext = 'Item 1' (size: 6)
```

## Estilo 3: `DIALOG_STYLE_PASSWORD`

:::note

- Similar ao **DIALOG_STYLE_INPUT**.

:::

![](https://assets.open.mp/assets/images/dialogStyles/Dialog_style_password.png)

Visualização:

:::note

- **\t** adiciona um TAB (mais espaço).
- **\n** cria uma nova linha.

:::

```c
ShowPlayerDialog(playerid, YOUR_DIALOGID, DIALOG_STYLE_PASSWORD, "Caption", "Enter private information below:", "Button 1", "Button 2");
```

### Saída da Resposta:

:::note

- **listitem** é sempre **-1**.
- **inputtext** é o texto digitado pelo jogador, sem possíveis cores.

:::

```c
// Escreveu "input" e apertou o botão esquerdo
playerid = 0, dialogid = YOUR_DIALOGID, response = 1, listitem = -1, inputtext = 'input' (size: 5)

// Escreveu "input" e apertou o botão direito
playerid = 0, dialogid = YOUR_DIALOGID, response = 0, listitem = -1, inputtext = 'input' (size: 5)
```

## Estilo 4: `DIALOG_STYLE_TABLIST`

:::tip Este estilo foi adicionado na versão **SA-MP 0.3.7** e não funcionará em versões anteriores!

:::

:::note

- Similar ao **DIALOG_STYLE_LIST**.

:::

![](https://assets.open.mp/assets/images/dialogStyles/Dialog_style_tablist.png)

Visualização:

:::note

- **\t** adiciona um TAB (mais espaço).
- **\n** cria uma nova linha.
- Cores embutidas não resetarão após \n ou \t.

:::

```c
ShowPlayerDialog(playerid, YOUR_DIALOGID, DIALOG_STYLE_TABLIST, "Caption",
"Deagle\t$5000\t100\n\
{FF0000}Sawnoff\t{33AA33}$5000\t100\n\
Pistol\t$1000\t50",
"Button 1", "Button 2");
```

:::note

- **inputtext** é o texto existente na _primeira coluna_ do item **listitem** selecionado, sem as cores.

:::

```c
// Selecionou o primeiro item e apertou o botão esquerdo
playerid = 0, dialogid = YOUR_DIALOGID, response = 1, listitem = 0, inputtext = 'Deagle' (size: 6)

// Selecionou o segundo item e apertou o botão direito
playerid = 0, dialogid = YOUR_DIALOGID, response = 0, listitem = 1, inputtext = 'Sawnoff' (size: 7)
```

## Estilo 5: `DIALOG_STYLE_TABLIST_HEADERS`

:::tip Este estilo foi adicionado na versão **SA-MP 0.3.7** e não funcionará em versões anteriores!

:::

:::note

- Similar ao **DIALOG_STYLE_LIST**.

:::

![](https://assets.open.mp/assets/images/dialogStyles/Dialog_style_tablist_headers.png)

Showing:

:::note

- **\t** cria uma nova coluna.
- **\n** cria um novo item na lista.
- Cores embutidas reiniciarão após \n e \t. A primeira linha **info** define o cabeçalho.

:::

```c
ShowPlayerDialog(playerid, YOUR_DIALOGID, DIALOG_STYLE_TABLIST_HEADERS, "Caption",
"Header 1\tHeader 2\tHeader 3\n\
Item 1 Column 1\tItem 1 Column 2\tItem 1 Column 3\n\
{FF0000}Item 2 Column 1\t{33AA33}Item 2 Column 2\tItem 2 Column 3",
"Button 1", "Button 2");
```

:::note

- **inputtext** é o texto contido na _primeira coluna_ do item **listitem** selecionado, sem as possíveis cores.

:::

```c
// Selecionou o primeiro item da lista e clicou com o botão esquerdo
playerid = 0, dialogid = YOUR_DIALOGID, response = 1, listitem = 0, inputtext = 'Item 1 Column 1' (size: 15)

// Selecionou o primeiro item da lista e clicou com o botão direito
playerid = 0, dialogid = YOUR_DIALOGID, response = 0, listitem = 1, inputtext = 'Item 2 Column 1' (size: 15)
```
