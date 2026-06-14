---
title: RemoveServerRule
sidebar_label: RemoveServerRule
description: "Remova a regra do servidor."
tags: ["rule"]
---


<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Remova a regra do servidor.

| Nome | Descrição |
| ------------ | ------------------------------- |
| const rule[] | O nome da regra do servidor a ser removida. |

## Retornos

Retorna true se a função foi executada com sucesso, caso contrário, false.

## Exemplos

```c
RemoveServerRule("rule");
```
## Funções Relacionadas

- [AddServerRule](AddServerRule): Adicione uma regra de servidor.
- [IsValidServerRule](IsValidServerRule): Verifica se a regra do servidor fornecida é válida.
