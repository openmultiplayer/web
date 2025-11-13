---
title: 对话框样式
sidebar_label: 对话框样式
---

:::note

- 在[OnDialogResponse](../callbacks/OnDialogResponse)回调中：
  - 按下**button1**会将**response**设为**1**
  - 按下**button2**会将**response**设为**0**
- 所有对话框都可选配按钮 2，留空则不显示（如首个示例）。玩家无法点击隐藏按钮，但按 ESC 键仍会触发[OnDialogResponse](../callbacks/OnDialogResponse)且**response**=**0**
- [ShowPlayerDialog](../functions/ShowPlayerDialog)支持在以下字符串中使用颜色嵌入：​**caption**​（标题）、**info**​（内容）、**button1**和**button2**

:::

- 本文说明[ShowPlayerDialog](../functions/ShowPlayerDialog)和[OnDialogResponse](../callbacks/OnDialogResponse)的行为规范
- 各类限制详见[限制说明](../resources/limits)
- 响应示例均使用以下测试代码：

```c
public OnDialogResponse( playerid, dialogid, response, listitem, inputtext[ ] )
{
    printf("玩家id = %d, 对话框id = YOUR_DIALOGID, 响应 = %d, 列项 = %d, 输入文本 = '%s' (长度: %d)", playerid, response, listitem, inputtext, strlen(inputtext));
    return 1;
}
```

---

## 样式 0: `DIALOG_STYLE_MSGBOX`

![](https://assets.open.mp/assets/images/dialogStyles/Dialog_style_msgbox.png)

显示效果：

:::note

- ​**\t**​ 添加制表符（增加间距）
- ​**\n**​ 创建新行
- [颜色嵌入](colorslist#color-embedding)效果在换行后依然持续

:::

```c
ShowPlayerDialog(playerid, YOUR_DIALOGID, DIALOG_STYLE_MSGBOX, "标题", "信息\n\t信息", "按钮 1", "");
```

### 响应输出

:::note

- ​**listitem**​ 固定为 ​**-1**
- ​**inputtext**​ 始终为空

:::

```c
// 点击按钮
playerid = 0, dialogid = YOUR_DIALOGID, response = 1, listitem = -1, inputtext = '' (size: 0)

// 按ESC键（当按钮2隐藏时）
playerid = 0, dialogid = YOUR_DIALOGID, response = 0, listitem = -1, inputtext = '' (size: 0)
```

---

## 样式 1: `DIALOG_STYLE_INPUT`

![](https://assets.open.mp/assets/images/dialogStyles/Dialog_style_input.png)

显示效果：

:::note

- ​**\t**​ 添加制表符（增加间距）
- ​**\n**​ 创建新行
- [颜色嵌入](colorslist#color-embedding)效果在换行后依然持续

:::

```c
ShowPlayerDialog(playerid, YOUR_DIALOGID, DIALOG_STYLE_INPUT, "标题", "在下面输入信息:", "按钮 1", "按钮 2");
```

### 响应输出

:::note

- ​**listitem**​ 固定为 ​**-1**
- ​**inputtext**​ 包含用户输入的文本（含颜色代码）

:::

```c
// 输入"input"后点击左按钮
playerid = 0, dialogid = YOUR_DIALOGID, response = 1, listitem = -1, inputtext = '输入' (size: 5)

// 输入"input"后点击右按钮
playerid = 0, dialogid = YOUR_DIALOGID, response = 0, listitem = -1, inputtext = '输入' (size: 5)
```

---

## 样式 2: `DIALOG_STYLE_LIST`

![](https://assets.open.mp/assets/images/dialogStyles/Dialog_style_list.png)

显示效果：

:::note

- ​**\t**​ 添加制表符（增加间距）
- ​**\n**​ 创建新行
- [颜色嵌入](colorslist#color-embedding)效果在制表符后依然持续

:::

```c
ShowPlayerDialog(playerid, YOUR_DIALOGID, DIALOG_STYLE_LIST, "Caption", "项 0\n{FFFF00}项 1\n项 2", "按钮 1", "按钮 2");
```

### 响应输出

:::note

- ​**listitem**​ 表示选中项的索引（从 0 开始）
- ​**inputtext**​ 返回选中项的文本内容（不含颜色代码）

:::

```c
// 选择第一项后点击左按钮
playerid = 0, dialogid = YOUR_DIALOGID, response = 1, listitem = 0, inputtext = '项 0' (size: 6)

// 选择第二项后点击右按钮
playerid = 0, dialogid = YOUR_DIALOGID, response = 0, listitem = 1, inputtext = '项 1' (size: 6)
```

---

## 样式 3: `DIALOG_STYLE_PASSWORD`

:::note

- 功能类似 ​**DIALOG_STYLE_INPUT**

:::

![](https://assets.open.mp/assets/images/dialogStyles/Dialog_style_password.png)

显示效果：

:::note

- ​**\t**​ 添加制表符（增加间距）
- ​**\n**​ 创建新行

:::

```c
ShowPlayerDialog(playerid, YOUR_DIALOGID, DIALOG_STYLE_PASSWORD, "标题", "在下面输入私密信息:", "按钮 1", "按钮 2");
```

### 响应输出

:::note

- ​**listitem**​ 固定为 ​**-1**
- ​**inputtext**​ 返回用户输入的明文

:::

```c
// 输入"input"后点击左按钮
playerid = 0, dialogid = YOUR_DIALOGID, response = 1, listitem = -1, inputtext = '输入' (size: 5)

// 输入"input"后点击右按钮
playerid = 0, dialogid = YOUR_DIALOGID, response = 0, listitem = -1, inputtext = '输入' (size: 5)
```

---

## 样式 4: `DIALOG_STYLE_TABLIST`

:::note

- 功能类似 ​**DIALOG_STYLE_LIST**

:::

![](https://assets.open.mp/assets/images/dialogStyles/Dialog_style_tablist.png)

显示效果：

:::note

- ​**\t**​ 创建新列
- ​**\n**​ 创建新行
- [颜色嵌入](colorslist#color-embedding)效果在换行/制表后重置
- 首行内容作为表头显示

:::

```c
ShowPlayerDialog(playerid, YOUR_DIALOGID, DIALOG_STYLE_TABLIST, "标题",
"Deagle\t$5000\t100\n\
{FF0000}Sawnoff\t{33AA33}$5000\t100\n\
Pistol\t$1000\t50",
"按钮 1", "按钮 2");
```

:::note

- ​**listitem**​ 表示选中项的索引（从 0 开始）
- ​**inputtext**​ 返回选中项首列文本（不含颜色代码）

:::

```c
// 选择第一项后点击左按钮
playerid = 0, dialogid = YOUR_DIALOGID, response = 1, listitem = 0, inputtext = 'Deagle' (size: 6)

// 选择第二项后点击右按钮
playerid = 0, dialogid = YOUR_DIALOGID, response = 0, listitem = 1, inputtext = 'Sawnoff' (size: 7)
```

---

## 样式 5: `DIALOG_STYLE_TABLIST_HEADERS`

:::note

- 功能类似 ​**DIALOG_STYLE_LIST**

:::

![](https://assets.open.mp/assets/images/dialogStyles/Dialog_style_tablist_headers.png)

显示效果：

:::note

- ​**\t**​ 创建新列
- ​**\n**​ 创建新行
- [颜色嵌入](colorslist#color-embedding)效果在换行/制表后重置
- 首行内容作为固定表头显示

:::

```c
ShowPlayerDialog(playerid, YOUR_DIALOGID, DIALOG_STYLE_TABLIST_HEADERS, "标题",
"表头 1\t表头 2\t表头 3\n\
项 1 列 1\t项 1 列 2\t项 1 列 3\n\
{FF0000}项 2 列 1\t{33AA33}项 2 列 2\t项 2 列 3",
"按钮 1", "按钮 2");
```

:::note

- ​**listitem**​ 表示选中项的索引（从 0 开始）
- ​**inputtext**​ 返回选中项首列文本（不含颜色代码）

:::

```c
// 选择第一项后点击左按钮
playerid = 0, dialogid = YOUR_DIALOGID, response = 1, listitem = 0, inputtext = '项 1 列 1' (size: 15)

// 选择第二项后点击右按钮
playerid = 0, dialogid = YOUR_DIALOGID, response = 0, listitem = 1, inputtext = '项 2 列 1' (size: 15)
```
