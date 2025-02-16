---
title: OnDialogResponse
description: Esta callback é chamada quando um jogador responde a um dialog mostrado usando ShowPlayerDialog ao clicar em um botão, pressionar ENTER/ESC ou dar clique duplo em um item da lista. (se estiver usando o formato lista).
tags: []
---

## Descrição

Esta callback é chamada quando um jogador responde a um dialog mostrado usando ShowPlayerDialog ao clicar em um botão, pressionar ENTER/ESC ou dar clique duplo em um item da lista. (se estiver usando o formato lista).

| Parâmetro   | Descrição                                                                                                                                |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| playerid    | O ID do jogador que respondeu ao dialog.                                                                                                 |
| dialogid    | O ID do dialog que foi respondido, conforme definido no ShowPlayerDialog.                                                                |
| response    | 1 para o botão esquerdo e 0 para o botão direito (se for apenas um botão, sempre será 1)                                                 |
| listitem    | O ID do item da lista selecionado pelo jogador (inicia 0) (apenas se estiver usando dialog no estilo de lista, caso contrário, será -1). |
| inputtext[] | O texto inserido no campo pelo jogador ou texto do item da lista que foi selecionado.                                                    |

## Retorno

É sempre chamado primeiro nas filterscripts, por isso, retornar 1 impede que as outras filterscripts o vejam.

## Exemplos

```c
// Define the dialog ID so we can handle responses
#define DIALOG_RULES 1

// In some command
ShowPlayerDialog(playerid, DIALOG_RULES, DIALOG_STYLE_MSGBOX, "Server Rules", "- No Cheating\n- No Spamming\n- Respect Admins\n\nDo you agree to these rules?", "Yes", "No");

public OnDialogResponse(playerid, dialogid, response, listitem, inputtext[])
{
    if (dialogid == DIALOG_RULES)
    {
        if (response) // Se clicarem em 'Yes' ou pressionarem ENTER
        {
            SendClientMessage(playerid, COLOR_GREEN, "Thank you for agreeing to the server rules!");
        }
        else // ESC pressionado ou Cancel clicado
        {
            Kick(playerid);
        }
        return 1; // Encontrando o dialog, retorna-se 1 para que os outros não sejam processados, Assim como OnPlayerCommandText.
    }

    return 0; // DEVE-SE retornar 0 aqui! Como em OnPlayerCommandText.
}
#define DIALOG_LOGIN 2

// Em algum comando
ShowPlayerDialog(playerid, DIALOG_LOGIN, DIALOG_STYLE_INPUT, "Login", "Please enter your password:", "Login", "Cancel");

public OnDialogResponse(playerid, dialogid, response, listitem, inputtext[])
{
    if (dialogid == DIALOG_LOGIN)
    {
        if (!response) // ESC pressionado ou Cancel clicado
        {
            Kick(playerid);
        }
        else // Pressionando ENTER ou clicando no botão 'Login'
        {
            if (CheckPassword(playerid, inputtext))
            {
                SendClientMessage(playerid, COLOR_RED, "You are now logged in!");
            }
            else
            {
                SendClientMessage(playerid, COLOR_RED, "LOGIN FAILED.");

                // Reapresenta o dialog de Login
                ShowPlayerDialog(playerid, DIALOG_LOGIN, DIALOG_STYLE_INPUT, "Login", "Please enter your password:", "Login", "Cancel");
            }
        }
        return 1; // Encontrando o dialog, retorna-se 1 para que os outros não sejam processados, Assim como OnPlayerCommandText.
    }

    return 0; // DEVE-SE retornar 0 aqui! Como em OnPlayerCommandText.
}
#define DIALOG_WEAPONS 3

// Em um comando
ShowPlayerDialog(playerid, DIALOG_WEAPONS, DIALOG_STYLE_LIST, "Weapons", "Desert Eagle\nAK-47\nCombat Shotgun", "Select", "Close");

public OnDialogResponse(playerid, dialogid, response, listitem, inputtext[])
{
    if (dialogid == DIALOG_WEAPONS)
    {
        if (response) // Se clicar em 'Select' ou dar clique duplo na arma
        {
            // Give them the weapon
            switch(listitem)
            {
                case 0: GivePlayerWeapon(playerid, WEAPON_DEAGLE, 14); // Entrega uma Deagle
                case 1: GivePlayerWeapon(playerid, WEAPON_AK47, 120); // Entra uma AK-47
                case 2: GivePlayerWeapon(playerid, WEAPON_SHOTGSPA, 28); // Entrega uma Combat Shotgun
            }
        }
        return 1; // Encontrando o dialog, retorna-se 1 para que os outros não sejam processados, Assim como OnPlayerCommandText.
    }

    return 0; // DEVE-SE retornar 0 aqui! Como em OnPlayerCommandText.
}
#define DIALOG_WEAPONS 3

// Em um comando
ShowPlayerDialog(playerid, DIALOG_WEAPONS, DIALOG_STYLE_LIST, "Weapons",
"Weapon\tAmmo\tPrice\n\
M4\t120\t500\n\
MP5\t90\t350\n\
AK-47\t120\t400",
"Select", "Close");

public OnDialogResponse(playerid, dialogid, response, listitem, inputtext[])
{
    if (dialogid == DIALOG_WEAPONS)
    {
        if (response) // Se clicar em 'Select' ou usar clique duplo na arma
        {
            // Devolve uma arma
            switch(listitem)
            {
                case 0: GivePlayerWeapon(playerid, WEAPON_M4, 120); // Entrega uma M4
                case 1: GivePlayerWeapon(playerid, WEAPON_MP5, 90); // Entrega uma MP5
                case 2: GivePlayerWeapon(playerid, WEAPON_AK47, 120); // Entrega uma AK-47
            }
        }
        return 1; // Encontrando o dialog, retorna-se 1 para que os outros não sejam processados, Assim como OnPlayerCommandText.
    }

    return 0; // DEVE-SE retornar 0 aqui! Como em OnPlayerCommandText.
}
```

## Notes

:::tip

Parâmetros podem conter diferentes valores, baseados no estilo do dialog ([clique para mais exemplos](../resources/dialogstyles.md)).

:::

:::tip

É apropriado usar diferentes dialogids, se você tiver muitos.

:::

:::warning

Um dialog de jogador não é escondido ao reiniciar o gamemode, ocasionando em uma mensagem "Warning: PlayerDialogResponse PlayerId: 0 dialog ID doesn't match last sent dialog ID" se um jogador responder ao dialog após o reinício.

:::

## Funções Relacionadas

- [ShowPlayerDialog](../functions/ShowPlayerDialog.md): Show a dialog to a player.
