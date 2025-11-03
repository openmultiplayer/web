---
title: 脚本基础
sidebar_label: 脚本基础
description: 一份简短教程，引导您了解Pawn语言及SA-MP/open.mp API的基础知识。
---

以下是一个可实现的最基础脚本示例：

```c
#include <a_samp>

main()
{
    print("Hello World!");
    return 1;
}
```

我们将逐一解析各个组成部分，首先从第一行开始。

---

## 头文件包含

```c
#include <a_samp>
```

该指令将 pawno/includes/a_samp.inc 文件内容载入脚本，使其所有功能可用。该文件本身包含：

```c
#include <core>
#include <float>
#include <string>
#include <file>
#include <time>
#include <datagram>
#include <a_players>
#include <a_vehicles>
#include <a_objects>
#include <a_sampdb>
```

通过这一行包含指令，您即可使用 SA:MP 中所有功能函数（后续将详述函数概念）。

---

## 函数调用

后续代码包含两个函数调用：main()是您编写的主函数，print(string[])是系统预定义的输出函数。当前脚本会在服务器控制台输出"Hello World!"（遵循编程语言传统）后结束。代码段：

```c
return 1;
```

将值 1 返回给调用者以指示执行状态（此处返回值不影响逻辑，但在其他场景中可能有意义）。此时您已创建了首个基础脚本。使用 pawno 的"文件->新建"命令将生成更完整的模板，包含所有回调函数（详见下文）及 main 函数（虽非严格意义上的回调但行为类似）。

---

## 语句结构

print 和 return 语句末尾的';'表示语句结束（语句由一组函数调用和运算符构成，类似自然语言中的句子）。通常建议每行单独书写语句以提升可读性，但以下形式同样有效：

```c
main() { print("Hello World!"); return 1; }
```

{}符号（花括号）用于界定语句组（类似自然语言中的段落）。若写作：

```c
main() print("Hello World!"); return 1;
```

将引发错误，因为"return 1;"未被包含在 main 函数作用域内。花括号将多个语句合并为复合语句，而函数体必须由单个语句构成。通过逗号运算符可扩展复合语句：

```c
main() print("Hello World!"), return 1;
```

但此类写法不符合最佳编码实践。

---

# 函数详解

函数是可重复调用的代码单元，能够接收参数并返回执行结果。

---

## 函数调用

```c
print("Hello World!");
```

如[入门章节](#starting-out)所述，该语句调用 a_samp.inc 中定义的 print 函数（故需包含该头文件），在服务器控制台输出指定内容。

函数由名称（如 print）和参数列表（置于()内）组成。参数机制避免了海量相似函数的产生：

```c
printa();
printaa();
printab();
printac();
// 等...
```

函数参数数量可从 0 至 128+不等，例如：

```c
printf("Hello World!", 1, 2, 3, 4, 5, 6);
```

该示例函数包含 7 个参数，暂不深究其具体功能。

---

## 自定义函数

除调用现有函数外，您可创建自定义函数：

```c
#include <a_samp>

main()
{
    return MyFunction();
}

MyFunction()
{
    print("Hello World!");
    return 1;
}
```

此实现与原始脚本功能相同但结构不同。当游戏模式启动时自动调用 main()，后者调用自定义的 MyFunction()。该函数输出信息后返回 1 至 main()，最终传回服务器。等效的简洁写法：

```c
#include <a_samp>

main() return MyFunction();

MyFunction()
{
    print("Hello World!");
    return 1;
}
```

但通常建议保持代码可读性。亦可直接调用函数：

```c
#include <a_samp>

main()
{
    MyFunction();
    return 1;
}

MyFunction()
{
    print("Hello World!");
    return 1;
}
```

---

## 参数传递

参数是特殊的[变量](#variables)类型，由调用方传递给函数：

```c
#include <a_samp>

main()
{
    return MyFunction("Hello World!");
}

MyFunction(string[])
{
    print(string);
    return 1;
}
```

本实现通过参数动态指定输出内容。调用时传递字符串至 string 数组参数（[]表示数组类型，详见[数组章节](#arrays)），print 函数输出该变量值（变量名不再使用引号包裹）。

# 变量

变量本质上是一段内存空间，用于存储数据，可根据需求进行修改和读取。变量由一个或多个单元(cell)组成，每个单元为 32 位(4 字节)，默认带符号可存储范围从-2147483648 到 2147483647（尽管在 PAWN 中-2147483648 的定义不够完善，显示时会产生异常结果）。由多个单元组成的变量称为数组，字符串是一种特殊类型的数组，每个单元存储一个字符（在压缩字符串中可存储 4 个字符，但本文不涉及该内容）。

---

## 声明

创建新变量需进行声明：

```c
new
    myVariable;
```

这段代码将创建一个名为 myVariable 的变量，其初始值为 0。

---

## 赋值

```c
new
    myVariable = 7;
```

此声明同时将变量初始值设为 7，此时打印该变量将显示 7。要显示非字符串变量，需使用之前提到的 printf()函数：

```c
new
    myVariable = 7;
printf("%d", myVariable);
```

当前阶段只需了解该代码会将 myVariable 的值（此时为 7）输出至服务器控制台。

```c
new
    myVariable = 7;
printf("%d", myVariable);
myVariable = 8;
printf("%d", myVariable);
```

此代码将先输出 7，然后将变量值修改为 8 并再次输出。以下是变量操作的常见方式（更多内容详见其他文档）：

```c
myVariable = myVariable + 4;
```

将 myVariable 的值增加 4，等效于：

```c
myVariable += 4;
```

该语法表示"将 myVariable 增加 4"。

```c
myVariable -= 4;
```

将值减少 4。

```c
myVariable *= 4;
```

将值乘以 4。

```c
myVariable /= 4;
```

将值除以 4。

---

## 数组

### 声明

---

数组是能同时存储多个数据的变量，支持动态访问。数组在编译时需确定固定长度，因此必须预先知道存储需求。典型示例是常见的 MAX_PLAYERS 数组，其为每个潜在连接玩家预留独立存储空间，确保不同玩家数据互不干扰（关于宏定义后续详述）。

```c
new
    myArray[5];
```

该代码声明长度为 5 的数组，可存储 5 个常规数据。但以下写法不可行：

```c
new
    myVariable = 5,
    myArray[myVariable];
```

虽然看似创建基于变量值的动态数组，但在 PAWN 中变量内存于编译时分配，数组长度必须固定。

---

### 访问

数组赋值需指定存储位置，该位置可通过变量动态指定：

```c
new
    myArray[5];
myArray[2] = 7;
```

此代码声明 5 单元数组，并将第三个单元赋值为 7（因索引从 0 开始），数组实际值为：

```
0, 0, 7, 0, 0
```

您可能会疑惑：为何不是：

```
0, 7, 0, 0, 0
```

这是因为索引计数实际上是从 0 开始，而非 1。以如下序列为例：

```
2, 4, 6, 8
```

当遍历该列表时，在数字 2 之后，您已经历了第一个元素（即 2 本身）。这意味着当您到达数字 4 时，实际上已经处于索引位置 1（而非 1 的位置对应数字 2）。因此：

- 数字 2 位于索引 0
- 数字 4 位于索引 1
- 数字 6 位于索引 2（即前文示例中数字 7 所处位置）

若给第一个示例中的数组单元标注索引，将得到：

```
0 1 2 3 4
0 0 7 0 0
```

特别注意：不存在索引 5 的单元，以下操作可能导致服务器崩溃：

```c
new
    myArray[5];
myArray[5] = 7;
```

数组索引可以是数字、变量或返回值函数：

```c
new
    myArray[5],
    myIndex = 2;
myArray[myIndex] = 7;
```

数组元素可像普通变量般操作：

```c
myArray[2] = myArray[2] + 1;
myArray[2] += 1;
myArray[2]++;
```

---

### 示例

如前所述，MAX_PLAYERS 数组是常见的数组类型。MAX_PLAYERS 并非变量，而是一个宏定义（后续详述），现阶段可将其视为表示服务器最大玩家容量的常量（默认 500，即使您在 server.cfg 文件中修改该数值）。以下代码使用普通变量存储 4 个玩家的数据，并通过函数处理这些玩家数据（为简化示例，假设此时 MAX_PLAYERS 为 4）：

```c
new
    gPlayer0,
    gPlayer1,
    gPlayer2,
    gPlayer3;

SetPlayerValue(playerid, value)
{
    switch(playerid)
    {
        case 0: gPlayer0 = value; // 等同于 if (playerid == 0)
        case 1: gPlayer1 = value; // 等同于 if (playerid == 1)
        case 2: gPlayer2 = value; // 等同于 if (playerid == 2)
        case 3: gPlayer3 = value; // 等同于 if (playerid == 3)
    }
}
```

（更多控制结构信息请参考相关章节，虽然此处可使用 switch 语句实现，但为示例清晰仍采用此形式，两者代码效率基本一致）

以下是与数组方案的对比。通过为每个玩家分配独立数组单元（注意数组索引可为任意有效值）：

```c
new
    gPlayers[MAX_PLAYERS];

SetPlayerValue(playerid, value)
{
    gPlayers[playerid] = value;
}
```

该方案将创建一个全局数组（作用域概念见相关章节），为每个玩家预分配存储单元。函数直接将"value"参数值赋给对应玩家的数组单元。前例在仅支持 4 玩家时已显冗长（每个玩家需 4 行代码），扩展到 500 玩家将需要 2000 行代码（虽可优化但仍繁琐）；后者无论玩家数量多少，始终只需单行代码实现。

---

## 字符串

### 基础用法

---

字符串是一种特殊类型的数组，用于存储多个字符以构成单词、句子或其他可读文本。单个字符占 1 字节（尽管存在多字节的扩展字符集，但在 SA:MP 中未明确定义），默认情况下每个字符占用 1 个单元（1 个常规变量或 1 个数组单元）。字符采用[ASCII](https://www.asciitable.com)编码系统表示，例如字符"A"对应数字 65。若直接显示数字将得到 65，若显示字符则呈现大写字母 A。由于单个字符占 1 个单元，多个字符组成的文本自然需要多个单元构成的数组。

PAWN 中的字符串采用"NULL 终止"机制，即遇到数值 0 时标志字符串结束（注意：字符"0"对应数值 48，而 NULL 字符对应数值 0）。这意味着在 20 单元的字符串数组中，若第 4 个单元为 NULL 字符，则实际有效字符串长度为 3 字符。但最大有效长度总为数组长度减一，因必须保留 NULL 终止符。

```c
new
    myString[16] = "Hello World!";
```

该代码声明了可容纳 15 字符的字符串数组，并初始化为"Hello World!"。双引号包裹表示字符串字面量。内部数组结构如下：

```
104 101 108 108 111 0 x x x x x x x x x x
```

"x"表示任意值（本例中均为 0），因 NULL 字符后的内容不影响字符串解析。

字符串可像普通数组操作：

```c
new
    myString[16] = "Hello World!";
myString[1] = 97;
```

此代码将索引 1 的字符改为 97 对应的小写"a"，字符串变为"hallo"。更易读的写法：

```c
new
    myString[16] = "Hello World!";
myString[1] = 'a';
```

单引号表示字符类型，无需 NULL 终止符。字符与对应数值可互换使用：

```c
new
    myString[16] = "Hello World!";
myString[1] = '\0';
```

'\\0'中的反斜杠为转义符，表示 NULL 字符，等效于：

```c
new
    myString[16] = "Hello World!";
myString[1] = 0;
```

但不同于：

```c
new
    myString[16] = "Hello World!";
myString[1] = '0';
```

前两种写法使字符串变为"h"，第三种则变为"h0llo"。

---

### 转义字符

正如简要提到的那样，反斜线是一个特殊的字符，如果这样：

```
'\'
```

或：

```
"\"
```

将导致编译错误，因为反斜杠会转义后续字符，导致字符串未正确闭合。该特性可用于生成特殊字符，例如：

```c
new
    myString[4] = "\"";
```

此代码创建仅含单个双引号的字符串。通常双引号会终止字符串定义，但通过转义符可使紧随其后的双引号成为字符串内容，而末尾的双引号则作为字符串终止符。其他特殊转义序列包括：

| Code   | 名称       | 用途                                          |
| ------ | ---------- | --------------------------------------------- |
| \0     | NULL 字符  | 终止字符串                                    |
| EOS    | NULL 字符  | (同上)                                        |
| \n     | 换行符     | Linux 系统换行（Windows 同样支持）            |
| \r     | 回车符     | Windows 系统换行需使用\r\n                    |
| \\\\   | 反斜杠     | 在字符串中插入实际反斜杠                      |
| \'     | 单引号     | 在单引号字符中插入实际单引号（例：'\''）      |
| \"     | 双引号     | 在字符串中插入实际双引号                      |
| \xNNN; | 十六进制数 | 使用十六进制数值指定字符（例：\x41; 表示'A'） |
| \NNN;  | 十进制数   | 使用十进制数值指定字符（例：\65; 表示'A'）    |

用于将字符设置为由指定数字（替换 NNN）所代表的字符（参见\\0 的用法）

虽然还存在其他转义序列，但以上列出的为主要使用类型。

---

## 标签

标签是变量的附加元信息，用于定义变量的使用场景和功能特性。标签可分为强标签（首字母大写）和弱标签。例如：

```c
new
    Float:a = 6.0;
```

"Float" 部分即为标签，声明该变量为浮点类型（非整数/实数），并限定其使用范围。

```c
native SetGravity(Float:gravity);
```

此声明表示 SetGravity 函数要求传入浮点型参数，例如：

```c
SetGravity(6.0);
new
   Float:fGrav = 5.0;
SetGravity(fGrav);
```

上述代码将重力分别设置为 6.0 和 5.0。若使用错误标签会导致类型不匹配错误：

```c
SetGravity(MyTag:7);
```

此代码尝试用"MyTag"标签的数值 7 设置重力，但该标签与"Float"不兼容。注意标签系统区分大小写。

用户可自定义标签：

```c
new myTag: variable = 0,

    AppleTag: another = 1;
```

此定义完全合法，但直接操作带标签变量时需使用'\_:'去除标签，否则编译器会报类型不匹配警告。

---

## 作用域

变量作用域决定其可见范围，主要分为四类：局部变量、静态局部变量、全局变量和静态全局变量。所有变量必须在声明后使用，因此：

```c
new
    var = 4;
printf("%d", var);
```

为正确用法，而：

```c
printf("%d", var);
new
    var = 4;
```

将导致编译错误。

---

### 局部变量

在函数或代码块内部声明的变量：

```c
MyFunc()
{
    new
        var1 = 4;
    printf("%d", var1);
    {
        // var1 在此子作用域仍可见
        new
            var2 = 8;
        printf("%d %d", var1, var2);
    }
    // var2 在此父作用域不可见
}
// var1 在函数外不可见
```

局部变量每次初始化时重置：

```c
for (new i = 0; i < 3; i++)
{
    new
        j = 1;
    printf("%d", j);
    j++;
}
```

输出结果：

```
1
1
1
```

因 j 在每次循环中创建、打印、自增后销毁。

---

### 静态局部变量

使用 static 关键字声明，保持生命周期持续性：

```c
MyFunc()
{
    static
        var1 = 4;
    printf("%d", var1);
    {
       // var1 在此仍可见（作用域向上继承）
        static
            var2 = 8;
        printf("%d %d", var1, var2);
    }
    // var2 在此不可访问（超出其作用域）
}
// var1 在函数外不可访问（超出其作用域）
```

表面行为与局部变量相同，但下列情况：

```c
for (new i = 0; i < 3; i++)
{
    static
        j = 1;
    printf("%d", j);
    j++;
}
```

输出结果：

```
1
2
3
```

因 j 作为静态变量保留上次的值。

---

### 全局变量

在函数外声明，全程序可见：

```c
new
    gMyVar = 4;

MyFunc()
{
    printf("%d", gMyVar);
}
```

全局变量永不重置。

---

### 静态全局变量

使用 static 声明，仅在本文件内可见：

文件 1:

```c
static
    gsMyVar = 4;

MyFunc()
{
    printf("%d", gsMyVar);
}

#include "File2"
```

文件 2:

```c
MyFunc2()
{
    // 此处无法访问gsMyVar
    printf("%d", gsMyVar); // 编译错误
}
```

静态修饰符同样适用于函数声明。
