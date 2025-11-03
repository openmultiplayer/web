---
title: GetAvailableClasses
sidebar_label: GetAvailableClasses
description: 获取已定义的职业数量。
tags: ["职业"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

获取服务器中已定义的玩家职业数量。

## 示例代码

```c
printf("可用职业数量: %d", GetAvailableClasses());  // 输出已定义职业总数
```

## 相关函数

- [AddPlayerClass](AddPlayerClass): 添加基础玩家职业
- [AddPlayerClassEx](AddPlayerClassEx): 添加带默认队伍的玩家职业
- [EditPlayerClass](EditPlayerClass): 编辑职业配置数据
