---
title: IsValidServerRule
sidebar_label: IsValidServerRule
description: "Verifica se a regra do servidor fornecida é válida."
tags: ["rule"]
---


<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Verifica se a regra do servidor fornecida é válida.

| Nome | Descrição |
| ------------ | ------------------------------ |
| const rule[] | O nome da regra do servidor a ser verificado. |

## Retornos

Retorna true se a regra do servidor for válida, caso contrário, false.

## Exemplos

```c
if (IsValidServerRule("version"))
{
    // A regra do servidor é válida
}
else
{
    // A regra do servidor não é válida
}
```
## Funções Relacionadas

- [AddServerRule](AddServerRule): Adicione uma regra de servidor.
- [RemoveServerRule](RemoveServerRule): Remova a regra do servidor.
