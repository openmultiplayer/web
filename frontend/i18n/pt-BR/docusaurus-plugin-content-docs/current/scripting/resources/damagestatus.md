---
title: Status de Dano
sidebar_label: Status de Dano
description: Informações sobre o status de dano de veículos e código de exemplo.
---

:::note

Informações sobre o status de dano de veículos usado por [GetVehicleDamageStatus](../functions/GetVehicleDamageStatus) e [UpdateVehicleDamageStatus](../functions/UpdateVehicleDamageStatus).

:::

O dano do veículo é armazenado em 4 valores: **Painéis**, **Portas**, **Luzes** e **Pneus**. Cada valor contém uma máscara de bits do estado de todos os painéis, portas, luzes ou pneus. Isso significa que você precisa usar operadores bit a bit para trabalhar com eles (na maioria das vezes).

Por exemplo, o status dos pneus armazena 4 bits para os 4 pneus. O valor é 1 se o pneu estiver furado, e 0 se não estiver furado. Então, por exemplo, um valor de `1010` significa que ambos os pneus dianteiros estão furados, e os traseiros não estão.

:::note

Para mais informações sobre estados de painéis, veja [Panel States](panelstates).
Para mais informações sobre estados de portas, veja [Door States](doorstates).
Para mais informações sobre estados de luzes, veja [Light States](lightstates).
Para mais informações sobre estados de pneus, veja [Tire States](tirestates).

:::

Para facilitar o trabalho com esses valores, existem algumas funções de codificação e decodificação abaixo.

```c
//Painéis
decode_panels(panels, &front_left_panel, &front_right_panel, &rear_left_panel, &rear_right_panel, &windshield, &front_bumper, &rear_bumper)
{
    front_left_panel = panels & 15;
    front_right_panel = panels >> 4 & 15;
    rear_left_panel = panels >> 8 & 15;
    rear_right_panel = panels >> 12 & 15;
    windshield = panels >> 16 & 15;
    front_bumper = panels >> 20 & 15;
    rear_bumper = panels >> 24 & 15;
}

encode_panels(front_left_panel, front_right_panel, rear_left_panel, rear_right_panel, windshield, front_bumper, rear_bumper)
{
    return front_left_panel | (front_right_panel << 4) | (rear_left_panel << 8) | (rear_right_panel << 12) | (windshield << 16) | (front_bumper << 20) | (rear_bumper << 24);
}

//Portas
decode_doors(doors, &bonnet, &boot, &driver_door, &passenger_door)
{
    bonnet = doors & 7;
    boot = doors >> 8 & 7;
    driver_door = doors >> 16 & 7;
    passenger_door = doors >> 24 & 7;
}

encode_doors(bonnet, boot, driver_door, passenger_door)
{
    return bonnet | (boot << 8) | (driver_door << 16) | (passenger_door << 24);
}

//Luzes
decode_lights(lights, &front_left_light, &front_right_light, &back_lights)
{
    front_left_light = lights & 1;
    front_right_light = lights >> 2 & 1;
    back_lights = lights >> 6 & 1;
}

encode_lights(front_left_light, front_right_light, back_lights)
{
    return front_left_light | (front_right_light << 2) | (back_lights << 6);
}

//Pneus
decode_tires(tires, &rear_right_tire, &front_right_tire, &rear_left_tire, &front_left_tire)
{
    rear_right_tire = tires & 1;
    front_right_tire = tires >> 1 & 1;
    rear_left_tire = tires >> 2 & 1;
    front_left_tire = tires >> 3 & 1;
}

encode_tires(rear_right_tire, front_right_tire, rear_left_tire, front_left_tire)
{
	return rear_right_tire | (front_right_tire << 1) | (rear_left_tire << 2) | (front_left_tire << 3);
}
```
