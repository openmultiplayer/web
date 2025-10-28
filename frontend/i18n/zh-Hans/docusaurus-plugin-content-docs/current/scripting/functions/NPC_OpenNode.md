---
title: NPC_OpenNode
sidebar_label: NPC_OpenNode
description: 打开 NPC 节点供使用。
tags: ["npc", "节点", "导航"]
---

<VersionWarnZH_Hans version='omp v1.1.0.changemelater' />

## 描述

打开 NPC 节点供使用，使其可供 NPC 导航通过。

| 参数   | 说明      |
| ------ | --------- |
| nodeid | 节点的 ID |

## 返回值

如果节点成功打开则返回`true`，否则返回`false`。

## 示例

```c
public OnGameModeInit()
{
    // 打开特定节点供导航
    if (NPC_OpenNode(1))
    {
        printf("成功打开节点 1");
    }
    else
    {
        printf("打开节点 1 失败");
    }

    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/opennode", true))
    {
        new nodeid = 5; // 示例节点 ID

        if (NPC_OpenNode(nodeid))
        {
            new msg[64];
            format(msg, sizeof(msg), "节点 %d 打开成功", nodeid);
            SendClientMessage(playerid, 0x00FF00FF, msg);

            // 创建 NPC 使用此节点
            new npcid = NPC_Create("Navigator");
            NPC_Spawn(npcid);
            NPC_PlayNode(npcid, nodeid, NPC_MOVE_TYPE_WALK);
        }
        else
        {
            new msg[64];
            format(msg, sizeof(msg), "打开节点 %d 失败", nodeid);
            SendClientMessage(playerid, 0xFF0000FF, msg);
        }
        return 1;
    }

    if (!strcmp(cmdtext, "/opennodes", true))
    {
        new openedCount = 0;

        for (new nodeid = 0; nodeid < 64; nodeid++)
        {
            if (NPC_OpenNode(nodeid))
            {
                openedCount++;
            }
        }

        new msg[64];
        format(msg, sizeof(msg), "成功打开了 %d 个节点", openedCount);
        SendClientMessage(playerid, 0x00FF00FF, msg);
        return 1;
    }
    return 0;
}
```

## 注意事项

- 节点 ID 范围为 0 到 63
- 节点必须先打开才能供 NPC 用于导航
- 打开节点会加载其数据并使其可访问
- 使用 NPC_IsNodeOpen 检查节点是否已打开
- 打开失败可能表示无效的节点 ID 或系统限制

## 相关函数

- [NPC_CloseNode](NPC_CloseNode): 关闭节点
- [NPC_IsNodeOpen](NPC_IsNodeOpen): 检查节点是否打开
- [NPC_PlayNode](NPC_PlayNode): 让 NPC 播放节点
- [NPC_GetNodeInfo](NPC_GetNodeInfo): 获取节点信息

## 相关回调

_此函数不会触发任何特定的回调。_
