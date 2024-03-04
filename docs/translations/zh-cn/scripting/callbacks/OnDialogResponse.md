---
title: OnDialogResponse
description: 当玩家通过单击按钮、按Enter/Esc键或双击列表项(如果使用列表样式对话框)来响应使用ShowPlayerDialog显示的对话框时，将调用此回调。
tags: []
---

## 说明

当玩家通过单击按钮、按 Enter/Esc 键或双击列表项(如果使用列表样式对话框)来响应使用 ShowPlayerDialog 显示的对话框时，将调用此回调。

| 参数名      | 说明                                                                     |
| ----------- | ------------------------------------------------------------------------ |
| playerid    | 响应对话框的玩家 ID。                                                    |
| dialogid    | 玩家响应的对话框的 ID，在 ShowPlayerDialog 中分配。                      |
| response    | 左按钮为 1，右按钮为 0(如果只显示一个按钮，则始终为 1)                   |
| listitem    | 玩家选择的列表项的 ID(从 0 开始)(仅当使用列表样式对话框时，否则将为-1)。 |
| inputtext[] | 玩家在输入框中输入的文本或选定的列表项文本。                             |

## 返回值

它在过滤脚本中总是先被调用，因此在那里返回 1 会阻止其他过滤脚本看到它。

## 案例

```c
// 定义对话ID，以便我们可以处理响应
#define DIALOG_RULES 1

// 在某些命令中
ShowPlayerDialog(playerid, DIALOG_RULES, DIALOG_STYLE_MSGBOX, "服务器规则", "- 不能作弊\n- 禁止发送垃圾邮件\n- 尊敬的管理员\n\n你同意这些规则吗?", "是", "否");

public OnDialogResponse(playerid, dialogid, response, listitem, inputtext[])
{
    if (dialogid == DIALOG_RULES)
    {
        if (response) //如果他们点击‘是’或按Enter键
        {
            SendClientMessage(playerid, COLOR_GREEN, "感谢你同意服务器规则！");
        }
        else //按Esc或点击Cancel
        {
            Kick(playerid);
        }
        return 1; // 我们处理了一个对话框，因此返回 1。就像OnPlayerCommandText一样。
    }

    return 0; // 此处必须返回0！就像OnPlayerCommandText一样。
}

#define DIALOG_LOGIN 2

// 在某些命令中
ShowPlayerDialog(playerid, DIALOG_LOGIN, DIALOG_STYLE_INPUT, "登录", "请输入你的密码：", "登录", "取消");

public OnDialogResponse(playerid, dialogid, response, listitem, inputtext[])
{
    if (dialogid == DIALOG_LOGIN)
    {
        if (!response) //如果他们点击‘Cancel’或按Esc
        {
            Kick(playerid);
        }
        else //按Enter或点击‘Login’按钮
        {
            if (CheckPassword(playerid, inputtext))
            {
                SendClientMessage(playerid, COLOR_RED, "你现在已登录！");
            }
            else
            {
                SendClientMessage(playerid, COLOR_RED, "登录失败。");

                // 重新显示登录对话框
                ShowPlayerDialog(playerid, DIALOG_LOGIN, DIALOG_STYLE_INPUT, "登录", "请输入你的密码：", "登录", "取消");
            }
        }
        return 1; // 我们处理了一个对话框，因此返回 1。就像OnPlayerCommandText一样。
    }

    return 0; // 此处必须返回0！就像OnPlayerCommandText一样。
}

#define DIALOG_WEAPONS 3

// 在某些命令中
ShowPlayerDialog(playerid, DIALOG_WEAPONS, DIALOG_STYLE_LIST, "武器", "沙漠之鹰\nAK-47\n战斗猎枪", "选择", "关闭");

public OnDialogResponse(playerid, dialogid, response, listitem, inputtext[])
{
    if (dialogid == DIALOG_WEAPONS)
    {
        if (response) // 如果他们点击了‘选择’或双击了一个武器
        {
            // 把武器给他们
            switch(listitem)
            {
                case 0: GivePlayerWeapon(playerid, WEAPON_DEAGLE, 14); // 给他们一把沙漠之鹰
                case 1: GivePlayerWeapon(playerid, WEAPON_AK47, 120); // 给他们一把AK-47
                case 2: GivePlayerWeapon(playerid, WEAPON_SHOTGSPA, 28); // 给他们一把战斗猎枪
            }
        }
        return 1; // 我们处理了一个对话框，因此返回 1。就像OnPlayerCommandText一样。
    }

    return 0; // 此处必须返回0！就像OnPlayerCommandText一样。
}

#define DIALOG_WEAPONS 3

// 在某些命令中
ShowPlayerDialog(playerid, DIALOG_WEAPONS, DIALOG_STYLE_LIST, "武器列表",
"名称\t子弹\t价格\n\
M4\t120\t500\n\
MP5\t90\t350\n\
AK-47\t120\t400",
"选择", "关闭");

public OnDialogResponse(playerid, dialogid, response, listitem, inputtext[])
{
    if (dialogid == DIALOG_WEAPONS)
    {
        if (response) //如果他们点击了‘选择’或双击了一个武器
        {
            // 把武器给他们
            switch(listitem)
            {
                case 0: GivePlayerWeapon(playerid, WEAPON_M4, 120); // 给他们一把M4
                case 1: GivePlayerWeapon(playerid, WEAPON_MP5, 90); // 给他们一把MP5
                case 2: GivePlayerWeapon(playerid, WEAPON_AK47, 120); // 给他们一把AK-47
            }
        }
        return 1; // 我们处理了一个对话框，因此返回 1。就像OnPlayerCommandText一样。
    }

    return 0; // 你必须在此处返回0！就像OnPlayerCommandText一样。
}
```

## 要点

:::tip

根据对话框的样式，参数可以包含不同的值 ([点击查看更多示例](../resources/dialogstyles)).

:::

:::tip

如果你有多个对话框，则最好使用不同的对话框 ID。

:::

:::warning

当游戏模式重启时，玩家的对话框不会隐藏。
如果玩家在重启后响应此对话框，则会导致服务器打印“警告：玩家对话框响应 玩家 ID：0 对话框 ID 与上次发送的对话框 ID 不匹配”。

:::

## 相关函数

- [ShowPlayerDialog](../functions/ShowPlayerDialog): 向玩家展示一个对话框。
