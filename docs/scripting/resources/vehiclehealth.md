---
title: Vehicle Health
description: Vehicle Health Values.
---

:::info

The vehicle health value used by [SetVehicleHealth](../functions/SetVehicleHealth) and [GetVehicleHealth](../functions/GetVehicleHealth) is always between 0 and 1000. A value of 0 means the vehicle will explode, and a value of 1000 means the vehicle doesn't even have a scratch. The effect of the vehicle health value on the engine is illustrated in the table below.

:::

| Vehicle health | Effect on the engine                 |
| -------------- | ------------------------------------ |
| > 650          | None. The engine is still pretty much fine |
| 550-650        | The engine is overheating, and will emit white smoke |
| 390-550        | The engine is overheating pretty badly, and will emit grey smoke |
| 250-390        | The engine is getting really hot, and will emit black smoke |
| < 250          | The engine will catch fire, and the vehicle will explode a few seconds later, unless it gets repaired |
