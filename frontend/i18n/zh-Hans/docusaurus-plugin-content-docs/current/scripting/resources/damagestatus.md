---
title: 损坏状态
sidebar_label: 损坏状态
description: 车辆损坏状态信息及代码示例
---

:::note

有关[GetVehicleDamageStatus](../functions/GetVehicleDamageStatus)和[UpdateVehicleDamageStatus](../functions/UpdateVehicleDamageStatus)函数使用的车辆损坏状态信息。

:::

车辆损坏状态通过 4 个数值存储：**车身面板**、**车门**、**车灯**和**轮胎**。每个数值都使用位掩码来记录所有对应部件的状态，这意味着大多数情况下需要使用位运算进行处理。

例如，轮胎状态使用 4 个比特位表示 4 个轮胎。当轮胎爆胎时对应位为 1，正常则为 0。因此数值`1010`表示前轮爆胎而后轮正常。

:::note

有关面板状态的更多信息，请参阅[面板状态](../resources/panelstates)  
有关车门状态的更多信息，请参阅[车门状态](../resources/doorstates)  
有关车灯状态的更多信息，请参阅[车灯状态](../resources/lightstates)  
有关轮胎状态的更多信息，请参阅[轮胎状态](../resources/tirestates)

:::

为了方便处理这些状态，以下提供了一些编码和解码函数：

```c
// 车身面板
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

// 车门
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

// 车灯
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

// 轮胎
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
