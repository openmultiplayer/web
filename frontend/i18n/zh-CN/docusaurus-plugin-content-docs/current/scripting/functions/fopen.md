---
title: fopen
sidebar_label: fopen
description: 打开文件（用于读取或写入）。
tags: ["文件管理"]
---

<LowercaseNoteZH_CN />

## 描述

打开文件以便进行读写操作。

| 参数                                     | 说明                                                          |
| ---------------------------------------- | ------------------------------------------------------------- |
| const filename[]                         | 文件路径（若仅指定文件名，则默认在'scriptfiles'文件夹中查找） |
| [filemode:mode](../resources/file-modes) | 文件打开模式（默认值：io_readwrite）                          |

## 返回值

- 成功时返回有效的文件句柄（File:handle 类型）
- 失败时返回 0

## 示例

**io_read 模式（只读）：**

```c
// 以"只读"模式打开"file.txt"
new File:handle = fopen("file.txt", io_read);

// 声明缓冲区
new buf[128];

// 检查文件是否成功打开
if (handle)
{
    // 成功

    // 逐行读取文件内容
    while(fread(handle, buf))
    {
        print(buf); // 输出每行内容
    }

    // 关闭文件
    fclose(handle);
}
else
{
    // 错误提示
    print("文件 \"file.txt\" 不存在或无法打开。");
}
```

<br />

**io_write 模式（只写）：**

```c
// 以"只写"模式打开"file.txt"
new File:handle = fopen("file.txt", io_write);

if (handle)
{
    // 写入内容
    fwrite(handle, "这是新写入的内容！");

    fclose(handle); // 关闭文件
}
else
{
    print("无法打开文件 \"file.txt\"");
}
```

<br />

**io_readwrite 模式（读写）：**

```c
// 以"读写"模式打开"file.txt"
new File:handle = fopen("file.txt", io_readwrite);
new buf[128];

if (handle)
{
    // 读取现有内容
    while(fread(handle, buf))
    {
        print(buf);
    }

    // 重置文件指针到起始位置
    fseek(handle, _, seek_begin);

    // 覆盖写入新内容
    fwrite(handle, "覆盖原始内容");

    fclose(handle);
}
else
{
    print("文件操作失败");
}
```

<br />

**io_append 模式（追加）：**

```c
// 以"追加"模式打开日志文件
new File:handle = fopen("server.log", io_append);

if (handle)
{
    // 追加日志条目
    fwrite(handle, "[LOG] 服务器启动成功\r\n");

    fclose(handle);
}
else
{
    print("日志文件写入失败");
}
```

## 注意事项

:::warning

- 在 `io_read` 模式下打开不存在的文件将返回空句柄
- 使用无效句柄执行文件操作会导致服务器崩溃
- 文件操作完成后务必使用 [fclose](fclose) 关闭文件

:::

## 相关函数

- [fclose](fclose): 关闭文件
- [ftemp](ftemp): 创建临时文件流
- [fremove](fremove): 删除文件
- [fwrite](fwrite): 写入文件内容
- [fread](fread): 读取文件内容
- [fputchar](fputchar): 写入单个字符
- [fgetchar](fgetchar): 读取单个字符
- [fblockwrite](fblockwrite): 批量写入数据块
- [fblockread](fblockread): 批量读取数据块
- [fseek](fseek): 调整文件指针位置
- [flength](flength): 获取文件大小
- [fexist](fexist): 检查文件是否存在
- [fmatch](fmatch): 文件名模式匹配
- [ftell](ftell): 获取当前文件指针位置
- [fflush](fflush): 强制写入磁盘缓存
- [fstat](fstat): 获取文件元数据
- [frename](frename): 文件重命名
- [fcopy](fcopy): 文件复制
- [filecrc](filecrc): 计算文件 CRC 校验码
- [diskfree](diskfree): 查询磁盘剩余空间
- [fattrib](fattrib): 设置文件属性
- [fcreatedir](fcreatedir): 创建目录

## 相关资源

- [文件模式详解](../resources/file-modes)
