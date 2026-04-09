---
tag: v1-RC2
publishedAt: "2023-01-09T21:41:26Z"
htmlUrl: https://github.com/openmultiplayer/open.mp/releases/tag/v1-RC2
assets:
  - label: Windows
    url: https://github.com/openmultiplayer/open.mp/releases/download/v1-RC2/open.mp-win-x86.zip
    size: "43.0 MB"
  - label: Linux
    url: https://github.com/openmultiplayer/open.mp/releases/download/v1-RC2/open.mp-linux-x86.tar.gz
    size: "23.6 MB"
  - label: Linux (DynSSL)
    url: https://github.com/openmultiplayer/open.mp/releases/download/v1-RC2/open.mp-linux-x86-dynssl.tar.gz
    size: "20.1 MB"
---

## 变更内容

- **服务器**：修复了旧版Linux插件必须包含`.so`扩展名的问题。
- **服务器**：`reloadfs` 命令现在会复用其插槽以保持脚本（filterscript）的加载顺序。
- **服务器**：玩家附加的物体现在能正确显示给其他玩家。
- **服务器**：修复了加载无效Pawn内存时导致的崩溃。
- **Pawn脚本**：新增了 `GetPlayerMarkerForPlayer` 函数。
- **Pawn脚本**：新增了 `a_???` 文件包装器。
- **升级器**：支持多种编码页。
- **升级器**：新增文件排除功能。
- **升级器**：提供完整的替换报告。

**完整更新日志**：https://github.com/openmultiplayer/open.mp/compare/v1-RC1...v1-RC2
