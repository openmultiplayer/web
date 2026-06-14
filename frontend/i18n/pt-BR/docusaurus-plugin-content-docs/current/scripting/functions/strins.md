---
title: strins
sidebar_label: strins
description: "Insira uma string em outra string."
tags: ["string"]
---


<LowercaseNote />

## Descrição

Insira uma string em outra string.

| Nome | Descrição |
| --------------------------- | ------------------------------------------ |
| string[] | A string na qual você deseja inserir substr.
| const substr[] | A string que você deseja inserir na string. |
| pos | A posição para começar a inserir.           |
| maxlength = sizeof (string) | O tamanho máximo a ser inserido.                |

## Retornos

Esta função não retorna nenhum valor específico.

## Exemplos

```c
// Adicione uma tag [AFK] ao início dos nomes dos jogadores
new playerName[MAX_PLAYER_NAME];
GetPlayerName(playerid, playerName, MAX_PLAYER_NAME);
if (strlen(playerName) <= 18)
{
	strins(playerName, "[AFK]", 0);
}
SetPlayerName(playerid, playerName);

// WARNING: Jogadores com nomes com 20+ caracteres não podem ter uma tag [AFK], pois isso tornaria seu nome 25 com caracteres longos e o limite é 24.
```
## Funções Relacionadas

- [strcmp](strcmp): Compare duas strings para verificar se são iguais.
- [strfind](strfind): Pesquisa uma string em outra string.
- [strdel](strdel): Exclui parte de uma string.
- [strlen](strlen): Obtenha o comprimento de uma string.
- [strmid](strmid): Extrai parte de uma string para outra string.
- [strpack](strpack): compacta uma string em uma string de destino.
- [strval](strval): Converte uma string em um número inteiro.
- [strcat](strcat): concatena duas strings em uma referência de destino.
