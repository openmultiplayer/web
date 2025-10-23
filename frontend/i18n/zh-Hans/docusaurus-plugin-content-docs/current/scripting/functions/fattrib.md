---
title: fattrib
sidebar_label: fattrib
description: 设置文件属性。
tags: ["文件管理"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

<LowercaseNoteZH_CN />

## 描述

设置文件属性参数。

| 名称             | 描述                                                   |
| ---------------- | ------------------------------------------------------ |
| const filename[] | 目标文件名                                             |
| timestamp = 0    | 文件最后修改时间（UNIX 时间戳），设为 0 时保留原时间戳 |
| attrib = 0x0F    | 文件属性位掩码，设为 0x0F 时保留原属性                 |

## 返回值

**true** - 操作成功

**false** - 操作失败

## 示例

```c
// 将文件修改时间设置为 '2024-03-07 06:28:15'
if (fattrib("file.txt", 1709792895))
{
    // 成功提示
    print("文件属性设置成功");
}
else
{
    // 错误处理
    print("文件\"file.txt\"不存在或无法设置属性");
}
```

## 注意事项

:::tip

- 时间戳使用 UNIX 纪元时间（1970 年 1 月 1 日至今的秒数）
- 文件属性使用位掩码机制
- 具体位掩码含义取决于底层文件系统（FAT/NTFS/ext 等）

:::

## 相关函数

- [fopen](fopen): 打开文件
- [fclose](fclose): 关闭文件
- [ftemp](ftemp): 创建临时文件流
- [fremove](fremove): 删除文件
- [fwrite](fwrite): 写入文件
- [fputchar](fputchar): 写入单个字符到文件
- [fgetchar](fgetchar): 从文件读取单个字符
- [fblockwrite](fblockwrite): 写入数据块到文件
- [fblockread](fblockread): 从文件读取数据块
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
- [fcreatedir](fcreatedir): 创建目录
