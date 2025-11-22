---
title: ChangeVehiclePaintjob
sidebar_label: ChangeVehiclePaintjob
description: Altere o paintjob de um veículo (para cores normais, consulte ChangeVehicleColor).
tags: ["vehicle"]
---

## Descrição

Altere o paintjob de um veículo (para cores normais, consulte ChangeVehicleColor).

| Nome       | Descrição                                                   |
| ---------- | ----------------------------------------------------------- |
| vehicleid  | O ID do veículo para alterar o paintjob.                    |
| paintjobid | O ID do paintjob a aplicar. Use 3 para remover um paintjob. |

## Retorno

Esta função sempre retorna 1 (sucesso), mesmo que o veículo não exista.

:::warning

Se a cor do veículo for preta, o paintjob pode não ser visível. É melhor deixar o veículo branco antes de aplicar o paintjob, usando ChangeVehicleColor(vehicleid,1,1);

:::

## Exemplos

```c
new rand = random(3); // Será 0, 1 ou 2 (todos válidos)
ChangeVehicleColor(GetPlayerVehicleID(playerid),1,1); // Certifique-se que é branco para um resultado melhor.
ChangeVehiclePaintjob(GetPlayerVehicleID(playerid), rand); // Altera o paintjob para um aleatório, do atual veículo do jogador.
```

## Funções Relacionadas

- [ChangeVehicleColor](ChangeVehicleColor): Define a cor de um veículo.
- [OnVehiclePaintjob](../callbacks/OnVehiclePaintjob): É chamado quando o paintjob de um veículo é alterado.
