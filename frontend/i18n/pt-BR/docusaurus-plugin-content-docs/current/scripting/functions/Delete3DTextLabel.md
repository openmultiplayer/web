---

title: Delete3DTextLabel
sidebar\_label: Delete3DTextLabel
description: Apaga um texto 3D (criado com Create3DTextLabel).
tags: \["3dtextlabel"]
----------------------

## descrição

Apaga um texto 3D criado com [Create3DTextLabel](Create3DTextLabel).

| Nome           | Descrição                  |
| -------------- | -------------------------- |
| Text3D\:textid | O ID do texto 3D a apagar. |

## retorno

Retorna **true** se o texto 3D foi apagado, caso contrário **false**.

## exemplo

```c
new Text3D:gMyLabel;

public OnGameModeInit()
{
    gMyLabel = Create3DTextLabel("Estou nas coordenadas:\n30.0, 40.0, 50.0", 0x008080FF, 30.0, 40.0, 50.0, 40.0, 0, false);
    return 1;
}

// Mais tarde
Delete3DTextLabel(gMyLabel);
```

## funções relacionadas

* [Create3DTextLabel](Create3DTextLabel): Criar um texto 3D.
* [IsValid3DTextLabel](IsValid3DTextLabel): Verifica se um texto 3D é válido.
* [Is3DTextLabelStreamedIn](Is3DTextLabelStreamedIn): Verifica se um texto 3D está streamado para um jogador.
* [Attach3DTextLabelToPlayer](Attach3DTextLabelToPlayer): Anexa um texto 3D a um jogador.
* [Attach3DTextLabelToVehicle](Attach3DTextLabelToVehicle): Anexa um texto 3D a um veículo.
* [Update3DTextLabelText](Update3DTextLabelText): Muda o texto de um texto 3D.
* [CreatePlayer3DTextLabel](CreatePlayer3DTextLabel): Criar um texto 3D para um jogador.
* [DeletePlayer3DTextLabel](DeletePlayer3DTextLabel): Apaga um texto 3D de um jogador.
* [UpdatePlayer3DTextLabelText](UpdatePlayer3DTextLabelText): Muda o texto de um texto 3D de um jogador.
