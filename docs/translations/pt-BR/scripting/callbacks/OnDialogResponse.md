---
title: OnDialogResponse
description: Essa callback é executada quando um player responde a um Dialog criado através do ShowPlayerDialog, seja clicando em um botão, pressionando ENTER/ESC ou dando um duplo clique em um item da lista (caso esteja usando um dialog de lista).
tags: []
---

<VersionWarn name='callback' version='SA-MP 0.3a' />

## Descrição

Essa callback é executada quando um player responde a um Dialog criado através do ShowPlayerDialog, seja clicando em um botão, pressionando ENTER/ESC ou dando um duplo clique em um item da lista (caso esteja usando um dialog de lista).

| Nome        | Descrição                                                                                                                                                           |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| playerid    | ID do jogador que está respondendo o Dialog.                                                                                                                        |
| dialogid    | ID do Dialog que o player está interagindo, indicado na função ShowPlayerDialog.                                                                                    |
| response    | 1 para o botão esquerdo 0 para o direito (caso haja somente um botão o valor será sempre 1).                                                                        |
| listitem    | ID do item selecionado na lista pelo jogador (iniciando em 0) (somente se o jogador estiver utilizando um dialogo em lista, caso contrário o valor padrão será -1). |
| inputtext[] | O texto digitado pelo jogador no dialog de texto ou o texto do item da lista (depende de qual dialog está sendo usado).                                             |

## Retornos

Sempre a primeira a ser declarada em filterscripts, retornar 1 impedirá outros filterscripts de lerem o resultado.

## Examples

```c
// Definindo o ID do dialog para que possamos identifica-lo.
#define DIALOG_RULES 1

// Em algum comando...
ShowPlayerDialog(playerid, DIALOG_RULES, DIALOG_STYLE_MSGBOX, "Regras do Servidor", "- Não utilize Cheats\n- Não faça Spam\n- Respeite os Administradores\n\nVocê aceita as regras?", "Sim", "Não");

public OnDialogResponse(playerid, dialogid, response, listitem, inputtext[])
{
    if (dialogid == DIALOG_RULES)
    {
        if (response) // Caso o jogador clique em "Sim" ou aperte ENTER.
        {
            SendClientMessage(playerid, COLOR_GREEN, "Obrigado por aceitar as regras do servidor, bom jogo!");
        }
        else // Caso o jogador pressione ESC ou clique em Cancelar.
        {
            Kick(playerid);
        }
        return 1; // Ok, aqui finalizamos a manipulação do Dialog, nesse caso retornaremos 1. Igual no OnPlayerCommandText.
    }

    return 0; // Você deve retornar 0 aqui, igual no OnPlayerCommandText.
}
#define DIALOG_LOGIN 2

// Em algum comando...
ShowPlayerDialog(playerid, DIALOG_LOGIN, DIALOG_STYLE_INPUT, "Login", "Por favor, digite sua senha:", "Entrar", "Cancelar");

public OnDialogResponse(playerid, dialogid, response, listitem, inputtext[])
{
    if (dialogid == DIALOG_LOGIN)
    {
        if (!response) // Caso o jogador clique em 'Cancelar' ou pressione ESC.
        {
            Kick(playerid);
        }
        else // Caso o jogador pressione ENTER ou clique em 'ENTRAR'.
        {
            if (CheckPassword(playerid, inputtext))
            {
                SendClientMessage(playerid, COLOR_RED, "Você foi logado com sucesso!");
            }
            else
            {
                SendClientMessage(playerid, COLOR_RED, "O LOGIN FALHOU.");

                // Mostramos novamente o dialog de login...
                ShowPlayerDialog(playerid, DIALOG_LOGIN, DIALOG_STYLE_INPUT, "Login", "Por favor, digite sua senha:", "Entrar", "Cancelar");
            }
        }
        return 1; // Ok, aqui finalizamos a manipulação do Dialog, nesse caso retornaremos 1. Igual no OnPlayerCommandText.
    }

    return 0; // Você deve retornar 0 aqui, igual no OnPlayerCommandText.
}
#define DIALOG_WEAPONS 3

// Em algum comando...
ShowPlayerDialog(playerid, DIALOG_WEAPONS, DIALOG_STYLE_LIST, "Armas", "Desert Eagle\nAK-47\nCombat Shotgun", "Selecionar", "Fechar");

public OnDialogResponse(playerid, dialogid, response, listitem, inputtext[])
{
    if (dialogid == DIALOG_WEAPONS)
    {
        if (response) // Caso o jogador clique em 'Selecionar' ou clique duas vezes em alguma arma na lista 
        {
            // Da ao jogador a arma...
            switch(listitem)
            {
                case 0: GivePlayerWeapon(playerid, WEAPON_DEAGLE, 14); // Da ao jogador uma desert eagle
                case 1: GivePlayerWeapon(playerid, WEAPON_AK47, 120); // Da ao jogador uma AK-47
                case 2: GivePlayerWeapon(playerid, WEAPON_SHOTGSPA, 28); // Da ao jogador uma Combat Shotgun
            }
        }
        return 1; // Ok, aqui finalizamos a manipulação do Dialog, nesse caso retornaremos 1. Igual no OnPlayerCommandText.
    }

    return 0; // Você deve retornar 0 aqui, igual no OnPlayerCommandText.
}
#define DIALOG_WEAPONS 3

// Em algum comando...
ShowPlayerDialog(playerid, DIALOG_WEAPONS, DIALOG_STYLE_LIST, "Armas",
"Arma\tMunição\tPreço\n\
M4\t120\t500\n\
MP5\t90\t350\n\
AK-47\t120\t400",
"Selecionar", "Fechar");

public OnDialogResponse(playerid, dialogid, response, listitem, inputtext[])
{
    if (dialogid == DIALOG_WEAPONS)
    {
        if (response) // Caso o jogador clique em 'Selecionar' ou clique duas vezes em alguma arma na lista 
        {
             // Da ao jogador a arma...
            switch(listitem)
            {
                case 0: GivePlayerWeapon(playerid, WEAPON_M4, 120); // Da ao jogador uma M4
                case 1: GivePlayerWeapon(playerid, WEAPON_MP5, 90); // Da ao jogador uma MP5
                case 2: GivePlayerWeapon(playerid, WEAPON_AK47, 120); // Da ao jogador uma AK-47
            }
        }
        return 1; // Ok, aqui finalizamos a manipulação do Dialog, nesse caso retornaremos 1. Igual no OnPlayerCommandText.
    }

    return 0; // Você deve retornar 0 aqui, igual no OnPlayerCommandText.
}
```

## Notas

:::tip

Os parâmetros podem conter diferentes valores baseados no estilo do Dialog ([clique aqui para mais exemplos](../resources/dialogstyles)).

:::

:::tip

É recomendado utilizar vários dialogids, caso você tenha diversos dialogs.

:::

:::warning

O dialog não sai da tela do jogador quando o gamemode reinicia, isso faz com que o servidor de um warning ("Warning: PlayerDialogResponse PlayerId: 0 dialog ID doesn't match last sent dialog ID") caso o jogador tente responder o dialog após o servidor voltar.

:::

## Funções Relacionadas

- [ShowPlayerDialog](../functions/ShowPlayerDialog): Mostra um Dialog para o jogador.
