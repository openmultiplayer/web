---
title: 插件开发指南
description: 关于插件开发的指南
---

## 介绍

我决定创建这个主题来解决有关插件开发的常见问题和疑问. 虽然我并不是C/++或插件SDK方面的专家, 但我会分享我在开发插件时所学到的东西. 希望这个主题完成后能够成为一个群体项目, 其他用户可以贡献一些我可能不知道或者忘记包含的信息. 要涵盖这么大的一个话题, 我需要一些帮助. 

## 这不是一个C/++帮助论坛

人们在阅读这篇文章时似乎非常困惑. 我看到很多人在提出关于插件SDK的完全合理的问题时, 收到了大量的"这不是C/++帮助论坛！"的回复. 仅仅因为人们被期望掌握这些语言, 并**不**意味着他们不能就实际的SDK提问！问"指针是什么"和问"如何创建回调函数"是有区别的！

话虽如此, 以下有一些优秀的网站和论坛专门用于教授和解答关于C/++的问题. 我自己也使用过这些网站：

这些网站有很棒的教程供学习：

cprogramming.com

cplusplus.com

learncpp.com

如果你在C/++问题上遇到困难, 你可以在以下论坛寻求帮助：

dreamincode.net

stackoverflow.com

## 常见问题

### 快速问答

**问题：** 插件是如何制作的？

- **回答：** 插件是用C/++和插件SDK制作的. 本FAQ假设你已经了解C/++, 稍后在文章中会提供一些关于实际SDK的信息. 

**问题：** 我可以用C/++以外的编程语言创建插件吗？

- **回答：** 理论上是可能的. 曾经有人尝试将SA-MP插件SDK移植到支持C应用程序二进制接口的D编程语言. 虽然我从未见过一个完全工作的D语言插件, 但这个例子让我们看到使用支持C/++的语言编写插件的可能性. 也有人讨论过绑定的可能性, 但我还没有看到任何实际的支持. 

**问题：** 我如何让我的插件实现跨平台(在Linux和Windows上都可用)？

- **回答：** Linux和Windows是两个不同的操作系统, 它们各自有不同的API和实现. 让你的代码在这两种平台上都能运行意味着你必须使用与平台无关的代码, 或者使用某种框架来处理与平台相关的所有问题. 在确保你的代码不依赖于任何特定API后, 你只需在你所选择的环境中编译代码即可(再次说明, 本指南假设你知道如何做这些). 

**问题：** 我的插件可以使用内存破解吗？

- **回答：** 说实话, 这是一个灰色地带. 使用内存破解来挂钩回调或调用函数似乎是完全可以接受的. 而任何修改服务器内存的行为似乎都是不被允许的(参见此处). 如果你计划制作一个需要使用内存破解的插件(不只是用于挂钩回调或调用函数), 请提前申请并获得批准后再发布；这确实是找出答案的最佳方式！

**问题：** 能否制作一个**\_\_\_\_\_\_**的插件？

- **回答：** 在大多数情况下, 任何想法都是完全可以实现的. 它可能需要一个与插件通信的独立应用程序, 但大多数情况下是可以实现的. 像这样的提问**不**应该被发布. 你已经听到了答案, 现在继续吧！这不是一个插件请求区. 希望有一天会有足够多的插件开发者可以有一个专门的请求区或固定主题(本指南旨在介绍和帮助新的插件开发者, 所以让我们拭目以待). 

**问题：** 我应该为**\_\_\_\_\_\_**使用什么IDE/编译器？

- **回答：** 这完全取决于你自己！我个人在Windows下会使用VC++ 2010 Express作为我的IDE和编译器, 计划在Linux下使用g++作为我的编译器. 试用不同的选项, 看看哪个最适合你！

**问题：** 什么是模块定义文件(.def)？

- **回答：** 模块定义文件是Visual Studio IDE中的一个特殊文件, 它为链接器提供有关正在链接的程序的信息. 在为SA-MP编写插件时, 我们通常只使用"EXPORTS"语句, 它提供了有关我们导出函数的信息. 我们将在文章的后面部分讨论这个语句. 

**问题：** 当我发布一个插件时, 是否必须包含源代码？

- **回答：** 如果你在这个论坛上发布任何东西, 它**总是**必须包含源代码. 插件也不例外(除非插件被开发者批准可以不附带源代码发布——比如反作弊插件). 

## 入门

你可能会惊讶于我被问到"如何开始插件开发？"的次数之多. 因此, 我决定专门增加这一整个章节来解答这个问题！仅仅知道编程语言并不意味着你了解IDE的使用, 尤其是在使用VC++ 2010时. 对于新用户来说, Visual Studio 可能是一个非常令人生畏的环境. 我觉得直接给你插件SDK而不先带你熟悉环境是不公平的！弄错了属性页或链接器设置可能会轻易吓跑新手, 所以我会引导你完成这些步骤. 

**注意：** 如果你选择使用其他针对Windows的IDE/编译器, 那你可能会遇到麻烦！看起来唯一能够成功导出函数的方法是使用模块定义文件(.DEF). 我尝试在本文中包含一种使用 \_\_declspec(dllexport) 的替代方法, 但由于 \_\_stdcall 调用约定会改变导出函数的名称, 这种方法并未成功 (参见: [此处](https://pastebin.com/y3xkVY70)). 

以下是本节中你需要下载的内容：

**Visual C++ 2010 Express:** [免费下载](https://visualstudio.microsoft.com/vs/express/)

**插件SDK (Plain):** [下载](https://github.com/Zeex/samp-plugin-sdk)

- 我们首先需要做的是创建一个新项目. 选择文件->新建->项目来创建. 

- 创建新项目后, 它会询问你正在创建的项目类型. 选择 Win32 项目, 输入项目名称, 然后点击 OK 继续. 

- 设置项目后, 应该会出现这个对话框. 按下"下一步"继续. 

- 点击"继续"后, 你应该会看到这个弹出对话框, 询问应用程序类型和设置. 对于类型, 选择 DLL(动态链接库), 对于设置, 选择"空项目". 完成后, 点击底部的完成按钮. 

- 接下来我们需要进入解决方案资源管理器. 解决方案资源管理器通常在IDE的左侧. 如果你不小心禁用了它, 可以通过按下 CTRL+ALT+L 或选择视图->其他窗口->解决方案资源管理器重新启用. 一旦找到解决方案资源管理器, 右键点击项目名称(在此例中为"Test")并选择属性. 

- 在属性页中, 导航到配置属性->链接器->输入. 到达此处后, 你需要添加一个模块定义文件. 你可以随意命名这个文件, 只要它的扩展名是".def"；人们通常用项目名称命名def文件. 命名好定义文件后, 按下 OK. 

- 现在我们只需添加我们的文件(包括定义文件). 要将文件添加到项目中, 再次导航到解决方案资源管理器, 右键点击项目名称, 选择添加, 然后选择新建项. 在此示例中, 我们将添加我们的定义文件. 由于没有定义文件的选项, 只需选择源文件(.cpp)并输入你决定的模块定义文件名称(注意：确保包含".def"扩展名, 否则将会添加".cpp"扩展名). 完成此操作后, 以相同方式添加项目的源文件(但不添加扩展名). 大多数人将他们的主源文件命名为"Main". 

- 在开始向两个空文件中添加任何内容之前, 我们需要将SDK添加到项目中. 如果你还没有下载, 可以通过本节开始时提供的链接下载SDK. 下载完成后, 将SDK文件夹解压到当前项目目录中. 注意, 这部分是可选的：我个人喜欢创建过滤器来组织所有文件和代码. 过滤器是Visual Studio中的一种组织工具, 它会在项目中创建文件夹, 但不会在Windows中创建相应的文件夹(建议创建对应的Windows文件夹). 要创建过滤器, 右键点击解决方案资源管理器中的项目->添加->新建过滤器并选择过滤器名称(在此例中命名为SDK). 

- 下一步是将所有SDK文件添加到当前项目中. 要将现有文件添加到项目中, 只需右键点击你希望添加到的文件夹或项目, 然后选择添加->现有项. 你需要将项目目录中SDK文件夹内的所有内容添加进去(注意：你可以通过按住 Ctrl 键并点击文件来选择多个文件). 为了保持文件夹一致性, 我们将在SDK过滤器内创建另一个过滤器, 并将其命名为amx. 当然, 你需要将SDK\amx\文件夹中的所有内容添加到amx过滤器中. 

现在是时候编译这个插件了！如果你正确遵循了说明, 应该已经打开了模块定义文件和源文件；如果没有, 请返回几步并仔细按照说明操作. 接下来将以下信息复制并粘贴到对应的文件中. 如果不理解其中的内容也不要担心, 我们将在下一节中详细讲解. 

### 源文件 (\*.cpp)

```cpp
#include "SDK\amx\amx.h"
#include "SDK\plugincommon.h"


typedef void (*logprintf_t)(const char* format, ...);
logprintf_t logprintf;
extern void *pAMXFunctions;


cell AMX_NATIVE_CALL HelloWorld(AMX* amx, cell* params)
{
    logprintf("这是从测试插件中打印出来的!");
    return 1;
}

PLUGIN_EXPORT unsigned int PLUGIN_CALL Supports()
{
    return SUPPORTS_VERSION | SUPPORTS_AMX_NATIVES;
}

PLUGIN_EXPORT bool PLUGIN_CALL Load(void **ppData)
{
    pAMXFunctions = ppData[PLUGIN_DATA_AMX_EXPORTS];
    logprintf = (logprintf_t) ppData[PLUGIN_DATA_LOGPRINTF];

    logprintf(" * 测试插件已加载.");
    return true;
}

PLUGIN_EXPORT void PLUGIN_CALL Unload()
{
    logprintf(" * 测试插件已卸载.");
}

AMX_NATIVE_INFO PluginNatives[] =
{
    {"HelloWorld", HelloWorld},
    {0, 0}
};

PLUGIN_EXPORT int PLUGIN_CALL AmxLoad( AMX *amx )
{
    return amx_Register(amx, PluginNatives, -1);
}


PLUGIN_EXPORT int PLUGIN_CALL AmxUnload( AMX *amx )
{
    return AMX_ERR_NONE;
}
```

### 模块定义文件(*.def)

```cpp
EXPORTS
      Supports
      Load
      Unload
      AmxLoad
      AmxUnload
```

## 代码分析

在本节中, 我们将查看 SA-MP 插件 SDK 提供的一些定义、结构和函数. 在继续之前, 你应该对 C/C++ 有一定的了解, 因为接下来的内容将**仅**解释 SDK 相关的信息. 从现在开始, 不会再有详细指导！

### 模块定义文件

在查看代码之前, 我们先来看一下我们在前一节中创建的模块定义文件. 首先, 什么是模块定义文件？我们知道它是 Visual Studio 专有的功能, 但它到底是做什么的？很简单！模块定义文件向链接器提供关于要链接的代码的信息. 这些文件中有许多规则和语句可以使用, 但我们只讨论一个, 即 EXPORTS 语句. 

#### 什么是 "**EXPORTS**"

Exports 是一个声明, 它允许我们……好吧, 导出一些东西到我们的应用程序！为什么我们要这样做？因为我们必须这样做, 就是这么简单. 我们导出的函数是 DLL 文件中的入口点. 应用程序只能访问我们导出的 DLL 函数；如果我们不导出它们, 它们将保持私有, 不能被外部访问. 我们不想这样, 对吧？不. 所以我们导出应用程序将直接访问的所有内容. 

#### 导出的函数

目前需要导出的函数有 6 个. 我们在项目中使用了其中 5 个. 不要担心你在函数声明中看到的 `PLUGIN_EXPORT` 和 `PLUGIN_CALL` 定义. 我们将在文章后面介绍这些以及其他一些重要的定义(标记为绿色文本). 

| 函数                   | 描述                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Supports()**         | 这个函数告诉服务器我们的插件将具备哪些功能, 基于它返回的内容. 通常我们在插件中只使用 3 个支持标志：**SUPPORTS_VERSION**、**SUPPORTS_AMX_NATIVES** 和 **SUPPORTS_PROCESS_TICK**.                                                                                                                                                                                                                                                                                                   |
| **Load(void\*\*)**       | Load 函数是相当简单的. 它在插件被加载时调用, 并传递一个地址数组, 插件将用来执行功能. 我们通常使用的两个索引是 **PLUGIN_DATA_AMX_EXPORTS** 和 **PLUGIN_DATA_LOGPRINTF**.                                                                                                                                                                                                                                                                      |
| **Unload()**           | Unload 在插件卸载时调用(服务器关闭时).                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| **AmxLoad(AMX\*)**      | 当一个新的 AMX 实例被加载到服务器中时调用这个函数. 这将对每个过滤脚本/游戏模式调用！因此, 最好不要为整个插件存储单个 AMX 实例, 而是使用队列/列表/向量. 在这个函数中, 我们还注册我们希望提供给 PAWN 的自定义原生函数.                                                                                                                                                                                                                                                      |
| **AmxUnload(AMX\*)**    | 当 AMX 实例被卸载时调用这个函数. 如果你存储 AMX 实例, 请确保将其删除. 否则, 你会有指向不存在的游戏模式/过滤脚本的实例.                                                                                                                                                                                                                                                                                                                                                               |
| **ProcessTick()**      | ProcessTick 是一个在服务器循环的每次迭代时调用的函数. 人们通常使用这个函数来通过跟踪经过的 ticks 数量来管理时间. SA-MP 服务器的休眠时间为 5ms, 所以如果 50 个 ticks 过去, 你就有了经过的时间的一个大致了解(5 * 50 = 250ms). **注意：**任何在插件中使用线程并且需要 PAWN 交互的用户都需要使用这个函数, 以确保 PAWN 不忙于其他任务！ |

### 定义和结构

现在来看看代码的有趣部分！你可能会发现我们在前面的小例子中使用了大量的定义和结构. 如果你之前从未开发过 SA-MP 插件, 这些可能会显得非常混乱甚至令人生畏. 我们将在本节中阐明这些定义和结构. 

| 定义/结构              | 描述                                                                                                                                                                                                                                                                                                                                                                                                             |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **cell**              | "cell" 是一个 typedef, 旨在提供可移植性. PAWN 支持 16 位、32 位和 64 位整数. typedef "cell" 始终是正确的大小, 而 "int" 可能不是. 通常在 SA-MP 插件中, 这个 typedef 始终是 32 位整数. **注意：** 还有一个 "ucell" typedef 用于无符号整数, 但几乎不使用.                                                                                                  |
| **AMX_NATIVE_CALL**   | 这个定义了我们的原生函数将使用的调用约定. 目前它被定义为空, 因此将使用默认值.                                                                                                                                                                                                                                                                                                                                       |
| **AMX**               | 这个结构的名称应该很清楚, 它是一个 AMX 实例. 这个结构包含了大量与数据段以及其他 AMX 相关的信息. 所有原生函数声明中必须包含这个结构以及一个指向传递参数的 cell 指针；没有这些信息, 我们不知道哪个脚本调用了我们的原生函数, 也不知道传递了什么参数.                                                                            |
| **PLUGIN_EXPORT**     | 这个定义为 "PLUGIN_EXTERN_C".                                                                                                                                                                                                                                                                                                                                                                                            |
| **PLUGIN_EXTERN_C**   | 如果使用 C++ 编译器, 这个定义为 "extern "C"". 这是为了与 C 的兼容性. C++ 提供了像函数重载这样的功能, 因此额外的信息如参数的数量/大小会与函数的名称一起存储, 这被称为 "name mangling"(名称修饰). 当使用这个定义时, 它告诉 C++ 使用 C 风格的链接, 从而避免 C++ 名称修饰.                                  |
| **PLUGIN_CALL**       | 这个定义告诉 C/C++ 我们导出的函数使用什么调用约定. 如果你使用的是针对 Windows 的编译器, 这个定义为 \_\_stdcall. 否则, 它的定义为空, 使用默认调用约定.                                                                                                                                                                                                                                                                    |
| **SUPPORTS_VERSION**  | 这个定义用于在 "Supports()" 函数返回的位掩码中使用. 这个标志用于检查与服务器的兼容性.                                                                                                                                                                                                                                                                                                                                |
| **SUPPORTS_AMX_NATIVES** | 这是另一个在 "Supports()" 函数中使用的定义. 任何使用 AMX 函数的插件都必须使用这个标志！如果没有这个标志, 你将会遇到运行时 19 错误, 因为你的原生函数没有注册到服务器(amx_Register).                                                                                                                                                                                                                        |
| **SUPPORTS_PROCESS_TICK** | 我们在 "Supports()" 函数中的最后一个标志. 如果你打算使用 "ProcessTick()" 函数, 你必须将这个标志添加到 "Supports()" 函数返回的位掩码中.                                                                                                                                                                                                                                                                        |
| **PLUGIN_DATA_AMX_EXPORTS** | 这个定义用作 Load 函数中传递的多维数组的索引. 这个特定的索引包含 AMX 函数表. 所有插件必须使用这个索引将函数表的地址分配给 pAMXFunctions.                                                                                                                                                                                                                                                                   |
| **PLUGIN_DATA_LOGPRINTF** | 另一个用于 Load 函数中传递的多维数组的索引. 这个索引包含 logprintf 函数的地址, 这个函数打印信息并将这些信息保存到服务器的日志文件中. 如果你的插件使用这个函数, 你必须使用这个索引将地址分配给 logprintf 函数指针.                                                                                                                                                                                      |
| **AMX_NATIVE_INFO**   | 这个结构与 amx_Register 一起使用. 它包含一个字符串, 保存你的新原生函数的名称, 以及指向它地址的指针.                                                                                                                                                                                                                                                                                                                |

还有一些其他重要的定义涉及 AMX 函数错误, 但它们已经在 amx 头文件中进行了记录. 因此, 我将直接发布包含所有错误代码及其对应注释的枚举. **注意：** 每个 amx 函数(除了 amx_NativeInfo)在遇到问题时都会返回这些错误代码中的一个. 

```cpp
enum
{
  AMX_ERR_NONE,
  /* 为抽象机器的退出码保留前15个错误代码 */
  AMX_ERR_EXIT,         /* 强制退出 */
  AMX_ERR_ASSERT,       /* 断言失败 */
  AMX_ERR_STACKERR,     /* 栈/堆冲突 */
  AMX_ERR_BOUNDS,       /* 索引超出范围 */
  AMX_ERR_MEMACCESS,    /* 无效的内存访问 */
  AMX_ERR_INVINSTR,     /* 无效的指令 */
  AMX_ERR_STACKLOW,     /* 栈下溢 */
  AMX_ERR_HEAPLOW,      /* 堆下溢 */
  AMX_ERR_CALLBACK,     /* 无回调或无效回调 */
  AMX_ERR_NATIVE,       /* 本地函数失败 */
  AMX_ERR_DIVIDE,       /* 除零错误 */
  AMX_ERR_SLEEP,        /* 进入休眠模式 - 代码可以重新启动 */
  AMX_ERR_INVSTATE,     /* 对于此访问的无效状态 */

  AMX_ERR_MEMORY = 16,  /* 内存不足 */
  AMX_ERR_FORMAT,       /* 文件格式无效 */
  AMX_ERR_VERSION,      /* 文件适用于更新版本的AMX */
  AMX_ERR_NOTFOUND,     /* 未找到函数 */
  AMX_ERR_INDEX,        /* 无效的索引参数(错误的入口点) */
  AMX_ERR_DEBUG,        /* 调试器无法运行 */
  AMX_ERR_INIT,         /* AMX未初始化(或重复初始化) */
  AMX_ERR_USERDATA,     /* 无法设置用户数据字段(表格已满) */
  AMX_ERR_INIT_JIT,     /* 无法初始化JIT */
  AMX_ERR_PARAMS,       /* 参数错误 */
  AMX_ERR_DOMAIN,       /* 域错误, 表达式结果超出范围 */
  AMX_ERR_GENERAL,      /* 一般错误(未知或不具体的错误) */
};
```

## Amx函数

amx函数在PAWN实施者指南中有非常详细的文档, 可以在这里找到. 为了避免重复解释这些函数, 我将直接从实施者指南中复制它们, 并使其更具可读性；我相信这将使内容更易于访问. 也就是说, 本节主要是下一节的参考, 下一节专注于实施者指南中缺少的内容：示例代码. 注意：我将仅覆盖我认为对插件至关重要的函数(目前). 其他内容可以在实施者指南中找到, 只需确保使用我在本节中链接的版本！

### 关键

\+ => 不可用

## amx_Allot

\- 在抽象机器中保留堆空间

### 语法

```cpp
int amx_Allot(AMX *amx, int cells, cell *amx_addr, cell **phys_addr);
```

| 参数         | 描述                                                                                                                                                            |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **amx**      | 抽象机器.                                                                                                                                                       |
| **cells**    | 要保留的单元格数量.                                                                                                                                             |
| **amx_addr** | 分配的单元格的地址, 供PAWN程序(在抽象机器中运行)访问.                                                                                                         |
| **phys_addr**| 单元格的地址, 供C/C++程序访问.                                                                                                                                |

**说明：** 在早期版本的PAWN中, 数组和字符串必须在将其传递给脚本之前明确地为其分配内存. 在当前版本中, 这一功能已被amx_PushArray和amx_PushString函数在很大程度上取代. PAWN函数只能访问其抽象机器内部的内存. 如果要"按引用"传递参数到PAWN函数, 必须将该参数的地址传递给amx_Exec. 此外, 该地址本身也必须在抽象机器的地址范围内. 一个额外的复杂性是, 抽象机器使用相对于抽象机器数据段的地址, 而主机程序使用相对于操作系统提供的环境的地址. 

amx_Allot在抽象机器内部分配内存单元, 并返回两个地址. amx_addr参数是相对于抽象机器的"数据段"的变量地址；这是您应该传递给amx_Exec的值(通过amx_Push). 参数phys_addr持有相对于主机程序地址空间的地址. 因此, C/C++程序可以使用此地址并写入分配的内存. amx_Exec返回后, 您可以检查内存块(amx_Exec调用的PAWN函数可能已经写入其中), 然后通过调用amx_Release最终释放它. 

**另请参见：** [amx_Exec](#amx_Exec), [amx_PushArray](#amx_PushArray), [amx_PushString](#amx_PushString), [amx_Release](#amx_Release)

## amx_ctof

\- 将"cell"转换为"float"

### 语法

```cpp
[float] amx_ctof([cell] c);
```

| 参数    | 描述                                             |
| ------- | ------------------------------------------------ |
| **c**   | 要从"cell"类型转换为"float"的值.              |

**返回：** 相同的位模式, 但现在为浮点类型. 

**说明：** 此宏将"cell"类型转换为"float"类型, 而不更改位模式. 在C/C++中, 正常的类型转换会更改表达式的内存表示, 使其在IEEE 754格式中的数值最接近原始整数值. PAWN解析器和抽象机器将浮点值存储在单元格中——从单元格中检索浮点值时, 位模式不得更改. 

**另请参见：** [amx_ftoc](#amx_ftoc)

## amx_Exec

\- 执行代码

### 语法

```cpp
  int amx_Exec(AMX *amx, long *retval, int index);
```

| 参数      | 描述                                                                                                                                                                                                                                     |
| --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **amx**   | 从中调用函数的抽象机器.                                                                                                                                                                                                                 |
| **retval**| 调用函数后的返回值将保存在此处. 如果不关心返回值, 此参数可以为NULL.                                                                                                                |
| **index** | "公共函数表"中的索引；它指示要执行的函数. 有关更多信息, 请参见amx_FindPublic. 使用AMX_EXEC_MAIN从主函数开始执行, 使用AMX_EXEC_CONT继续从"休眠状态"执行.                                     |

**说明：** 此函数运行脚本, 从指定的函数开始. 它调用任何本地函数调用的回调函数, 该代码在amx中执行. amx_Exec假定所有本地函数都已通过amx_Register正确初始化. 

**另请参见：** [amx_FindPublic](#amx_FindPublic), [amx_Register](#amx_Register)

## amx_FindPublic

\- 返回公共函数的索引

### 语法

```cpp
int amx_FindPublic(AMX *amx, char *funcname, int *index);
```

| 参数        | 描述                                                                            |
| ----------- | ------------------------------------------------------------------------------- |
| **amx**     | 抽象机器.                                                                       |
| **funcname**| 要查找的公共函数的名称.                                                           |
| **index**   | 返回时, 此参数保存所请求的公共函数的索引.                                         |

**另请参见：** [amx_Exec](#amx_Exec), amx_FindNative+, amx_FindPubVar+, amx_GetPublic+, amx_NumPublics+

## amx_ftoc

\- 将"float"转换为"cell"

### 语法

```cpp
[cell] amx_ftoc([float] f);
```

| 参数    | 描述                                             |
| ------- | ------------------------------------------------ |
| **f**   | 要从"float"类型转换为"cell"的值.              |

**返回：** 相同的位模式, 但现在为"cell"类型. 

**说明：** 此宏将"float"类型转换为"cell"类型, 而不更改位模式. 在C/C++中, 正常的类型转换会更改表达式的内存表示, 使其在整数格式中的数值为原始有理值的整数(截断)值. PAWN解析器和抽象机器将浮点值存储在单元格中——将浮点值存储在单元格中时, 位模式不得更改. 

**另请参见：** [amx_ctof](#amx_ctof)

## amx_GetAddr

\- 解析AMX地址

### 语法

```cpp
int amx_GetAddr(AMX *amx, cell amx_addr, cell **phys_addr);
```

| 参数        | 描述                                                                                                                                                                                  |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **amx**     | 抽象机器.                                                                                                                 |
| **amx_addr**| 相对于抽象机器的地址.                                                                                                                                                                 |
| **phys_addr**| 一个指向变量的指针, 该变量将保存指定单元格的内存地址. 如果amx_addr参数不是抽象机器内部的有效地址, phys_addr将被设置为NULL.  |

**说明：** 此函数返回抽象机器中地址的内存地址. 通常在扩展模块中使用此函数, 因为它允许您访问抽象机器内部的变量. 

## amx_GetString

\- 从抽象机器中检索字符串

### 语法

```cpp
int amx_GetString(char *dest, cell *source, int use_wchar, size_t size);
```

| 参数         | 描述                                                                                                                                                                           |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **dest**     | 指向字符数组的指针, 该数组的大小足以容纳转换后的源字符串.                                                                                                                      |
| **source**   | 指向源字符串的指针. 使用 amx_GetAddr 将 amx 中的字符串地址转换为物理地址.                                                                                                      |
| **use_wchar**| 非零值将 dest 参数解释为指向"宽字符"的指针——即 wchar_t, 无论其 char 类型如何. 这允许函数存储 Unicode 字符串.                                                                     |
| **size**     | 要存储在 dest 中的最大字符数, 包括终止零字节. 如果源中的字符串更长, 则 dest 中的字符串将被截断.                                                                                  |

**备注：** 此函数将"pawn"格式的打包字符串和未打包字符串转换为"C"格式. 当检索未打包字符串且参数 use_wchar 设置为零时, 函数可能会将宽字符截断为 8 位 ASCII/ANSI 字符. 

**另见：** [amx_SetString](#amx_SetString)

## amx_Push

\- 通过值传递数字参数

### 语法

```cpp
int amx_Push(AMX *amx, cell value);
```

| 参数       | 描述                                   |
| ---------- | ------------------------------------- |
| **amx**    | 抽象机器.                              |
| **value**  | 要传递给公共函数的值.                  |

**备注：** 任何参数必须在调用 amx_Exec 之前推送到函数. 如果公共函数有多个参数, 必须以相反的顺序推送参数. 

**另见：** [amx_Exec](#amx_Exec), [amx_PushArray](#amx_PushArray), [amx_PushString](#amx_PushString)

## amx_PushArray

\- 通过引用传递参数或数组

### 语法

```cpp
int amx_PushArray(AMX *amx, cell *amx_addr, cell **phys_addr, const cell array[], int numcells);
```

| 参数         | 描述                                                                                                                                                            |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **amx**      | 抽象机器.                                                                                                                                                       |
| **amx_addr** | 分配的单元格的地址, pawn 程序(在抽象机器中运行)可以访问该地址, 需要释放内存块. 此参数可以为 NULL.                                                             |
| **phys_addr**| C/C++ 程序访问的单元格的地址. 此参数可以为 NULL.                                                                                                              |
| **array**    | 要传递给公共函数的值数组. 必须通过引用传递的单个单元格被视为单个单元格数组.                                                                                    |
| **numcells** | 数组中的元素数量.                                                                                                                                                |

**备注：** 任何参数必须在调用 amx_Exec 之前推送到函数. 如果公共函数有多个参数, 必须以相反的顺序推送参数. 此函数在抽象机器的"堆"中分配数组内存. 此内存必须使用 amx_Release 释放. 有关参数 amx_addr 和 phys_addr 的详细信息, 请参见函数 amx_Allot. 

**另见：** [amx_Exec](#amx_Exec), [amx_Push](#amx_Push), [amx_PushString](#amx_PushString), [amx_Release](#amx_Release)

## amx_PushString

\- 传递字符串参数

### 语法

```cpp
int amx_PushString(AMX *amx, cell *amx_addr, cell **phys_addr, const char *string, int pack, int use_wchar);
```

| 参数         | 描述                                                                                                                                                                  |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **amx**      | 抽象机器.                                                                                                                                                             |
| **amx_addr** | 分配的单元格的地址, pawn 程序(在抽象机器中运行)可以访问该地址, 释放内存块需要此参数. 此参数可以为 NULL.                                                           |
| **phys_addr**| C/C++ 程序访问的单元格的地址. 此参数可以为 NULL.                                                                                                                      |
| **string**   | 要传递给公共函数的字符串.                                                                                                                                              |
| **pack**     | 非零值将源字符串转换为抽象机器中的打包字符串, 零值将源字符串转换为单元格字符串.                                                                                    |
| **use_wchar**| 非零值将字符串参数解释为指向"宽字符"的指针, 即 wchar_t, 无论其 char 类型如何. 这允许函数接受 Unicode 字符串.                                                         |

**备注：** 任何参数必须在调用 amx_Exec 之前推送到函数. 如果公共函数有多个参数, 必须以相反的顺序推送参数. 此函数在抽象机器的"堆"中分配内存. 此内存必须使用 amx_Release 释放. 有关参数 amx_addr 和 phys_addr 的详细信息, 请参见函数 amx_Allot. 当传入 Unicode 字符串并请求抽象机器中的打包格式(即 pack 和 use_wchar 都为 true)时, 字符将被截断为 8 位. 

**另见：** [amx_Exec](#amx_Exec), [amx_Push](#amx_Push), [amx_PushArray](#amx_PushArray), [amx_Release](#amx_Release), [amx_SetString](#amx_SetString)

## amx_Register

\- 使本地函数可知

### 语法

```cpp
int amx_Register(AMX *amx, AMX NATIVE INFO *list, int number);
```

| 参数       | 描述                                                                                                                                                                                                       |
| ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **amx**    | 抽象机器.                                                                                                                                                                                                  |
| **list**   | 结构数组, 每个结构包含一个指向本地函数名称的指针和一个函数指针. 列表可以用两个 NULL 指针的结构可选地终止.                                                                                              |
| **number** | 列表数组中的结构数量, 或 -1 如果列表以包含两个 NULL 指针的结构结束.                                                                                                                                     |

**备注：** 成功时, 此函数返回 0(AMX_ERR_NONE). 如果此函数返回错误代码 AMX_ERR_NOTFOUND, 则表示在提供的列表中找不到一个或多个由 pawn 程序使用的本地函数. 可以再次调用 amx_Register 来注册额外的函数列表. 

要检查编译脚本中使用的所有本地函数是否已注册, 可以将参数 list 设置为 NULL 调用 amx_Register. 此调用不会注册任何新的本地函数, 但如果有任何本地函数未注册, 则仍会返回 AMX_ERR_NOTFOUND. 

**另见：** amx_NativeInfo+

## amx_Release

\- 释放抽象机器中的堆空间

### 语法

```cpp
int amx_Release(AMX *amx, cell amx_addr);
```

| 参数         | 描述                                                                                                                                                           |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **amx**      | 抽象机器.                                                                                                                                                      |
| **amx_addr** | 分配的单元格的地址, pawn 程序(在抽象机器中运行)看到的地址. 此值由 amx_Allot、amx_PushArray 和 amx_PushString 返回.                                      |

**备注：** amx_Allot 按升序在堆上分配内存(堆向上增长). amx_Release 释放高于输入参数 amx_addr 值的所有内存. 即, 单次调用 amx_Release 可以释放多次调用 amx_Allot 的内存, 如果传递的是第一次分配的 amx_addr 值. amx_PushArray 和 amx_PushString 内部使用 amx_Allot, 因此这些函数也适用相同的过程. 

**另见：** [amx_Allot](#amx_Allot), [amx_PushArray](#amx_PushArray), [amx_PushString](#amx_PushString)

## amx_SetString

\- 将字符串存储在抽象机器中

### 语法

```cpp
int amx_SetString(cell *dest, char *source, int pack, int use_wchar, size_t size);
```

| 参数         | 描述                                                                                                                                                                                         |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **dest**     | 指向 amx 中字符数组的指针, 其中存储转换后的字符串. 使用 amx_GetAddr 将 amx 中的字符串地址转换为物理地址.                                                                                   |
| **source**   | 指向源字符串的指针.                                                                                                                                                                        |
| **pack**      | 非零值将源字符串转换为抽象机中的打包字符串, 零值将源字符串转换为单元字符串.                                                               |
| **string**    | 传递给公共函数的字符串.                                                                                                                                                          |
| **use_wchar** | 非零值将字符串参数解释为"宽字符"即 wchar_t 的指针, 无论其字符类型如何. 这允许函数接受 Unicode 字符串.                    |
| **size**      | 存储在 dest 中的最大单元数, 包括终止的零字节或单元. 如果源字符串的长度超过了 dest 可以容纳的单元数, 则会被截断. |

**注意：** 当你传递 Unicode 字符串并要求在抽象机中使用打包格式(即 pack 和 use_wchar 都为 true)时, 字符将被截断为 8 位. 

**另见:** [amx_GetString](#amx_GetString)

## amx_StrLen

\- 获取字符串的字符长度

### 语法

```cpp
int amx_StrLen(const cell *cstring, int *length);
```

| 参数   | 描述                                             |
| ----------- | ------------------------------------------------------- |
| **cstring** | 抽象机中的字符串.                     |
| **length**  | 该参数将在返回时保存字符串的长度. |

**注意:** 这个函数确定字符串的字符长度, 不包括零终止字符(或单元格). 一个打包字符串占用的单元格比其字符数少. 如果 cstring 参数为 NULL, 则长度参数将被设置为零 (0), 并且函数将返回错误代码. 对于将解包字符串转换为 UTF-8, 函数 amx_UTF8Len 可能更方便. 

**另见:** [amx_GetAddr](#amx_GetAddr), [amx_GetString](#amx_GetString), [amx_SetString](#amx_SetString), [amx_StrParam](#amx_StrParam), amx_UTF8Len+

## amx_StrParam

\- 从抽象机器中获取字符串参数

### 语法

```cpp
amx_StrParam([AMX*] amx, [int] param, [char*] result);
```

| 参数       | 描述                                            |
| ---------- | ---------------------------------------------- |
| **amx**    | 抽象机器.                                       |
| **param**  | 参数编号.                                       |
| **result** | 一个变量, 用于保存返回结果.                      |

**注意:** 这个宏分配了一块内存(使用 alloca)并将字符串参数(传递给本地函数)复制到该块内存中. 有关使用此宏的示例, 请参见第 56 页. 

**另见:** [amx_GetAddr](#amx_GetAddr), [amx_GetString](#amx_GetString), [amx_StrLen](#amx_StrLen)

## Amx 函数示例

为了避免大段文字墙, 我决定在代码中添加注释来解释我在做什么, 而不是在主题中逐一说明. 阅读示例时, 最好同时打开 wiki 文章作为参考. 

### 注册本地函数

我们提供给 PAWN 的每一个函数都必须注册, 以便抽象机器能够意识到它的存在. 因此, 我认为从 amx_Register 开始可能是个好主意！幸运的是, 我们实际上已经在之前的部分使用了注册本地函数的示例, 所以我将再次使用这个示例并添加一些注释. 

```cpp
//我们希望向抽象机器注册的函数数组. 
AMX_NATIVE_INFO PluginNatives[] =
{
    //在这里我们指定本地函数的信息, 并用两个空值终止数组. 
    {"HelloWorld", HelloWorld},
    {0, 0}
};

PLUGIN_EXPORT int PLUGIN_CALL AmxLoad( AMX *amx )
{
    //在这里我们将本地函数注册到抽象机器. 注意我们使用 -1. 通常这应该是我们正在注册的函数的数量, 但由于我们用两个空值终止了数组, 我们可以指定 -1. 
    return amx_Register(amx, PluginNatives, -1);
}
```

- ### 获取字符串及其长度

```cpp
//这个函数演示了：如何从 PAWN 获取字符串(及其长度). 
//PAWN 本地函数：native PrintPawnString(const str[]);
cell AMX_NATIVE_CALL PrintPawnString(AMX* amx, cell* params)
{
    int
        len = NULL,
        ret = NULL;

    cell *addr  = NULL;

    //获取我们字符串参数 (str) 的地址, 然后获取其长度
    amx_GetAddr(amx, params[1], &addr);
    amx_StrLen(addr, &len);

    //如果输入的长度不为 0
    if(len)
    {
        //我们增加 len, 因为我们在分配内存时要为终止的 null 字符留出空间. 
        //此外, 因为 GetString 的大小参数计算了 null 字符, 我们必须指定字符串的长度 + 1；否则我们的字符串将被截断以为 null 字符留出空间(我们会丢失 1 个字符). 
        len++;

        //分配内存以容纳我们传递的字符串 (str), 然后使用分配的内存来"获取"字符串. 
        char* text = new char[ len ];
        amx_GetString(text, addr, 0, len);

        //使用 logprintf 打印字符串 (text). 我们不使用 std::cout, 因为它不会写入服务器日志(只写入控制台). 
        logprintf(text);

        //释放我们的内存...
        delete[] text;
    }
    return 1;
}
```

### 获取字符串的替代方法

我决定添加这个部分, 因为我知道人们会被它的简单性所吸引, 我认为他们应该了解使用这种方法可能带来的风险和问题. 

```cpp
//此函数演示：一种从 pawn 获取字符串的替代方法及其可能带来的风险. 
//PAWN 原生函数：native PrintPawnString2(const str[]);
cell AMX_NATIVE_CALL PrintPawnString2(AMX* amx, cell* params)
{
    //这种方法并不推荐, 因为 amx_StrParam 宏使用了 alloca 函数, 而 alloca 不是 C 或 C++ 的标准函数. 
    //使用这种方法存在堆栈溢出的风险(如果你分配了大量内存), 同时也存在错误的风险(这个函数依赖于机器和编译器 - 一些实现被认为有缺陷). 

    char* text = NULL;
    amx_StrParam(amx, params[1], text);

    //检查 text 是否为 null
    if(text != NULL)
    {
        //使用 logprintf 打印字符串(text). 我们不使用 std::cout, 因为它不会写入服务器日志(仅控制台). 
        logprintf(text);
    }
    return 1;
}
```

### 如何设置一个字符串

```cpp
//此函数演示了：如何修改PAWN字符串. 
//PAWN 原生函数: native SetPawnString(str[], len = sizeof(str));
cell AMX_NATIVE_CALL SetPawnString(AMX* amx, cell* params)
{
    const string message = "这是来自C/++的字符串!!";
    cell* addr = NULL;

    //获取字符串参数(str)的地址, 并存储我们的消息
    amx_GetAddr(amx, params[1], &addr);
    amx_SetString(addr, message.c_str(), 0, 0, params[2]);
    return 1;
}
```

### 类型转换并返回浮点数

```cpp
//此函数演示了：如何将浮点数转换为PAWN浮点数并返回. 
//PAWN 原生函数: native Float:ReturnPawnFloatVal();
cell AMX_NATIVE_CALL ReturnPawnFloatVal(AMX* amx, cell* params)
{
    //由于PAWN是一种无类型语言, 它将所有内容存储为32位整数, 并依靠标签来处理特殊数据. 
    //浮点数也不例外；它仍然是32位整数, 但它有一个Float标签, 表示它不应像普通整数那样处理. 
    //那么如何在不丢失数据的情况下将浮点数转换为32位整数(用于PAWN)呢？
    //答案是amx_ftoc宏！

    //宏amx_ftoc在保持位模式的同时, 将浮点数类型转换为单元格(amx_ctof做相反的操作). 
    const float f = 22.624f;
    return amx_ftoc(f);
}
```

### 通过引用传递参数

```cpp
//此函数演示了：如何通过引用传递参数. 
//PAWN 原生函数: native SetPawnReferenceVars(&value1, &Float:value2);
cell AMX_NATIVE_CALL SetPawnReferenceVars(AMX* amx, cell* params)
{
    const int val = 65;
    const float val2 = 84.54f;

    cell* addr[2] = {NULL, NULL};

    //获取"value1"和"value2"的地址
    amx_GetAddr(amx, params[1], &addr[0]);
    amx_GetAddr(amx, params[2], &addr[1]);

    //取消引用指针并分配我们的值. 请记住, 始终使用宏"amx_ftoc"将浮点数转换为单元格(PAWN的适当浮点格式)！
    *addr[0] = val;
    *addr[1] = amx_ftoc(val2);

    return 1;
}
```

### 获取和修改数组值

```cpp
//此函数演示了：如何获取和修改数组值. 
//PAWN 原生函数: native PrintPawnArray(arr[], size = sizeof(arr));
cell AMX_NATIVE_CALL PrintPawnArray(AMX* amx, cell* params)
{
    //确保有东西可打印...
    if(params[2] > 0)
    {
        cell* addr = NULL;

        //获取我们PAWN数组中第一个值的地址. 
        amx_GetAddr(amx, params[1], &addr);

        for(int i = 0, l = params[2]; i < l; i++)
        {
            //这非常简单：我们取消引用addr指针以获取要打印的值. 
            //你应该已经知道这一点, 但数组和指针几乎是同一回事, 所以我们可以使用指针运算添加偏移量, 或者只是使用下标运算符(最终*(addr+1)和addr[1]是一样的). 
            logprintf("arr[%d] = %d", i, *(addr + i));

            //如果你想修改数组, 你只需通过取消引用addr并分配一个新值来更改其值. 
            //你也应该知道这一点, 我只是为了完整性而添加它. 在这里, 我们将数组的第一个值更改为5(注意：由于它是第一个值, 没有使用偏移量). 

            // *(addr) = 5;
        }
    }
    return 1;
}
```

### 调用回调函数

```cpp
//此函数演示了：如何调用PAWN脚本中的回调函数. 
//PAWN 原生函数: native EmitPawnCallback();
cell AMX_NATIVE_CALL EmitPawnCallback(AMX* amx, cell* params)
{
    int idx;

    const cell var = 3;
    const cell arr[] = {100, 4, 33};
    const string str = "来自C++的随机消息. ";


    //Pawn 回调：forward OnPawnCallbackEmitted(var, arr[], str[]);
    //找到我们的回调并将其位置存储在公共函数表中(它的索引)到我们的idx变量中. 
    if(!amx_FindPublic(amx, "OnPawnCallbackEmitted", &idx))
    {
        cell
            ret,
            addr;

        //在这里, 我们将参数推送到函数中. 注意, 如果函数有多个参数, 你必须以相反的顺序推送你的值！这就是为什么我们先推送字符串, 然后是数组, 最后是整数. 

        amx_PushString(amx, &addr, NULL, str.c_str(), NULL, NULL);
        //amx_PushArray(amx, NULL, NULL, arr, sizeof(arr) / sizeof(cell));

        cell
            amx_addr,
            *phys_addr;

        //由于某种原因, amx_PushArray似乎会使服务器崩溃, 而我完全不知道为什么. 根据实现者的指南和代码, 我的使用应该是完全有效的. 由于该函数不起作用, 我们必须
        //使用旧方法, 自己分配内存, 设置它, 并将其推送到我们自己手动管理的空间中. 这非常简单. 我们使用amx_Allot在堆上分配内存(这会返回两个地址- 一个在抽象机器中的位置
        //(amx_addr), 另一个是相对于实际服务器的地址空间(phsy_addr - 我们可以在C++中使用)). 一旦分配了内存, 我们使用memcpy将内存从我们的数组复制到phys_addr地址位置. 
        amx_Allot(amx, sizeof(arr) / sizeof(cell), &amx_addr, &phys_addr);
        memcpy(phys_addr, arr, sizeof(arr));
        amx_Push(amx, amx_addr);

        //推送我们的整数值
        amx_Push(amx, var);

        //使用我们之前获得的idx变量执行函数. 
        //注意：此函数的第二个参数是回调返回的值(如果你对返回值不感兴趣, 可以为NULL). 
        amx_Exec(amx, &ret, idx);

        //释放我们分配的内存. 函数amx_Alloc在抽象机器的堆上分配内存. 
        //函数amx_PushString和amx_PushArray都在内部使用该函数, 因此每次使用这些函数时, 你都必须释放内存. 注意：我们使用了amx_PushString和amx_PushArray, 却只有一个释放调用. 
        //这是因为堆上的内存是按升序分配的！amx_Release会释放从某一点以上的所有内存
        //(第二个参数, amx_addr - 即我们的addr变量). 由于它是这样做的, 我们只存储了来自amx_PushString调用的地址, 因为它会删除从该点开始的所有内容. 
        amx_Release(amx, addr);

        //打印返回值(为了完整性). 
        logprintf("EmitPawnCallback 注意：OnPawnCallbackEmitted回调返回%d!", ret);

    }
    return 1;
}
```

## 调用原生函数和挂钩回调函数

在进入回调函数挂钩或SA-MP原生函数调用之前, 我想先澄清一些事情. 有些人似乎认为插件是PAWN的替代品, 但事实并非如此. 插件的设计目的是为PAWN提供功能, 而不是取代它. 有时候, 将某些功能开发为插件而不是PAWN脚本是没有意义的——重要的是要问自己是否真的应该将某些功能开发为插件而不是PAWN脚本. 

对于回调挂钩和SA-MP原生函数调用, 有很多不同的方法可以使用. 不过, 我现在只会专注于每种方法中的一种. 

### Invoke

Invoke是一种由incognito创建的SA-MP原生函数调用方法. 你可以在[这里](https://github.com/Dystans/SA-MP_Invoke_2.0)找到它. 请注意, 其中有一个文本文件, 包含大量SA-MP原生函数调用. 这对Invoke至关重要, 必须添加到你的插件的include文件中. 如果你没有一个使用你插件所需的所有SA-MP原生函数的公共PAWN函数, Invoke将无法工作. 此函数仅用于让Invoke找到原生函数的地址, 并且**绝不能**实际在任何地方使用. 

#### 开始

在我们开始调用SA-MP原生函数之前, 我们必须设置Invoke. 我们需要做的第一件事是将其包含在我们的项目中, 你应该还记得如何在前面的"开始"部分中执行此操作. 一旦将文件添加到项目中, 只需几个简单步骤即可让Invoke开始工作：

- 包含Invoke头文件. 
- 在Load下为Invoke实例分配内存. 
- 每次在AmxLoad下加载新的AMX实例时, 推送amx_list成员变量. 
- 每次卸载脚本时, 迭代Invoke的amx_list, 找到卸载的AMX实例, 并在AmxUnload下擦除它. 
- 创建一个原生函数, 当加载使用我们插件的filterscript或gamemode时, 调用Invoke的"getAddresses"成员函数供PAWN使用. 

这就是为你的插件设置Invoke的全部内容. 剩下要做的就是将Invoke包中找到的公共PAWN函数(我们之前提到的txt文件)添加到你的插件的include文件中, 并在加载脚本时使用最后一个设置步骤中的原生函数. 对于那些将创建用于公开发布的插件的人, 我建议你查看这个帖子. 它允许在OnGameModeInit/OnFilterScriptInit回调中进行干净无缝的"挂钩", 以便你可以注册SA-MP的原生地址, 而不会强迫最终用户自己将函数添加到这些回调中. 

**注意：** 我知道以文本形式解释这一点可能对大多数新用户来说并不理想；然而, 这些都是标准的C/++任务, 你应该已经熟悉了——而那些不熟悉的(例如：创建原生函数)已经解释过了！如果你在跟进时遇到困难, 我建议你先熟悉一下C/++. 不过话虽如此, 本文稍后将提供更新的源代码文件(以及我们插件的实际include文件), 其中包含我们到目前为止学到的所有内容的注释. 如果你遇到任何问题, 请查看该更新的源文件. 

#### 添加SA-MP原生函数

不幸的是, Invoke并不是魔法, 它确实需要维护以添加新的原生函数或删除已弃用的原生函数. 上一节中的版本包含了SA-MP 0.2.2版本的所有原生函数, 因此缺少了所有较新的函数. 出于这两个原因, 我决定添加此部分！如果有人足够好心添加所有缺失的原生函数, 我将更新Invoke包并在致谢中包含他们的名字——如果没有, 我建议根据需要添加原生函数. 

在Invoke头文件中, 你应该看到一个大的函数名称数组(数组适当地命名为"name")和许多静态"Native"结构声明. 要添加原生函数, 你只需将其名称添加到名称数组中, 并使用适当的信息声明一个Native结构——名称和参数说明符. 有许多可用的参数说明符可供使用：

```cpp
i = integer(整数)
f = float value(浮点值)
s = string(字符串)
v = reference variable(引用变量)(例如GetPlayerPos, GetPlayerKeys等)
p = string var(字符串变量)(例如GetPlayerName等)
```

**记得更新调用所有原生函数的公共PAWN函数.** 每次添加原生函数时, 你还需要将其添加到该公共函数中.

#### 调用原生函数

Invoke使用一个适当命名为"callNative"的可变参数成员函数来调用原生函数. 此函数的参数为指向包含原生函数信息的Native结构的指针(参见上一节), 以及该原生函数的所有参数的省略号. 该函数返回被调用的原生函数的返回值. 以下是一个调用多个原生函数的示例函数, 其中使用了不同的参数类型(int、引用和字符串变量). 

```cpp
//此函数演示：如何使用Invoke调用SA-MP原生函数. 
//PAWN原生函数：native WhereIsPlayer(playerid);
cell AMX_NATIVE_CALL WhereIsPlayer(AMX* amx, cell* params)
{
    float
        x = NULL,
        y = NULL,
        z = NULL;

    //获取玩家位置(并检查他是否已连接). 
    if(g_Invoke->callNative(&PAWN::GetPlayerPos, params[1], &x, &y, &z))
    {
        char name[24];

        //获取玩家的其他信息(姓名、内饰和虚拟世界)并打印出来. 
        g_Invoke->callNative(&PAWN::GetPlayerName, params[1], name);
        int interior = g_Invoke->callNative(&PAWN::GetPlayerInterior, params[1]);
        int virtualworld = g_Invoke->callNative(&PAWN::GetPlayerVirtualWorld, params[1]);

        logprintf("%s 位于 X: %.2f, Y: %.2f, Z: %.2f (虚拟世界: %d, 内饰: %d). ", name, x, y, z, virtualworld, interior);
        return 1;

    }
    return 0;
}
```

### 挂钩回调函数

使用Invoke方法时, 对于回调函数来说, 没有100%透明的挂钩方法. 想要挂钩使用Invoke的回调函数的插件需要通过PAWN来实现. 你可以创建一个原生函数, 然后在你想挂钩的PAWN回调函数内调用该原生函数, 并将该原生函数用作伪回调. 你可以使用ALS挂钩方法来实现这一点, 这样可以让最终用户不需要做任何工作. 

第一步显然是创建原生函数(记得将其添加到我们要注册的原生函数列表中, 并在你的include文件中添加它). 我决定挂钩的回调函数是OnPlayerConnect, 因此我将编写一个具有与该回调函数相同参数的原生函数, 然后添加需要该回调的代码(在这种情况下是一个小玩笑).

```cpp
//此函数演示：如何编写一个原生函数来充当回调函数. 
//PAWN原生函数：native TEST_Hook_OnPlayerConnnect(playerid);
cell AMX_NATIVE_CALL TEST_Hook_OnPlayerConnnect(AMX* amx, cell* params)
{
    //获取玩家的姓名
    char name[24];
    g_Invoke->callNative(&PAWN::GetPlayerName, params[1], name);

    //检查他的名字是否是"Mario". 
    if(string("Mario") == name)
    {
        //如果是, 发送我们的搞笑信息并踢他. 
        g_Invoke->callNative(&PAWN::SendClientMessage, params[1], 0xFFFFFFFF, "对不起 {FF0000}Mario, {FFFFFF}但你的公主在另一个服务器. ");
        g_Invoke->callNative(&PAWN::Kick, params[1]);
    }
    return 1;
}
```

`TEST_Hook_OnPlayerConnnect` 现在将作为我们插件的 `OnPlayerConnect` 回调函数. 由于我们插件的名称是"Test"且相对较短, 我决定让其作为我们的挂钩前缀. 你通常需要为你的前缀选择一些独特的内容, 以避免与其他人的插件/include文件发生冲突. 注意： 我们仍然需要使用之前提到的ALS方法从PAWN中调用此函数以方便用户. 由于Y_Less对ALS方法解释得非常好, 因此我没有必要详细介绍它, 我将简单提供我们 `TEST_Hook_OnPlayerConnect` 回调函数的挂钩示例. 这个示例应放在你的插件include文件中. 

```cpp
public OnPlayerConnect(playerid)
{
    TEST_Hook_OnPlayerConnnect(playerid);
    //..

    if(funcidx("TEST_OnPlayerConnect") != -1)
    {
        return CallLocalFunction("TEST_OnPlayerConnect", "d", playerid);
    }
    return 1;
}

#if defined _ALS_OnPlayerConnect
    #undef OnPlayerConnect
#else
    #define _ALS_OnPlayerConnect
#endif
#define OnPlayerConnect TEST_OnPlayerConnect

forward TEST_OnPlayerConnect(playerid);
```

## 结束语

一些有经验的插件开发者可能会疑惑, 为什么我没有在"调用原生函数和挂钩回调"这一节中包含GDK(Game Development Kit). 我决定不提及它有两个原因. 首先, 我目前的时间非常有限, 无法投入时间来适应这个新系统. 其次, GDK非常实验性, 目前在崩溃和其他问题上存在一些困境. 我完全理解Invoke和GDK之间的速度差异, 并且如果没有其他人这样做, 我将来肯定会添加它(请记住, 这本来是一个社区驱动的项目). 不过, 我认为最好还是等待这些问题得到更多解决(zeex是一位非常出色的编码者, 我相信他会解决所有问题). 

另外, 正如我承诺的那样, 以下是包含注释的更新版include/source文件, 其中包含了我们希望学习到的所有内容：

### 插件include

```cpp
//任何带有"TEST"前缀的内容都应更改, 如果你的插件名称不同. 这同样适用于插件代码(特别是TEST_Hook_OnPlayerConnect). 
#if defined _TEST_INCLUDED
    #endinput
#endif
#define _TEST_INCLUDED
#pragma library Test

#include <a_samp>

//本地函数例子
native PrintPawnString(const str[]);
native PrintPawnString2(const str[]);
native SetPawnString(str[], len = sizeof(str));
native Float:ReturnPawnFloatVal();
native SetPawnReferenceVars(&value1, &Float:value2);
native PrintPawnArray(arr[], size = sizeof(arr));
native EmitPawnCallback();
native WhereIsPlayer(playerid);
native TEST_Hook_OnPlayerConnnect(playerid);

//调用本地
native Invoke_GetAddresses();


//挂钩回调
public OnPlayerConnect(playerid)
{
    TEST_Hook_OnPlayerConnnect(playerid);
    //..

    if(funcidx("TEST_OnPlayerConnect") != -1)
    {
        return CallLocalFunction("TEST_OnPlayerConnect", "d", playerid);
    }
    return 1;
}

#if defined _ALS_OnPlayerConnect
    #undef OnPlayerConnect
#else
    #define _ALS_OnPlayerConnect
#endif
#define OnPlayerConnect TEST_OnPlayerConnect

forward TEST_OnPlayerConnect(playerid);

public OnGameModeInit()
{
    Invoke_GetAddresses();
    //..

    if(funcidx("TEST_OnGameModeInit") != -1)
    {
        return CallLocalFunction("TEST_OnGameModeInit", "");
    }
    return 1;
}

#if defined _ALS_OnGameModeInit
    #undef OnGameModeInit
#else
    #define _ALS_OnGameModeInit
#endif
#define OnGameModeInit TEST_OnGameModeInit

forward TEST_OnGameModeInit();


public OnFilterScriptInit()
{
    Invoke_GetAddresses();
    //..

    if(funcidx("TEST_OnFilterScriptInit") != -1)
    {
        return CallLocalFunction("TEST_OnFilterScriptInit", "");
    }
    return 1;
}

#if defined _ALS_OnFilterScriptInit
    #undef OnFilterScriptInit
#else
    #define _ALS_OnFilterScriptInit
#endif
#define OnFilterScriptInit TEST_OnFilterScriptInit

forward TEST_OnFilterScriptInit();


//用于调用的公共函数
forward InvokeFunction();
public InvokeFunction()
{
    new Float:fVar;
    new Var[ 256 ];
    new iVar;

    // a_samp.inc
    SendClientMessage(0, 0, "");
    SendClientMessageToAll(0, "");
    SendDeathMessage(0, 0, 0);
    GameTextForAll("", 0, 0);
    GameTextForPlayer(0, "", 0, 0);
    GetTickCount();
    GetMaxPlayers();
    SetGameModeText("");
    SetTeamCount(0);
    AddPlayerClass(0, 0.0, 0.0, 0.0, 0.0, 0, 0, 0, 0, 0, 0);
    AddPlayerClassEx(0, 0, 0.0, 0.0, 0.0, 0.0, 0, 0, 0, 0, 0, 0);
    AddStaticVehicle(0, 0.0, 0.0, 0.0, 0.0, 0, 0);
    AddStaticVehicleEx(0, 0.0, 0.0, 0.0, 0.0, 0, 0, 0);
    AddStaticPickup(0, 0, 0.0, 0.0, 0.0);
    ShowNameTags(0);
    ShowPlayerMarkers(0);
    GameModeExit();
    SetWorldTime(0);
    GetWeaponName(0, Var, sizeof( Var ) );
    EnableTirePopping(0);
    AllowInteriorWeapons(0);
    SetWeather(0);
    SetGravity(0.0);
    AllowAdminTeleport(0);
    SetDeathDropAmount(0);
    CreateExplosion(0.0, 0.0, 0.0, 0, 0.0);
    //SetDisabledWeapons();
    EnableZoneNames(0);
    IsPlayerAdmin(0);
    Kick(0);
    Ban(0);
    SendRconCommand("");
    ShowPlayerDialog(0,0,0,"lol","lol","lol","lol");

    // a_players.inc
    SetSpawnInfo(0, 0, 0, 0.0, 0.0, 0.0, 0.0, 0, 0, 0, 0, 0,0);
    SpawnPlayer(0);
    SetPlayerPos(0, 0.0, 0.0, 0.0);
//  SetPlayerPosFindZ(0, 0.0, 0.0, 0.0);
    GetPlayerPos(0, fVar, fVar, fVar);
    SetPlayerFacingAngle(0,0.0);
    GetPlayerFacingAngle(0,fVar);
    SetPlayerInterior(0,0);
    GetPlayerInterior(0);
    SetPlayerHealth(0, 0.0);
    GetPlayerHealth(0, fVar);
    SetPlayerArmour(0, 0.0);
    GetPlayerArmour(0, fVar);
    SetPlayerAmmo(0, 0,0);
    GetPlayerAmmo(0);
    SetPlayerTeam(0,0);
    GetPlayerTeam(0);
    SetPlayerScore(0,0);
    GetPlayerScore(0);
    SetPlayerColor(0,0);
    GetPlayerColor(0);
    SetPlayerSkin(0,0);
    GivePlayerWeapon(0, 0,0);
    ResetPlayerWeapons(0);
    GetPlayerWeaponData(0, 0, iVar, iVar );
    GivePlayerMoney(0,0);
    ResetPlayerMoney(0);
    SetPlayerName(0, "");
    GetPlayerMoney(0);
    GetPlayerState(0);
    GetPlayerIp(0, Var, sizeof( Var ));
    GetPlayerPing(0);
    GetPlayerWeapon(0);
    GetPlayerKeys(0,iVar,iVar,iVar);
    GetPlayerName(0, Var, sizeof( Var ));
    PutPlayerInVehicle(0, 0,0);
    GetPlayerVehicleID(0);
    RemovePlayerFromVehicle(0);
    TogglePlayerControllable(0,0);
    PlayerPlaySound(0, 0, 0.0, 0.0,0.0);
    SetPlayerCheckpoint(0, 0.0, 0.0, 0.0,0.0);
    DisablePlayerCheckpoint(0);
    SetPlayerRaceCheckpoint(0, 0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,0.0);
    DisablePlayerRaceCheckpoint(0);
    SetPlayerWorldBounds(0,0.0,0.0,0.0,0.0);
    SetPlayerMarkerForPlayer(0, 0,0);
    ShowPlayerNameTagForPlayer(0, 0,0);
    SetPlayerMapIcon(0, 0, 0.0, 0.0, 0.0, 0,0);
    RemovePlayerMapIcon(0,0);
    SetPlayerCameraPos(0,0.0, 0.0, 0.0);
    SetPlayerCameraLookAt(0, 0.0, 0.0, 0.0);
    SetCameraBehindPlayer(0);
    AllowPlayerTeleport(0,0);
    IsPlayerConnected(0);
    IsPlayerInVehicle(0,0);
    IsPlayerInAnyVehicle(0);
    IsPlayerInCheckpoint(0);
    IsPlayerInRaceCheckpoint(0);
    SetPlayerTime(0, 0,0);
    TogglePlayerClock(0,0);
    SetPlayerWeather(0,0);
    GetPlayerTime(0,iVar,iVar);
    SetPlayerVirtualWorld(0,0);
    GetPlayerVirtualWorld(0);

    // a_vehicle.inc
    CreateVehicle(0,0.0,0.0,0.0,0.0,0,0,0);
    DestroyVehicle(0);
    GetVehiclePos(0,fVar,fVar,fVar);
    SetVehiclePos(0,0.0,0.0,0.0);
    GetVehicleZAngle(0,fVar);
    SetVehicleZAngle(0,0.0);
    SetVehicleParamsForPlayer(0,0,0,0);
    SetVehicleToRespawn(0);
    LinkVehicleToInterior(0,0);
    AddVehicleComponent(0,0);
    ChangeVehicleColor(0,0,0);
    ChangeVehiclePaintjob(0,0);
    SetVehicleHealth(0,0.0);
    GetVehicleHealth(0,fVar);
    AttachTrailerToVehicle(0, 0);
    DetachTrailerFromVehicle(0);
    IsTrailerAttachedToVehicle(0);
    GetVehicleModel(0);
    SetVehicleNumberPlate(0,"");
    SetVehicleVirtualWorld(0,0);
    GetVehicleVirtualWorld(0);

    ApplyAnimation(0,"","",1.0,0,0,0,0,0);

    // a_objects.inc
    CreateObject(0,0.0,0.0,0.0,0.0,0.0,0.0);
    SetObjectPos(0,0.0,0.0,0.0);
    GetObjectPos(0,fVar,fVar,fVar);
    SetObjectRot(0,0.0,0.0,0.0);
    GetObjectRot(0,fVar,fVar,fVar);
    IsValidObject(0);
    DestroyObject(0);
    MoveObject(0,0.0,0.0,0.0,0.0);
    StopObject(0);
    CreatePlayerObject(0,0,0.0,0.0,0.0,0.0,0.0,0.0);
    SetPlayerObjectPos(0,0,0.0,0.0,0.0);
    GetPlayerObjectPos(0,0,fVar,fVar,fVar);
    GetPlayerObjectRot(0,0,fVar,fVar,fVar);
    SetPlayerObjectRot(0,0,0.0,0.0,0.0);
    IsValidPlayerObject(0,0);
    DestroyPlayerObject(0,0);
    MovePlayerObject(0,0,0.0,0.0,0.0,0.0);
    StopPlayerObject(0,0);

    // Menu's
    CreateMenu("", 0, 0.0, 0.0, 0.0, 0.0);
    DestroyMenu(Menu:0);
    AddMenuItem(Menu:0, 0, "");
    SetMenuColumnHeader(Menu:0, 0, "");
    ShowMenuForPlayer(Menu:0, 0);
    HideMenuForPlayer(Menu:0, 0);
    IsValidMenu(Menu:0);
    DisableMenu(Menu:0);
    DisableMenuRow(Menu:0,0);

    // Textdraw
    TextDrawCreate(0.0,0.0,"");
    TextDrawDestroy(Text:0);
    TextDrawLetterSize(Text:0, 0.0,0.0);
    TextDrawTextSize(Text:0, 0.0,0.0);
    TextDrawAlignment(Text:0, 0);
    TextDrawColor(Text:0,0);
    TextDrawUseBox(Text:0, 0);
    TextDrawBoxColor(Text:0, 0);
    TextDrawSetShadow(Text:0, 0);
    TextDrawSetOutline(Text:0, 0);
    TextDrawBackgroundColor(Text:0,0);
    TextDrawFont(Text:0, 0);
    TextDrawSetProportional(Text:0, 0);
    TextDrawShowForPlayer(0, Text:0);
    TextDrawHideForPlayer(0, Text:0);
    TextDrawShowForAll(Text:0);
    TextDrawHideForAll(Text:0);

    // Others
    funcidx("");
    gettime(iVar,iVar,iVar);
    getdate(iVar,iVar,iVar);
    tickcount(iVar);

    return 1;
}
```

### Plugin source code

```cpp
#include "SDK\amx\amx.h"
#include "SDK\plugincommon.h"

#include "Invoke.h"

#include <string>
#include <vector>

#include <cstdlib>
#include <ctime>


typedef void (*logprintf_t)(char* format, ...);

logprintf_t logprintf;
extern void *pAMXFunctions;


using namespace std;


//该函数演示了：如何从PAWN获取字符串(及其长度). 
//PAWN 原生函数: native PrintPawnString(const str[]);
cell AMX_NATIVE_CALL PrintPawnString(AMX* amx, cell* params)
{
    int
        len = NULL,
        ret = NULL;

    cell *addr = NULL;

    //获取字符串参数(str)的地址, 然后获取其长度
    amx_GetAddr(amx, params[1], &addr);
    amx_StrLen(addr, &len);

    //如果输入的长度不是0
    if(len)
    {
        //我们增加len的值, 因为在分配内存时我们需要为终止的null字符腾出空间. 
        //由于GetString的size参数会计算null字符的大小, 因此我们必须指定字符串的长度+1；
        //否则我们的字符串将会被截断, 以腾出空间给null字符(我们将失去一个字符). 
        len++;

        //为传递的字符串(str)分配内存, 然后使用分配的内存来存储它. 
        char* text = new char[len];
        amx_GetString(text, addr, 0, len);

        //使用logprintf打印出字符串(text). 我们不使用std::cout, 因为它不会写入服务器日志(只写入窗口). 
        logprintf(text);

        //释放内存...
        delete[] text;
    }
    return 1;
}

//该函数演示了：如何调用PAWN脚本中的回调函数. 
//PAWN 原生函数: native EmitPawnCallback();
cell AMX_NATIVE_CALL EmitPawnCallback(AMX* amx, cell* params)
{
    int idx;

    const cell var = 3;
    const cell arr[] = {100, 4, 33};
    const string str = "从C++传递过来的随机消息. ";

    //Pawn 回调函数： forward OnPawnCallbackEmitted(var, arr[], str[]);
    //找到回调函数并将其在公共函数表中的位置(索引)存储到我们的idx变量中. 
    if(!amx_FindPublic(amx, "OnPawnCallbackEmitted", &idx))
    {
        cell
            ret,
            addr;

        //在此处推送函数的参数. 注意, 如果函数有多个参数, 你需要逆序推送参数！
        //这就是为什么我们先推送字符串, 然后是数组, 最后是整数. 

        amx_PushString(amx, &addr, NULL, str.c_str(), NULL, NULL);
        //amx_PushArray(amx, NULL, NULL, arr, sizeof(arr) / sizeof(cell));

        cell
            amx_addr,
            *phys_addr;

        //由于某种原因, amx_PushArray似乎会导致服务器崩溃, 我对此一无所知. 
        //从实现者指南和代码来看, 我的用法应该是完全有效的. 由于该函数无法正常工作, 我们只能
        //使用旧方法：分配内存, 设置它, 并手动推送所有内容. 这非常简单. 我们
        //使用amx_Allot在堆上分配内存(该函数返回2个地址—一个是虚拟机中的位置
        //(amx_addr), 另一个是相对于实际服务器地址空间的地址(phys_addr—可用于C++)). 
        //分配内存后, 我们使用memcpy将数组的内存复制到phys_addr地址位置. 
        amx_Allot(amx, sizeof(arr) / sizeof(cell), &amx_addr, &phys_addr);
        memcpy(phys_addr, arr, sizeof(arr));
        amx_Push(amx, amx_addr);

        //推送整数值
        amx_Push(amx, var);

        //使用之前获取的idx变量执行函数. 
        //注意：该函数的第二个参数是回调函数的返回值(如果不关心返回值, 可以为NULL). 
        amx_Exec(amx, &ret, idx);

        //释放分配的内存. 函数amx_Alloc在虚拟机的堆上分配内存. 
        //函数amx_PushString和amx_PushArray内部都使用此函数, 因此每次使用其中一个函数时都必须释放内存. 
        //注意：我们同时使用了amx_PushString和amx_PushArray, 但我们只调用了一个释放函数. 
        //这是因为堆上的内存是按升序分配的！amx_Release会释放从某个点(第二个参数, amx_addr, 即我们的addr变量)开始的所有内存. 
        //因此, 我们只存储来自amx_PushString调用的地址, 因为它会删除从该点之后的所有内容. 
        amx_Release(amx, addr);

        //打印返回值(以示完整性). 
        logprintf("EmitPawnCallback 注意: OnPawnCallbackEmitted 回调函数返回了 %d!", ret);

    }
    return 1;
}


//这个函数演示了：从PAWN获取字符串的替代方法及其可能带来的风险. 
//PAWN 原生函数: native PrintPawnString2(const str[]);
cell AMX_NATIVE_CALL PrintPawnString2(AMX* amx, cell* params)
{
    //这种方法不推荐, 因为amx_StrParam宏使用了alloca函数, 这在C或C++中不是标准. 
    //使用这种方法有溢出栈的风险(如果你分配了大量内存), 同时也有可能出现bug(这个函数依赖于机器和编译器-某些实现被认为有bug). 

    char* text = NULL;
    amx_StrParam(amx, params[1], text);

    //检查text是否为null
    if(text != NULL)
    {
        //使用logprintf打印字符串(text). 我们不使用std::cout, 因为它不会写入服务器日志(只写入窗口). 
        logprintf(text);
    }
    return 1;
}

//这个函数演示了：如何修改PAWN字符串. 
//PAWN 原生函数: native SetPawnString(str[], len = sizeof(str));
cell AMX_NATIVE_CALL SetPawnString(AMX* amx, cell* params)
{
    const string message = "这是来自C/++的字符串！！";
    cell* addr = NULL;

    //获取我们字符串参数(str)的地址并存储我们的消息
    amx_GetAddr(amx, params[1], &addr);
    amx_SetString(addr, message.c_str(), 0, 0, params[2]);
    return 1;
}

//这个函数演示了：如何将浮点数转换为PAWN浮点数. 
//PAWN 原生函数: native Float:ReturnPawnFloatVal();
cell AMX_NATIVE_CALL ReturnPawnFloatVal(AMX* amx, cell* params)
{
    //由于PAWN是一个无类型语言, 它将所有内容存储为32位整数, 并依靠标签处理特殊数据. 
    //浮点数也不例外；它仍然是32位整数, 但有一个Float标签来表示它不应
    //像普通整数一样处理. 那么我们如何在不丢失数据的情况下将浮点数转换为32位整数(对于PAWN)呢？
    //答案是amx_ftoc宏！

    //宏amx_ftoc将浮点数类型转换为cell, 同时保持其位模式(amx_ctof执行相反操作). 
    const float f = 22.624f;
    return amx_ftoc(f);
}

//这个函数演示了：如何通过引用传递参数. 
//PAWN 原生函数: native SetPawnReferenceVars(&value1, &Float:value2);
cell AMX_NATIVE_CALL SetPawnReferenceVars(AMX* amx, cell* params)
{
    const int val = 65;
    const float val2 = 84.54f;

    cell* addr[2] = {NULL, NULL};

    //获取"value1"和"value2"的地址
    amx_GetAddr(amx, params[1], &addr[0]);
    amx_GetAddr(amx, params[2], &addr[1]);

    //取消引用我们的指针并分配我们的值. 记住始终使用宏"amx_ftoc"将浮点数转换为
    //cells(PAWN的适当浮点格式)！
    *addr[0] = val;
    *addr[1] = amx_ftoc(val2);

    return 1;
}

//这个函数演示了：如何获取和修改数组值. 
//PAWN 原生函数: native PrintPawnArray(arr[], size = sizeof(arr));
cell AMX_NATIVE_CALL PrintPawnArray(AMX* amx, cell* params)
{
    //确保有东西可以打印...
    if(params[2] > 0)
    {
        cell* addr = NULL;

        //获取我们PAWN数组中第一个值的地址. 
        amx_GetAddr(amx, params[1], &addr);

        for(int i = 0, l = params[2]; i < l; i++)
        {
            //这很简单：我们取消引用addr指针来获取要打印的值. 
            //你应该已经知道了, 数组和指针几乎是一样的, 所以我们可以使用指针
            //算术来添加偏移量, 或者直接使用下标操作符(最终*(addr+1)和addr[1]是一样的). 
            logprintf("arr[%d] = %d", i, *(addr + i));

            //如果你想修改数组, 你只需通过取消引用addr并分配新值来改变它的值. 
            //你应该也知道这一点, 我只是为了完整性把它加上. 这里我们将数组的第一个值
            //改为5(注意：因为是第一个值, 所以没有使用偏移量). 

            // *(addr) = 5;
        }
    }
    return 1;
}

//这个函数演示了：如何设置invoke(获取我们native的地址). 
//PAWN 原生函数: native Invoke_GetAddresses();
cell AMX_NATIVE_CALL Invoke_GetAddresses(AMX* amx, cell* params)
{
    return g_Invoke->getAddresses();
}

//这个函数演示了：如何使用invoke调用SA-MP的natives. 
//PAWN 原生函数: native WhereIsPlayer(playerid);
cell AMX_NATIVE_CALL WhereIsPlayer(AMX* amx, cell* params)
{
    float
        x = NULL,
        y = NULL,
        z = NULL;

    //获取玩家的位置(并检查他是否已连接). 
    if(g_Invoke->callNative(&PAWN::GetPlayerPos, params[1], &x, &y, &z))
    {
        char name[24];

        //获取玩家的其余信息(名字、室内和虚拟世界)并打印出来. 
        g_Invoke->callNative(&PAWN::GetPlayerName, params[1], name);
        int interior = g_Invoke->callNative(&PAWN::GetPlayerInterior, params[1]);
        int virtualworld = g_Invoke->callNative(&PAWN::GetPlayerVirtualWorld, params[1]);

        logprintf("%s 的位置是 X: %.2f, Y: %.2f, Z: %.2f (虚拟世界: %d, 室内 %d). ", name, x, y, z, virtualworld, interior);
        return 1;

    }
    return 0;
}

//这个函数演示了：如何编写一个native作为回调函数. 
//PAWN 原生函数: native TEST_Hook_OnPlayerConnnect(playerid);
cell AMX_NATIVE_CALL TEST_Hook_OnPlayerConnnect(AMX* amx, cell* params)
{
    //获取玩家的名字
    char name[24];
    g_Invoke->callNative(&PAWN::GetPlayerName, params[1], name);

    //检查他的名字是否是"Mario". 
    if(string("Mario") == name)
    {
        //如果是, 发送我们搞笑的小消息并踢掉他. 
        g_Invoke->callNative(&PAWN::SendClientMessage, params[1], 0xFFFFFFFF, "对不起 {FF0000}Mario, {FFFFFF}但你的公主在另一个服务器. ");
        g_Invoke->callNative(&PAWN::Kick, params[1]);
    }
    return 1;
}

//这个函数告诉服务器我们的插件将具备哪些功能, 基于它返回的内容. 一般来说, 我们在插件中只使用3个支持标志：
//SUPPORTS_VERSION, SUPPORTS_AMX_NATIVES, 和 SUPPORTS_PROCESS_TICK. 
PLUGIN_EXPORT unsigned int PLUGIN_CALL Supports()
{
    //注意：如果你使用了ProcessTick函数, 请记得在.def文件中导出它！
    return SUPPORTS_VERSION | SUPPORTS_AMX_NATIVES | SUPPORTS_PROCESS_TICK;
}

//Load函数非常简单. 这是在插件加载时调用的, 并传递一个包含插件将使用的地址的数组. 
//我们通常使用的两个索引是PLUGIN_DATA_AMX_EXPORTS和PLUGIN_DATA_LOGPRINTF. 
PLUGIN_EXPORT bool PLUGIN_CALL Load(void **ppData)
{
    //为我们的g_Invoke实例分配内存
    g_Invoke = new Invoke;

    //将AMX函数表/logprintf函数的地址分配给相应的指针. 
    pAMXFunctions = ppData[PLUGIN_DATA_AMX_EXPORTS];
    logprintf = (logprintf_t) ppData[PLUGIN_DATA_LOGPRINTF];

    logprintf("* 测试插件已加载. ");
    return true;
}

//Unload在插件卸载(服务器关闭)时被调用. 
PLUGIN_EXPORT void PLUGIN_CALL Unload()
{
    logprintf("* 测试插件已卸载. ");
}

//我们的native信息数组用于amx_Register(函数名称和地址). 
AMX_NATIVE_INFO PluginNatives[] =
{
    {"PrintPawnString", PrintPawnString},
    {"PrintPawnString2", PrintPawnString2},
    {"SetPawnString", SetPawnString},
    {"ReturnPawnFloatVal", ReturnPawnFloatVal},
    {"SetPawnReferenceVars", SetPawnReferenceVars},
    {"PrintPawnArray", PrintPawnArray},
    {"EmitPawnCallback", EmitPawnCallback},
    {"WhereIsPlayer", WhereIsPlayer},
    {"Invoke_GetAddresses", Invoke_GetAddresses},
    {"TEST_Hook_OnPlayerConnnect", TEST_Hook_OnPlayerConnnect},
    {0, 0}
};

//当新的AMX实例被加载到服务器时会调用这个函数. 每个filterscript/gamemode都会调用这个函数！因此, 存储整个插件的单个AMX实例并不是一个好主意, 
//而是使用队列/列表/向量. 在这个函数中, 我们还注册了希望提供给PAWN的自定义native函数. 
PLUGIN_EXPORT int PLUGIN_CALL AmxLoad( AMX *amx )
{
    //每当一个脚本被加载时, 我们想将它添加到invoke的AMX列表中, 所以我们将实例推入列表. 
    g_Invoke->amx_list.push_back(amx);
    return amx_Register(amx, PluginNatives, -1);
}

//每当一个AMX实例被卸载时会调用这个函数. 如果你存储AMX实例, 请确保你将它们移除. 否则你会有指向不存在的gamemodes/filterscripts的实例. 
PLUGIN_EXPORT int PLUGIN_CALL AmxUnload( AMX *amx )
{
    //每个被卸载的脚本需要从我们的AMX实例列表中移除. 所以我们遍历列表, 找到正在被卸载的实例, 并将其从列表中删除. 
    for(list<AMX *>::iterator i = g_Invoke->amx_list.begin(); i != g_Invoke->amx_list.end(); ++i)
    {
        if(*i == amx)
        {
            g_Invoke->amx_list.erase(i);
            break;
        }
    }
    return AMX_ERR_NONE;
}

//ProcessTick 是一个在服务器循环的每次迭代中被调用的函数. 人们通常使用这个函数来管理时间, 通过跟踪已经过去的tick数量. 
// SA-MP服务器的休眠时间为5毫秒, 因此如果经过了50个tick, 你就可以知道经过的时间(5 * 50 = 250毫秒). 注意：任何在插件中使用线程并需要PAWN交互的人都需要使用这个函数, 以确保
// PAWN不会忙于执行其他任务！
PLUGIN_EXPORT void PLUGIN_CALL ProcessTick()
{
    static int tick = 0;
    const int NYAN_COUNT = 100;

    tick++;

    //使用取模运算符来查看是否已经过去了NYAN_COUNT个tick(100 tick. 5毫秒休眠时间 * 100 tick = 500毫秒). 
    if(!(tick % NYAN_COUNT))
    {
        //如果经过了100个tick, 则向所有人发送我们搞笑的小消息. 
        const char nyan[] = "{FF0000}NYAN {FFA500}NYAN {FFFF00}NYAN {00FF00}NYAN {0000FF}NYAN {551A8B}NYAN";
        g_Invoke->callNative(&PAWN::SendClientMessageToAll, 0, nyan);
    }
}
```

## 特别感谢

**RyDeR`** - 感谢提供他插件教程中的图片. 

**Incognito** - 感谢提供Invoke、有关ProcessTick的信息, 以及在我学习C++期间给予的所有帮助. 

**Zeex/0x5A656578** - 感谢GDK(将会在某个时候包含在内), 以及自愿回答有关GDK的问题. 

**Y_Less** - 感谢你一直以来的优秀表现和在我完全困惑时的持续帮助. 

**Techboy123** - 感谢你们的很多富有成效的聊天、帮助以及倾听我的抱怨. 
