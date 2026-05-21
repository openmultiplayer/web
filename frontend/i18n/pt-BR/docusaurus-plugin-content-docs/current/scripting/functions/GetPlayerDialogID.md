---
title: GetPlayerDialogID
sidebar_label: GetPlayerDialogID
description: "Obtenha o ID da caixa de diálogo atualmente exibida ao jogador."
tags: ["player", "dialog"]
---


<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Obtenha o ID da caixa de diálogo atualmente exibida ao jogador.

| Nome | Descrição |
| -------- | --------------------- |
| playerid | O ID do jogador. |

## Valores de retorno

Retorna a caixa de diálogo ID.

Ou **INVALID_DIALOG_ID** se o jogador não estiver conectado ou não tiver nenhuma caixa de diálogo aberta.

## Exemplos

```c
new dialogID = GetPlayerDialogID(playerid);
if (dialogID != INVALID_DIALOG_ID)
{
    // O jogador tem uma caixa de diálogo aberta
}
```
## Funções Relacionadas

- [GetPlayerDialogData](GetPlayerDialogData): Obtenha os dados da caixa de diálogo atualmente exibida ao jogador.
- [ShowPlayerDialog](ShowPlayerDialog): Mostra ao jogador uma caixa de diálogo síncrona (apenas uma por vez).

## Callbacks Relacionadas

- [OnDialogResponse](../callbacks/OnDialogResponse): Chamado quando um jogador responde a um diálogo.
