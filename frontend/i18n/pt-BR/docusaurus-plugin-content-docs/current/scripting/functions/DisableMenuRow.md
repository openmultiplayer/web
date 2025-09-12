---
title: DisableMenuRow
sidebar_label: DisableMenuRow
description: Desativa uma linha específica em um menu para todos os jogadores.
tags: ["menu"]

---

## Descrição

Desativa uma linha específica num menu para todos os jogadores. A linha ficará acinzentada e não poderá ser selecionada.

| Parâmetro   | Descrição                                                                                             |
| ----------- | ----------------------------------------------------------------------------------------------------- |
| Menu:menuid | O ID do menu onde a linha será desativada. Deve ser válido, pois IDs inválidos causam crash no servidor. |
| row         | O ID da linha a ser desativada (começando em 0).                                                      |

## Retornos

Esta função sempre retorna **1**, mesmo quando falha.

- Se uma linha inválida for especificada, nada acontece
- Se um ID de menu inválido for especificado, o servidor irá crashar

## Exemplos

```c  
new Menu:WeaponMenu;  

public OnGameModeInit()  
{  
    WeaponMenu = CreateMenu("Armas", 1, 50.0, 180.0, 200.0, 200.0);  
    AddMenuItem(WeaponMenu, 0, "Lançador de Foguetes");  
    AddMenuItem(WeaponMenu, 0, "Lança-Chamas");  
    AddMenuItem(WeaponMenu, 0, "Minigun");  
    AddMenuItem(WeaponMenu, 0, "Granadas");  
    return 1;  
}  

public OnPlayerCommandText(playerid, cmdtext[])  
{  
    if (!strcmp(cmdtext, "/desativarlinha", true))  
    {  
        DisableMenuRow(WeaponMenu, 2); // Desativa a linha "Minigun"  
        return 1;  
    }  
    return 1;  
}  
```  

## Observações

:::warning

- Causa crash se receber um ID de menu inválido
- A linha é desativada para TODOS os jogadores
- Não existe função para desativar linha para um jogador específico
- Soluções alternativas incluem criar menus diferentes ou um menu por jogador

:::

## Funções Relacionadas

- [CreateMenu](CreateMenu): Cria um novo menu
- [DestroyMenu](DestroyMenu): Remove um menu permanentemente
- [AddMenuItem](AddMenuItem): Adiciona um item ao menu
- [IsMenuRowDisabled](IsMenuRowDisabled): Verifica se uma linha está desativada