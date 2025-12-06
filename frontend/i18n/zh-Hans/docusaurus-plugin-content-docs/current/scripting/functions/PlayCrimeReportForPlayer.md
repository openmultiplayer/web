---
title: PlayCrimeReportForPlayer
sidebar_label: PlayCrimeReportForPlayer
description: 为玩家播放犯罪报告（模拟单机模式警用通报）
tags: ["玩家"]
---

## 描述

该函数用于为玩家播放犯罪报告，效果类似于《侠盗猎车手》单机模式中 CJ 犯罪时的警用通报

| 参数      | 说明                                                                                              |
| --------- | ------------------------------------------------------------------------------------------------- |
| playerid  | 接收犯罪报告的玩家 ID                                                                             |
| suspectid | 被通缉的嫌疑玩家 ID                                                                               |
| crime     | [犯罪类型 ID](../resources/crimelist)，将转换为 10-code 警用代码（例如传入 16 将播放"10-16"代码） |

## 返回值

**true** - 函数执行成功

**false** - 执行失败（指定玩家不存在）

## 示例

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/suspect"))
    {
        // 为玩家播放ID 0玩家的16号犯罪报告
        PlayCrimeReportForPlayer(playerid, 0, 16);
        SendClientMessage(playerid, 0xFFFFFFFF, "玩家ID 0触发了16号犯罪类型（代码10-16）");
        return 1;
    }
    return 0;
}
```

## 相关函数

- [PlayerPlaySound](PlayerPlaySound): 为玩家播放音效

## 相关资源

- [犯罪类型 ID 对照表](../resources/crimelist)
