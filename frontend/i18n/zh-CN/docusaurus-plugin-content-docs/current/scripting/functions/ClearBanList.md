---
title: ClearBanList
sidebar_label: ClearBanList
description: 清空服务器封禁列表
tags: []
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

清除服务器当前所有 IP 封禁记录

## 返回值

**true** - 操作执行成功

**false** - 操作执行失败

## 示例代码

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/clearbanlist", true))
    {
        if (!IsPlayerAdmin(playerid)) // 检查管理员权限
        {
            return 1;
        }

        ClearBanList();
        SendClientMessage(playerid, -1, "[服务器]: 封禁列表已清空");
        return 1;
    }
    return 0;
}
```

## 注意事项

:::tip

封禁记录可通过查看 **bans.json** 配置文件获取

:::

## 相关函数

- [BlockIpAddress](BlockIpAddress): 临时封锁 IP 地址
- [UnBlockIpAddress](UnBlockIpAddress): 解除 IP 封锁
- [Ban](Ban): 封禁指定玩家
- [BanEx](BanEx): 自定义理由封禁玩家
- [Kick](Kick): 踢出玩家
- [IsBanned](IsBanned): 检测 IP 是否被封禁
