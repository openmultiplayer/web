---
title: OnDialogResponse
sidebar_label: OnDialogResponse
description: 当玩家响应通过ShowPlayerDialog显示的对话框时触发该回调。响应方式包括点击按钮、按下ENTER/ESC键或双击列表项（列表式对话框）。
tags: ["对话框"]
---

## 描述

当玩家响应通过ShowPlayerDialog显示的对话框时触发该回调。响应方式包括：

- 点击按钮
- 按下ENTER/ESC键
- 双击列表项（针对列表式对话框）

| 参数        | 说明                                                        |
| ----------- | ----------------------------------------------------------- |
| playerid    | 响应对话框的玩家ID                                          |
| dialogid    | 对话框ID（与ShowPlayerDialog中设置的ID对应）                |
| response    | 按钮响应值：1=左按钮，0=右按钮（若仅显示单个按钮则始终为1） |
| listitem    | 玩家选择的列表项ID（从0开始计数），非列表式对话框该值为-1   |
| inputtext[] | 玩家在输入框中输入的文本内容 或 选中的列表项文本            |

## 返回值

该回调在滤镜脚本中总是优先触发。返回1将阻止其他滤镜脚本处理该回调。

## 示例

**消息框样式 (DIALOG_STYLE_MSGBOX)**

```c
// 定义对话框ID
#define DIALOG_RULES 1

// 在某个指令中
ShowPlayerDialog(playerid, DIALOG_RULES, DIALOG_STYLE_MSGBOX, "服务器规则",
"- 禁止作弊\n- 禁止刷屏\n- 尊重管理员\n\n您是否同意遵守这些规则？", "同意", "拒绝");

public OnDialogResponse(playerid, dialogid, response, listitem, inputtext[])
{
    if (dialogid == DIALOG_RULES)
    {
        if (response) // 点击左按钮或按下ENTER
        {
            SendClientMessage(playerid, COLOR_GREEN, "感谢您同意遵守服务器规则！");
        }
        else // 按下ESC或点击右按钮
        {
            Kick(playerid);
        }
        return 1; // 返回1表示已处理该对话框
    }

    return 0; // 返回0表示未处理其他对话框
}
```

**输入框样式 (DIALOG_STYLE_INPUT)**

```c
#define DIALOG_LOGIN 2

// 在某个指令中
ShowPlayerDialog(playerid, DIALOG_LOGIN, DIALOG_STYLE_INPUT, "登录",
"请输入您的密码：", "登录", "取消");

public OnDialogResponse(playerid, dialogid, response, listitem, inputtext[])
{
    if (dialogid == DIALOG_LOGIN)
    {
        if (!response) // 按下ESC或点击右按钮
        {
            Kick(playerid);
        }
        else
        {
            if (CheckPassword(playerid, inputtext))
            {
                SendClientMessage(playerid, COLOR_RED, "登录成功！");
            }
            else
            {
                SendClientMessage(playerid, COLOR_RED, "登录失败");

                // 重新显示登录对话框
                ShowPlayerDialog(playerid, DIALOG_LOGIN, DIALOG_STYLE_INPUT,
                "登录", "请输入您的密码：", "登录", "取消");
            }
        }
        return 1;
    }

    return 0;
}
```

**列表样式 (DIALOG_STYLE_LIST)**

```c
#define DIALOG_WEAPONS 3

// 在某个指令中
ShowPlayerDialog(playerid, DIALOG_WEAPONS, DIALOG_STYLE_LIST, "武器库",
"沙漠之鹰\nAK-47\n战斗霰弹枪", "选择", "关闭");

public OnDialogResponse(playerid, dialogid, response, listitem, inputtext[])
{
    if (dialogid == DIALOG_WEAPONS)
    {
        if (response) // 点击选择按钮或双击列表项
        {
            switch (listitem)
            {
                case 0: GivePlayerWeapon(playerid, WEAPON_DEAGLE, 14);   // 沙漠之鹰
                case 1: GivePlayerWeapon(playerid, WEAPON_AK47, 120);    // AK-47
                case 2: GivePlayerWeapon(playerid, WEAPON_SHOTGSPA, 28); // 战斗霰弹枪
            }
        }
        return 1;
    }

    return 0;
}
```

**表格列表样式 (DIALOG_STYLE_TABLIST)**

```c
#define DIALOG_WEAPONS 3

// 在某个指令中
ShowPlayerDialog(playerid, DIALOG_WEAPONS, DIALOG_STYLE_TABLIST, "武器商店",
"武器\t弹药\t价格\n\
M4\t120\t500\n\
MP5\t90\t350\n\
AK-47\t120\t400",
"购买", "关闭");

public OnDialogResponse(playerid, dialogid, response, listitem, inputtext[])
{
    if (dialogid == DIALOG_WEAPONS)
    {
        if (response) // 点击购买或双击武器
        {
            switch (listitem)
            {
                case 0: GivePlayerWeapon(playerid, WEAPON_M4, 120);    // M4
                case 1: GivePlayerWeapon(playerid, WEAPON_MP5, 90);    // MP5
                case 2: GivePlayerWeapon(playerid, WEAPON_AK47, 120);  // AK-47
            }
        }
        return 1;
    }

    return 0;
}
```

## 注意

:::tip

参数值会根据对话框样式不同而变化（[点击查看详细示例](../resources/dialogstyles)）

:::

:::tip

使用switch-case语句处理多个对话框比if语句更高效

:::

:::warning

服务器重启后玩家的对话框不会自动关闭。若玩家在服务器重启后响应对话框，服务端会提示警告："Warning: PlayerDialogResponse PlayerId: 0 dialog ID doesn't match last sent dialog ID"

:::

## 相关函数

以下函数可能与当前回调相关：

- [ShowPlayerDialog](../functions/ShowPlayerDialog)：向玩家显示对话框
- [GetPlayerDialogID](../functions/GetPlayerDialogID)：获取玩家当前对话框ID
- [GetPlayerDialogData](../functions/GetPlayerDialogData)：获取玩家当前对话框数据
- [HidePlayerDialog](../functions/HidePlayerDialog)：隐藏玩家当前对话框
