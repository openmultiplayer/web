---
title: NPC_IsValidRecord
sidebar_label: NPC_IsValidRecord
description: 检查录制文件是否有效且已加载。
tags: ["npc", "录制", "验证"]
---

<VersionWarnZH_CN version='omp v1.5.8.3079' />

## 描述

检查录制 ID 是否有效且已加载。

| 参数     | 说明      |
| -------- | --------- |
| recordId | 录制的 ID |

## 返回值

如果录制有效且已加载则返回`true`，否则返回`false`。

## 示例

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkvalidrecord ", true, 18))
    {
        new recordid = strval(cmdtext[18]);

        new bool:isValidRecord = NPC_IsValidRecord(recordid);

        SendClientMessage(playerid, 0x00FF00FF, "录制 %d 是否有效: %s", recordid, isValidRecord ? "是" : "否");
        return 1;
    }
    return 0;
}
```

## 注意事项

- 录制必须先通过 NPC_LoadRecord 加载才能变为有效
- 无效录制不能用于回放

## 相关函数

- [NPC_LoadRecord](NPC_LoadRecord): 加载录制文件
- [NPC_UnloadRecord](NPC_UnloadRecord): 卸载录制
- [NPC_StartPlayback](NPC_StartPlayback): 开始回放录制
- [NPC_GetRecordCount](NPC_GetRecordCount): 获取已加载录制数量

## 相关回调

_此函数不会触发任何特定的回调。_
