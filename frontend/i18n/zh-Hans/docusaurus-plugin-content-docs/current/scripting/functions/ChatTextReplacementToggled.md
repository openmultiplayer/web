---
title: ChatTextReplacementToggled
sidebar_label: ChatTextReplacementToggled
description: 检查聊天输入过滤功能是否启用
tags: []
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

检测当前聊天文本过滤功能是否处于激活状态

## 返回值

true: 过滤功能已启用

false: 过滤功能已禁用

## 示例代码

```c
printf("聊天输入过滤器状态：%s", ChatTextReplacementToggled() ? "启用" : "禁用");
```

## 相关函数

- [ToggleChatTextReplacement](ToggleChatTextReplacement): 切换聊天文本过滤功能开关
