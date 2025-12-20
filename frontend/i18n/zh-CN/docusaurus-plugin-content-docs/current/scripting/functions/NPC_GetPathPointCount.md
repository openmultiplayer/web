---
title: NPC_GetPathPointCount
sidebar_label: NPC_GetPathPointCount
description: 获取 NPC 路径中点的数量。
tags: ["npc", "路径"]
---

<VersionWarnZH_CN version='omp v1.5.8.3079' />

## 描述

获取 NPC 路径中点的数量。

| 参数   | 说明      |
| ------ | --------- |
| pathid | 路径的 ID |

## 返回值

返回路径中点的数量，若路径无效则返回 0。

## 示例

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkpathpointcount", true))
    {
        new pathid = PlayerPatrolPath[playerid];
        if (pathid == INVALID_PATH_ID)
            return SendClientMessage(playerid, 0xFFFF00FF, "未指定巡逻路径。");

        new count = NPC_GetPathPointCount(pathid);

        SendClientMessage(playerid, 0x00FF00FF, "路径 %d 有 %d 个点", pathid, count);
        return 1;
    }
    return 0;
}

forward ValidatePathBeforeUse(pathid);
public ValidatePathBeforeUse(pathid)
{
    new pointCount = NPC_GetPathPointCount(pathid);

    if (pointCount < 2)
    {
        printf("警告: 路径%d只有%d个点，移动需要至少2个点",
            pathid, pointCount);
        return 0;
    }

    printf("路径%d有效，有%d个点", pathid, pointCount);
    return 1;
}
```

## 注意事项

- 若路径无效或为空则返回 0

## 相关函数

- [NPC_AddPointToPath](NPC_AddPointToPath): 向路径添加点
- [NPC_RemovePointFromPath](NPC_RemovePointFromPath): 从路径移除点
- [NPC_GetPathPoint](NPC_GetPathPoint): 获取特定点数据
- [NPC_ClearPath](NPC_ClearPath): 从路径移除所有点

## 相关回调

- [../callbacks/OnNPCFinishMovePath](../callbacks/OnNPCFinishMovePath): NPC 完成路径时调用
