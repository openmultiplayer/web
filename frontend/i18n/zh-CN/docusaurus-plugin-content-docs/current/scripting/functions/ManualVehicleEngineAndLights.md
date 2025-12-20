---
title: ManualVehicleEngineAndLights
sidebar_label: ManualVehicleEngineAndLights
description: 启用脚本对车辆引擎和灯光的完全控制
tags: ["车辆"]
---

## 描述

需在玩家首次连接前（通常在`OnGameModeInit`回调中）调用此函数，通知所有客户端将由脚本完全控制车辆引擎和灯光系统。启用后将阻止游戏自动执行以下行为：

- 玩家进入/离开车辆时自动开关引擎
- 环境光线变暗时自动开启车灯

## 示例代码

```c
public OnGameModeInit()
{
    ManualVehicleEngineAndLights();
    return 1;
}
```

## 注意事项

:::warning

- 此函数启用后无法撤销，需在开发初期明确是否使用
- 必须在首个玩家连接服务器前调用（推荐在游戏模式初始化时设置）

:::

:::tip

可通过服务端配置文件[config.json](../../server/config.json)全局启用/禁用：

```json
"use_manual_engine_and_lights": true
```

:::

## 相关函数

- [SetVehicleParamsEx](SetVehicleParamsEx): 全局设置车辆运行参数
- [GetVehicleParamsEx](GetVehicleParamsEx): 获取车辆当前参数状态
- [SetVehicleParamsForPlayer](SetVehicleParamsForPlayer): 为指定玩家设置车辆参数
