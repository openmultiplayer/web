---
title: OnVehicleMod
description: Essa callback é executada quando um veículo é modificado.
tags: ["vehicle"]
---

## Descrição

Essa callback é executada quando um veículo é modificado.

| Nome        | Descrição                                               |
| ----------- | ------------------------------------------------------- |
| playerid    | ID do motorista do veículo.                             |
| vehicleid   | ID do veículo modificado.                               |
| componentid | ID do componente que foi adicionado ao veículo.         |

## Retornos

Sempre executada primeiro no gamemode, retornar 0 irá impedir outros filterscripts de acessar a mesma.

## Exemplos

```c
public OnVehicleMod(playerid, vehicleid, componentid)
{
    printf("O veículo %d foi modificado pelo ID %d com o componente %d",vehicleid, playerid,componentid);
    if (GetPlayerInterior(playerid) == 0)
    {
        BanEx(playerid, "Tuning Hacks"); // Anti-tuning hacks script
        return 0; // Previne modificação maliciosa ser carregada para outros jogadores...
        //(Testada! Funciona até em servidores que permitem a modificação de veículos usando comandos, menus, dialogs, etc..
    }
    return 1;
}
```

## Notas

:::tip

Essa callback NÃO É EXECUTADA ao utilizar a função AddVehicleComponent.

:::

## Funções Relacionadas

- [AddVehicleComponent](../functions/AddVehicleComponent): Adiciona um componente ao veículo.


## Callbacks Relacionadas

- [OnEnterExitModShop](OnEnterExitModShop): Executada quando um veículo entra/sai de um modshop.
- [OnVehiclePaintjob](OnVehiclePaintjob): Executada quando a paintjob de um veículo é alterada.
- [OnVehicleRespray](OnVehicleRespray): Executada quando um veículo é pintado/repintado.
