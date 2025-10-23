---
title: SendRconCommand
sidebar_label: SendRconCommand
description: 发送RCON（远程控制台）命令
tags: ["管理"]
---

## 描述

发送 RCON（远程控制台）命令

| 参数名           | 说明                       |
| ---------------- | -------------------------- |
| const format[]   | 需要执行的 RCON 命令       |
| OPEN_MP_TAGS:... | 不定数量的任意标签类型参数 |

## 返回值

该函数始终返回 1

## 示例代码

```c
SendRconCommand("gmx");
// 等效于在游戏内输入"/rcon gmx"
// GMX命令将重启游戏模式

// 使用format()的示例
new szMapName[] = "Los Santos";
new szCmd[64];
format(szCmd, sizeof(szCmd), "mapname %s", szMapName);
SendRconCommand(szCmd);

// 专业提示：open.mp中无需使用format
SendRconCommand("game.map %s", szMapName);
```

## 注意事项

:::warning

- 因缺少 playerid 参数，不支持登录操作
- 'password 0'命令将清除服务器已设置的密码
- 该命令会触发[OnRconCommand](../callbacks/OnRconCommand)回调

:::

:::info

参见[config.json](../../server/config.json)配置文件

:::

## 相关函数

- [IsPlayerAdmin](IsPlayerAdmin): 检查玩家是否具有 RCON 权限

## 相关回调

- [OnRconCommand](../callbacks/OnRconCommand): RCON 命令执行时触发
- [OnRconLoginAttempt](../callbacks/OnRconLoginAttempt): RCON 登录尝试时触发
