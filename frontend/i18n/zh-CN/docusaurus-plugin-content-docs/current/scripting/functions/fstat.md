---
title: fstat
sidebar_label: fstat
description: 获取文件状态信息。
tags: ["文件管理"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

<LowercaseNoteZH_CN />

## 描述

获取文件大小、最后修改时间戳及相关属性信息。

| 名称             | 说明                                                                            |
| ---------------- | ------------------------------------------------------------------------------- |
| const filename[] | 目标文件名                                                                      |
| &size            | 成功时接收文件大小（单位：字节）                                                |
| &timestamp       | 成功时接收最后修改时间戳（UNIX 时间戳格式）                                     |
| &attrib          | 成功时接收文件属性标志                                                          |
| &inode           | 成功时接收 inode 编号（唯一标识文件的数字，通常表示文件在存储介质中的物理位置） |

## 返回值

**true**​ - 函数执行成功

**false**​ - 文件不存在或无法访问

## 示例

```c
new
    size,
    timestamp,
    attrib,
    inode;

if (fstat("file.txt", size, timestamp, attrib, inode))
{
    // 操作成功
    printf("文件大小: %d 字节 | 修改时间: %d | 属性: %d | inode编号: %d", size, timestamp, attrib, inode);
}
else
{
    // 操作失败
    print("文件\"file.txt\"不存在或无法访问。");
}
```

## 相关函数

- [fopen](fopen): 打开文件
- [fclose](fclose): 关闭文件
- [ftemp](ftemp): 创建临时文件流
- [fremove](fremove): 删除文件
- [fwrite](fwrite): 写入文件
- [fputchar](fputchar): 写入单个字符
- [fgetchar](fgetchar): 读取单个字符
- [fblockwrite](fblockwrite): 写入数据块
- [fblockread](fblockread): 读取数据块
- [fseek](fseek): 定位文件指针
- [flength](flength): 获取文件长度
- [fexist](fexist): 检查文件是否存在
- [fmatch](fmatch): 匹配文件名模式
- [ftell](ftell): 获取当前指针位置
- [fflush](fflush): 刷新文件缓冲区
- [frename](frename): 重命名文件
- [fcopy](fcopy): 复制文件
- [filecrc](filecrc): 计算 CRC32 校验值
- [diskfree](diskfree): 获取磁盘剩余空间
- [fattrib](fattrib): 设置文件属性
- [fcreatedir](fcreatedir): 创建目录
