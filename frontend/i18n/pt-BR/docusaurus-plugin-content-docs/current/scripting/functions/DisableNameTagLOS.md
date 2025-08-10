---
title: DisableNameTagLOS
sidebar_label: DisableNameTagLOS
description: Desativa a verificação de linha de visão (Line-Of-Sight) para nametags, permitindo que os jogadores vejam os nomes através de objetos.
tags: []

---

## Descrição

Desativa a verificação de linha de visão para nametags, fazendo com que os nomes dos jogadores fiquem visíveis mesmo quando obstruídos por objetos.

## Exemplos

```c
public OnGameModeInit()
{
    DisableNameTagLOS();
    return 1;
}
```

## Observações

:::warning

Esta alteração não pode ser revertida até que o servidor reinicie.

:::

:::tip

Você também pode desativar a verificação de linha de visão para nametags através do arquivo [config.json](../../server/config.json):

```json
"use_nametag_los": false,
```

:::

## Funções Relacionadas

- [ShowNameTags](ShowNameTags): Ativa ou desativa a exibição de nametags.
- [ShowPlayerNameTagForPlayer](ShowPlayerNameTagForPlayer): Mostra ou esconde o nametag de um jogador específico para outro jogador.