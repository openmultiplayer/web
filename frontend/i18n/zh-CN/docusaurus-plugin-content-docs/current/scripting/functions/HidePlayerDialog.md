---
title: HidePlayerDialog
sidebar_label: HidePlayerDialog
description: 隐藏玩家当前可见的任何对话框
tags: ["玩家", "对话框"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

隐藏玩家当前可见的任何对话框。

| 参数     | 说明                        |
| -------- | --------------------------- |
| playerid | 需要隐藏当前对话框的玩家 ID |

## 返回值

**true** - 函数执行成功

**false** - 函数执行失败（玩家未连接或未查看对话框）

## 示例

```c
public OnPlayerConnect(playerid)
{
    if (IsAccountRegistered(playerid)) // （假设函数，用于检查玩家昵称是否已注册）
    {
        ShowPlayerDialog(playerid, DIALOG_LOGIN, DIALOG_STYLE_PASSWORD, "登录", "请输入密码", "登录", ""); // 向玩家显示登录对话框

        new ipAddress[16];
        GetPlayerIp(playerid, ipAddress, sizeof(ipAddress)); // 获取玩家IP地址

        if (IsBanned(ipAddress)) // 检查IP是否被封禁
        {
            SendClientMessage(playerid, 0xFF0000FF, "你已被封禁！");
            HidePlayerDialog(playerid); // 隐藏登录对话框
        }
    }
}
```

## 相关函数

- [ShowPlayerDialog](ShowPlayerDialog): 向玩家显示同步对话框（同一时间只能显示一个）
- [GetPlayerDialogData](GetPlayerDialogData): 获取玩家当前对话框的数据
- [GetPlayerDialogID](GetPlayerDialogID): 获取玩家当前对话框的 ID
