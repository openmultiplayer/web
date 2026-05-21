---
title: GetVehicleRotationQuat
sidebar_label: GetVehicleRotationQuat
description: "Retorna a rotação de um veículo em todos os eixos como um quatérnio."
tags: ["vehicle"]
---


## Descrição

Retorna a rotação de um veículo em todos os eixos como um quatérnio.

| Nome | Descrição |
| --------- | ------------------------------------------------------------------------------------ |
| vehicleid | O ID do veículo do qual obter a rotação.                                        |
| &Float:w | Uma variável flutuante na qual armazenar o primeiro ângulo quatérnion, passado por referência.  |
| &Float:x | Uma variável flutuante na qual armazenar o ângulo do segundo quatérnio, passado por referência. |
| &Float:y | Uma variável flutuante na qual armazenar o ângulo do terceiro quatérnio, passado por referência.  |
| &Float:z | Uma variável flutuante na qual armazenar o ângulo do quarto quaternion, passado por referência. |

## Retornos

**true** – A função foi executada com sucesso.

**false** - Falha na execução da função. Isso significa que o veículo especificado não existe.

A rotação do veículo é armazenada nas variáveis ​​especificadas.

## Exemplos

```c
new
    Float:w,
    Float:x,
    Float:y,
    Float:z;

GetVehicleRotationQuat(vehicleid, w, x, y, z);
```
## Notas

:::tip

- Não existe variação ‘definida’ desta função; você não pode SET a rotação de um veículo (além do ângulo Z)
- Esta função pode retornar valores incorretos para veículos desocupados. A razão é que a terceira linha da matriz de rotação interna do veículo fica corrompida se for atualizada enquanto estiver desocupado.

:::

## Funções Relacionadas

- [GetVehicleZAngle](GetVehicleZAngle): Verifique o ângulo atual de um veículo.
- [GetVehicleRotation](GetVehicleRotation): Obtenha a rotação de um veículo no eixo XYZ.
- [GetVehicleMatrix](GetVehicleMatrix): Obtém a matriz de rotação real do veículo.
