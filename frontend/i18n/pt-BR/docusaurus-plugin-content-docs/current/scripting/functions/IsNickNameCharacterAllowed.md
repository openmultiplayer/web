---
title: IsNickNameCharacterAllowed
sidebar_label: IsNickNameCharacterAllowed
description: "Verifica se um caractere é permitido no apelido."
tags: []
---


<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Verifica se um caractere é permitido no apelido.

| Nome | Descrição |
| --------- | ----------------------- |
| character | O personagem a ser verificado. |

## Retornos

Esta função retorna **true** se o caractere for permitido ou **false** se não for.

## Exemplos

```c
public OnGameModeInit()
{
    AllowNickNameCharacter('*', true); // Permitir caractere *

    if (IsNickNameCharacterAllowed('*'))
    {
        print("Character * is allowed in nickname.");
    }
    return 1;
}
```
## Funções Relacionadas

- [AllowNickNameCharacter](AllowNickNameCharacter): Permite que um caractere seja usado no apelido.
