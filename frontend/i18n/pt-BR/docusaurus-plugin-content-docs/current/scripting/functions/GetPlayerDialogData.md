---
title: GetPlayerDialogData
sidebar_label: GetPlayerDialogData
description: "Obtenha os dados da caixa de diálogo exibida atualmente ao jogador."
tags: ["player", "dialog"]
---


<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Obtenha os dados da caixa de diálogo exibida atualmente ao jogador.

| Nome | Descrição |
| ------------------- | ----------------------------------------------------------------------- |
| playerid | O ID do jogador para obter os dados.                                   |
| &DIALOG_STYLE:style | Uma variável na qual armazenar o estilo, passada por referência.          |
| title[] | Uma variável de matriz na qual armazenar o título, passada por referência.   |
| titleSize | O tamanho da matriz de títulos.                                            |
| body[] | Uma variável de matriz na qual armazenar o corpo, passada por referência.    |
| bodySize | O tamanho da matriz do corpo.                                             |
| button1[] | Uma variável de matriz na qual armazenar o button1, passada por referência. |
| button1Size | O tamanho da matriz button1.                                          |
| button2[] | Uma variável de matriz na qual armazenar o button2, passada por referência. |
| button2Size | O tamanho da matriz button2.                                          |

## Retornos

**true** – A função foi executada com sucesso.

**false** - Falha na execução da função. Isso significa que o jogador não está conectado ou não tem uma caixa de diálogo aberta.

## Exemplos

```c
enum
{
    DIALOG_LOGIN
}

ShowPlayerDialog(playerid, DIALOG_LOGIN, DIALOG_STYLE_INPUT, "Login", "Enter your password below:", "Login", "Cancel");

new
    DIALOG_STYLE:style,
    title[32],
    body[64],
    button1[16],
    button2[16];

GetPlayerDialogData(playerid, style, title, sizeof(title), body, sizeof(body), button1, sizeof(button1), button2, sizeof(button2));
```
## Funções Relacionadas

- [ShowPlayerDialog](ShowPlayerDialog): Mostra ao jogador uma caixa de diálogo síncrona (apenas uma por vez).
- [HidePlayerDialog](HidePlayerDialog): Oculta a caixa de diálogo atualmente exibida ao jogador.
- [GetPlayerDialogID](GetPlayerDialogID): Obtenha o ID da caixa de diálogo atualmente exibida ao jogador.

## Callbacks Relacionadas

- [OnDialogResponse](../callbacks/OnDialogResponse): Chamado quando um jogador responde a um diálogo.
