---
title: GetVehicleRotation
sidebar_label: GetVehicleRotation
description: "Retorna a rotação de um veículo como euler."
tags: ["vehicle"]
---


<VersionWarn version='omp v1.5.8.3079' />

## Descrição

Retorna a rotação de um veículo como euler.

| Nome | Descrição |
| --------- | ------------------------------------------------------------------------- |
| vehicleid | O ID do veículo do qual obter a rotação.                             |
| &Float:x | Uma variável flutuante na qual armazenar o ângulo do eixo X, passado por referência. |
| &Float:y | Uma variável flutuante na qual armazenar o ângulo do eixo Y, passado por referência. |
| &Float:z | Uma variável flutuante na qual armazenar o ângulo Z como seis, passado por referência. |

## Retornos

**true** – A função foi executada com sucesso.

**false** - Falha na execução da função. Isso significa que o veículo especificado não existe.

A rotação do veículo é armazenada nas variáveis ​​especificadas.

## Exemplos

```c
new
    Float:x,
    Float:y,
    Float:z;

GetVehicleRotation(vehicleid, x, y, z);
```
## Notas

:::tip

- Não existe variação ‘definida’ desta função; você não pode SET a rotação de um veículo (além do ângulo Z)
- Esta função pode retornar valores incorretos para veículos desocupados. A razão é que a terceira linha da matriz de rotação interna do veículo fica corrompida se for atualizada enquanto estiver desocupado.

:::

## Funções Relacionadas

- [GetVehicleZAngle](GetVehicleZAngle): Verifique o ângulo atual de um veículo.
- [GetVehicleRotationQuat](GetVehicleRotationQuat): Obtenha a rotação de um veículo em todos os eixos como um quaternion.
- [GetVehicleMatrix](GetVehicleMatrix): Obtém a matriz de rotação real do veículo.
