---
title: SetServerRuleFlags
sidebar_label: SetServerRuleFlags
description: "Define os sinalizadores de uma regra de servidor."
tags: ["rule"]
---


<VersionWarn version='omp v1.1.0.2612' />

:::warning

Esta função ainda não foi implementada.

:::

## Descrição

Define os sinalizadores de uma regra de servidor.

## Parâmetros

| Nome | Descrição |
| ------------------------- | --------------------- |
| const rule[] | O nome da regra do servidor. |
| E_SERVER_RULE_FLAGS:flags | Os sinalizadores a serem definidos.     |

## Retornos

Retorna **true** se a função foi executada com sucesso, caso contrário **false**.

## Exemplos

```c
public OnGameModeInit()
{
    AddServerRule("discord", "discord.gg/samp");
    SetServerRuleFlags("discord", 1);
    return 1;
}
```
## Funções Relacionadas

- [AddServerRule](AddServerRule): Adicione uma regra de servidor.
- [RemoveServerRule](RemoveServerRule): Remova a regra do servidor.
- [IsValidServerRule](IsValidServerRule): Verifica se a regra do servidor fornecida é válida.
- [GetServerRuleFlags](GetServerRuleFlags): Obtém os flags de uma regra do servidor.
