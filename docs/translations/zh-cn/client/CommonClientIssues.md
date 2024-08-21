---
title: Common Client Issues
---

### 我得到的错误信息是 "San Andreas cannot be found"

圣安地列斯多人游戏(SA:MP) **不是** 一个独立程序! 它为圣安地列斯添加了多人联机的功能, 因此, 您电脑里需要安装 PC 版的 GTA San Andreas, 此外游戏版本的要求是 **EU/US v1.0**, 其他版本(如 v2.0、Steam 和 Direct2Drive 版本)将无法运行. [单击此处下载补丁, 将您的 GTA:SA 版本降级至 1.0](http://grandtheftauto.filefront.com/file/GTA_SA_Downgrader_Patch;74661)

### 我在 SA:MP 浏览器中看不到任何服务器

SA:MP浏览器无法正常运作. 请下载新的 [open.mp 启动器](https://github.com/openmultiplayer/launcher/releases/latest).
如果仍然看不到任何服务器, 您必须允许 open.mp 通过防火墙访问. 遗憾的是, 由于市面上有大量防火墙软件, 我们无法就此提供进一步支持.  - 建议查看制造商网站或尝试谷歌搜索. 此外, 请确保您使用的是最新稳定的 open.mp 版本！

### 加载单机, 而不是 SA:MP

:::警告

您应该不会看到单机里的菜单选项 (新游戏, 加载游戏, 等等) - SA:MP 会自动加载并进入游戏而不是显示这些选项. 如果你看到 "新游戏" 等选项, 表示你进入的是单机而不是联机.

:::

加载单机的原因有两个; 你把 SA:MP 安装在了错误的地方或者你的 GTA San Andreas 版本有问题. 如果你的版本有问题, 你可以下载降级补丁将您的 GTA San Andreas 降级至1.0版本. 点击 [此处](http://grandtheftauto.filefront.com/file/GTA_SA_Downgrader_Patch;74661) 下载.

有时会显示单人游戏菜单, 但实际上 SA:MP 已经正常加载. 要解决这个问题, 你只需在菜单上选择一个选项, 然后按 Esc 键退出. 随后 SA:MP 就会继续加载. 

### 当我连接服务器时候提示 "Unacceptable Nickname"

确保你的名字中没有使用任何不允许的字符 (仅使用 0-9, a-z, \[\], (), \$, @, ., \_, =), 并且你的名字不超过 20 个字符. 当相同服务器上有其他玩家和你的昵称一致的时候也可能会出现这种情况 (如果你在超时或崩溃后快速重连服务器时也会发送这种情况). 运行 SA:MP 的 Windows 服务器的正常运行时间超过 50 天有时会导致此错误.

### 屏幕上一直提示 "Connecting to IP:Port..."

服务器可能处于离线状态, 或者您无法连接到任何服务器, 关闭防火墙, 看看是否有效. 如果有效, 您需要重新配置防火墙. 也可能是您运行的 SA:MP 版本过时, 请下载新的 [open.mp 启动器](https://github.com/openmultiplayer/launcher/releases/latest), 您也可以在 [此处](https://sa-mp.mp/downloads/) 找到SA:MP的新版本.

### 我的 GTA: San Andreas 是修改过的(安装mod等等) 并且 SA:MP 无法加载

如果无法加载, 请删除你的mod.

### 使用 SA:MP 启动 GTA 时, 游戏无法启动

删除 我的文档/GTA San Andreas User Files 文件夹中的 gta_sa.set 文件, 确保你的游戏没有安装任何作弊器/修改器.

### 车辆爆炸时游戏崩溃

如果您有 2 台显示器, 那么有 3 种方法可以解决这个问题:

1. 当你玩 sa-mp 时关闭第二台显示器. (如果你喜欢开着显示器, 这不是个明智之举.)
2. 将视觉特效质量设置为低. (Esc > 选项 > 显示设置 > 高级)
3. 重命名您的 GTA San Andreas 文件夹 (比如改为 "GTA San Andreas2") (这通常有效, 但有时它可能会再次停止工作, 因此您需要将其重命名为其他名称.)

### 退出暂停菜单后, 我的鼠标不起作用了

如果您的鼠标在游戏中似乎被冻结, 而在暂停菜单中（部分）可以操作, 则应禁用多核选项 [sa-mp.cfg](ClientCommands#file-sa-mpcfg "Sa-mp.cfg") (设置为 0). 连续点击 Esc 直至鼠标再次响应也可能奏效, 但这不是一个简便的解决方案.

### 文件 dinput8.dll 丢失

这可能是 DirectX 安装不正确造成的, 尝试重装它 - 不要忘记重启你的电脑. 如果问题仍然存在, 前往 C:\\Windows\\System32 然后复制 dinput.dll 文件并粘贴到你的 GTA San Andreas 目录. 这样就能解决问题了.

### 我看不到其他玩家的名字

请注意, 某些服务器可能在全局范围内禁用了名称显示. 否则, 这个问题通常会出现在配备英特尔高清集成显卡处理器的电脑上 (这些处理器不是真正用于游戏的). 不幸的是, 确切原因尚不清楚, 目前似乎也没有通用的修复方法. 如果有可能, 而且预算允许, 长期解决方案是在电脑中安装专用显卡.
