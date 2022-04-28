---
title: OnObjectMoved
description: Essa callback é executada quando um objeto é movido (após a função MoveObject finalizar sua execução e o objeto parar de se mover).
tags: []
---

## Descrição

Essa callback é executada quando um objeto é movido (após a função MoveObject finalizar sua execução e o objeto parar de se mover).

| Nome     | Descrição                           |
| -------- | ----------------------------------- |
| objectid | ID do objeto que foi movido         |

## Retornos

Sempre executada primeiro nos filterscripts.

## Exemplos

```c
public OnObjectMoved(objectid)
{
    printf("O Objeto %d terminou de se movimentar.", objectid);
    return 1;
}
```

## Notas

:::tip

A função SetObjectPos não funciona ao ser chamada por essa callback. Para arrumar esse problema, recrie o objeto.

:::

## Funções Relacionadas

- [MoveObject](../functions/MoveObject): Move um objeto.
- [MovePlayerObject](../functions/MovePlayerObject): Move um objeto do jogador.
- [IsObjectMoving](../functions/IsObjectMoving): Verifica se o objeto está se movendo.
- [StopObject](../functions/StopObject): Para o movimento do objeto.

## Callbacks Relacionadas

- [OnPlayerObjectMoved](OnPlayerObjectMoved): Executada quando um objeto do jogador para de se mover.
