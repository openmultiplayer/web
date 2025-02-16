---
title: OnPlayerEditObject
sidebar_label: OnPlayerEditObject
description: Esta callback é chamada quando um jogador termina de editar um objeto (EditObject/EditPlayerObject).
tags: ["player"]
---

## Descição

Esta callback é chamada quando um jogador termina de editar um objeto (EditObject/EditPlayerObject).

| Name                   | Descrição                                                     |
|------------------------|---------------------------------------------------------------|
| playerid               | O ID do jogador que edtiou um objeto                          |
| playerobject           | 0 se for global, ou 1 se for um playerobject.                 |
| objectid               | O ID do objeto que foi editado.                               |
| EDIT_RESPONSE:response | O [tipo de resposta](../resources/objecteditionresponsetypes) |
| Float:fX               | O desclocamento de X para o objeto editado.                   |
| Float:fY               | O desclocamento de Y para o objeto editado.                   |
| Float:fZ               | O desclocamento de Z para o objeto editado.                   |
| Float:fRotX            | A rotação de X para o objeto editado.                         |
| Float:fRotY            | A rotação de Y para o objeto editado.                         |
| Float:fRotZ            | A rotação de Z para o objeto editado.                         |

## Retorno

1 - Irá previnir que outro filterscript receba esta callback.

0 - Indica que esta callback será passada para o próximo filterscript.

Sempre é chamada primeiro em filterscripts.

## Exemplos

```c
public OnPlayerEditObject(playerid, playerobject, objectid, EDIT_RESPONSE:response, Float:fX, Float:fY, Float:fZ, Float:fRotX, Float:fRotY, Float:fRotZ)
{
    new
        Float: oldX,
        Float: oldY,
        Float: oldZ,
        Float: oldRotX,
        Float: oldRotY,
        Float: oldRotZ;

    GetObjectPos(objectid, oldX, oldY, oldZ);
    GetObjectRot(objectid, oldRotX, oldRotY, oldRotZ);
    if (!playerobject) // Se for um objeto global, sincronize a posição para os outros jogadores
    {
        if (!IsValidObject(objectid))
        {
            return 1;
        }
        SetObjectPos(objectid, fX, fY, fZ);
        SetObjectRot(objectid, fRotX, fRotY, fRotZ);
    }

    switch (response)
    {
        case EDIT_RESPONSE_FINAL:
        {
            // O jogador clicou no botão de salvar
            // Faça qualquer coisa aqui para salvar o objeto (posição, rotação etc.)
        }

        case EDIT_RESPONSE_CANCEL:
        {
            //O jogador canceloun então coloque o objeto de volta na velha posição
            if (!playerobject) //Object is not a playerobject
            {
                SetObjectPos(objectid, oldX, oldY, oldZ);
                SetObjectRot(objectid, oldRotX, oldRotY, oldRotZ);
            }
            else
            {
                SetPlayerObjectPos(playerid, objectid, oldX, oldY, oldZ);
                SetPlayerObjectRot(playerid, objectid, oldRotX, oldRotY, oldRotZ);
            }
        }
    }
    return 1;
}
```

## Notas

:::warning

Ao usar 'EDIT_RESPONSE_UPDATE' fique ciente que esta callback não será chamada quando sair de uma edição em progresso resultando na última atualização do 'EDIT_RESPONSE_UPDATE' ficando fora de sincronia com os objetos.

:::

## Funções Relacionadas

- [EditObject](../functions/EditObject.md): Edita um objeto.
- [CreateObject](../functions/CreateObject.md): Cria um objeto.
- [DestroyObject](../functions/DestroyObject.md): Destroi um objeto.
- [MoveObject](../functions/MoveObject.md): Move um objeto.
