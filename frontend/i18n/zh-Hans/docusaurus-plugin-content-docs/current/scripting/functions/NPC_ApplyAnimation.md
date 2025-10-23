---
title: NPC_ApplyAnimation
sidebar_label: NPC_ApplyAnimation
description: 对 NPC 应用特定动画。
tags: ["npc", "动画"]
---

<VersionWarnZH_CN version='omp v1.1.0.changemelater' />

## 描述

使用动画库名称和动画名称对 NPC 应用特定动画。

| 名称       | 描述                   |
| ---------- | ---------------------- |
| npcid      | NPC 的 ID              |
| animlib[]  | 动画库名称             |
| animname[] | 库中的动画名称         |
| delta      | 动画速度（通常为 4.1） |
| loop       | 动画是否应该循环       |
| lockX      | 锁定 X 轴上的移动      |
| lockY      | 锁定 Y 轴上的移动      |
| freeze     | 在动画结束时冻结 NPC   |
| time       | 播放动画的时间（毫秒） |

## 返回值

操作成功返回 `true`，否则返回 `false`。

## 示例

```c
public OnGameModeInit()
{
    new npcid = NPC_Create("AnimationBot");
    NPC_Spawn(npcid);

    // 应用舞蹈动画
    NPC_ApplyAnimation(npcid, "DANCING", "DAN_Loop_A", 4.1, true, false, false, false, 0);

    // 应用吸烟动画 5 秒
    NPC_ApplyAnimation(npcid, "SMOKING", "M_smklean_loop", 4.1, true, false, false, false, 5000);

    return 1;
}
```

## 注意事项

- 动画库和动画名称必须存在于 GTA San Andreas 中
- 使用 `time` 参数设置动画持续时间（0 = 无限）
- 锁定参数防止在动画期间在特定轴上移动
- 使用 `NPC_ClearAnimations` 停止所有动画
- Delta 通常范围在 1.0 到 10.0 之间（4.1 是标准值）

## 相关函数

- [NPC_SetAnimation](NPC_SetAnimation): 按 ID 设置动画
- [NPC_ClearAnimations](NPC_ClearAnimations): 清除所有动画
- [NPC_ResetAnimation](NPC_ResetAnimation): 重置动画状态
- [NPC_GetAnimation](NPC_GetAnimation): 获取当前动画数据

## 相关回调

- [OnNPCSpawn](../callbacks/OnNPCSpawn): 当 NPC 生成时调用
