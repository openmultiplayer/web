---
title: NPC_ExitVehicle
sidebar_label: NPC_ExitVehicle
description: 使 NPC 退出其当前车辆。
tags: ["npc", "车辆"]
---

<VersionWarnZH_CN version='omp v1.5.8.3079' />

## 描述

使 NPC 退出其当前所在的车辆。

| 参数  | 说明      |
| ----- | --------- |
| npcid | NPC 的 ID |

## 返回值

操作成功返回 `true`，否则返回 `false`。

## 示例

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/npcexitbike", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "你没有在调试NPC。");

        if (NPC_ExitVehicle(npcid))
            SendClientMessage(playerid, 0x00FF00FF, "NPC %d 正在离开摩托车.", npcid);
        else
            SendClientMessage(playerid, 0xFF0000FF, "NPC %d 离开摩托车失败。", npcid);

        return 1;
    }
    return 0;
}
```

## 注意事项

- NPC 必须在车辆中此函数才能生效，否则此函数无效
- NPC 会执行退出动画，退出后，NPC 将在车辆附近步行

## 相关函数

- [NPC_EnterVehicle](NPC_EnterVehicle): 使 NPC 进入车辆
- [NPC_PutInVehicle](NPC_PutInVehicle): 立即将 NPC 放入车辆
- [NPC_RemoveFromVehicle](NPC_RemoveFromVehicle): 立即将 NPC 从车辆中移除
- [NPC_GetVehicle](NPC_GetVehicle): 获取 NPC 当前车辆

## 相关回调

_此函数不会触发特定的回调。_
