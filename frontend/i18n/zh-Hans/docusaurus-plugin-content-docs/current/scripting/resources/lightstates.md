---
title: 灯光状态
sidebar_label: 灯光状态
description: 关于字节大小及其对应灯光状态位的信息。
---

:::note

灯光状态被诸如[GetVehicleDamageStatus](../functions/GetVehicleDamageStatus)和[UpdateVehicleDamageStatus](../functions/UpdateVehicleDamageStatus)等原生函数使用。

:::

:::note

双轮车辆（因此有 2 个车灯）的灯光状态不可更改。

:::

:::note

车辆的两个后车灯无法单独更改。

:::

## 比特位存储规则

所有车灯的损坏状态将被存储在一个字节中（共 8 比特）。每个比特位存储对应车灯的**损坏状态（值为 1）​**或**正常状态（值为 0）​**。

- ​**第一位**存储**左前**车灯状态
- ​**第三位**存储**右前**车灯状态
- ​**第七位**存储**后部**车灯状态
- 其余比特位未使用

注意比特位从右向左计数，因此第一位是最右侧的比特位。

---

## 示例

以下代码表示前部两个车灯损坏，后部车灯正常：

`0000 0101`

然而 SA-MP 会返回十进制数字，因此您需要先将其转换为二进制才能得到上述结果。对于这个示例，SA-MP 将返回：

`5`

---

## 状态对照表

以下是灯光状态的视觉化表示。图示为车辆俯视图，上方数值表示车辆前部，下方数值表示车辆后部。

**图例:**

```

o - 启用灯光
x - 禁用灯光

```

0: (0000 0000)

```c
    o-o
    | |
    o-o
```

1: (0000 0001)

```c
    x-o
    | |
    o-o
```

4: (0000 0100)

```c
    o-x
    | |
    o-o
```

5: (0000 0101)

```c
    x-x
    | |
    o-o
```

64: (0100 0000)

```c
    o-o
    | |
    x-x
```

65: (0100 0001)

```c
    x-o
    | |
    x-x
```

68: (0100 0100)

```c
    o-x
    | |
    x-x
```

69: (0100 0101)

```c
    x-x
    | |
    x-x
```

未列出的其他值也可以改变车灯状态，但会产生重复效果（例如 15 与 5 的效果相同）。超过 255 的值会循环重置，256 将被设为 0，257 设为 1，依此类推。

---

## 使用示例

禁用车辆后部车灯同时保持前部状态不变：

```c
new
	VEHICLE_PANEL_STATUS:panels,
	VEHICLE_DOOR_STATUS:doors,
	VEHICLE_LIGHT_STATUS:lights,
	VEHICLE_TIRE_STATUS:tires;

GetVehicleDamageStatus(vehicleid, panels, doors, lights, tires);
UpdateVehicleDamageStatus(vehicleid, panels, doors, (lights | VEHICLE_LIGHT_STATUS:0b01000000), tires); // '0b'前缀表示后续数字为二进制格式，与'0x'表示十六进制同理
```

## 相关阅读

- [车辆灯光状态](../resources/vehicle-light-status)
