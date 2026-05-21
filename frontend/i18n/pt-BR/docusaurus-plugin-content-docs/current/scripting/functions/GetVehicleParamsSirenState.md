---
title: GetVehicleParamsSirenState
sidebar_label: GetVehicleParamsSirenState
description: "Retorna o estado da sirene de um veículo (ligado/desligado)."
tags: ["vehicle"]
---


<VersionWarn version='SA-MP 0.3.7' />

## Descrição

Retorna o estado da sirene de um veículo (ligado/desligado).

| Nome | Descrição |
| --------- | ------------------------------------------------ |
| vehicleid | O ID do veículo cujo estado da sirene será obtido. |

## Retornos

**-1:** A sirene do veículo ainda não foi ativada (desligada)

**0:** A sirene do veículo está desligada

**1:** A sirene do veículo está ligada

## Exemplos

```c
new
    siren = GetVehicleParamsSirenState(vehicleid);

if (siren == 1)
{
    // A sirene está ligada, faça alguma coisa
}
else if (siren == 0)
{
    // A sirene está desligada, faça alguma coisa
}
else
{
    // Veículo não possui sirene
}
```
## Notas

:::warning

Como um estado de sirene de -1 ou 0 significa 'desligado', você não pode usar uma instrução condicional booleana para verificar se as sirenes estão ligadas. Se você fizer 'if (sirenstate)', será true para qualquer coisa diferente de 0 (então -1 ou 1). Você deve verificar se o estado da sirene é explicitamente igual a 1.

:::

## Funções Relacionadas

- [SetVehicleParamsSirenState](SetVehicleParamsSirenState): Liga ou desliga a sirene de um veículo.
