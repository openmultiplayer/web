---
title: AddServerRule
sidebar_label: AddServerRule
description: Adicionar uma regra do servidor.
tags: ["rule"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Adicionar uma regra do servidor.

| Nome             | Descrição                                  |
| ---------------- | ------------------------------------------ |
| const rule[]     | O nome da regra do servidor a adicionar.  |
| const format[]   | O valor da regra do servidor.              |
| OPEN_MP_TAGS:... | Número indefinido de argumentos de qualquer tag. |

## Retorno

Retorna true se a função foi executada com sucesso, caso contrário false.

## Exemplos

```c
public OnGameModeInit()
{
    AddServerRule("discord", "discord.gg/samp");
    return 1;
}
```

## Funções Relacionadas

- [RemoveServerRule](RemoveServerRule): Remove a regra do servidor.
- [IsValidServerRule](IsValidServerRule): Verifica se a regra do servidor fornecida é válida.