---
title: OnFilterScriptInit
description: 初始化(加载完成)过滤脚本(filterscript)时，将调用此回调函数。
tags: []
---

## 描述

初始化(加载完成)过滤脚本(filterscript)时，将调用此回调函数。

## 案例

```c
public OnFilterScriptInit()
{
    print("\n--------------------------------------");
    print("已加载过滤脚本。");
    print("--------------------------------------\n");
    return 1;
}
```

## 相关回调
