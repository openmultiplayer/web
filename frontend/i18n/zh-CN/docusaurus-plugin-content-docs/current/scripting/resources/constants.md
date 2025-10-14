---
title: 常量
sidebar_label: 常量
description: 标准库常量定义全集，包含各模块常量值及释义
tags: []
---

# a_samp

## 系统限制

| 数值              | 常量名称              | 含义说明                 |
| ----------------- | --------------------- | ------------------------ |
| 24                | MAX_PLAYER_NAME       | 最长玩家昵称长度         |
| 1000              | MAX_PLAYERS           | 最大玩家数量             |
| 2000              | MAX_VEHICLES          | 最大车辆数量             |
| 1000              | MAX_ACTORS            | 最大角色数量             |
| 1000              | MAX_OBJECTS           | 最大物体数量             |
| 1024              | MAX_GANG_ZONES        | 最大帮派区域数量         |
| Text:2048         | MAX_TEXT_DRAWS        | 全局文本绘图最大数量     |
| PlayerText:256    | MAX_PLAYER_TEXT_DRAWS | 单个玩家文本绘图最大数量 |
| Menu:128          | MAX_MENUS             | 最大菜单数量             |
| Text3D:1024       | MAX_3DTEXT_GLOBAL     | 全局 3D 文本标签最大数量 |
| PlayerText3D:1024 | MAX_3DTEXT_PLAYER     | 玩家 3D 文本标签最大数量 |
| 4096              | MAX_PICKUPS           | 最大拾取物数量           |

## 无效标识符

| 数值                | 常量名称                 | 含义说明                |
| ------------------- | ------------------------ | ----------------------- |
| 255                 | NO_TEAM                  | 无队伍标识              |
| 0xFFFF              | INVALID_PLAYER_ID        | 无效玩家 ID             |
| 0xFFFF              | INVALID_VEHICLE_ID       | 无效车辆 ID             |
| 0xFFFF              | INVALID_ACTOR_ID         | 无效角色 ID             |
| 0xFFFF              | INVALID_OBJECT_ID        | 无效物体 ID             |
| Menu:0xFF           | INVALID_MENU             | 无效菜单 ID             |
| Text:0xFFFF         | INVALID_TEXT_DRAW        | 无效文本绘图 ID         |
| PlayerText:0xFFFF   | INVALID_PLAYER_TEXT_DRAW | 无效玩家文本绘图 ID     |
| -1                  | INVALID_GANG_ZONE        | 无效帮派区域 ID         |
| Text3D:0xFFFF       | INVALID_3DTEXT_ID        | 无效全局 3D 文本标签 ID |
| PlayerText3D:0xFFFF | INVALID_PLAYER_3DTEXT_ID | 无效玩家 3D 文本标签 ID |

## 武器常量

| 数值 | 武器名称        | 常量名称                | 对应武器说明     |
| ---- | --------------- | ----------------------- | ---------------- |
| 0    | 拳头            | WEAPON_FIST             | 徒手攻击         |
| 1    | 黄铜指虎        | WEAPON_BRASSKNUCKLE     | 近战武器         |
| 2    | 高尔夫球杆      | WEAPON_GOLFCLUB         | 钝器打击         |
| 3    | 警棍            | WEAPON_NITESTICK        | 警用装备         |
| 4    | 匕首            | WEAPON_KNIFE            | 刺伤武器         |
| 5    | 棒球棍          | WEAPON_BAT              | 钝器打击         |
| 6    | 铁铲            | WEAPON_SHOVEL           | 近战工具         |
| 7    | 台球杆          | WEAPON_POOLSTICK        | 娱乐武器         |
| 8    | 武士刀          | WEAPON_KATANA           | 冷兵器           |
| 9    | 电锯            | WEAPON_CHAINSAW         | 高伤害近战       |
| 10   | 紫色按摩棒      | WEAPON_DILDO            | 搞笑武器         |
| 11   | 白色按摩棒      | WEAPON_DILDO2           | 搞笑武器         |
| 12   | 振动器          | WEAPON_VIBRATOR         | 搞笑武器         |
| 13   | 银色振动器      | WEAPON_VIBRATOR2        | 搞笑武器         |
| 14   | 花束            | WEAPON_FLOWER           | 近战道具         |
| 15   | 手杖            | WEAPON_CANE             | 钝器攻击         |
| 16   | 手榴弹          | WEAPON_GRENADE          | 投掷爆炸物       |
| 17   | 催泪瓦斯        | WEAPON_TEARGAS          | 范围控制武器     |
| 18   | 燃烧瓶          | WEAPON_MOLTOV           | 燃烧效果投掷物   |
| 22   | 柯尔特 45 手枪  | WEAPON_COLT45           | 基础手枪         |
| 23   | 消音手枪        | WEAPON_SILENCED         | 带消音器的手枪   |
| 24   | 沙漠之鹰        | WEAPON_DEAGLE           | 高威力手枪       |
| 25   | 霰弹枪          | WEAPON_SHOTGUN          | 近距离高伤害     |
| 26   | 短管霰弹枪      | WEAPON_SAWEDOFF         | 双管霰弹枪       |
| 27   | 战斗霰弹枪      | WEAPON_SHOTGSPA         | 连发霰弹枪       |
| 28   | UZI 冲锋枪      | WEAPON_UZI              | 高射速微型冲锋枪 |
| 29   | MP5 冲锋枪      | WEAPON_MP5              | 标准冲锋枪       |
| 30   | AK-47 突击步枪  | WEAPON_AK47             | 高伤害自动步枪   |
| 31   | M4 卡宾枪       | WEAPON_M4               | 精准自动步枪     |
| 32   | TEC9 微型冲锋枪 | WEAPON_TEC9             | 便携式冲锋枪     |
| 33   | 猎枪            | WEAPON_RIFLE            | 狙击步枪         |
| 34   | 狙击步枪        | WEAPON_SNIPER           | 高倍镜远程武器   |
| 35   | 火箭发射器      | WEAPON_ROCKETLAUNCHER   | 爆炸性范围伤害   |
| 36   | 热追踪导弹      | WEAPON_HEATSEEKER       | 自动追踪火箭     |
| 37   | 火焰喷射器      | WEAPON_FLAMETHROWER     | 持续火焰伤害     |
| 38   | 转轮机枪        | WEAPON_MINIGUN          | 超高射速重武器   |
| 39   | 遥控炸弹包      | WEAPON_SATCHEL          | 可放置的定时炸弹 |
| 40   | 炸弹            | WEAPON_BOMB             | 即爆炸弹         |
| 41   | 喷漆罐          | WEAPON_SPRAYCAN         | 涂鸦工具         |
| 42   | 灭火器          | WEAPON_FIREEXTINGUISHER | 灭火/推动效果    |
| 43   | 相机            | WEAPON_CAMERA           | 拍照功能         |
| 46   | 降落伞          | WEAPON_PARACHUTE        | 高空降落装备     |
| 49   | 车辆            | WEAPON_VEHICLE          | 车辆碰撞伤害     |
| 53   | 溺水            | WEAPON_DROWN            | 溺水死亡类型     |
| 54   | 碰撞            | WEAPON_COLLISION        | 物理碰撞伤害类型 |

## 玩家标记模式

| 数值 | 常量名称                     | 显示模式说明                 |
| ---- | ---------------------------- | ---------------------------- |
| 0    | PLAYER_MARKERS_MODE_OFF      | 关闭玩家标记显示             |
| 1    | PLAYER_MARKERS_MODE_GLOBAL   | 全局显示所有玩家标记         |
| 2    | PLAYER_MARKERS_MODE_STREAMED | 仅显示流加载范围内的玩家标记 |

## 按键常量

| 数值   | 常量名称             | 对应操作说明             |
| ------ | -------------------- | ------------------------ |
| 1      | KEY_ACTION           | 动作键（默认 F）         |
| 2      | KEY_CROUCH           | 蹲下键（默认 C）         |
| 4      | KEY_FIRE             | 开火键（鼠标左键）       |
| 8      | KEY_SPRINT           | 冲刺键（默认 Shift）     |
| 16     | KEY_SECONDARY_ATTACK | 次要攻击键（鼠标右键）   |
| 32     | KEY_JUMP             | 跳跃键（默认空格）       |
| 64     | KEY_LOOK_RIGHT       | 向右看（默认数字键盘 6） |
| 128    | KEY_HANDBRAKE        | 手刹键（默认空格）       |
| 256    | KEY_LOOK_LEFT        | 向左看（默认数字键盘 4） |
| 512    | KEY_SUBMISSION       | 投降动作键               |
| 512    | KEY_LOOK_BEHIND      | 向后看（默认数字键盘 5） |
| 1024   | KEY_WALK             | 步行模式（默认 Alt）     |
| 2048   | KEY_ANALOG_UP        | 摇杆上方向               |
| 4096   | KEY_ANALOG_DOWN      | 摇杆下方向               |
| 8192   | KEY_ANALOG_LEFT      | 摇杆左方向               |
| 16384  | KEY_ANALOG_RIGHT     | 摇杆右方向               |
| 65536  | KEY_YES              | 确认键（默认 Y）         |
| 131072 | KEY_NO               | 取消键（默认 N）         |
| 262144 | KEY_CTRL_BACK        | 返回键（默认 Backspace） |

## 对话框样式

| 数值 | 常量名称                     | 界面样式说明         |
| ---- | ---------------------------- | -------------------- |
| 0    | DIALOG_STYLE_MSGBOX          | 消息框样式（无输入） |
| 1    | DIALOG_STYLE_INPUT           | 输入框样式           |
| 2    | DIALOG_STYLE_LIST            | 列表选择样式         |
| 3    | DIALOG_STYLE_PASSWORD        | 密码输入样式         |
| 4    | DIALOG_STYLE_TABLIST         | 分页列表样式         |
| 5    | DIALOG_STYLE_TABLIST_HEADERS | 带表头的分页列表样式 |

## 文本绘图字体

| 数值 | 常量名称                     | 字体类型说明             |
| ---- | ---------------------------- | ------------------------ |
| 0    | TEXT_DRAW_FONT_0             | 标准游戏字体（GTA 样式） |
| 1    | TEXT_DRAW_FONT_1             | 带黑色描边的粗体字体     |
| 2    | TEXT_DRAW_FONT_2             | 细长型字体               |
| 3    | TEXT_DRAW_FONT_3             | 压缩数字字体             |
| 4    | TEXT_DRAW_FONT_SPRITE_DRAW   | 精灵图字体               |
| 5    | TEXT_DRAW_FONT_MODEL_PREVIEW | 3D 模型预览字体          |

## 文本绘图字体(open.mp 扩展)

| 数值 | 常量名称                       | 具体字体说明     |
| ---- | ------------------------------ | ---------------- |
| 0    | TEXT_DRAW_FONT_BECKETT_REGULAR | 标准贝克特字体   |
| 1    | TEXT_DRAW_FONT_AHARONI_BOLD    | 阿哈龙尼粗体     |
| 2    | TEXT_DRAW_FONT_BANK_GOTHIC     | 银行哥特字体     |
| 3    | TEXT_DRAW_FONT_PRICEDOWN       | 价格标签专用字体 |
| 4    | TEXT_DRAW_FONT_SPRITE          | 精灵图字体       |
| 5    | TEXT_DRAW_FONT_PREVIEW         | 模型预览专用字体 |

## 文本对齐方式

| 数值 | 常量名称               | 对齐模式说明       |
| ---- | ---------------------- | ------------------ |
| 1    | TEXT_DRAW_ALIGN_LEFT   | 左对齐             |
| 2    | TEXT_DRAW_ALIGN_CENTRE | 居中对齐           |
| 2    | TEXT_DRAW_ALIGN_CENTER | 居中对齐(美式拼写) |
| 3    | TEXT_DRAW_ALIGN_RIGHT  | 右对齐             |

## 服务器变量类型

| 数值 | 常量名称              | 变量类型说明 |
| ---- | --------------------- | ------------ |
| 0    | SERVER_VARTYPE_NONE   | 无类型       |
| 1    | SERVER_VARTYPE_INT    | 整型变量     |
| 2    | SERVER_VARTYPE_STRING | 字符串变量   |
| 3    | SERVER_VARTYPE_FLOAT  | 浮点型变量   |

好的，我现在需要处理用户提供的关于 SA-MP（San Andreas Multiplayer）的常量文档翻译任务。用户希望我在每个常量值后面添加中文注释，说明其含义。首先，我需要仔细查看用户提供的文档结构，确保理解各个表格和常量的用途。

首先，我看到文档分为多个部分，包括 Artwork/Net Models、Click Sources、Edit Response Types 等，每个部分都有对应的常量表。我的任务是将这些表格中的常量名称和值翻译成中文，并在常量名称后添加注释，解释其具体含义。

接下来，我需要确保遵循用户之前的规则，比如保留 Markdown 格式，不修改 frontmatter，正确翻译表头，保留代码块和链接等。同时，要参考用户提供的专有名词翻译，如 GameMode 翻译为游戏模式，Vehicle 翻译为车辆等。此外，需要注意技术细节的准确性，确保翻译后的内容不丢失重要信息。

在处理每个表格时，我会逐行检查常量名称和值，查找对应的中文翻译。例如，"DOWNLOAD_REQUEST_EMPTY"需要翻译为“空下载请求”，并在后面注释其用途。对于某些可能不太直观的常量，如“BULLET_HIT_TYPE_PLAYER_OBJECT”，我需要确保注释清晰，说明这是子弹击中玩家创建的物体。

同时，需要注意一些重复或类似的常量，比如不同的 SPECIAL_ACTION，需要统一翻译风格，确保注释一致。例如，“SPECIAL_ACTION_DUCK”翻译为“蹲下动作”，而“SPECIAL_ACTION_USEJETPACK”则是“使用喷气背包”。

在处理车辆相关部分时，如 Car Mod Type 中的“CARMODTYPE_SPOILER”应译为“扰流板改装”，并注释说明这是车辆改装类型之一。对于 VEHICLE_PARAMS，需要区分“VEHICLE_PARAMS_UNSET”为“参数未设置”，“VEHICLE_PARAMS_OFF”为“关闭状态”等。

在物体材质部分，如 OBJECT_MATERIAL_SIZE_32x32 需要准确翻译尺寸，并说明这是材质纹理的尺寸。对于对齐方式，如“OBJECT_MATERIAL_TEXT_ALIGN_LEFT”翻译为“左对齐”，并注释其在文本显示中的应用。

HTTP 错误部分需要注意技术术语的准确性，如“HTTP_ERROR_BAD_HOST”译为“错误的主机地址”，并说明连接失败的原因。同时，确保所有错误代码的注释清晰，便于开发者理解。

整个过程中，我需要不断检查翻译的准确性和一致性，确保符合用户的要求，不遗漏任何常量，并且注释简洁明了。此外，还要注意表格的对齐和格式，避免因翻译导致格式混乱。最后，通读整个翻译文档，确保流畅自然，技术细节无误，符合信达雅的标准。

```
## 美术资源/网络模型

| 数值 | 常量名称                      | 功能说明                         |
|------|-----------------------------|--------------------------------|
| 0    | DOWNLOAD_REQUEST_EMPTY       | 空下载请求状态                   |
| 1    | DOWNLOAD_REQUEST_MODEL_FILE  | 模型文件下载请求                 |
| 2    | DOWNLOAD_REQUEST_TEXTURE_FILE| 纹理文件下载请求                 |

## 点击来源

| 数值 | 常量名称                | 触发来源说明                 |
|------|-----------------------|---------------------------|
| 0    | CLICK_SOURCE_SCOREBOARD | 来自记分牌的点击事件         |

## 编辑响应类型

| 数值 | 常量名称             | 操作状态说明                 |
|------|--------------------|---------------------------|
| 0    | EDIT_RESPONSE_CANCEL | 编辑操作被取消               |
| 1    | EDIT_RESPONSE_FINAL  | 最终确认的编辑操作           |
| 2    | EDIT_RESPONSE_UPDATE | 编辑过程中的实时更新         |

## 物体选择类型

| 数值 | 常量名称                    | 选择范围说明                 |
|------|---------------------------|---------------------------|
| 1    | SELECT_OBJECT_GLOBAL_OBJECT | 选择全局物体               |
| 2    | SELECT_OBJECT_PLAYER_OBJECT | 选择玩家私有物体           |

## 子弹命中类型

| 数值 | 常量名称                      | 命中目标类型说明             |
|------|-----------------------------|---------------------------|
| 0    | BULLET_HIT_TYPE_NONE         | 未命中任何目标             |
| 1    | BULLET_HIT_TYPE_PLAYER       | 命中其他玩家               |
| 2    | BULLET_HIT_TYPE_VEHICLE      | 命中车辆                   |
| 3    | BULLET_HIT_TYPE_OBJECT       | 命中地图物体               |
| 4    | BULLET_HIT_TYPE_PLAYER_OBJECT | 命中玩家创建的物体         |

# a_players

## 玩家限制

| 数值 | 常量名称                    | 系统限制说明                 |
|------|---------------------------|---------------------------|
| 10   | MAX_PLAYER_ATTACHED_OBJECTS | 最大附加物体数量           |
| 144  | MAX_CHATBUBBLE_LENGTH       | 聊天泡泡最大字符长度       |

## 特殊动作

| 数值 | 常量名称                        | 动作说明                     |
|------|-------------------------------|---------------------------|
| 0    | SPECIAL_ACTION_NONE           | 无特殊动作                 |
| 1    | SPECIAL_ACTION_DUCK           | 蹲下动作                   |
| 2    | SPECIAL_ACTION_USEJETPACK     | 使用喷气背包               |
| 3    | SPECIAL_ACTION_ENTER_VEHICLE  | 进入车辆动作               |
| 4    | SPECIAL_ACTION_EXIT_VEHICLE   | 离开车辆动作               |
| 5    | SPECIAL_ACTION_DANCE1         | 舞蹈动作1                  |
| 6    | SPECIAL_ACTION_DANCE2         | 舞蹈动作2                  |
| 7    | SPECIAL_ACTION_DANCE3         | 舞蹈动作3                  |
| 8    | SPECIAL_ACTION_DANCE4         | 舞蹈动作4                  |
| 10   | SPECIAL_ACTION_HANDSUP        | 举手投降动作               |
| 11   | SPECIAL_ACTION_USECELLPHONE   | 使用手机动作               |
| 12   | SPECIAL_ACTION_SITTING        | 坐下动作                   |
| 13   | SPECIAL_ACTION_STOPUSECELLPHONE | 停止使用手机动作         |
| 20   | SPECIAL_ACTION_DRINK_BEER     | 喝啤酒动作                 |
| 21   | SPECIAL_ACTION_SMOKE_CIGGY    | 抽烟动作                   |
| 22   | SPECIAL_ACTION_DRINK_WINE     | 喝红酒动作                 |
| 23   | SPECIAL_ACTION_DRINK_SPRUNK   | 喝运动饮料动作             |
| 24   | SPECIAL_ACTION_CUFFED         | 被铐住状态                 |
| 25   | SPECIAL_ACTION_CARRY          | 搬运物品状态               |
| 68   | SPECIAL_ACTION_PISSING        | 小便动画                   |

## 战斗风格

| 数值 | 常量名称             | 战斗风格说明                 |
|------|--------------------|---------------------------|
| 0    | FIGHT_STYLE_NORMAL  | 普通战斗风格               |
| 1    | FIGHT_STYLE_BOXING  | 拳击风格                   |
| 2    | FIGHT_STYLE_KUNGFU  | 功夫风格                   |
| 3    | FIGHT_STYLE_KNEEHEAD | 膝撞攻击风格             |
| 4    | FIGHT_STYLE_GRABKICK | 抓踢组合风格             |
| 5    | FIGHT_STYLE_ELBOW    | 肘击攻击风格             |

## 武器技能

| 数值 | 常量名称                    | 武器熟练度类型             |
|------|---------------------------|---------------------------|
| 0    | WEAPONSKILL_PISTOL        | 手枪技能等级               |
| 1    | WEAPONSKILL_PISTOL_SILENCED | 消音手枪技能等级         |
| 2    | WEAPONSKILL_DESERT_EAGLE  | 沙漠之鹰技能等级         |
| 3    | WEAPONSKILL_SHOTGUN       | 霰弹枪技能等级           |
| 4    | WEAPONSKILL_SAWNOFF_SHOTGUN | 短管霰弹枪技能等级     |
| 5    | WEAPONSKILL_SPAS12_SHOTGUN | 战斗霰弹枪技能等级     |
| 6    | WEAPONSKILL_MICRO_UZI     | 微型乌兹技能等级         |
| 7    | WEAPONSKILL_MP5           | MP5冲锋枪技能等级       |
| 8    | WEAPONSKILL_AK47          | AK-47技能等级            |
| 9    | WEAPONSKILL_M4            | M4卡宾枪技能等级         |
| 10   | WEAPONSKILL_SNIPERRIFLE   | 狙击步枪技能等级         |

## 武器状态

| 数值 | 常量名称                 | 弹药状态说明                 |
|------|------------------------|---------------------------|
| -1   | WEAPONSTATE_UNKNOWN    | 未知武器状态               |
| 0    | WEAPONSTATE_NO_BULLETS | 弹匣已空                   |
| 1    | WEAPONSTATE_LAST_BULLET | 最后一发子弹             |
| 2    | WEAPONSTATE_MORE_BULLETS | 仍有剩余弹药             |
| 3    | WEAPONSTATE_RELOADING  | 正在换弹状态               |

## 玩家变量类型

| 数值 | 常量名称              | 变量类型说明                 |
|------|---------------------|---------------------------|
| 0    | PLAYER_VARTYPE_NONE | 无类型变量                 |
| 1    | PLAYER_VARTYPE_INT  | 整型玩家变量               |
| 2    | PLAYER_VARTYPE_STRING | 字符串玩家变量           |
| 3    | PLAYER_VARTYPE_FLOAT | 浮点型玩家变量            |

## 地图图标类型

| 数值 | 常量名称                  | 显示范围说明                 |
|------|-------------------------|---------------------------|
| 0    | MAPICON_LOCAL           | 本地可见图标               |
| 1    | MAPICON_GLOBAL          | 全局可见图标               |
| 2    | MAPICON_LOCAL_CHECKPOINT | 本地检查点图标           |
| 3    | MAPICON_GLOBAL_CHECKPOINT | 全局检查点图标           |

## 视角切换方式

| 数值 | 常量名称    | 视角移动类型             |
|------|-----------|---------------------------|
| 1    | CAMERA_MOVE | 平滑移动视角             |
| 2    | CAMERA_CUT  | 直接切换视角             |

## 观察模式

| 数值 | 常量名称             | 视角模式说明                 |
|------|--------------------|---------------------------|
| 1    | SPECTATE_MODE_NORMAL | 自由视角观察             |
| 2    | SPECTATE_MODE_FIXED  | 固定位置观察             |
| 3    | SPECTATE_MODE_SIDE   | 侧面跟随视角             |

## NPC录制类型

| 数值 | 常量名称                     | 记录用途说明                 |
|------|----------------------------|---------------------------|
| 1    | PLAYER_RECORDING_TYPE_NONE  | 无录制状态                 |
| 2    | PLAYER_RECORDING_TYPE_DRIVER | 车辆驾驶记录             |
| 3    | PLAYER_RECORDING_TYPE_ONFOOT | 步行动作记录             |

# a_vehicles

## 车辆改装类型

| 数值 | 常量名称                | 改装部件类型                 |
|------|-----------------------|---------------------------|
| 0    | CARMODTYPE_SPOILER    | 扰流板改装                 |
| 1    | CARMODTYPE_HOOD       | 引擎盖改装                 |
| 2    | CARMODTYPE_ROOF       | 车顶改装                   |
| 3    | CARMODTYPE_SIDESKIRT  | 侧裙改装                   |
| 4    | CARMODTYPE_LAMPS      | 车灯改装                   |
| 5    | CARMODTYPE_NITRO      | 氮气加速装置               |
| 6    | CARMODTYPE_EXHAUST    | 排气管改装                 |
| 7    | CARMODTYPE_WHEELS     | 轮毂改装                   |
| 8    | CARMODTYPE_STEREO     | 音响系统改装               |
| 9    | CARMODTYPE_HYDRAULICS | 液压系统改装               |
| 10   | CARMODTYPE_FRONT_BUMPER | 前保险杠改装             |
| 11   | CARMODTYPE_REAR_BUMPER  | 后保险杠改装             |
| 12   | CARMODTYPE_VENT_RIGHT   | 右侧通风口改装           |
| 13   | CARMODTYPE_VENT_LEFT    | 左侧通风口改装           |

## 车辆参数状态

| 数值 | 常量名称             | 参数状态说明                 |
|------|--------------------|---------------------------|
| 0    | VEHICLE_PARAMS_UNSET | 参数未设置               |
| 1    | VEHICLE_PARAMS_OFF   | 参数关闭状态             |
| 2    | VEHICLE_PARAMS_ON    | 参数启用状态             |

## 车辆模型信息

| 数值 | 常量名称                          | 模型数据信息                 |
|------|---------------------------------|---------------------------|
| 1    | VEHICLE_MODEL_INFO_SIZE          | 车辆模型尺寸               |
| 2    | VEHICLE_MODEL_INFO_FRONTSEAT     | 前座坐标位置             |
| 3    | VEHICLE_MODEL_INFO_REARSEAT      | 后座坐标位置             |
| 4    | VEHICLE_MODEL_INFO_PETROLCAP     | 油箱盖位置               |
| 5    | VEHICLE_MODEL_INFO_WHEELSFRONT   | 前轮位置参数             |
| 6    | VEHICLE_MODEL_INFO_WHEELSREAR    | 后轮位置参数             |
| 7    | VEHICLE_MODEL_INFO_WHEELSMID     | 中轮位置参数             |
| 8    | VEHICLE_MODEL_INFO_FRONT_BUMPER_Z | 前保险杠Z轴坐标         |
| 9    | VEHICLE_MODEL_INFO_REAR_BUMPER_Z  | 后保险杠Z轴坐标         |

# a_objects

## 物体材质尺寸

| 数值 | 常量名称                     | 材质尺寸说明                 |
|------|----------------------------|---------------------------|
| 10   | OBJECT_MATERIAL_SIZE_32x32  | 32x32像素材质             |
| 20   | OBJECT_MATERIAL_SIZE_64x32  | 64x32像素材质             |
| 30   | OBJECT_MATERIAL_SIZE_64x64  | 64x64像素材质             |
| 40   | OBJECT_MATERIAL_SIZE_128x32 | 128x32像素材质           |
| 50   | OBJECT_MATERIAL_SIZE_128x64 | 128x64像素材质           |
| 60   | OBJECT_MATERIAL_SIZE_128x128 | 128x128像素材质         |
| 70   | OBJECT_MATERIAL_SIZE_256x32 | 256x32像素材质           |
| 80   | OBJECT_MATERIAL_SIZE_256x64 | 256x64像素材质           |
| 90   | OBJECT_MATERIAL_SIZE_256x128 | 256x128像素材质         |
| 100  | OBJECT_MATERIAL_SIZE_256x256 | 256x256像素材质         |
| 110  | OBJECT_MATERIAL_SIZE_512x64  | 512x64像素材质           |
| 120  | OBJECT_MATERIAL_SIZE_512x128 | 512x128像素材质         |
| 130  | OBJECT_MATERIAL_SIZE_512x256 | 512x256像素材质         |
| 140  | OBJECT_MATERIAL_SIZE_512x512 | 512x512像素材质         |

## 物体文本对齐

| 数值 | 常量名称                          | 对齐方式说明                 |
|------|---------------------------------|---------------------------|
| 0    | OBJECT_MATERIAL_TEXT_ALIGN_LEFT  | 文本左对齐                 |
| 1    | OBJECT_MATERIAL_TEXT_ALIGN_CENTER | 文本居中对齐             |
| 2    | OBJECT_MATERIAL_TEXT_ALIGN_RIGHT | 文本右对齐               |

# a_http

| 数值 | 常量名称                      | 错误类型说明                 |
|------|-----------------------------|---------------------------|
| 1    | HTTP_ERROR_BAD_HOST         | 错误的主机地址             |
| 2    | HTTP_ERROR_NO_SOCKET        | 无法创建网络套接字         |
| 3    | HTTP_ERROR_CANT_CONNECT     | 连接服务器失败             |
| 4    | HTTP_ERROR_CANT_WRITE       | 数据写入失败               |
| 5    | HTTP_ERROR_CONTENT_TOO_BIG  | 返回内容超过限制           |
| 6    | HTTP_ERROR_MALFORMED_RESPONSE | 服务器返回格式错误         |
```
