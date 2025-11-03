---
title: 车门状态
sidebar_label: 车门状态
description: 字节大小与对应车门状态位的关联信息
---

:::note

车门状态信息适用于[GetVehicleDamageStatus](../functions/GetVehicleDamageStatus)和[UpdateVehicleDamageStatus](../functions/UpdateVehicleDamageStatus)等原生函数。

:::

:::note

两个后门的状态无法通过[GetVehicleDamageStatus](../functions/GetVehicleDamageStatus)和[UpdateVehicleDamageStatus](../functions/UpdateVehicleDamageStatus)进行处理。

:::

## 位存储规则

每个车门（注：引擎盖和后备箱也视为车门）的损坏状态由 1 字节（8 位）存储。每次只能修改单个车门的某一位状态，若需同时设置车门损坏和开启状态需调用两次函数。

- ​**第 1 位**​ 表示车门是否**开启（值 1）​**或**关闭（值 0）​**。开启的车门仍可上锁（此时第一位会变为 0）
- ​**第 2 位**​ 表示车门是否**损坏（值 1）​**或**完好（值 0）​**。若需修复损坏车门，需先移除后重新附加
- ​**第 3 位**​ 表示车门是否**移除（值 1）​**或**存在（值 0）​**
- 其余位暂未使用

似乎没有专门表示车门是否上锁的状态位。

注意：位计算从右向左，第一位为最右侧位。

---

## 字节存储规则

- ​**第 1 字节**​ 存储**引擎盖**状态
- ​**第 2 字节**​ 存储**后备箱**状态
- ​**第 3 字节**​ 存储**驾驶座车门**状态
- ​**第 4 字节**​ 存储**副驾驶车门**状态

注意：字节计算从右向左，第一位为最右侧字节。

---

## 状态示例

以下二进制表示引擎盖被移除、前左车门损坏、前右车门开启、后备箱损坏且开启的状态：

`00000001 00000010 00000011 00000100`

SA-MP 实际返回十进制数值，需转换为二进制查看。上述示例将返回：

`16909060`

---

## 状态对照表

**图例说明：​**

```
静态部件     车门                      引擎盖/后备箱

° - 车灯     | - 完好关闭              -- - 完好关闭
             -- - 完好开启             [] - 完好开启
              § - 损坏关闭             ~~ - 损坏关闭
             ww - 损坏开启             {} - 损坏开启
                - 缺失                     - 缺失
```

**第一字节（引擎盖）：​**

```
0 (000)   1 (001)   2 (010)   3 (011)   4 (100)   5 (101)   6 (110)   7 (111)
  °--°      °[]°      °~~°      °{}°      °  °      °  °      °  °      °  °
  |  |      |  |      |  |      |  |      |  |      |  |      |  |      |  |
  °--°      °--°      °--°      °--°      °--°      °--°      °--°      °--°
```

**第二字节（后备箱）：​**

```
0 (000)   1 (001)   2 (010)   3 (011)   4 (100)   5 (101)   6 (110)   7 (111)
  °--°      °--°      °--°      °--°      °--°      °--°      °--°      °--°
  |  |      |  |      |  |      |  |      |  |      |  |      |  |      |  |
  °--°      °[]°      °--°      °{}°      °  °      °  °      °  °      °  °
```

**第三字节（驾驶座车门）：​**

```
0 (000)   1 (001)   2 (010)   3 (011)   4 (100)   5 (101)   6 (110)   7 (111)
  °--°      °--°      °--°      °--°      °--°      °--°      °--°      °--°
  |  |     --  |      §  |     ww  |         |         |         |         |
  °--°      °--°      °--°      °--°      °--°      °--°      °--°      °--°
```

**第四字节（副驾驶车门）：​**

```
0 (000)   1 (001)   2 (010)   3 (011)   4 (100)   5 (101)   6 (110)   7 (111)
  °--°      °--°      °--°      °--°      °--°      °--°      °--°      °--°
  |  |      |  --     |  §      |  ww     |         |         |         |
  °--°      °--°      °--°      °--°      °--°      °--°      °--°      °--°
```

---

## 封装函数

简化位操作的工具代码：

```c
enum Door
{
    DOOR_HOOD,
    DOOR_TRUNK,
    DOOR_DRIVER,
    DOOR_PASSENGER
}

enum DoorState(<<= 1)
{
    IS_OPENED = 1,
    IS_DAMAGED,
    IS_REMOVED
}

stock GetDoorState(doorStates, Door:door, DoorState:doorState)
{
    return (doorStates >>> (8 * door)) & doorState;
}
```

---

## 使用示例

```c
new
	VEHICLE_PANEL_STATUS:panels,
	VEHICLE_DOOR_STATUS:doors,
	VEHICLE_LIGHT_STATUS:lights,
	VEHICLE_TIRE_STATUS:tires;

GetVehicleDamageStatus(vehicleid, panels, doors, lights, tires);

// 单一状态检测
if (GetDoorState(_:doors, DOOR_DRIVER, IS_DAMAGED))
{
    SendClientMessage(playerid, -1, "您的车辆驾驶座车门已损坏！");
}

// 组合状态检测
if (GetDoorState(_:doors, DOOR_HOOD, IS_OPENED | IS_DAMAGED))
{
    SendClientMessage(playerid, -1, "您的车辆引擎盖处于开启且损坏状态！");
}
```

## 相关阅读

- [车辆门状态](vehicle-door-status)
