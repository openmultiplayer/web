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

O que mudou
-------------------

* **Server**: Corrigido `.so` sendo exigido em plugins legados no Linux.
* **Server**: `reloadfs` reutiliza seu slot para preservar a ordem dos filterscripts.
* **Server**: Objetos anexados agora são exibidos corretamente para outros jogadores.
* **Server**: Corrigido um crash ao carregar memória pawn inválida.
* **Pawn**: Adicionado `GetPlayerMarkerForPlayer`.
* **Pawn**: Adicionados wrappers de arquivos `a_???`.
* **Upgrader**: Suporte a múltiplas codepages.
* **Upgrader**: Exclusão de arquivos.
* **Upgrader**: Relatório completo de substituições.


**Changelog completo**: https://github.com/openmultiplayer/open.mp/compare/v1-RC1...v1-RC2
