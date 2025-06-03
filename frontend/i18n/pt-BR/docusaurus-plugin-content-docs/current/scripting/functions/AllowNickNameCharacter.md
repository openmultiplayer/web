---
title: AllowNickNameCharacter
sidebar_label: AllowNickNameCharacter
description: Permite que um caractere seja usado no nome de usuário.
tags: []
---

<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Permite que um caractere seja usado no nome de usuário.

| Nome       | Descrição                               |
| ---------- | --------------------------------------- |
| character  | O caractere a permitir ou não permitir. |
| bool:allow | true-Permitir, false-Não permitir       |

## Retorno

Esta função não retorna valores específicos.

## Exemplos

```c
public OnGameModeInit()
{
    AllowNickNameCharacter('*', true); // Permitir char *
    AllowNickNameCharacter('[', false); // Não permitir char [
    AllowNickNameCharacter(']', false); // Não permitir char ]
    return 1;
}
```
## Funções Relacionadas

- [IsNickNameCharacterAllowed](IsNickNameCharacterAllowed): Verifica se um caractere é permitido no nome de usuário.
- [IsValidNickName](IsValidNickName): Verifica se um nome de usuário é válido.
- [SetPlayerName](SetPlayerName): Define o nome de um jogador.
- [GetPlayerName](GetPlayerName): Obtém o nome de um jogador.