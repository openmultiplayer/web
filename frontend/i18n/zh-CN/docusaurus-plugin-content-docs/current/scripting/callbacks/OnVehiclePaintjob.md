---
title: OnVehiclePaintjob
sidebar_label: OnVehiclePaintjob
description: 当玩家在改装店预览车辆涂装时触发该回调函数。
tags: ["车辆"]
---

## 描述

当玩家在改装店内预览车辆涂装时触发该回调函数（注意：玩家购买涂装时不会触发）。

| 参数名     | 说明                 |
| ---------- | -------------------- |
| playerid   | 变更涂装预览的玩家ID |
| vehicleid  | 变更涂装预览的车辆ID |
| paintjobid | 新预览的涂装ID       |

## 返回值

该回调始终在游戏模式中优先触发，返回0将阻止其他滤镜脚本处理此事件。

## 示例

```c
public OnVehiclePaintjob(playerid, vehicleid, paintjobid)
{
    new string[128];
    format(string, sizeof(string), "您已将车辆预览涂装变更为 %d 号样式！", paintjobid);
    SendClientMessage(playerid, 0x33AA33AA, string);
    return 1;
}
```

## 注意事项

:::tip

- 本回调不会通过 [ChangeVehiclePaintjob](../functions/ChangeVehiclePaintjob) 函数触发
- 如需检测玩家购买涂装行为，可使用 vSync 插件的 OnVehicleChangePaintjob 回调

:::

## 相关回调

以下回调可能与该回调存在关联：

- [OnVehicleRespray](OnVehicleRespray): 当车辆重新涂装时触发
- [OnVehicleMod](OnVehicleMod): 当车辆进行改装时触发

## 相关函数

以下函数可能与该回调存在关联：

- [ChangeVehiclePaintjob](../functions/ChangeVehiclePaintjob): 变更车辆涂装样式
- [ChangeVehicleColor](../functions/ChangeVehicleColor): 设置车辆颜色
- [GetVehiclePaintjob](../functions/GetVehiclePaintjob): 获取车辆当前涂装样式

## 相关资源

- [车辆涂装样式列表](../resources/paintjobids)
