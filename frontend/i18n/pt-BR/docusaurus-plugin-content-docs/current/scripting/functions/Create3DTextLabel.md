---
title: Create3DTextLabel
sidebar_label: Create3DTextLabel
description: Cria um rótulo de texto 3D em uma localização específica no mundo.
tags: ["3dtextlabel"]
---

## Descrição

Cria um rótulo de texto 3D em uma localização específica no mundo

| Nome               | Descrição                                                                      |
| ------------------ | ------------------------------------------------------------------------------ |
| const text[]       | A string de texto inicial.                                                     |
| colour             | A cor do texto, como um inteiro ou hex no formato de cor RGBA                 |
| Float:x            | Coordenada X                                                                   |
| Float:y            | Coordenada Y                                                                   |
| Float:z            | Coordenada Z                                                                   |
| Float:drawDistance | A distância a partir da qual você pode ver o rótulo de texto 3D               |
| virtualWorld       | O mundo virtual no qual você pode ver o texto 3D                              |
| bool:testLOS       | Testa a linha de visão para que este texto não possa ser visto através de objetos (true/false) |
| OPEN_MP_TAGS:...   | Número indefinido de argumentos de qualquer tag.                              |

## Retorno

O ID do rótulo de texto 3D recém-criado, ou `INVALID_3DTEXT_ID` se o limite de rótulos de texto 3D (`MAX_3DTEXT_GLOBAL`) foi atingido.

## Exemplos

```c
public OnGameModeInit()
{
    Create3DTextLabel("Estou nas coordenadas:\n30.0, 40.0, 50.0", 0x008080FF, 30.0, 40.0, 50.0, 40.0, 0, false);
    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/mark", true))
    {
        new name[MAX_PLAYER_NAME];
        new Float:x, Float:y, Float:z;
        new worldid;

        GetPlayerName(playerid, name, sizeof(name));
        GetPlayerPos(playerid, x, y, z);
        worldid = GetPlayerVirtualWorld(playerid);

        Create3DTextLabel("%s marcou este lugar", 0xFF0000FF, x, y, z, 15.0, worldid, false, name);
        return 1;
    }
    return 0;
}
```

## Notas

:::tip

drawDistance parece ser muito menor quando especta.

:::

:::tip

Use incorporação de cores para múltiplas cores no texto.

:::

:::warning

- Se text[] estiver vazio, o servidor/clientes próximos ao texto podem travar! (Corrigido no open.mp)
- Se o virtualworld for definido como -1, o texto não aparecerá.

:::

## Funções Relacionadas

- [Delete3DTextLabel](Delete3DTextLabel): Deleta um rótulo de texto 3D.
- [IsValid3DTextLabel](IsValid3DTextLabel): Verifica se um rótulo de texto 3D é válido.
- [Is3DTextLabelStreamedIn](Is3DTextLabelStreamedIn): Verifica se um rótulo de texto 3D está transmitido para um jogador.
- [Attach3DTextLabelToPlayer](Attach3DTextLabelToPlayer): Anexa um rótulo de texto 3D a um jogador.
- [Attach3DTextLabelToVehicle](Attach3DTextLabelToVehicle): Anexa um rótulo de texto 3D a um veículo.
- [Update3DTextLabelText](Update3DTextLabelText): Altera o texto de um rótulo de texto 3D.
- [Get3DTextLabelText](Get3DTextLabelText): Obtém o texto do rótulo de texto 3D.
- [Get3DTextLabelColour](Get3DTextLabelColour): Obtém a cor do rótulo de texto 3D.
- [Get3DTextLabelPos](Get3DTextLabelPos): Obtém a posição do rótulo de texto 3D.
- [Get3DTextLabelDrawDistance](Get3DTextLabelDrawDistance): Obtém a distância de desenho do rótulo de texto 3D.
- [Set3DTextLabelDrawDistance](Set3DTextLabelDrawDistance): Define a distância de desenho do rótulo de texto 3D.
- [Get3DTextLabelVirtualWorld](Get3DTextLabelVirtualWorld): Obtém o ID do mundo virtual do rótulo de texto 3D.
- [Set3DTextLabelVirtualWorld](Set3DTextLabelVirtualWorld): Define o ID do mundo virtual do rótulo de texto 3D.
- [Get3DTextLabelLOS](Get3DTextLabelLOS): Obtém a linha de visão do rótulo de texto 3D.
- [Set3DTextLabelLOS](Set3DTextLabelLOS): Define a linha de visão do rótulo de texto 3D.
- [CreatePlayer3DTextLabel](CreatePlayer3DTextLabel): Cria um rótulo de texto 3D para um jogador.
- [DeletePlayer3DTextLabel](DeletePlayer3DTextLabel): Deleta um rótulo de texto 3D de um jogador.
- [UpdatePlayer3DTextLabelText](UpdatePlayer3DTextLabelText): Altera o texto de um rótulo de texto 3D de um jogador.