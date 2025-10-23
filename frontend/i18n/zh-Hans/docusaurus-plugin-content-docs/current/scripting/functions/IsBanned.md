---
title: IsBanned
sidebar_label: IsBanned
description: 检查指定IP地址是否被封禁
tags: ["IP地址"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

检查指定 IP 地址是否存在于封禁列表中。

| 参数              | 说明               |
| ----------------- | ------------------ |
| const ipAddress[] | 需要检查的 IP 地址 |

## 返回值

**true** - IP 地址已被封禁  
**false** - IP 地址未被封禁

## 示例

```c
if (IsBanned("255.255.255.255"))
{
    // 执行相关操作
}
```

## 注意事项

:::tip

封禁列表可通过查看 **bans.json** 文件获取

:::

## 相关函数

- [BlockIpAddress](BlockIpAddress): 禁止指定 IP 地址在设定时间内连接服务器
- [UnBlockIpAddress](UnBlockIpAddress): 解除已封禁的 IP 地址
- [Ban](Ban): 封禁指定玩家
- [BanEx](BanEx): 使用自定义原因封禁玩家
- [Kick](Kick): 踢出指定玩家
- [ClearBanList](ClearBanList): 清空封禁列表
