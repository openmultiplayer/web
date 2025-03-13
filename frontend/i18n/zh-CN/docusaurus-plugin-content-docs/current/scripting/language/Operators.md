---
title: "关键字：操作符"
sidebar_label: "关键字：操作符"
---

## `char`

`char` 返回存储指定数量字符（打包字符串）所需的内存单元数。即存储给定字节数所需的 4 字节内存单元数量。例如：

```c
4 char
```

返回 1。

```c
3 char
```

返回 1（无法存在 3/4 个变量单元）。

```c
256 char
```

返回 64（256 除以 4）。

通常用于变量声明：

```c
new
    someVar[40 char];
```

将创建包含 10 个单元的数组（40 / 4 = 10）。

关于打包字符串的详细信息请参阅 pawn-lang.pdf。

## `defined`

检查符号是否已定义，主要用于预处理指令 `#if`：

```c
new
    someVar = 5;
#if defined someVar
    printf("%d", someVar);
#else
    #error 变量 'someVar' 未定义
#endif
```

常见用途是根据宏定义生成不同代码：

```c
#define FILTERSCRIPT

#if defined FILTERSCRIPT

public OnFilterScriptInit()
{
    return 1;
}

#else

public OnGameModeInit()
{
    return 1;
}

#endif
```

## `sizeof`

返回数组的 元素数量：

```c
new
    someVar[10];
printf("%d", sizeof (someVar));
```

输出：

```c
10
```

多维数组示例：

```c
new
    someVar[2][10];
printf("%d %d", sizeof (someVar), sizeof (someVar[]));
```

输出：

```c
2 10
```

## `state`

该关键字与 PAWN 自动机系统相关，本文不做详细说明。

## `tagof`

返回表示变量标签的数值：

```c
new
    someVar,
    Float:someFloat;
printf("%d %d", tagof (someVar), tagof (someFloat));
```

输出可能显示为乱码：

```c
-./,),(-*,( -1073741820
```

实际对应十六进制值：

```c
0x80000000 0xC0000004
```

检查变量是否为浮点类型（带 `Float:` 标签）：

```c
new Float: fValue = 6.9;

new tag = tagof (fValue);

if (tag == tagof (Float:))
{
    print("浮点类型");
}
else
{
    print("非浮点类型");
}
```
