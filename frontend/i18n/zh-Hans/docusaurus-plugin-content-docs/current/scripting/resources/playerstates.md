---
title: 玩家状态
sidebar_label: 玩家状态
description: 通过GetPlayerState函数或OnPlayerStateChange回调使用的所有玩家状态列表。
tags: ["玩家"]
---

本文档整理了[GetPlayerState](../functions/GetPlayerState)函数和[OnPlayerStateChange](../callbacks/OnPlayerStateChange)回调所使用的玩家状态列表。相关页面包含如何使用下列状态值的示例说明。

从服务器开发者角度，"玩家状态"与"特殊动作"的区分原则在于：前者用于同步机制（部分状态关联数据封包），描述通用行为状态；后者无封包关联，用于描述特定动作。

## 状态列表

| ID  | 宏定义                               | 状态描述                                       |
| --- | ------------------------------------ | ---------------------------------------------- |
| 0   | PLAYER_STATE_NONE                    | 初始化过程中使用的默认状态                     |
| 1   | PLAYER_STATE_ONFOOT                  | 玩家处于步行状态                               |
| 2   | PLAYER_STATE_DRIVER                  | 玩家正在驾驶车辆                               |
| 3   | PLAYER_STATE_PASSENGER               | 玩家作为车辆乘客                               |
| 4   | PLAYER_STATE_EXIT_VEHICLE            | 玩家正在离开车辆（主要用于内部处理）           |
| 5   | PLAYER_STATE_ENTER_VEHICLE_DRIVER    | 玩家正以驾驶员身份进入车辆（主要用于内部处理） |
| 6   | PLAYER_STATE_ENTER_VEHICLE_PASSENGER | 玩家正以乘客身份进入车辆（主要用于内部处理）   |
| 7   | PLAYER_STATE_WASTED                  | 玩家处于死亡状态或角色选择界面                 |
| 8   | PLAYER_STATE_SPAWNED                 | 玩家已重生                                     |
| 9   | PLAYER_STATE_SPECTATING              | 玩家处于旁观者模式                             |
