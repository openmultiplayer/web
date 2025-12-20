---
title: ToggleChatTextReplacement
sidebar_label: ToggleChatTextReplacement
description: 切换聊天输入过滤器的开关状态。
tags: []
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

切换聊天输入过滤器的开关状态。

禁用后可允许在聊天中使用%等特殊字符。

| 参数        | 说明                                |
| ----------- | ----------------------------------- |
| bool:enable | 'true'启用过滤器，'false'禁用过滤器 |

## 返回值

此函数不返回特定值。

## 示例

```c
public OnGameModeInit()
{
    ToggleChatTextReplacement(false); // 切换聊天输入过滤器
    return 1;
}
```

## 注意事项

:::tip

可通过 config.json 配置文件设置初始状态：

```json
"chat_input_filter": true,
```

:::

## 相关函数

- [ChatTextReplacementToggled](ChatTextReplacementToggled): 检测聊天输入过滤器是否启用
