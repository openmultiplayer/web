---
title: SHA256_PassHash
sidebar_label: SHA256_PassHash
description: 使用SHA-256算法对密码进行哈希处理。
tags: ["加密"]
---

<VersionWarnZH_CN version='SA-MP 0.3.7 R1' />

:::warning

此函数在 open.mp 中已弃用，建议使用[samp-bcrypt](https://github.com/Sreyas-Sreelal/samp-bcrypt)插件进行哈希计算

:::

## 描述

使用 SHA-256 哈希算法对密码进行哈希处理（含盐值）。输出固定为 256 位（即 64 个 Pawn 单元长度）。

| 参数                   | 说明                         |
| ---------------------- | ---------------------------- |
| const password[]       | 待哈希的原始密码字符串       |
| const salt[]           | 用于哈希计算的盐值           |
| output[]               | 输出的大写十六进制哈希字符串 |
| size = sizeof (output) | 输出缓冲区的最大容量         |

## 返回值

生成的哈希值将存储在指定的输出数组中。

## 示例代码

```c
public OnGameModeInit()
{
    new MyHash[64 + 1]; // +1用于空终止符
    SHA256_PassHash("test", "78sdjs86d2h", MyHash, sizeof MyHash);
    printf("生成哈希: %s", MyHash); // 输出: CD16A1C8BF5792B48142FF6B67C9CB5B1BDC7260D8D11AFBA6BCDE0933A3C0AF
    return 1;
}
```

## 注意事项

:::tip

生成的哈希值可能存在前导零填充（例如可能以 00ABCD123...开头）

:::

:::tip

盐值会附加在密码末尾（如密码'foo'和盐'bar'会组合成'foobar'）

- 盐值应为每个玩家生成随机唯一值
- 盐值长度建议与哈希值相当
- 需将盐值与哈希值同时存储于玩家账户数据

:::

:::warning

此函数不支持二进制安全操作，在密码或盐值中使用二进制数据可能导致意外结果

:::
