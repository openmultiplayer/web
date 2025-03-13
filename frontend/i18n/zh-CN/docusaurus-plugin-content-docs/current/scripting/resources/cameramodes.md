---
title: 视角模式
sidebar_label: 视角模式
---

## 描述

以下视角模式由[GetPlayerCameraMode](../functions/GetPlayerCameraMode)函数使用。

:::note

游戏中可能仍存在更多隐藏可用的 ID，且部分 ID 会对应多种使用场景。

:::

## 可用视角模式列表

| ID  | 定义                       | 游戏文件中的名称       | 描述                                                                                           |
| --- | -------------------------- | ---------------------- | ---------------------------------------------------------------------------------------------- |
| 3   | CAM_MODE_BEHINDCAR         | MODE_BEHINDCAR         | 火车/电车视角                                                                                  |
| 4   | CAM_MODE_FOLLOWPED         | MODE_FOLLOWPED         | 跟随玩家角色（标准第三人称视角），支持多种可变距离                                             |
| 7   | CAM_MODE_SNIPER            | MODE_SNIPER            | 狙击枪瞄准（狙击镜视角）                                                                       |
| 8   | CAM_MODE_ROCKETLAUNCHER    | MODE_ROCKETLAUNCHER    | 火箭筒瞄准（火箭筒瞄准镜视角）                                                                 |
| 15  | CAM_MODE_FIXED             | MODE_FIXED             | 固定视角（不可移动）——用于车库场景、追逐视角、进入建筑物、购买食物等场景                       |
| 16  | CAM_MODE_1STPERSON         | MODE_1STPERSON         | 车辆第一人称视角（汽车前视/摩托车侧视）                                                        |
| 18  | CAM_MODE_CAM_ON_A_STRING   | MODE_CAM_ON_A_STRING   | 标准车辆视角（支持快艇/直升机/飞机），支持多种可变距离                                         |
| 22  | CAM_MODE_BEHINDBOAT        | MODE_BEHINDBOAT        | 标准船只视角                                                                                   |
| 46  | CAM_MODE_CAMERA            | MODE_CAMERA            | 武器瞄准（武器准星视角）                                                                       |
| 51  | CAM_MODE_ROCKETLAUNCHER_HS | MODE_ROCKETLAUNCHER_HS | 热追踪火箭筒瞄准                                                                               |
| 53  | CAM_MODE_AIMWEAPON         | MODE_AIMWEAPON         | 常规武器瞄准                                                                                   |
| 55  | CAM_MODE_AIMWEAPON_FROMCAR | MODE_AIMWEAPON_FROMCAR | 车辆乘客射击视角（玩家进行乘车射击时）                                                         |
| 56  | CAM_MODE_DW_HELI_CHASE     | MODE_DW_HELI_CHASE     | 追逐视角：直升机/鸟瞰视角                                                                      |
| 57  | -                          | MODE_DW_CAM_MAN        | 追逐视角：地面视角，会快速拉近并对准车辆                                                       |
| 58  | -                          | MODE_DW_BIRDY          | 追逐视角：水平飞越车辆的过场视角                                                               |
| 59  | -                          | MODE_DW_PLANE_SPOTTER  | 追逐视角（仅限飞行车辆）：地面视角，仰视空中车辆                                               |
| 62  | -                          | MODE_DW_PLANECAM1      | 追逐视角（仅限飞行车辆）：垂直飞越空中车辆的过场视角                                           |
| 63  | -                          | MODE_DW_PLANECAM2      | 追逐视角（仅限飞行车辆）：水平飞越空中车辆的过场视角（类似 58 和 62）                          |
| 64  | -                          | MODE_DW_PLANECAM3      | 追逐视角（仅限飞行车辆）：聚焦飞行员的视角，类似于步行时按下"向后看"键的效果，但应用于飞行车辆 |
