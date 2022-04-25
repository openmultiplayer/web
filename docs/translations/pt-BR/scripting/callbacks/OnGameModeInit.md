---
title: OnGameModeInit
description: Essa callback é executada quando o gamemode é iniciado.
tags: []
---

## Descrição

Essa callback é executada quando o gamemode é iniciado.

## Exemplos

```c
public OnGameModeInit()
{
    print("GameMode Iniciado!");
    return 1;
}
```

## Notas

:::tip

Essa função também pode ser usada em um filterscript para detectar se o gamemode foi trocado pela RCON, realizando uma troca de gamemodes ou um gmx, sendo que ao trocar o gamemode o filterscript não recarrega.

:::

## Callbacks Relacionadas

- [OnGameModeExit](OnGameModeExit): Executada quando o gamemode é desligado.
- [OnFilterScriptInit](OnFilterScriptInit): Executada quando o filterscript é carregado.
- [OnFilterSciptExit](OnFilterScriptExit): Executada quando o filterscript é descarregado.
