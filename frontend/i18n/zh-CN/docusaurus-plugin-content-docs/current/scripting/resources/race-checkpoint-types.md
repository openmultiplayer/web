---
title: 竞速检查点类型
sidebar_label: 竞速检查点类型
description: 竞速检查点类型定义。
---

:::note

以下定义用于[SetPlayerRaceCheckpoint](../functions/SetPlayerRaceCheckpoint)函数。

:::

| 定义                  | 值  | 描述                                     |
| --------------------- | --- | ---------------------------------------- |
| UNKNOWN_CP_TYPE       | -1  | 未知类型                                 |
| CP_TYPE_GROUND_NORMAL | 0   | 常规地面检查点                           |
| CP_TYPE_GROUND_FINISH | 1   | 终点地面检查点                           |
| CP_TYPE_GROUND_EMPTY  | 2   | 空地面检查点（仅显示检查点，无其他元素） |
| CP_TYPE_AIR_NORMAL    | 3   | 常规空中检查点                           |
| CP_TYPE_AIR_FINISH    | 4   | 终点空中检查点                           |
| CP_TYPE_AIR_ROTATING  | 5   | 旋转空中检查点（旋转后停止）             |
| CP_TYPE_AIR_STROBING  | 6   | 频闪空中检查点（渐强渐弱后消失）         |
| CP_TYPE_AIR_SWINGING  | 7   | 摆动空中检查点（向下摆动后上升）         |
| CP_TYPE_AIR_BOBBING   | 8   | 浮动空中检查点（上下摆动）               |
