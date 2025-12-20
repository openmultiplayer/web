---
title: strins
sidebar_label: strins
description: 将字符串插入到另一个字符串中
tags: ["字符串"]
---

<LowercaseNoteZH_CN />

## 描述

此函数用于将一个字符串插入到另一个字符串的指定位置。

| 参数                        | 说明                                 |
| --------------------------- | ------------------------------------ |
| string[]                    | 目标字符串（将被插入新内容的字符串） |
| const substr[]              | 待插入的子字符串                     |
| pos                         | 插入起始位置（基于 0 的索引）        |
| maxlength = sizeof (string) | 目标字符串的最大容量                 |

## 返回值

此函数不返回特定值。

## 示例代码

```c
// 在玩家名称前添加[AFK]标签
new playerName[MAX_PLAYER_NAME];
GetPlayerName(playerid, playerName, MAX_PLAYER_NAME);
if (strlen(playerName) <= 18)
{
    strins(playerName, "[AFK]", 0);
}
SetPlayerName(playerid, playerName);

// 注意：名称长度20+的玩家无法添加标签，添加后总长度25会超过24字符限制
```

## 相关函数

- [strcmp](strcmp): 比较两个字符串是否相同
- [strfind](strfind): 在字符串中搜索子串
- [strdel](strdel): 删除字符串片段
- [strlen](strlen): 获取字符串长度
- [strmid](strmid): 提取字符串片段
- [strpack](strpack): 压缩字符串到目标地址
- [strval](strval): 将字符串转换为整数值
- [strcat](strcat): 拼接两个字符串到目标地址
