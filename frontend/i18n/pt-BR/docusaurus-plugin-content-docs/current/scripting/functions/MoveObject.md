---
title: MoveObject
sidebar_label: MoveObject
description: "Mova um objeto para uma nova posição com uma velocidade definida."
tags: ["object"]
---


## Descrição

Mova um objeto para uma nova posição com uma velocidade definida. Jogadores/veículos irão ‘surfar’ no objeto enquanto ele se move.

| Nome | Descrição |
| --------------- | --------------------------------------------------------- |
| objectid | O ID do objeto a ser movido.                             |
| Float:targetX | A coordenada X para a qual mover o objeto.                   |
| Float:targetY | A coordenada Y para a qual mover o objeto.                   |
| Float:targetZ | A coordenada Z para a qual mover o objeto.                   |
| Float:speed | A velocidade na qual mover o objeto (unidades por segundo). |
| Float:rotationX | A rotação FINAL X (opcional).                          |
| Float:rotationY | A rotação FINAL Y (opcional).                          |
| Float:rotationZ | A rotação FINAL Z (opcional).                          |

## Retornos

O tempo que o objeto levará para se mover em milissegundos.

## Exemplos

```c
new gAirportGate; // Em algum lugar no topo do seu script

public OnGameModeInit()
{
    gAirportGate = CreateObject(980, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0);
    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (strcmp(cmdtext, "/moveobject", true) == 0)
    {
        new
            string[64],
            moveTime = MoveObject(gAirportGate, 0.0, 0.0, 10.0, 2.00);

        format(string, sizeof(string), "Object will finish moving in %d milliseconds", moveTime);
        SendClientMessage(playerid, 0xFF0000FF, string);
        return 1;
    }
    return 0;
}
```
## Notas

:::warning

- Esta função pode ser usada para fazer objetos girarem suavemente. Para conseguir isso, entretanto, o objeto também deve ser **movido**. A rotação especificada é a rotação que o objeto terá após o movimento. Conseqüentemente, o objeto não girará quando nenhum movimento for aplicado. Para obter um exemplo de script, dê uma olhada no filterscript ferriswheel.pwn feito por Kye incluído no pacote do servidor (SA-MP 0.3d e superior).
- Para entender completamente a nota acima, você pode (mas não se limitando a) aumentar a posição z em (+0,001) e depois (-0,001) após movê-la novamente, pois não alterar X, Y ou Z não girará o objeto.

:::

## Funções Relacionadas

- [CreateObject](CreateObject): Crie um objeto.
- [DestroyObject](DestroyObject): Destrua um objeto.
- [IsValidObject](IsValidObject): Verifica se determinado objeto é válido.
- [IsObjectMoving](IsObjectMoving): Verifique se o objeto está se movendo.
- [StopObject](StopObject): Impede o movimento de um objeto.
- [SetObjectPos](SetObjectPos): Define a posição de um objeto.
- [SetObjectRot](SetObjectRot): Define a rotação de um objeto.
- [GetObjectPos](GetObjectPos): Localize um objeto.
- [GetObjectRot](GetObjectRot): Verifica a rotação de um objeto.
- [AttachObjectToPlayer](AttachObjectToPlayer): Anexe um objeto a um jogador.
- [CreatePlayerObject](CreatePlayerObject): Crie um objeto para apenas um jogador.
- [DestroyPlayerObject](DestroyPlayerObject): Destrua um objeto de jogador.
- [IsValidPlayerObject](IsValidPlayerObject): Verifica se determinado objeto do jogador é válido.
- [MovePlayerObject](MovePlayerObject): Mova um objeto de jogador.
- [StopPlayerObject](StopPlayerObject): Impede o movimento de um objeto do jogador.
- [IsPlayerObjectMoving](IsPlayerObjectMoving): Verifique se o objeto do jogador está se movendo.
- [SetPlayerObjectPos](SetPlayerObjectPos): Define a posição de um objeto do jogador.
- [SetPlayerObjectRot](SetPlayerObjectRot): Define a rotação de um objeto de jogador.
- [GetPlayerObjectPos](GetPlayerObjectPos): Localize um objeto de jogador.
- [GetPlayerObjectRot](GetPlayerObjectRot): Verifica a rotação de um objeto do jogador.
- [AttachPlayerObjectToPlayer](AttachPlayerObjectToPlayer): Anexe um objeto de jogador a um jogador.
