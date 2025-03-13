---
title: fblockwrite
sidebar_label: fblockwrite
description: 以二进制格式将数据写入文件，忽略换行符和编码。
tags: ["文件管理"]
---

<LowercaseNoteZH_CN />

## 描述

将数据以二进制格式写入文件，不处理换行符和字符编码。

| 名称                   | 描述                                   |
| ---------------------- | -------------------------------------- |
| File:handle            | 通过 fopen()打开的文件句柄             |
| const buffer[]         | 要写入文件的数据缓冲区                 |
| size = sizeof (buffer) | 要写入的数据单元数量（默认缓冲区大小） |

## 返回值

该函数不返回特定值。

## 示例

```c
// 定义数据结构枚举
enum _:some_enum
{
    some_data1,
    some_data2[20],
    Float:some_data3
}

// 声明数据容器
new some_data[some_enum];

// ...

// 以只写模式打开二进制文件
new File:handle = fopen("file.bin", io_write);

// 验证文件句柄有效性
if (handle)
{
    // 执行块写入操作
    fblockwrite(handle, some_data);

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
- [fwrite](fwrite): 文本模式写入文件
- [fread](fread): 文本模式读取文件
- [fputchar](fputchar): 写入单个字符到文件
- [fgetchar](fgetchar): 从文件读取单个字符
- [fblockread](fblockread): 从文件读取原始数据块
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
