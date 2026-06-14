---
title: SetVehicleNumberPlate
sidebar_label: SetVehicleNumberPlate
description: "Defina uma placa de veículo."
tags: ["vehicle"]
---


## Descrição

Defina uma placa de veículo.

| Nome | Descrição |
| ------------------- | ------------------------------------------------------ |
| vehicleid | O ID do veículo para definir a matrícula.      |
| const numberPlate[] | O texto que deve ser exibido na placa de matrícula. |

## Retornos

**true** - A função foi executada com sucesso.

**false** - Falha na execução da função. O veículo não existe

## Exemplos

```c
new
	vehicleid = CreateVehicle(542, 2074.73, 1089.89, 10.51, 0.0, -1, -1, -1);
SetVehicleNumberPlate(vehicleid, "ABCD 123");
```
## Notas

:::tip

- Esta função não possui verificação de erros internos.
- Não atribua matrículas personalizadas a veículos sem matrícula (barcos, aviões, etc.), pois isso resultará em algum tempo de processamento desnecessário para o cliente.
- O veículo deve ser gerado novamente ou transmitido novamente para que as alterações tenham efeito.
- Há um limite de 32 caracteres em cada matrícula (incluindo cores incorporadas).
- O comprimento do texto que pode ser visto na placa de matrícula é de cerca de 9 a 10 caracteres, mais caracteres farão com que o texto seja dividido.
- Alguns modelos de veículos possuem a matrícula invertida, por ex. Boxville (498) (como alternativa a este veículo você pode usar o modelo de veículo ID 609, que é um Boxville duplicado (também conhecido como Boxburg), mas com placa regular).

:::

:::tip

Você pode usar a incorporação de cores no texto da placa de matrícula.

:::

## Funções Relacionadas

- [GetVehicleNumberPlate](GetVehicleNumberPlate): Obtenha a placa de um veículo.
- [SetVehicleToRespawn](SetVehicleToRespawn): Reaparece um veículo.
- [ChangeVehicleColor](ChangeVehicleColor): Defina a cor de um veículo.
- [ChangeVehiclePaintjob](ChangeVehiclePaintjob): Altere a pintura de um veículo.
