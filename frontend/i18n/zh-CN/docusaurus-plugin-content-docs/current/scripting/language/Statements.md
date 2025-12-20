---
title: "关键字：语句"
sidebar_label: "关键字：语句"
---

## `assert`

当表达式结果为逻辑假时，触发运行时错误并终止程序执行。该语句仅在`main()`代码块中生效。`assert`应用于标识逻辑（程序员）错误，而非运行时（用户）错误。

```c
main()
{
    assert (MAX_PLAYERS == GetMaxPlayers()); // 验证MAX_PLAYERS宏定义是否与实际服务器玩家槽位数一致
}
```

## `break`

立即终止当前循环执行，仅退出最内层循环而非所有嵌套循环。

```c
for (new i = 0; i < 10; i++)
{
    printf("%d", i);
    if (i == 5)
    {
        break;
    }
}
```

输出结果：

```c
0
1
2
3
4
5
```

而：

```c
for (new i = 0; i < 10; i++)
{
    if (i == 5)
    {
        break;
    }
    printf("%d", i);
}
```

输出结果：

```c
0
1
2
3
4
```

因循环立即终止，两个示例均未完成 10 次迭代，且第二个示例在打印数字 5 前退出。

## `case`

处理`switch`语句中的特定匹配结果。支持单值匹配、多值枚举或数值范围匹配：

```c
new
    switchVar = 10;
switch (switchVar)
{
    case 1:
    {
        printf("switchVar等于1");
    }
    case 4:
    {
        printf("switchVar等于4");
    }
    case 2, 3, 5:
    {
        printf("switchVar可能是2、3或5");
    }
    case 7 .. 11:
    {
        printf("switchVar位于7到11之间（含7、8、9、10、11）");
    }
    default:
    {
        printf("switchVar不是1、2、3、4、5、7、8、9、10或11");
    }
}
```

## `continue`

跳过当前循环迭代剩余代码，直接进入下一轮循环。需注意其在不同类型循环中的跳转位置差异。

```c
for (new i = 0; i < 10; i++)
{
    if (i == 5)
    {
        continue;
    }
    printf("%d", i);
}
```

输出结果：

```c
0
1
2
3
4
6
7
8
9
```

若`continue`置于打印语句之后则无效。在`for`循环中，`continue`跳转至循环条件更新部分（示例中的`i++`），而`while`循环中表现不同：

```c
new
    i = 0;
while (i < 10)
{
    if (i == 5)
    {
        continue;
    }
    printf("%d", i);
    i++;
}
```

此代码将导致无限循环：`continue`跳转至`i++`之后，但`i`始终为 5，条件`i < 10`持续成立。

## `default`

处理`switch`语句中未被显式`case`覆盖的情况。参见上文`case`示例。

## `do`

`do-while`循环结构，保证代码块至少执行一次。注意`while()`后的分号：

```c
new
    i = 10;
do
{
    printf("%d", i);
    i++;
}
while (i < 10);
```

尽管初始条件`i < 10`不成立，仍输出：

```c
10
```

对应的`while`循环：

```c
new
    i = 10;
while (i < 10)
{
    printf("%d", i);
    i++;
}
```

无任何输出，因条件检查在循环开始前执行。

`do-while`可优化双重条件检查场景：

```c
new
    checkVar = 10;
if (checkVar == 10)
{
    new
        i = 0;
    while (checkVar == 10)
    {
        checkVar = someFunction(i);
        i++;
    }
}
```

虽然这不算严重问题，但你在循环开始时快速连续检查了两次`checkVar`变量，这显然没有实际意义。然而`if`语句是必要的，因为需要在条件为真时执行循环外的代码（这在编程中是较为常见的情况）。可通过以下方式优化：

```c
new
    checkVar = 10;
if (checkVar == 10)
{
    new
        i = 0;
    do
    {
        checkVar = someFunction(i);
        i++;
    }
    while (checkVar == 10);
}
```

两版功能相同，但后者减少了一次冗余条件检查。

## `else`

当`if`语句条件不满足时执行`else`代码块：

```c
new
    checkVar = 5;
if (checkVar == 10)
{
    printf("此代码永不执行");
}
else
{
    printf("if条件失败，执行else代码块");
}
```

支持`else if`链式条件：

```c
new
    checkVar = 2;
if (checkVar == 1)
{
    printf("条件不成立，不执行");
}
else if (checkVar == 2)
{
    printf("首个if失败，检查第二个条件并执行");
}
else
{
    printf("任一条件成立，不执行此处");
}
```

## `exit`

此指令立即退出当前程序。

```c
main()
{
    exit;
    return 0;
}
```

## `for`

for 循环是一种包含初始化、条件判断和更新三阶段的循环结构。各阶段由分号分隔（眨眼符号;），均可留空。最基础的 for 循环格式为：

```c
for ( ; ; ) {}
```

该结构无初始化、无条件判断、无更新，因此将无限循环（缺失条件判断时默认为真）。

典型应用示例如下：

```c
for (new i = 0; i < MAX_PLAYERS; i++)
{
    printf("%d", i);
}
```

此循环的初始化部分为：

```c
new i = 0;
```

分号标志着初始化结束。此处声明的新变量 i 仅在循环体内有效。随后执行条件判断，将 i 与 MAX_PLAYERS（默认值 500，参见#define）比较，若条件成立则继续循环。循环体执行完毕后执行更新语句"i++"递增变量值。完成完整迭代后，循环将返回条件判断阶段（初始化仅执行一次）。

该循环将输出 0 到 499（含）的所有数字。等效的 while 循环（忽略 continue 的影响）为：

```c
new
    i = 0;
while (i < MAX_PLAYERS)
{
    printf("%d", i);
    i++;
}
```

通过逗号运算符扩展初始化和更新阶段，可构建复杂循环结构：

```c
for (new i = 0, j = 200; i < MAX_PLAYERS && j > 10; i++, j -= 2)
{
    printf("%d %d", i, j);
}
```

此例将创建两个变量并初始化为 0 和 200，循环条件为 i 小于 200 且 j 大于 10，每次迭代 i 递增，j 递减 2。

注意循环变量的作用域限制：

```c
for (new i = 0; i < MAX_PLAYERS; i++)
{
    printf("%d", i);
}
printf("%d", i);  // 错误：i在循环外不可访问
```

若需在循环外访问变量，需在外部声明：

```c
new
    i = 0;
for ( ; i < MAX_PLAYERS; i++)
{
    printf("%d", i);
}
printf("%d", i);
```

或采用外部变量初始化：

```c
new
    i;
for (i = 0; i < MAX_PLAYERS; i++)
{
    printf("%d", i);
}
printf("%d", i);
```

## `goto`

goto 语句和标签在编程社区中通常不推荐使用，因其功能可通过代码重构更好实现。基本语法为：

```c
goto my_label;
printf("此语句永不执行");
my_label:
printf("此语句将被执行");
```

编译器对 goto 语句的处理并不理想，因此这类代码完全不会进行优化处理，例如以下情况：

```c
{
    new
        i = 5;
    if (i == 5)
    {
        goto my_label;
    }
    else
    {
        my_label:
        return 0;
    }
}
```

当遇到带有条件的返回分支时，编译器会发出"返回类型不一致"的警告——它错误地认为条件为真（true）的分支没有返回值，但实际上该分支通过非常迂回的方式（即 `goto` 跳转）最终仍会返回一个值。此外需注意：

```c
MyFunction()
{
    new
        i = 5;
    if (i == 5)
    {
        goto my_label;
    }
    return 0;
    my_label:
    return 1;
}
```

即使相关代码实际可被正常访问，编译器仍会触发"无法访问的代码"警告。

基本语法结构如下：

```c
label:

goto label;
```

标签应独占一行书写，且以冒号（:）结尾，而非分号（;）。标签命名需遵循与变量、函数等标识符相同的规范。

## `if`

`if` 是最重要的操作符之一。它用于判断是否执行某段代码，与 `goto` 共同构成几乎所有控制结构的基础：

```c
for (new i = 0; i < 10; i++)
{
}
```

等价于：

```c
new
    i = 0;
for_loop:
if (i < 10)
{
    i++;
    goto for_loop;
}
```

`if` 的条件判断方式非常丰富，以下列举部分常用操作符：

| 操作符 | 说明                   | 示例             | 当 a=1, b=0 时的结果 | 当 a=1, b=1 时的结果 | 当 a=0, b=1 时的结果 | 当 a=0, b=0 时的结果 |
| ------ | ---------------------- | ---------------- | -------------------- | -------------------- | -------------------- | -------------------- |
| `==`   | 等于判断               | `if (a == b)`    | false                | true                 | false                | true                 |
| `!=`   | 不等于判断             | `if (a != b)`    | true                 | false                | true                 | false                |
| `<`    | 小于判断               | `if (a < b)`     | false                | false                | true                 | false                |
| `>`    | 大于判断               | `if (a > b)`     | true                 | false                | false                | false                |
| `<=`   | 小于等于判断           | `if (a <= b)`    | false                | true                 | true                 | true                 |
| `>=`   | 大于等于判断           | `if (a >= b)`    | true                 | true                 | false                | true                 |
| `&&`   | 逻辑与（两者均为真）   | `if (a && b)`    | false                | true                 | false                | false                |
| `\|\|` | 逻辑或（至少一者为真） | `if (a \|\| b)`  | true                 | true                 | true                 | false                |
| `!`    | 逻辑非（取反）         | `if (!(a == b))` | true                 | false                | true                 | false                |

通过组合这些操作符可构建复杂条件判断：

```c
if (a == b && (c != d || f < g))
```

当 a 等于 b 且（c 不等于 d 或 f 小于 g）时，该条件成立。

## `return`

该关键字用于从函数中返回，并可向调用函数传递数据：

```c
MyFunction()
{
    new
        someVar = OtherFunction();
}

OtherFunction()
{
    return 5;
}
```

此时 someVar 的值将为 5。

```c
MyFunction()
{
    if (SomeFunction())
    {
        printf("Returned 1");
    }
}

SomeFunction()
{
    return random(2);
}
```

该代码将向调用函数的 if 语句返回 1 或 0。在条件判断中，1 代表真，0 代表假，因此仅当返回 1 时会打印文本。再看以下示例：

```c
MyFunction()
{
    if (SomeFunction())
    {
        printf("Returned something between 1 and 10");
    }
}

SomeFunction()
{
    return random(11);
}
```

此时可能返回 0 至 10 之间的任意整数。非零值均视为真，因此当返回 1-10 时都会显示文本。

也可用于返回字符串：

```c
MyFunction()
{
    printf("%s", SomeFunction());
}

SomeFunction()
{
    new
        str[10] = "Hello";
    return str;
}
```

将输出 "Hello"（不含引号）。

函数可不返回任何值：

```c
MyFunction()
{
    SomeFunction();
}

SomeFunction()
{
    return;
}
```

但需确保返回值不被使用：

```c
MyFunction()
{
    if (SomeFunction())
    {
        printf("Problem");
    }
}

SomeFunction()
{
    return;
}
```

此情况下 SomeFunction 未返回有效值，而 MyFunction 尝试检查其返回值的真假性，将导致编译器报错。空返回是默认行为，因此：

```c
SomeFunction()
{
    return;
}
```

与：

```c
SomeFunction()
{
}
```

完全等效。

注意返回值类型不可混用：

```c
MyFunction()
{
    SomeFunction();
}

SomeFunction()
{
    if (random(2))
    {
        return 1;
    }
    else
    {
        return;
    }
}
```

将引发错误，因编译器无法确定返回类型。

```c
SomeFunction()
{
    if (random(2))
    {
        return 1;
    }
}
```

同样非法，因默认返回为空值。

## `sleep`

该伪函数可使当前执行暂停指定毫秒数：

```c
printf("Time 0s");
sleep(1000);
printf("Time 1s");
```

注意此函数仅在 main() 函数中有效，不适用于回调函数，因其运行于 PAWN 线程中。

## `state`

`state` 是 PAWN 状态机及自动机系统的重要组成部分，详细信息请参阅[此主题帖](https://sampforum.blast.hk/showthread.php?tid=570939)。

## `switch`

`switch` 本质上是一种结构化的 if/else if/else 体系：

```c
switch (someVar)
{
    case 1:
    {
        printf("one");
    }
    case 2:
    {
        printf("two");
    }
    case 3:
    {
        printf("three");
    }
    default:
    {
        printf("other");
    }
}
```

这等同于以下代码，但具有效率略高（且更加整洁）的实现方式：

```c
if (someVar == 1)
{
    printf("one");
}
else if (someVar == 2)
{
    printf("two");
}
else if (someVar == 3)
{
    printf("three");
}
else
{
    printf("other");
}
```

## `while`

`while` 是与 `for` 和 `do..while` 相似的循环类型。其基本逻辑是：若条件判断为真则执行代码块并跳转回条件判断处，若为假则退出循环（无 else 分支）。参考以下 goto 实现示例：

```c
new
    i = 0;
for_loop:
if (i < 10)
{
    i++;
    goto for_loop;
}
```

等价于：

```c
new
    i = 0;
while (i < 10)
{
    i++;
}
```

更多细节请参阅 `do` 和 `for` 循环的相关文档。
