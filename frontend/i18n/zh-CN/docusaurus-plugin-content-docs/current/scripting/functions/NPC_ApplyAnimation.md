---
title: NPC_ApplyAnimation
sidebar_label: NPC_ApplyAnimation
description: 对 NPC 应用特定动画。
tags: ["npc", "动画"]
---

<VersionWarnZH_CN version='omp v1.5.8.3079' />

## 描述

使用动画库名称和动画名称为 NPC 应用特定动画。

| 参数       | 说明                       |
| ---------- | -------------------------- |
| npcid      | NPC 的 ID                  |
| animlib[]  | 动画库名称                 |
| animname[] | 动画库中的动画名称         |
| delta      | 动画播放速度（通常为 4.1） |
| loop       | 动画是否循环播放           |
| lockX      | 锁定 X 轴移动              |
| lockY      | 锁定 Y 轴移动              |
| freeze     | 在动画结束时冻结 NPC       |
| time       | 动画播放时间（毫秒）       |

## 返回值

操作成功返回 `true`，否则返回 `false`。

## 示例

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/applydance", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "你没有在调试NPC。");

        NPC_ApplyAnimation(npcid, "DANCING", "dance_loop", 4.1, true, false, false, false, 0);
        SendClientMessage(playerid, 0x00FF00FF, "NPC %d 已应用动画。", npcid);

        return 1;
    }
    return 0;
}
```

## 注意事项

- 使用 `time` 参数设置动画持续时间
- 锁定参数可防止动画期间在特定轴上移动
- 使用 `NPC_ClearAnimations` 停止所有动画
- Delta 值通常在 1.0 到 10.0 之间（4.1 为标准值）

## 相关函数

- [NPC_SetAnimation](NPC_SetAnimation): 通过 ID 设置动画
- [NPC_ClearAnimations](NPC_ClearAnimations): 清除所有动画
- [NPC_ResetAnimation](NPC_ResetAnimation): 重置动画状态
- [NPC_GetAnimation](NPC_GetAnimation): 获取当前动画数据

## 相关回调

- [OnNPCSpawn](../callbacks/OnNPCSpawn): NPC 生成时调用
