---
title: GetPlayerRotationQuat
sidebar_label: GetPlayerRotationQuat
description: "Retorna a rotação de um jogador em todos os eixos como um quatérnio."
tags: ["player"]
---


<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Retorna a rotação de um jogador em todos os eixos como um quatérnio.

| Nome | Descrição |
| -------- | ------------------------------------------------------------------------------------ |
| playerid | O ID do jogador do qual obter a rotação.                                         |
| &Float:w | Uma variável flutuante na qual armazenar o primeiro ângulo quatérnion, passado por referência.  |
| &Float:x | Uma variável flutuante na qual armazenar o ângulo do segundo quatérnio, passado por referência. |
| &Float:y | Uma variável flutuante na qual armazenar o ângulo do terceiro quatérnio, passado por referência.  |
| &Float:z | Uma variável flutuante na qual armazenar o ângulo do quarto quaternion, passado por referência. |

## Retornos

**true** – A função foi executada com sucesso.

**false** - Falha na execução da função. Isso significa que o jogador especificado não existe.

A rotação do jogador é armazenada nas variáveis ​​especificadas.

## Exemplos

```c
new
    Float:w,
    Float:x,
    Float:y,
    Float:z;

GetPlayerRotationQuat(playerid, w, x, y, z);
```
## Notas

:::tip

Não há variação 'definida' desta função; você não pode SET a rotação de um jogador (além do ângulo de orientação (rotação Z)).

:::

## Funções Relacionadas

- [SetPlayerFacingAngle](SetPlayerFacingAngle): Defina o ângulo de visão do jogador (rotação Z).
- [GetPlayerFacingAngle](GetPlayerFacingAngle): Verifique para onde o jogador está voltado.
- [GetVehicleRotationQuat](GetVehicleRotationQuat): Obtenha a rotação quaternion de um veículo.
