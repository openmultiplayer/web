---
title: NPC_GetFightingStyle
sidebar_label: NPC_GetFightingStyle
description: 获取 NPC 的战斗风格。
tags: ["npc", "战斗风格"]
---

<VersionWarnZH_CN version='omp v1.1.0.changemelater' />

## 描述

获取 NPC 的战斗风格。

| 名称  | 说明      |
| ----- | --------- |
| npcid | NPC 的 ID |

## 返回值

返回 NPC 的战斗风格 ID。

## 示例

```c
public OnGameModeInit()
{
    new npcid = NPC_Create("Fighter");
    NPC_Spawn(npcid);

    NPC_SetFightingStyle(npcid, FIGHT_STYLE_BOXING);

    new style = NPC_GetFightingStyle(npcid);
    printf("NPC %d的战斗风格: %d", npcid, style);

    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkstyle", true))
    {
        new style = NPC_GetFightingStyle(0);

        new styleName[32];
        switch(style)
        {
            case FIGHT_STYLE_NORMAL: styleName = "普通";
            case FIGHT_STYLE_BOXING: styleName = "拳击";
            case FIGHT_STYLE_KUNGFU: styleName = "功夫";
            default: styleName = "未知";
        }

        new msg[64];
        format(msg, sizeof(msg), "NPC 0战斗风格: %s", styleName);
        SendClientMessage(playerid, 0xFFFFFFFF, msg);
        return 1;
    }
    return 0;
}
```

## 注意事项

- 战斗风格影响近战动画和伤害
- 每种风格都有不同的拳击和踢腿动画
- 默认战斗风格为 FIGHT_STYLE_NORMAL
- 战斗风格仅影响徒手格斗

## 相关函数

- [NPC_SetFightingStyle](NPC_SetFightingStyle): 设置 NPC 战斗风格
- [NPC_MeleeAttack](NPC_MeleeAttack): 使 NPC 执行近战攻击
- [NPC_IsMeleeAttacking](NPC_IsMeleeAttacking): 检查 NPC 是否正在攻击

## 相关回调

- [../callbacks/OnNPCGiveDamage](../callbacks/OnNPCGiveDamage): NPC 对他人造成伤害时调用
