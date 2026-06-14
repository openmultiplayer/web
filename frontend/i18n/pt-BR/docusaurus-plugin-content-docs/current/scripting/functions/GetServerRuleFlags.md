---
title: GetServerRuleFlags
sidebar_label: GetServerRuleFlags
description: "Obtém os sinalizadores de uma regra de servidor."
tags: ["rule"]
---


<VersionWarn version='omp v1.1.0.2612' />

:::warning

Esta função ainda não foi implementada.

:::

## Descrição

Obtém os sinalizadores de uma regra de servidor.

## Valores de retorno

Retorna os sinalizadores de regras do servidor.

## Exemplos

```c
public OnGameModeInit()
{
    AddServerRule("discord", "discord.gg/samp");
    SetServerRuleFlags("discord", 1);

    new E_SERVER_RULE_FLAGS:flags = GetServerRuleFlags("discord");
    printf("Flags: %d", _:flags); // Bandeiras: 1
    return 1;
}
```
## Funções Relacionadas

- [AddServerRule](AddServerRule): Adicione uma regra de servidor.
- [RemoveServerRule](RemoveServerRule): Remova a regra do servidor.
- [IsValidServerRule](IsValidServerRule): Verifica se a regra do servidor fornecida é válida.
- [SetServerRuleFlags](SetServerRuleFlags): Define os flags de uma regra do servidor.
