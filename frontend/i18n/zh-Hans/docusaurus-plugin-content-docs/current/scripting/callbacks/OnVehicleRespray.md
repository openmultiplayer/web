---
title: OnVehicleRespray
sidebar_label: OnVehicleRespray
description: 当玩家离开改装店时触发该回调函数，即使颜色未发生变更。
tags: ["车辆"]
---

## 描述

当玩家驾驶车辆离开改装店时触发该回调函数，即使车辆颜色未发生改变。注意：该回调名称存在歧义，Pay 'n' Spray涂装店不会触发此回调。

| 参数名    | 说明                     |
| --------- | ------------------------ |
| playerid  | 驾驶车辆的玩家ID         |
| vehicleid | 被重新涂装的车辆ID       |
| color1    | 变更后的车辆主色调颜色值 |
| color2    | 变更后的车辆副色调颜色值 |

## 返回值

该回调始终在游戏模式中优先触发，返回0将阻止其他滤镜脚本处理此事件。

## 示例

```c
public OnVehicleRespray(playerid, vehicleid, color1, color2)
{
    new string[48];
    format(string, sizeof(string), "您已将车辆 %d 颜色更改为 %d 和 %d 号色！", vehicleid, color1, color2);
    SendClientMessage(playerid, COLOR_GREEN, string);
    return 1;
}
```

## 注意事项

:::tip

- 本回调不会通过 [ChangeVehicleColor](../functions/ChangeVehicleColor) 函数触发
- 仅改装店（Mod Shop）会触发此回调，Pay 'n' Spray涂装店不会触发
- 修复方案参考：[http://pastebin.com/G81da7N1](http://pastebin.com/G81da7N1)

:::

:::warning

**已知问题**  
在改装店预览组件时可能意外触发此回调

:::

## 相关回调

以下回调可能与该回调存在关联：

- [OnVehiclePaintjob](OnVehiclePaintjob): 当车辆涂装样式变更时触发
- [OnVehicleMod](OnVehicleMod): 当车辆进行改装时触发
- [OnEnterExitModShop](OnEnterExitModShop): 当车辆进入/离开改装店时触发

## 相关函数

以下函数可能与该回调存在关联：

- [ChangeVehicleColor](../functions/ChangeVehicleColor): 设置车辆颜色
- [ChangeVehiclePaintjob](../functions/ChangeVehiclePaintjob): 变更车辆涂装样式
- [GetVehicleColor](../functions/GetVehicleColor): 获取车辆当前颜色配置

## 相关资源

- [车辆颜色代码表](../resources/vehiclecolors)
