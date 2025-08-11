---
title: DisableMenu
sidebar_label: DisableMenu
description: Desativa um menu.
tags: ["menu"]

---

## Descrição

Desativa um menu, tornando-o inacessível para os jogadores.

| Parâmetro   | Descrição                     |
| ----------- | ----------------------------- |
| Menu:menuid | O ID do menu a ser desativado. |

## Retornos

Esta função não retorna nenhum valor específico.

## Exemplos

```c  
new WeaponMenu;  

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
    if (!strcmp(cmdtext, "/desativararmas", true))  
    {  
        DisableMenu(WeaponMenu); // Desativa o menu de armas  
        return 1;  
    }  
    return 0;  
}  
```  

## Observações

:::warning

Causa crash se for passado um ID de menu inválido.

:::

## Funções Relacionadas

- [CreateMenu](CreateMenu): Cria um novo menu.
- [DestroyMenu](DestroyMenu): Destrói um menu permanentemente.
- [AddMenuItem](AddMenuItem): Adiciona um item a um menu.
- [IsMenuDisabled](IsMenuDisabled): Verifica se um menu está desativado.