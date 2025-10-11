---
title: OnVehicleRespray
sidebar_label: OnVehicleRespray
description: Essa callback é chamada quando um jogador sai de uma Garagem de Personalização, mesmo sem trocar cores.
tags: ["vehicle"]
---

## Descrição

Essa callback é chamada quando um jogador sai de uma Garagem de Personalização, mesmo sem trocar cores. Cuidado, Oficinas de Pintura não chamam essa callback nativamente.

| Nome      | Descrição                                                    |
| --------- | ------------------------------------------------------------ |
| playerid  | ID do jogador que está dirigindo o veículo.                  |
| vehicleid | ID do veículo que foi repintado.                             |
| color1    | Nova cor primária pintada no veículo.                        | 
| color2    | Nova cor secundária pintada no veículo.                      | 

## Retornos

Sempre é chamada primeiro no Gamemode então retornar 0 lá bloqueia Filterscripts de chamarem ela.

## Exemplos

```c
public OnVehicleRespray(playerid, vehicleid, color1, color2)
{
    new string[48];
    format(string, sizeof(string), "Você repintou seu veículo ID %d para as cores %d e %d!", vehicleid, color1, color2);
    SendClientMessage(playerid, COLOR_GREEN, string);
    return 1;
}
```

## Notas

:::tip

Essa callback não é chamada ao usar ChangeVehicleColor. Estranhamente, não é chamada também ao ir em uma Oficina de Pintura (só Garagens de Personalização).

Código para conserto: https://pastebin.com/G81da7N1

:::

:::warning

Bug(s) Notados: Visualizar certos componentes dentro da Garagem de Personalização podem chamar essa callback sem querer.

:::

## Funções Relacionadas

- [ChangeVehicleColor](../functions/ChangeVehicleColor): Mudar a cor de um veículo.
- [ChangeVehiclePaintjob](../functions/ChangeVehiclePaintjob): Mudar o trabalho de pintura de um veículo.
- [OnVehiclePaintjob](OnVehiclePaintjob): Chamada quando o trabalho de pintura de veículo muda.
- [OnVehicleMod](OnVehicleMod): Chamada quando o componente de um veículo é modificado.
- [OnEnterExitModShop](OnEnterExitModShop): Chamada quando um veículo entra ou sai de uma Garagem de Modificação.