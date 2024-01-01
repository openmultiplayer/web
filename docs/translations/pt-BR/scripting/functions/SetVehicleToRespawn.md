---
title: SetVehicleToRespawn
description: Coloca um veículo de volta para a posição onde foi criado.
tags: ["vehicle"]
---

## Descrição

Coloca um veículo de volta para a posição onde foi criado.

| Nome      | Descrição                    |
| --------- | ---------------------------- |
| vehicleid | O ID do veículo a respawnar. |

## Retorno

1: A função foi executada com sucesso.

0: A função falhou ao ser executada. O veículo não existe.

## Exemplos

```c
// Respawna o primeiro veículo.
SetVehicleToRespawn(1);
for(new i = GetVehiclePoolSize(); i > 0; i--)
{
    SetVehicleToRespawn(i);
}
```

## Funções Relacionadas

- [CreateVehicle](CreateVehicle): Cria um veículo.
- [DestroyVehicle](DestroyVehicle): Destrói um veículo.
