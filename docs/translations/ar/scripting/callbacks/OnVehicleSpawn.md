---
title: OnVehicleSpawn
description: يتم إستدعاء هذا الكال باك عند رسبنت السبارة
tags: ["vehicle"]
---

:::warning

هذا الكال باك يتم إستدعائه فقط عندم يتم إعادة رسبنت السيارة . CreateVehicle و AddStaticVehicle(Ex) لن يفعلو هذا الكال باك

:::

## الوصف

This callback is called when a vehicle respawns.

| Name      | Description                         |
| --------- | ----------------------------------- |
| vehicleid | إيدي السيارة التي رسبنت           |

## Returns

0 - سيمنع بقيت الفلترسكريبتات من تلقي هذا الكال باك

1 - يشير إلى أنه سيتم تمرير هذا الكال باك إلى الفيلتر سكريبت القادم

يتم إستدعائه أولا في الفيلترسكريبت

## Examples

```c
public OnVehicleSpawn(vehicleid)
{
    printf("Vehicle %i spawned!",vehicleid);
    return 1;
}
```

## الاستدعاءات او كالباكات ذات الصلة

قد تكون الاستدعاءات التالية مفيدة، حيث أنها ذات صلة بهذا الاستدعاء بطريقة أو بأخرى 

- [OnVehicleDeath](OnVehicleDeath): هذا الكال باك يتم إستدعائه عند تدمير السيارة. 
- [OnPlayerSpawn](OnPlayerSpawn): هذا الكال باك يتم إستدعائه عند رسبنت اللاعب. 

## وظائف ذات صلة

قد تكون الوظائف التالية مفيدة، حيث أنها ذات صلة بهذا الاستدعاء بطريقة أو بأخرى 

- [SetVehicleToRespawn](../functions/SetVehicleToRespawn):إغادة رسبنت السيارة
- [CreateVehicle](../functions/CreateVehicle): صنع سيارة
