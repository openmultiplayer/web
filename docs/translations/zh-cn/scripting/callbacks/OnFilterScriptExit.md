---
title: OnFilterScriptExit
description: 这个回调函数在卸载某个过滤脚本时调用。只有将被卸载的那个过滤脚本才会调用。
tags: []
---

## 描述

这个回调函数在卸载某个过滤脚本时调用。只有将被卸载的那个过滤脚本才会调用。

## 案例

```c
public OnFilterScriptExit()
{
    print("\n--------------------------------------");
    print("我的过滤脚本卸载了。");
    print("--------------------------------------\n");
    return 1;
}
```

## 相关回调
