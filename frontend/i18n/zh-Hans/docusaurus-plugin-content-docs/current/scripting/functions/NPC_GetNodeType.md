---
title: NPC_GetNodeType
sidebar_label: NPC_GetNodeType
description: 获取 NPC 节点的类型。
tags: ["npc", "节点", "导航"]
---

<VersionWarnZH_Hans version='omp v1.1.0.changemelater' />

## 描述

获取 NPC 节点的类型。

| 参数   | 说明      |
| ------ | --------- |
| nodeid | 节点的 ID |

## 返回值

返回节点类型 ID，若节点无效则返回-1。

## 示例

```c
public OnGameModeInit()
{
    // 首先打开一个节点
    if (NPC_OpenNode(1))
    {
        new nodeType = NPC_GetNodeType(1);

        new typeString[32];
        switch(nodeType)
        {
            case 0: typeString = "行人";
            case 1: typeString = "车辆";
            case 2: typeString = "船只";
            case 3: typeString = "飞机";
            default: typeString = "未知";
        }

        printf("节点1类型为%d (%s)", nodeType, typeString);
    }

    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/nodetypes", true))
    {
        for (new nodeid = 0; nodeid < 10; nodeid++)
        {
            if (NPC_IsNodeOpen(nodeid))
            {
                new nodeType = NPC_GetNodeType(nodeid);

                new typeString[32];
                switch(nodeType)
                {
                    case 0: typeString = "行人";
                    case 1: typeString = "车辆";
                    case 2: typeString = "船只";
                    case 3: typeString = "飞机";
                    default: format(typeString, sizeof(typeString), "类型%d", nodeType);
                }

                new msg[128];
                format(msg, sizeof(msg), "节点%d: %s", nodeid, typeString);
                SendClientMessage(playerid, 0xFFFFFFFF, msg);
            }
        }

        return 1;
    }
    return 0;
}
```

## 注意事项

- 若节点无效或未打开则返回-1
- 不同的节点类型适用于不同的移动方式
- 行人节点适用于步行的 NPC
- 车辆节点适用于驾驶的 NPC
- 请为 NPC 的移动方式选择合适的节点类型

## 相关函数

- [NPC_OpenNode](NPC_OpenNode): 打开节点以供使用
- [NPC_IsNodeOpen](NPC_IsNodeOpen): 检查节点是否打开
- [NPC_GetNodeInfo](NPC_GetNodeInfo): 获取详细节点信息
- [NPC_PlayNode](NPC_PlayNode): 使 NPC 播放节点

## 相关回调

- [../callbacks/OnNPCFinishNode](../callbacks/OnNPCFinishNode): NPC 完成节点时调用
- [../callbacks/OnNPCChangeNode](../callbacks/OnNPCChangeNode): NPC 更换节点时调用
