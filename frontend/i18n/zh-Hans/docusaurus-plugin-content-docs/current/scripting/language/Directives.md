---
title: "关键字：预处理器指令"
sidebar_label: "关键字：预处理器指令"
---

预处理器指令是传递给编译器的指令，用于控制其对源代码的解析方式。

## `#assert`

该指令用于检查常量表达式是否为真，若结果为假则终止编译。

```c
#define MOO 10
#assert MOO > 5
```

上述代码能通过编译。

```c
#define MOO 1
#assert MOO > 5
```

该代码将触发致命错误终止编译。其效果等价于：

```c
#define MOO 1
#if MOO <= 5
    #error MOO check failed
#endif
```

但使用#assert 会输出如下错误信息：

```
断言失败：1 > 5
```

而后者会提示：

```
用户错误：Moo check failed
```

两者的错误提示信息在调试效果上各有优劣。

## `#define`

`#define` 是文本替换指令，预处理器会将该指令首符号在代码中的所有出现替换为后续定义内容。

```c
#define MOO 7
printf("%d", MOO);
```

将被转换为：

```c
printf("%d", 7);
```

这也是为何反编译时所有宏定义都会丢失——编译时宏已被展开（所有预处理指令都在编译前处理）。宏定义不仅限于数值：

```c
#define PL new i = 0; i < MAX_PLAYERS; i++) if (IsPlayerConnected(i)

for(PL) printf("%d 已连接", i);
```

将展开为经典的玩家循环结构。注意此处括号的运用：部分来自 for 语句，部分来自宏展开。

另一个较少提及的特性是：通过反斜杠换行符可实现多行宏定义。常规情况下换行符会终止宏定义，但以下写法合法：

```c
#define PL \
        new i = 0; i < MAX_PLAYERS; i++) \
                if (IsPlayerConnected(i)

printf("%d", MOO(6));
```

该代码将输出 42。注意宏定义中额外的括号？这是为了确保宏展开后的运算顺序正确：

```c
printf("%d", ((6) * 7));
```

这种处理能有效避免运算优先级问题。例如：

```c
printf("%d", MOO(5 + 6));
```

预期结果为 77（(5 + 6) \* 7）。若未使用括号保护：

```c
#define MOO(%0) \
        %0 * 7

printf("%d", MOO(5 + 6));
```

将展开为：

```c
printf("%d", MOO(5 + 6 * 7));
```

由于运算符优先级，实际计算为 5 + (6\*7) = 47，导致错误结果。

宏参数的另一个特性是：当参数数量超过形参数量时，最后一个形参会吸收所有剩余实参。例如：

```c
#define PP(%0,%1) \
        printf(%0, %1)

PP(%s %s %s, "hi", "hello", "hi");
```

实际输出：

```
hi hello hi
```

因为`%1`包含了"hi", "hello", "hi"。你可能注意到此处`#`符号用于字面量字符串化，此为 SA-MP 特有功能并且很有用。此处添加这个符号的主要目的是实现参数间的明确区分。

## `#else`

`#else` 是条件编译中的"否则"分支，对应`#if`指令。

## `#elseif`

`#elseif` 实现条件编译中的"否则如果"逻辑。

```c
#define MOO 10

#if MOO == 9
        printf("if");
#elseif MOO == 8
        printf("else if");
#else
        printf("else");
#endif
```

## `#emit`

该指令未在 pawn-lang.pdf 中列明但实际存在。它实现内联汇编功能，允许直接插入 AMX 操作码到代码中。语法为：`#emit <操作码> <参数>`，`<参数>`可为有理数、整数或符号（变量/函数/标签）。具体操作码列表参考 Pawn Toolkit ver.3664。

## `#endif`

`#endif` 标志着`#if`条件块的结束，类似代码块中的右花括号。

## `#endinput, #endscript`

终止当前文件的包含过程。

## `#error`

立即终止编译并输出自定义错误信息。参见`#assert`示例。

## `#if`

预处理器的条件判断指令，用于控制代码包含策略。与常规 if 语句不同，`#if`要求表达式必须为常量。 例如以下代码：

```c
#define LIMIT 10

if (LIMIT < 10)
{
    printf("Limit too low");
}
```

将被编译为：

```c
if (10 < 10)
{
    printf("Limit too low");
}
```

显然该条件永远不可能为真，编译器会识别这种情况——因此给出"constant expression"警告。关键在于，既然条件永远不成立，保留这段代码的意义何在？虽然可以直接删除代码，但这将导致当有人修改 LIMIT 后重新编译时失去检查机制。这正是`#if`的应用场景。与普通 if 语句在表达式为常量时产生警告不同，`#if`表达式必须为常量表达式。因此：

```c
#define LIMIT 10

#if LIMIT < 10
    #error 限制值过低
#endif
```

该方式能在编译阶段直接检测限制值是否过小，若不符合要求则触发**编译时错误**，而无需通过运行测试来发现问题。这种机制还意味着不会生成冗余代码。注意此处省略了括号——虽然你可以使用括号，在复杂表达式中可能需要它们，但简单情况下并非必需。

再看另一个示例：

```c
#define LIMIT 10

if (LIMIT < 10)
{
    printf("Limit less than 10");
}
else
{
    printf("Limit equal to or above 10");
}
```

这同样属于常量检查的范畴，编译器会发出警告。尽管我们明确知道只有一条分支会被执行，但两条打印语句仍会被编译。使用`#if`预处理指令改写后：

```c
#define LIMIT 10

#if LIMIT < 10
    printf("Limit less than 10");
#else
    printf("Limit equal to or above 10");
#endif
```

通过这种方式，仅需保留的打印语句会被编译进最终代码，另一条语句仍驻留在源码中——既保证了当开发者修改 LIMIT 值后重新编译时的条件检测能力，又剔除了当前不需要的代码段。更重要的是，这种方式彻底消除了每次程序运行时执行无效条件判断的性能损耗，这对代码执行效率具有显著优化意义。

## `#include`

该指令将指定文件的所有代码插入到当前文件包含指令所在位置。包含方式分为两类：相对路径包含与系统路径包含（此为自创术语，如有更佳命名欢迎提议）。相对路径包含使用双引号包裹文件名，路径解析基于当前文件所在目录：

```c
#include "me.pwn"
```

上述指令将从当前文件所在目录引入"me.pwn"文件。系统路径包含则从 Pawn 编译器同级目录或上级目录的"include"文件夹（路径规则："include","../include"）中查找文件：

```c
#include <me>
```

该指令将从 pawno/include 目录（假设使用 pawno 环境）引入"me.inc"文件（注意省略扩展名的默认规则，若文件非.p/.pwn/.inc 格式需显式指定扩展名）。

两种包含方式均支持子目录路径：

```c
#include "folder/me.pwn"
```

```c
#include <folder/me>
```

上述指令将分别从相对路径和系统路径的默认目录下一级子目录查找文件。若文件不存在则立即触发编译失败。

## `#pragma`

这是最复杂的预处理器指令之一，提供多项编译参数控制脚本行为。典型设置示例如：

```c
#pragma ctrlchar '$'
```

该指令将转义字符从\改为$，因此换行符将由"\r\n"变为"$r\$n"。多数参数设计用于嵌入式系统的 AMX 编译限制（PC 端通常无此限制），完整列表详见 pawn-lang.pdf，以下仅列出与 SA:MP 相关的核心参数：

| 参数       | 取值范围              | 技术说明                                                                                                                                                                                       |
| ---------- | --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| codepage   | 名称/数值             | 设置字符串使用的 Unicode 代码页                                                                                                                                                                |
| compress   | 1/0                   | SA-MP 环境不支持，切勿使用                                                                                                                                                                     |
| deprecated | 符号名                | 对指定符号启用弃用警告，提示存在更优替代方案                                                                                                                                                   |
| dynamic    | 数值（通常为 2 的幂） | 设置栈与堆的内存分配大小（单位：存储单元）。当编译后出现内存超额警告时需调整此值（编译器版权信息后的异常表格即为此类警告）                                                                     |
| library    | DLL 名称              | SA-MP 社区常见误用参数。该参数指定获取原生函数（native functions）的 DLL 来源，并非用于声明文件作为库                                                                                          |
| pack       | 1/0                   | 切换!""与""的语义。详见 pawn-lang.pdf 获取打包字符串的详细说明                                                                                                                                 |
| tabsize    | 数值                  | 另一常见误用参数。用于设置制表符宽度以避免因混用空格/制表符导致的错误编译警告。SA:MP 中设为 4 以匹配 pawno 的制表符宽度。设为 0 将禁用所有缩进警告，但会导致代码可读性严重下降，强烈不建议使用 |
| unused     | 符号名                | 对指定符号禁用"未使用"警告。通常更推荐使用 stock 修饰符实现类似效果，但某些场景不适用（例如函数参数无法被排除）                                                                                |

### 弃用警告示例

```c
new
    gOldVariable = 5;

#pragma deprecated gOldVariable

main() {printf("%d", gOldVariable);}
```

该代码将触发 gOldVariable 的弃用警告。此机制常用于函数级 API 更新时保持向后兼容性。

### `#tryinclude`

功能类似#include，但文件不存在时不会导致编译失败。该机制的核心价值在于：仅当用户安装了特定插件（或至少包含相关插件头文件）时，才在脚本中启用对应功能模块。

**myinc.inc**

```c
#if defined _MY_INC_INC
    #endinput
#endif
#define _MY_INC_INC

stock MyIncFunc() {printf("Hello");}
```

**游戏主脚本：​**

```c
#tryinclude <myinc>

main()
{
    #if defined _MY_INC_INC
        MyIncFunc();
    #endif
}
```

仅当 myinc.inc 存在且成功编译时才会调用 MyIncFunc()。此特性特别适用于 IRC 插件等需要运行时检测插件是否加载的场景。

### `#undef`

移除已定义的宏或常量符号。

```c
#define MOO 10
printf("%d", MOO);
#undef MOO
printf("%d", MOO);
```

该代码将在第二个 printf 处编译失败，因为 MOO 已被取消定义。

```c
enum {
    e_example = 300
};

printf("%d", e_example);
#undef e_example
printf("%d", e_example); // 致命错误
```
