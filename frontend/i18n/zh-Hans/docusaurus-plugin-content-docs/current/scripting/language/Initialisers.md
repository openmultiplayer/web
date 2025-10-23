---
title: 关键字：初始化器
sidebar_label: 关键字：初始化器
---

## `const`

```c
new const
    MY_CONSTANT[] =  {1, 2, 3};
```

const 关键字虽未广泛应用，但其功能为声明不可通过代码修改的常量变量。主要应用场景包括：

- 函数参数声明为 const 数组时可获得编译优化
- 替代宏定义（#define）实现数组类型的常量声明

const 作为修饰符必须与 new 或其他变量声明符配合使用。若尝试修改 const 变量，编译器将产生错误提示。此修饰符通过强制不可变性保障数据完整性，适用于需要运行时确定常量值的场景（与编译期确定的宏定义形成互补）。

## `enum`

枚举是一种非常有用的系统，可用于表示大量数据组并快速修改常量。其主要用途包括：替代大量 define 语句、符号化表示数组槽位(这实际上与 define 功能相同但表现形式不同)以及创建新标签。

目前最常见的用途是作为数组定义：

```c
enum E_MY_ARRAY
{
    E_MY_ARRAY_MONEY,
    E_MY_ARRAY_GUN
}

new
    gPlayerData[MAX_PLAYERS][E_MY_ARRAY];

public OnPlayerConnect(playerid)
{
    gPlayerData[playerid][E_MY_ARRAY_MONEY] = 0;
    gPlayerData[playerid][E_MY_ARRAY_GUN] = 5;
}
```

这将为每个玩家创建包含两个槽位的数组。当玩家连接时，在 E_MY_ARRAY_MONEY 对应的槽位存入 0，在 E_MY_ARRAY_GUN 槽位存入 5。若不使用枚举，代码将呈现为：

```c
new
    gPlayerData[MAX_PLAYERS][2];

public OnPlayerConnect(playerid)
{
    gPlayerData[playerid][0] = 0;
    gPlayerData[playerid][1] = 5;
}
```

这正是第一种方式编译后的实际形态。虽然可行，但可读性较差——槽位 0 和 1 分别代表什么？且灵活性不足，若需在 0 和 1 之间新增槽位，必须将所有 1 重命名为 2，添加新项后还需检查是否遗漏修改。而使用枚举只需：

```c
enum E_MY_ARRAY
{
    E_MY_ARRAY_MONEY,
    E_MY_ARRAY_AMMO,
    E_MY_ARRAY_GUN
}

new
    gPlayerData[MAX_PLAYERS][E_MY_ARRAY];

public OnPlayerConnect(playerid)
{
    gPlayerData[playerid][E_MY_ARRAY_MONEY] = 0;
    gPlayerData[playerid][E_MY_ARRAY_AMMO] = 100;
    gPlayerData[playerid][E_MY_ARRAY_GUN] = 5;
}
```

重新编译后所有内容将自动更新。

那么枚举如何确定各项的赋值？其完整语法结构为：

```c
enum NAME (modifier)
{
    NAME_ENTRY_1 = value,
    NAME_ENTRY_2 = value,
    ...
    NAME_ENTRY_N = value
}
```

但多数情况下采用默认参数。若未指定修饰符，默认使用(+= 1)，即枚举中每个项的值为前项值加 1。例如：

```c
enum E_EXAMPLE
{
    E_EXAMPLE_0,
    E_EXAMPLE_1,
    E_EXAMPLE_2
}
```

首项 E_EXAMPLE_0 默认为 0，第二项 E_EXAMPLE_1 为 1(0+1)，第三项 E_EXAMPLE_2 为 2(1+1)。此时整个枚举 E_EXAMPLE 的值为 3(2+1)，枚举名称即代表最后一项的值。若修改修饰符将得到不同赋值：

```c
enum E_EXAMPLE (+= 5)
{
    E_EXAMPLE_0,
    E_EXAMPLE_1,
    E_EXAMPLE_2
}
```

此例中每个项的值递增步长为 5，初始值仍为 0，则得到：E_EXAMPLE_0=0，E_EXAMPLE_1=5，E_EXAMPLE_2=10，E_EXAMPLE=15。若声明数组：

```c
new
    gEnumArray[E_EXAMPLE];
```

将创建 15 个单元的数组，但只能通过枚举值访问 0、5、10 号单元(仍可使用普通数字索引)。再看另一示例：

```c
enum E_EXAMPLE (*= 2)
{
    E_EXAMPLE_0,
    E_EXAMPLE_1,
    E_EXAMPLE_2
}
```

此处所有项均为 0。原因在于首项默认 0，后续项按 0 \* 2=0 计算。如何修正？需使用自定义初始值：

```c
enum E_EXAMPLE (*= 2)
{
    E_EXAMPLE_0 = 1,
    E_EXAMPLE_1,
    E_EXAMPLE_2
}
```

这将得到 1、2、4、8 的赋值序列。以此创建数组将生成 8 单元数组，并通过命名访问 1、2、4 号单元。可自由设置任意值和任意数量的自定义项：

```c
enum E_EXAMPLE (*= 2)
{
    E_EXAMPLE_0,
    E_EXAMPLE_1 = 1,
    E_EXAMPLE_2
}
```

得到：

```c
0, 1, 2, 4
```

而：

```c
enum E_EXAMPLE (*= 2)
{
    E_EXAMPLE_0 = 1,
    E_EXAMPLE_1 = 1,
    E_EXAMPLE_2 = 1
}
```

则生成：

```c
1, 1, 1, 2
```

建议仅对数组使用+=1 的默认递增方式。

枚举中亦可包含数组定义：

```c
enum E_EXAMPLE
{
    E_EXAMPLE_0[10],
    E_EXAMPLE_1,
    E_EXAMPLE_2
}
```

这将使 E_EXAMPLE_0=0，E_EXAMPLE_1=10，E_EXAMPLE_2=11，E_EXAMPLE=12，而非通常认为的 0,1,2,3 序列。

枚举项可附加标签，例如：

```c
enum E_MY_ARRAY
{
    E_MY_ARRAY_MONEY,
    E_MY_ARRAY_AMMO,
    Float:E_MY_ARRAY_HEALTH,
    E_MY_ARRAY_GUN
}

new
    gPlayerData[MAX_PLAYERS][E_MY_ARRAY];

public OnPlayerConnect(playerid)
{
    gPlayerData[playerid][E_MY_ARRAY_MONEY] = 0;
    gPlayerData[playerid][E_MY_ARRAY_AMMO] = 100;
    gPlayerData[playerid][E_MY_ARRAY_GUN] = 5;
    gPlayerData[playerid][E_MY_ARRAY_HEALTH] = 50.0;
}
```

此写法不会引发标签类型不匹配错误。

枚举本身亦可作为标签使用：

```c
enum E_MY_TAG (<<= 1)
{
    E_MY_TAG_NONE,
    E_MY_TAG_VAL_1 = 1,
    E_MY_TAG_VAL_2,
    E_MY_TAG_VAL_3,
    E_MY_TAG_VAL_4
}

new
    E_MY_TAG:gMyTagVar = E_MY_TAG_VAL_2 | E_MY_TAG_VAL_3;
```

这将创建新变量并赋值为 6(4 | 2)，且带有自定义标签。若执行：

```c
gMyTagVar = 7;
```

会触发标签不匹配警告，但可通过强制类型转换绕过：

```c
gMyTagVar = E_MY_TAG:7;
```

此特性对标志位数据处理(即用单个位表示特定数据)或组合数据非常有用：

```c
enum E_MY_TAG (<<= 1)
{
    E_MY_TAG_NONE,
    E_MY_TAG_MASK = 0xFF,
    E_MY_TAG_VAL_1 = 0x100,
    E_MY_TAG_VAL_2,
    E_MY_TAG_VAL_3,
    E_MY_TAG_VAL_4
}

new
    E_MY_TAG:gMyTagVar = E_MY_TAG_VAL_2 | E_MY_TAG_VAL_3 | (E_MY_TAG:7 & E_MY_TAG_MASK);
```

将生成十进制值 1543(0x0607)。

最后，如最初所述，枚举可通过省略名称来替代宏定义：

```c
#define TEAM_NONE   0
#define TEAM_COP    1
#define TEAM_ROBBER 2
#define TEAM_CIV    3
#define TEAM_CLERK  4
#define TEAM_DRIVER 5
```

此类团队定义方式常见但缺乏灵活性。可用枚举实现自动数值分配：

```c
enum
{
    TEAM_NONE,
    TEAM_COP,
    TEAM_ROBBER,
    TEAM_CIV,
    TEAM_CLERK,
    TEAM_DRIVER
}
```

各团队值保持不变，用法完全相同：

```c
new
    gPlayerTeam[MAX_PLAYERS] = {TEAM_NONE, ...};

public OnPlayerConnect(playerid)
{
    gPlayerTeam[playerid] = TEAM_NONE;
}

public OnPlayerRequestSpawn(playerid)
{
    if (gPlayerSkin[playerid] == gCopSkin)
    {
        gPlayerTeam[playerid] = TEAM_COP;
    }
}
```

在此基础上，有更优的团队定义方式：

```c
enum (<<= 1)
{
    TEAM_NONE,
    TEAM_COP = 1,
    TEAM_ROBBER,
    TEAM_CIV,
    TEAM_CLERK,
    TEAM_DRIVER
}
```

此时 TEAM_COP=1，TEAM_ROBBER=2，TEAM_CIV=4 等(二进制分别为 0b00000001, 0b00000010, 0b00000100)。这意味着若玩家团队值为 3，则同时属于警察和劫匪团队。这种设计虽看似矛盾，却开启了新的可能性：

```c
enum (<<= 1)
{
    TEAM_NONE,
    TEAM_COP = 1,
    TEAM_ROBBER,
    TEAM_CIV,
    TEAM_CLERK,
    TEAM_DRIVER,
    TEAM_ADMIN
}
```

通过此枚举，玩家可同时属于常规团队和管理员团队。虽然需要少量代码调整，但实现简单：

添加玩家至团队：

```c
gPlayerTeam[playerid] |= TEAM_COP;
```

移除玩家出团队：

```c
gPlayerTeam[playerid] &= ~TEAM_COP;
```

检查玩家所属团队：

```c
if (gPlayerTeam[playerid] & TEAM_COP)
```

该方法简洁高效，极具实用价值。

## `forward`

`forward`关键字用于向编译器预先声明函数的存在。该指令对所有 public 函数都是必需的，同时也可用于其他场景。其语法结构为：在"forward"后跟随完整的函数名称及参数列表，并以分号结尾：

```c
forward MyPublicFunction(playerid, const string[]);

public MyPublicFunction(playerid, const string[])
{
}
```

除 public 函数必须使用外，`forward`还可用于解决特定场景下的类型解析警告——当带有标签返回值(如浮点型)的函数在声明前被调用时：

```c
main()
{
    new
        Float:myVar = MyFloatFunction();
}

Float:MyFloatFunction()
{
    return 5.0;
}
```

此时编译器会发出 reparse 警告，因为它无法确定函数返回值是普通整型还是浮点型。显然此例中函数返回浮点值。解决方案有两种：

方案一：将函数定义置于调用代码之前：

```c
Float:MyFloatFunction()
{
    return 5.0;
}

main()
{
    new
        Float:myVar = MyFloatFunction();
}
```

方案二：使用`forward`声明提前告知编译器返回类型：

```c
forward Float:MyFloatFunction();

main()
{
    new
        Float:myVar = MyFloatFunction();
}

Float:MyFloatFunction()
{
    return 5.0;
}
```

特别注意：`forward`声明中必须包含返回值标签。

## `native`

原生函数(native function)是指在虚拟机(即运行脚本的环境)中定义的函数，而非脚本自身实现。此类函数只能通过 SA:MP 或插件进行原生定义，但开发者可以创建伪原生函数。由于.inc 文件中定义的原生函数会被 PAWNO 识别并显示在右侧函数列表框中，使用`native`关键字有助于将自定义函数纳入该列表。典型原生函数声明示例如下：

```c
native printf(const format[], \{Float, _\}:...);
```

若希望自定义函数显示在列表却无需实际声明为原生函数，可采用注释伪装法：

```c
/*
native MyFunction(playerid);
*/
```

PAWNO 不识别此类注释格式，仍会将函数加入列表，而编译器则正常忽略该声明。

`native`关键字的另一妙用是函数重命名/重载：

```c
native my_print(const string[]) = print;
```

此时`print`函数在脚本层面已不存在。虽然 SA:MP 底层仍保留该函数，且编译器通过"= print"知晓其真实名称，但在 PAWN 代码中调用`print()`将报错，因其已被重命名为`my_print`。鉴于`print`的脚本级定义已移除，开发者可自由重新定义：

```c
print(const string[])
{
    my_print("检测到print()调用");
    my_print(string);
}
```

此后脚本中所有`print()`调用均会触发自定义函数而非原函数。此例中，每次调用会先输出提示信息再打印原始内容。

## `new`

该关键字是变量系统的核心，属于最重要的关键字之一。`new`用于声明新变量：

```c
new
    myVar = 5;
```

此操作将创建名为 myVar 的变量并赋初值 5。若未显式赋值，所有变量默认初始化为 0：

```c
new
    myVar;

printf("%d", myVar);
```

输出结果为"0"。

变量的作用域(scope)决定其可用范围。作用域由大括号{}限定，在大括号内声明的变量仅能在该代码块内使用：

```c
if (a == 1)
{
    // 大括号作用域起始于上一行
    new
        myVar = 5;

    // 当前printf处于同一作用域内，可访问myVar
    printf("%d", myVar);

    // 此if语句也处于相同作用域，内部代码可访问myVar
    if (myVar == 1)
    {
        printf("%d", myVar);
    }
    // 大括号作用域结束于下一行
}
// 此处已脱离作用域，将触发错误
printf("%d", myVar);
```

此示例也印证了代码缩进规范的重要性。

全局变量(即函数外声明的变量)通过`new`声明后，可在声明位置之后的所有位置使用：

文件 File1.pwn：

```c
MyFunc1()
{
    // 错误，gMyVar尚未定义
    printf("%d", gMyVar);
}

// 在此处声明全局变量
new
    gMyVar = 10;

MyFunc2()
{
    // 有效，gMyVar已存在
    printf("%d", gMyVar);
}

// 包含其他文件
#include "file2.pwn"
```

文件 file2.pwn：

```c
MyFunc3()
{
    // 同样有效，因该文件在主文件声明后引入，且new不限制文件边界
    printf("%d", gMyVar);
}
```

## `operator`

该关键字允许为自定义标签重载操作符。例如：

```c
stock BigEndian:operator=(b)
{
    return BigEndian:(((b >>> 24) & 0x000000FF) | ((b >>> 8) & 0x0000FF00) | ((b << 8) & 0x00FF0000) | ((b << 24) & 0xFF000000));
}

main()
{
    new
        BigEndian:a = 7;
    printf("%d", _:a);
}
```

常规 PAWN 数值采用小端序(little endian)存储。通过此操作符可定义赋值行为，将常规数值转换为大端序格式。大端序与小端序的本质区别在于字节存储顺序：

数值 7 在小端序中存储为：

```c
07 00 00 00
```

而大端序存储为：

```c
00 00 00 07
```

因此若以大端序格式存储数值后直接打印，系统会按小端序解析导致字节逆序，最终输出 0x07000000（十进制 117440512），这也正是上述代码的运行结果。

支持重载的操作符包括：

```c
+, -, *, /, %, ++, --, ==, !=, <, >, <=, >=, ! 和 =
```

值得注意的是，操作符行为可完全自定义：

```c
stock BigEndian:operator+(BigEndian:a, BigEndian:b)
{
    return BigEndian:42;
}

main()
{
    new
        BigEndian:a = 7,
        BigEndian:b = 199;
    printf("%d", _:(a + b));
}
```

此示例将直接输出 42，完全摒弃加法运算的原始逻辑。

## `public`

`public`关键字用于使函数对虚拟机可见，即允许 SA:MP 服务器直接调用该函数，而不仅限于在 PAWN 脚本内部调用。该关键字也可用于变量声明，使其值能在服务器端读写(尽管 SA:MP 未直接使用此特性，但可通过插件实现)，结合`const`可创建仅允许服务器修改的只读变量。

公共函数在 amx 文件中存储其文本名称，而普通函数仅存储跳转地址，这为反编译增加了难度。这种机制使得可以通过名称从脚本外部调用函数，同时也支持在脚本内部通过名称调用函数(需通过跨脚本上下文切换)。原生函数(native)调用机制与公共函数形成互补——前者从脚本内部调用外部函数，后者则反之。结合两者可实现如 SetTimer、SetTimerEx、CallRemoteFunction 和 CallLocalFunction 等通过名称(而非地址)调用的函数。

通过名称调用函数的示例：

```c
forward MyPublicFunc();

main()
{
    CallLocalFunction("MyPublicFunc", "");
}

public MyPublicFunc()
{
    printf("Hello");
}
```

公共函数名称前缀可为"public"或"@"，且必须配合`forward`声明使用：

```c
forward MyPublicFunc();
forward @MyOtherPublicFunc(var);

main()
{
    CallLocalFunction("MyPublicFunc", "");
    SetTimerEx("@MyOtherPublicFunc", 5000, 0, "i", 7);
}

public MyPublicFunc()
{
    printf("Hello");
}

@MyOtherPublicFunc(var)
{
    printf("%d", var);
}
```

此示例演示了通过 SetTimerEx 在 5 秒后调用"MyOtherPublicFunc"并传递整型参数 7 进行打印。

示例中频繁出现的`main`函数虽具有类似公共函数的特性(可被外部调用)，但本质并非公共函数——其拥有特殊已知地址，服务器通过该地址跳转执行。

所有 SA:MP 回调函数均需声明为 public 并由服务器自动调用：

```c
public OnPlayerConnect(playerid)
{
    printf("%d connected", playerid);
}
```

当玩家加入服务器时，系统将自动在所有脚本(游戏模式 优先于 滤镜脚本)中查找此公共函数并执行。

若需在脚本内部调用公共函数，无需使用名称调用机制，公共函数同样具备常规函数特性：

```c
forward MyPublicFunc();

main()
{
    MyPublicFunc();
}

public MyPublicFunc()
{
    printf("Hello");
}
```

此直接调用方式在性能上显著优于 CallLocalFunction 等原生函数调用方式。

## `static`

静态变量(static variable)与全局变量相似，但具有更严格的作用域限制。当在全局作用域使用`static`时，生成的变量仅限在声明区域所属的代码段内访问(参见#section)。以前述`new`示例为基础进行改造：

**file1.pwn**

```c
MyFunc1()
{
    // 错误，gMyVar此时尚未声明
    printf("%d", gMyVar);
}

// 在此处声明gMyVar
new
    gMyVar = 10;

MuFunc2()
{
    // 正常，因为gMyVar此时已存在
    printf("%d", gMyVar);
}

// 在此包含另一个文件
#include "file2.pwn"
```

file2.pwn

```c
MyFunc3()
{
    // 此处同样正常，因为该文件在主文件声明后包含，且`new`不受文件作用域限制
    printf("%d", gMyVar);
}
```

将其修改为静态将得到：

file1.pwn

```c
MyFunc1()
{
    // 错误，g_sMyVar尚未定义
    printf("%d", g_sMyVar);
}

// 在此处声明静态全局变量
static
    g_sMyVar = 10;

MyFunc2()
{
    // 有效，g_sMyVar已存在
    printf("%d", g_sMyVar);
}

// 包含其他文件
#include "file2.pwn"
```

文件 file2.pwn

```c
MyFunc3()
{
    // 错误，g_sMyVar仅限声明文件(或代码段)内访问，此处属于不同文件
    printf("%d", g_sMyVar);
}
```

此机制允许在不同文件中定义同名全局静态变量。

若在局部作用域(函数内部)使用`static`，该变量与`new`声明的局部变量类似，仅能在声明作用域内访问(基于大括号规则，参见`new`章节)。但与`new`变量不同，`static`局部变量在多次函数调用间保持数值持久性。

```c
main()
{
    for (new loopVar = 0; loopVar < 4; loopVar++)
    {
        MyFunc();
    }
}

MyFunc()
{
    new
        i = 0;
    printf("%d", i);
    i++;
    printf("%d", i);
}
```

每次函数调用时 i 都会被重置为 0，输出结果为：

```c
0
1
0
1
0
1
0
1
```

若将`new`替换为`static`：

```c
main()
{
    for (new loopVar = 0; loopVar < 4; loopVar++)
    {
        MyFunc();
    }
}

MyFunc()
{
    static
        i = 0;
    printf("%d", i);
    i++;
    printf("%d", i);
}
```

由于静态局部变量具备数值持久性，输出结果变为：

```c
0
1
1
2
2
3
3
4
```

声明时的初始值(若指定，默认值为 0)仅在首次函数调用时生效。例如使用`static i = 5;`将输出：

```c
5
6
6
7
7
8
8
9
```

静态变量在底层实现中实质为全局变量，编译器仅进行作用域使用检查。因此反编译时无法区分普通全局变量、全局静态变量与局部静态变量，均显示为普通全局变量。

此外，可声明静态函数，此类函数仅能在声明文件中调用。该特性常用于实现私有风格的函数封装。

## `stock`

`stock` 用于声明可能未被使用但您不希望生成未使用警告的变量和函数。对于变量而言，`stock` 类似于 `const`，它是一个修饰符而非完整声明，因此您可以这样使用：

```c
new stock
    gMayBeUsedVar;

static stock
    g_sMayBeUsedVar;
```

如果变量或函数被使用，编译器会包含它；如果未被使用，则会将其排除。这与使用 `#pragma unused (symbol)` 不同，后者仅会抑制（即隐藏）警告但仍保留相关信息，而 `stock` 会完全忽略未使用的数据。

`stock` 最常见于自定义库开发场景。当您编写函数库时，会提供大量函数供他人使用，但您无法预知哪些函数会被实际调用。如果用户未使用的每个函数都会触发大量警告，他们可能会提出抱怨（除非某些函数必须被调用以执行初始化变量等强制操作）。尽管如此，根据 YSI 库的实际经验，用户往往仍会提出各种反馈。

```c
main()
{
    Func1();
}

Func1()
{
    printf("Hello");
}

Func2()
{
    printf("Hi");
}
```

在此示例中，`Func2` 从未被调用，因此编译器会生成警告。这在独立脚本中可能有助于提醒您是否遗漏了函数调用，但如果 `Func1` 和 `Func2` 属于函数库，用户可能确实不需要 `Func2`。此时可采用以下方案：

```c
main()
{
    Func1();
}

stock Func1()
{
    printf("Hello");
}

stock Func2()
{
    printf("Hi");
}
```

通过添加 `stock` 修饰符，未使用的 `Func2` 将不会被编译，同时消除相关警告。
