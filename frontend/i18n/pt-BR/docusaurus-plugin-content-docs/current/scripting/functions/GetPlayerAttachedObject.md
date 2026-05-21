---
title: GetPlayerAttachedObject
sidebar_label: GetPlayerAttachedObject
description: "Obtém os dados do objeto de anexo do jogador por índice."
tags: ["player", "object", "attachment"]
---


<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Obtém os dados do objeto de anexo do jogador por índice.

| Nome | Descrição |
| ---------------- | --------------------------------------- |
| playerid | O ID do jogador cujos dados serão obtidos. |
| index | O índice (slot) do objeto (0-9).   |
| &modelid | Modelo de objeto anexado.                  |
| &bone | Osso do objeto anexado.                   |
| &Float:offsetX | Deslocamento do eixo X do objeto.            |
| &Float:offsetY | Deslocamento do eixo Y do objeto.            |
| &Float:offsetZ | Deslocamento do eixo Z do objeto.            |
| &Float:rotationX | Rotação do eixo X do objeto.          |
| &Float:rotationY | Rotação do eixo Y do objeto.          |
| &Float:rotationZ | Rotação do eixo Z do objeto.          |
| &Float:scaleX | Escala do eixo X do objeto.             |
| &Float:scaleY | Escala do eixo Y do objeto.             |
| &Float:scaleZ | Escala do eixo Z do objeto.             |
| &materialColour1 | Cor do material 1 do objeto.        |
| &materialColour2 | Cor do material 2 do objeto.        |

## Retornos

Sempre retorna true.

## Exemplos

```c
new
	modelid,
	bone,
	Float:offsetX, Float:offsetY, Float:offsetZ,
	Float:rotationX, Float:rotationY, Float:rotationZ,
	Float:scaleX, Float:scaleY, Float:scaleZ,
	materialColour1, materialColour2;

// Obtenha os dados anexados do índice 3
GetPlayerAttachedObject(playerid, 3, modelid, bone, offsetX, offsetY, offsetZ, rotationX, rotationY, rotationZ, scaleX, scaleY, scaleZ, materialColour1, materialColour2);
```
## Funções Relacionadas

- [SetPlayerAttachedObject](SetPlayerAttachedObject): Anexa um objeto a um jogador
- [RemovePlayerAttachedObject](RemovePlayerAttachedObject): Remova um objeto anexado de um jogador
- [IsPlayerAttachedObjectSlotUsed](IsPlayerAttachedObjectSlotUsed): Verifica se um objeto está anexado a um jogador em um índice especificado
- [EditAttachedObject](EditAttachedObject): Edite um objeto anexado.
