---
title: OnScriptLoadPlayer
description: Este callback é chamado para cada jogador conectado quando um script é carregado.
tags: ["player"]
---

<VersionWarn name='callback' version='omp v1.3.1.2748' />

## Descrição

Este callback é chamado para cada jogador conectado quando um script é carregado.

| Nome          | Descrição                                                                 |
|---------------|---------------------------------------------------------------------------|
| playerid      | O ID do jogador para o qual o script foi carregado.                      |
| bool:isEntryScript | Determina se é um script de entrada (script principal) ou um script secundário. |

## Retornos

Este callback não lida com retornos.

## Exemplos

```c
public OnScriptLoadPlayer(playerid, bool:isEntryScript)
{
    printf("Script carregado para o jogador ID %d (isEntryScript: %s)", playerid, isEntryScript ? "Sim" : "Não");
}
```

## Notas

:::tip

Este callback é chamado quando você está **carregando** um script secundário (filterscript) em tempo de execução.

:::

## Callbacks Relacionados

Os seguintes callbacks podem ser úteis, pois estão relacionados a este callback de alguma forma. 

- [OnScriptUnloadPlayer](OnScriptUnloadPlayer): Este callback é chamado para cada jogador conectado quando um script é descarregado.
- [OnPlayerConnect](OnPlayerConnect): Este callback é chamado quando um jogador se conecta ao servidor.
- [OnPlayerDisconnect](OnPlayerDisconnect): Este callback é chamado quando um jogador sai do servidor.