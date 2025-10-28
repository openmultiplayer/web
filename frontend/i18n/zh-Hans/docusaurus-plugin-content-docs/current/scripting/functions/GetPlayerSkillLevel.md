---
title: GetPlayerSkillLevel
sidebar_label: GetPlayerSkillLevel
description: 获取玩家特定武器类型的技能等级
tags: ["玩家"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

获取玩家指定武器类型的技能等级

| 参数              | 说明                                              |
| ----------------- | ------------------------------------------------- |
| playerid          | 玩家 ID                                           |
| WEAPONSKILL:skill | 要查询的[武器技能类型](../resources/weaponskills) |

## 返回值

**0** - 执行失败（无效的武器技能类型）

其他情况返回该武器类型的技能等级

## 示例代码

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/skill", true))
    {
        new string[64];

        new skill = GetPlayerSkillLevel(playerid, WEAPONSKILL_PISTOL);

        format(string, sizeof(string), "你的手枪技能等级为 %d", skill);
        SendClientMessage(playerid, 0xFFFF00FF, string);
        return 1;
    }
    return 0;
}
```

## 注意事项

:::warning

skill 参数是武器技能类型，不是武器 ID。点击[此处](../resources/weaponskills)查看技能类型列表

:::

## 相关函数

- [SetPlayerSkillLevel](SetPlayerSkillLevel): 设置玩家的武器技能等级

## 扩展阅读

- [武器技能类型](../resources/weaponskills): 用于设置玩家技能等级的武器类型列表
