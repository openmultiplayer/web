---
title: fblockread
sidebar_label: fblockread
description: 从文件读取原始数据块（不处理编码和行终止符）。
tags: ["文件管理"]
---

<LowercaseNoteZH_CN />

## 描述

该函数允许从文件中读取原始数据块（不处理编码和行终止符）。

| 名称                   | 描述                                   |
| ---------------------- | -------------------------------------- |
| File:handle            | 通过 fopen()打开的文件句柄             |
| buffer                 | 存储读取数据的缓冲区                   |
| size = sizeof (buffer) | 要读取的数据单元数量（默认缓冲区大小） |

## 返回值

读取的数据单元数量，文件末尾时返回 0

## 示例

```c
// 定义枚举结构
enum _:some_enum
{
    some_data1,
    some_data2[20],
    Float:some_data3
}

// 声明数据容器
new some_data[some_enum];

// ...

// 以只读模式打开二进制文件
new File:handle = fopen("file.bin", io_read);

// 声明文件长度变量
new file_len;

// 验证文件是否成功打开
if (handle)
{
    // 获取文件总长度
    file_len = flength(handle);

    // 校验文件尺寸与数据结构匹配
    if (file_len == (some_enum*4))
    {
        // 执行块读取操作
        fblockread(handle, some_data);
    }
    else
    {
        print("文件\"file.bin\"与数据结构不兼容");
    }

    // 关闭文件句柄
    fclose(handle);
}
else
{
    print("无法打开文件\"file.bin\"");
}
```

## 注意事项

:::warning

使用无效句柄将导致服务器崩溃！请通过[fopen](fopen)或[ftemp](ftemp)获取有效句柄

:::

## 相关函数

- [fopen](fopen): 打开文件
- [fclose](fclose): 关闭文件
- [ftemp](ftemp): 创建临时文件流
- [fremove](fremove): 删除文件
- [fwrite](fwrite): 写入文件
- [fread](fread): 读取文件
- [fputchar](fputchar): 写入单个字符到文件
- [fgetchar](fgetchar): 从文件读取单个字符
- [fblockwrite](fblockwrite): 写入数据块到文件
- [fseek](fseek): 定位文件指针位置
- [flength](flength): 获取文件长度
- [fexist](fexist): 检查文件是否存在
- [fmatch](fmatch): 检查文件名模式匹配
- [ftell](ftell): 获取当前文件指针位置
- [fflush](fflush): 刷新文件缓冲区到磁盘
- [fstat](fstat): 获取文件大小和时间戳
- [frename](frename): 重命名文件
- [fcopy](fcopy): 复制文件
- [filecrc](filecrc): 计算文件 32 位 CRC 校验值
- [diskfree](diskfree): 获取磁盘剩余空间
- [fattrib](fattrib): 设置文件属性
- [fcreatedir](fcreatedir): 创建目录
