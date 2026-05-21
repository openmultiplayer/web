---
title: NPC Constants
sidebar_label: NPC Constants
description: "Constantes usadas em funções e retornos de chamada NPC."
tags: ["npc", "constants"]
---


Esta página lista todas as constantes específicas para funções NPC em open.mp.

## Limites

| Valor | Constante | Descrição |
| ----- | ------------- | ----------------------- |
| 1000 | MAX_NPCS | Número máximo de NPCs |
| 64 | NPC_MAX_NODES | Número máximo de nós |

## Constantes inválidas

| Valor | Constante | Descrição |
| ----- | ----------------- | -------------------- |
| -1 | INVALID_NPC_ID | NPC ID inválido |
| -1 | INVALID_PATH_ID | Caminho inválido ID |
| -1 | INVALID_NODE_ID | Nó inválido ID |
| -1 | INVALID_RECORD_ID | Gravação inválida ID |

## Tipos de movimento

Usado por funções como [NPC_Move](../functions/NPC_Move), [NPC_MoveByPath](../functions/NPC_MoveByPath), [NPC_EnterVehicle](../functions/NPC_EnterVehicle) e [NPC_PlayNode](../functions/NPC_PlayNode).

| Valor | Constante | Descrição |
| ----- | --------------------- | ---------------------------------------------------- |
| -1 | UNKNOWN_NPC_MOVE_TYPE | Tipo de movimento desconhecido |
| 0 | NPC_MOVE_TYPE_NONE | Nenhum movimento |
| 1 | NPC_MOVE_TYPE_WALK | NPC caminha até o destino |
| 2 | NPC_MOVE_TYPE_JOG | NPC avança para o destino (padrão para a maioria das funções) |
| 3 | NPC_MOVE_TYPE_SPRINT | NPC corre para o destino |
| 4 | NPC_MOVE_TYPE_DRIVE | NPC dirige até o destino (movimento do veículo) |
| 5 | NPC_MOVE_TYPE_AUTO | Tipo de movimento automático |

## Velocidade de Movimento

Usado por funções de movimento para controlar a velocidade NPC.

| Valor | Constante | Descrição |
| --------- | --------------------- | -------------------------------------- |
| -1.0 | NPC_MOVE_SPEED_AUTO | Velocidade automática baseada no tipo de movimento |
| 0.1552086 | NPC_MOVE_SPEED_WALK | Velocidade de caminhada |
// Use uma velocidade de corrida específica
| 0.926784 | NPC_MOVE_SPEED_SPRINT | Velocidade de corrida |

## Sinalizadores de verificação de entidade

Usado por [NPC_AimAt](../functions/NPC_AimAt), [NPC_AimAtPlayer](../functions/NPC_AimAtPlayer) e [NPC_Shoot](../functions/NPC_Shoot) para detecção de colisão.

| Valor | Constante | Descrição |
| ----- | ----------------------------- | ----------------------------------------------- |
| 0 | NPC_ENTITY_CHECK_NONE | Sem verificação de colisão |
| 1 | NPC_ENTITY_CHECK_PLAYER | Verifique colisões com jogadores |
| 2 | NPC_ENTITY_CHECK_NPC | Verifique colisões com NPCs |
| 4 | NPC_ENTITY_CHECK_ACTOR | Verifique colisões com atores |
| 8 | NPC_ENTITY_CHECK_VEHICLE | Verifique colisões com veículos |
| 16 | NPC_ENTITY_CHECK_OBJECT | Verifique colisões com objetos |
| 32 | NPC_ENTITY_CHECK_POBJECT_ORIG | Verifique colisões com objetos do jogador (original) |
| 64 | NPC_ENTITY_CHECK_POBJECT_TARG | Verifique colisões com objetos do jogador (alvo) |
| 128 | NPC_ENTITY_CHECK_MAP | Verifique as colisões com o mapa |
| 255 | NPC_ENTITY_CHECK_ALL | Verifique colisões com todas as entidades |

## Tipos de acertos de bala

Usado por [NPC_Shoot](../functions/NPC_Shoot) para especificar que tipo de alvo está sendo atingido.

| Constant | Descrição |
| ---------------------- | ------------------ |
| BULLET_HIT_TYPE_NONE | Nenhum alvo específico |
| BULLET_HIT_TYPE_PLAYER | Alvo do jogador |

## Exemplos

### Tipos de movimento

```c
// Faça o NPC andar devagar
NPC_Move(npcid, x, y, z, NPC_MOVE_TYPE_WALK);

// Faça o NPC trotar (velocidade padrão)
NPC_Move(npcid, x, y, z, NPC_MOVE_TYPE_JOG);

// Faça o NPC correr rapidamente
NPC_Move(npcid, x, y, z, NPC_MOVE_TYPE_SPRINT);

// Faça o NPC dirigir até o local
NPC_Move(npcid, x, y, z, NPC_MOVE_TYPE_DRIVE);

// Use o tipo de movimento automático
NPC_Move(npcid, x, y, z, NPC_MOVE_TYPE_AUTO);
```
### Velocidade de Movimento

```c
// Use a velocidade automática
NPC_Move(npcid, x, y, z, NPC_MOVE_TYPE_WALK, NPC_MOVE_SPEED_AUTO);

// Use uma velocidade de caminhada específica
NPC_Move(npcid, x, y, z, NPC_MOVE_TYPE_WALK, NPC_MOVE_SPEED_WALK);

// Use uma velocidade de trote específica
NPC_Move(npcid, x, y, z, NPC_MOVE_TYPE_JOG, NPC_MOVE_SPEED_JOG);

// Use uma velocidade de corrida específica
NPC_Move(npcid, x, y, z, NPC_MOVE_TYPE_SPRINT, NPC_MOVE_SPEED_SPRINT);
```
### Sinalizadores de verificação de entidade

```c
// Mire sem verificação de colisão
NPC_AimAt(npcid, x, y, z, true, 1000, true, 0.0, 0.0, 0.6, NPC_ENTITY_CHECK_NONE);

// Mire com verificação completa de colisão
NPC_AimAt(npcid, x, y, z, true, 1000, true, 0.0, 0.0, 0.6, NPC_ENTITY_CHECK_ALL);

// Verifique apenas colisões com jogadores
NPC_AimAt(npcid, x, y, z, true, 1000, true, 0.0, 0.0, 0.6, NPC_ENTITY_CHECK_PLAYER);

// Verifique colisões com jogadores e veículos
NPC_AimAt(npcid, x, y, z, true, 1000, true, 0.0, 0.0, 0.6,
         NPC_ENTITY_CHECK_PLAYER | NPC_ENTITY_CHECK_VEHICLE);

// Verifique colisões apenas com objetos
NPC_AimAt(npcid, x, y, z, true, 1000, true, 0.0, 0.0, 0.6, NPC_ENTITY_CHECK_OBJECT);
```
### Tipos de acertos de bala

```c
// Atire em um local específico (sem alvo)
NPC_Shoot(npcid, INVALID_PLAYER_ID, BULLET_HIT_TYPE_NONE, WEAPON_SNIPER,
         x, y, z, 0.0, 0.0, 0.0, false);

// Atire em um jogador
NPC_Shoot(npcid, playerid, BULLET_HIT_TYPE_PLAYER, WEAPON_M4,
         x, y, z, 0.0, 0.0, 0.0, true);
```
### Constantes inválidas

```c
// Verifique se o ID do NPC é válido
new npcid = NPC_Create("Bot");
if (npcid != INVALID_NPC_ID)
{
    // NPC foi criado com sucesso
    NPC_Spawn(npcid);
}

// Verifique se o ID do caminho é válido
new pathid = NPC_CreatePath();
if (pathid != INVALID_PATH_ID)
{
    // O caminho foi criado com sucesso
    NPC_AddPointToPath(pathid, 0.0, 0.0, 3.0, 0.2);
}

// Verifique o jogador inválido em NPC_Kill
NPC_Kill(npcid, INVALID_PLAYER_ID, REASON_SUICIDE);
```
### Limites

```c
// Faça um loop por todos os NPCs possíveis
for (new i = 0; i < MAX_NPCS; i++)
{
    if (NPC_IsValid(i))
    {
        // Processar NPC válido
    }
}

// Exemplo usando NPC_MAX_NODES
for (new i = 0; i < NPC_MAX_NODES; i++)
{
    if (NPC_IsNodeOpen(i))
    {
        // Processar nó aberto
        NPC_CloseNode(i);
    }
}
```
## Páginas relacionadas

- [Constantes de Arma](constants#weapon-constants) - Para arma IDs usada com NPCs
- [Estados do jogador](playerstates) - Para constantes de estado do jogador que podem ser aplicadas a NPCs
- [Veículo IDs](vehicleid) - Para modelo de veículo IDs usado nas funções do veículo NPC
