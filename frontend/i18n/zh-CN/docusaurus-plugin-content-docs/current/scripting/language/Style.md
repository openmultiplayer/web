---
title: "Pawn 代码风格指南"
sidebar_label: "Pawn 代码风格指南"
description: "关于Pawn源码通用命名规范及其他代码风格要素的简明指南，旨在提升代码意图传达效率，并优化调试与共享流程。"
---

本文档是关于 Pawn 源码通用命名规范及其他代码风格要素的简明指南，旨在提升代码意图传达效率，并优化调试与共享流程。

扩展阅读：

- [Modern Pawn](https://github.com/Southclaws/sampctl/wiki/Modern-Pawn)
- [Pawn Package](https://github.com/Southclaws/sampctl/wiki/Packages)

## 术语定义

### 语句（Statement）

语句是命令式指示宿主程序执行操作的代码单元，由可产生结果的合法代码构成。

```c
a = b + c;
```

这是由变量赋值操作组成的语句，其右侧使用了[#表达式]。

```c
SetPlayerColor(playerid, 0xFF4700FF);
```

这是调用函数并传递参数的语句。

```c
x + 8
```

这并非语句，因其结果未被使用，仅构成一个[#表达式]。

### 复合语句（Compound Statement）

由大括号包裹的多个语句集合。

```c
{
    new message[] = "hi!";
    print(message);
}
```

包含两个语句的复合语句。

```c
if (a == b)
{
    print("hello!");
}
```

带有`if`条件的复合语句，通常称为"if 语句"。

```c
return Function1(), Function2(), Function3();
```

这并非复合语句，而是通过逗号分隔的语句链。此类写法属于不良实践。

### 表达式（Expression）

可产生值的语法单元，除非该值被使用，否则不能构成有效语句。

表达式通常组合形成语句。

```c
a + b
```

简单的加法表达式，对两个值执行加法运算。

## 代码规范

### 大括号格式

推荐使用 Allman 风格大括号：

```pawn
function()
{
    //
}
```

若已形成肌肉记忆，亦可采用 K&R 风格：

```pawn
function() {
    //
}
```

### 条件分支

`switch`语句需使用两级缩进：一级用于`switch`代码块，另一级用于每个`case`子句或复合语句。

```pawn
switch (variable)
{
    case 0:
        return 0;
    case 1:
        return 1;
    case 2:
        return 2;
    default:
        return -1;
}
```

```pawn
switch (variable)
{
    case 0:
    {
        // 代码...
        return 0;
    }
    case 1:
    {
        // 代码...
        return 1;
    }
    case 2:
    {
        // 代码...
        return 2;
    }
    default:
    {
        // 代码...
        return -1;
    }
}
```

### 复合语句（代码块）

代码块必须始终使用大括号包裹，即使仅包含单行代码。此规则适用于所有层级，包括函数定义。

```pawn
func()
{
    singleLineExpr();
}
```

```pawn
func()
{
    if ()
    {
        singleLineExpr();
    }
}
```

```pawn
func()
{
    if ()
    {
        singleLineExpr();
    }
    else if ()
    {
        //
    }
    else
    {
        //
    }
}
```

### 命名规范

#### 函数命名

函数必须采用`PascalCase`大驼峰命名法。

#### 全局变量

- 通过`new`声明的全局变量必须始终使用`g_`前缀的大驼峰命名法，如`g_VariableName`
- 通过`static`声明的全局变量必须始终使用`s_`前缀的大驼峰命名法，如`s_VariableName`
- 常量全局变量必须使用全大写蛇形命名法（SCREAMING_SNAKE_CASE）

#### 局部变量

局部变量必须使用`camelCase`小驼峰命名法，且禁止使用单字母命名，以下情况除外：

- `for`循环中的`i`, `j`, `k`等迭代变量
- 数学上下文中使用的`x`, `y`, `z`等坐标变量

#### 枚举类型

具名枚举类型必须使用`E_`前缀（强标签）或`e_`前缀（弱标签）：

枚举字段必须同样采用全大写蛇形命名法`（SCREAMING_SNAKE_CASE）`，并以枚举器名称作为前缀。例如：

```pawn
static enum E_PLAYER_DATA {
    E_PLAYER_CASH,
    Float:E_PLAYER_HEALTH,
}
```

弱标签示例：

```pawn
static enum e_PLAYER_DATA {
    E_PLAYER_CASH,
    Float:E_PLAYER_HEALTH,
}
```

匿名枚举字段必须同样使用全大写蛇形命名法，并以枚举类型名称为前缀：

```pawn
static enum {
    ENUMATOR_INTEGER,
    Float:ENUMATOR_FLOAT,
}
```

除非需跨模块使用，否则枚举必须始终声明为`static`。

#### 宏与预处理定义

- 宏定义必须始终使用全大写蛇形命名法（`SCREAMING_SNAKE_CASE`）
- 预处理常量定义同样使用全大写蛇形命名法

此规范有助于区分变量/常量、函数/宏的关系。

建议避免创造新语法元素，以防止初学者混淆语言特性与库函数。但部分历史遗留库因兼容性要求可能例外。

### 文档规范

导出函数必须使用行注释进行文档说明，格式为`// FunctionName 实现X、Y、Z功能并返回A`，首词为函数名，后接功能简述。无需详细描述每个参数，例如：

```pawn
// LoadPlayerAccount 用于初始化账户加载流程。此函数将触发HTTP请求
// 获取玩家数据，向玩家显示对话框，最终在流程完成后触发`OnPlayerLogin`
// 事件。若加载失败则踢出玩家。
stock Error:LoadPlayerAccount(playerid)
{
    // 代码...
}
```

每个代码包应包含`README`文档，必要时在模块首行添加功能描述注释。
