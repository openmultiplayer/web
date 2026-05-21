---
title: GetVehicleMatrix
sidebar_label: GetVehicleMatrix
description: "Obtém a matriz de rotação real do veículo."
tags: ["vehicle"]
---


<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Obtém a matriz de rotação real do veículo.

## Parâmetros

| Nome | Descrição |
| ------------- | ------------------------------------------------------------------------------ |
| vehicleid | O ID do veículo.                                                         |
| &Float:rightX | Uma variável flutuante na qual armazenar a coordenada rightX, passada por referência. |
| &Float:rightY | Uma variável flutuante na qual armazenar a coordenada rightY, passada por referência. |
| &Float:rightZ | Uma variável flutuante na qual armazenar a coordenada rightZ, passada por referência. |
| &Float:upX | Uma variável float na qual armazenar a coordenada upX, passada por referência.    |
| &Float:upY | Uma variável float na qual armazenar a coordenada upY, passada por referência.    |
| &Float:upZ | Uma variável float na qual armazenar a coordenada upZ, passada por referência.    |
| &Float:atX | Uma variável float na qual armazenar a coordenada atX, passada por referência.    |
| &Float:atY | Uma variável float na qual armazenar a coordenada atY, passada por referência.    |
| &Float:atZ | Uma variável float na qual armazenar a coordenada atZ, passada por referência.    |

## Retornos

**true** – A função foi executada com sucesso.

**false** - Falha na execução da função. Isso significa que o veículo especificado não existe.

A rotação do veículo é armazenada nas variáveis ​​especificadas.

## Exemplos

```c
new
    Float:rightX,
    Float:rightY,
    Float:rightZ,
    Float:upX,
    Float:upY,
    Float:upZ,
    Float:atX,
    Float:atY,
    Float:atZ;

GetVehicleMatrix(vehicleid, rightX, rightY, rightZ, upX, upY, upZ, atX, atY, atZ);
```
## Funções Relacionadas

- [GetVehicleRotationQuat](GetVehicleRotationQuat): Retorna a rotação de um veículo em todos os eixos como um quaternion.
