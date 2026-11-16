---
title: OnActorStreamIn
sidebar_label: OnActorStreamIn
description: This callback is called when an actor streams in by a player's client.
tags: ["actor"]
---

<VersionWarn name='callback' version='SA-MP 0.3.7' />

## Description

This callback is called when an actor streams in by a player's client.

| Name        | Description                                                   |
| ----------- | ------------------------------------------------------------- |
| actorid     | The ID of the actor that has been streamed in for the player. |
| forplayerid | The ID of the player that streamed the actor in.              |

## Returns

It is always called first in filterscripts.

## Examples

```c
public OnActorStreamIn(actorid, forplayerid)
{
    new string[48];
    format(string, sizeof(string), "Actor %d is now streamed in for you.", actorid);
    SendClientMessage(forplayerid, 0xFFFFFFFF, string);
    return 1;
}
```

## Notes

<NoteNPCCallbacks />

## Related Callbacks

The following callbacks might be useful, as they're related to this callback in one way or another.

- [OnActorStreamOut](OnActorStreamOut): This callback is called when an actor streams out by a player's client.
- [OnPlayerStreamIn](OnPlayerStreamIn): This callback is called when a player streams in for another player.
#define FILTERSCRIPT

#include <a_samp>

#define COR_AMARELO 0xFFFF00AA
#define COR_AZUL    0x00BFFFAA
#define COR_BRANCO  0xFFFFFFFF

public OnGameModeInit()
{
    print("--- Servidor SA-MP RP Mobile iniciado com sucesso! ---");
    return 1;
}

public OnPlayerConnect(playerid)
{
    // Mensagem de boas-vindas otimizada para jogadores mobile
    SendClientMessage(playerid, COR_AZUL, "==================================================");
    SendClientMessage(playerid, COR_BRANCO, " Bem-vindo(a) ao nosso servidor Roleplay Mobile!");
    SendClientMessage(playerid, COR_BRANCO, " Use /ajuda para ver os comandos básicos do servidor.");
    SendClientMessage(playerid, COR_AZUL, "==================================================");
    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    // Comando /ajuda
    if(strcmp(cmdtext, "/ajuda", true) == 0)
    {
        SendClientMessage(playerid, COR_AMARELO, "--- COMANDOS BÁSICOS RP MOBILE ---");
        SendClientMessage(playerid, COR_BRANCO, "• /status - Ver seus documentos e dinheiro");
        SendClientMessage(playerid, COR_BRANCO, "• /perfil - Ver suas informações de jogo");
        SendClientMessage(playerid, COR_BRANCO, "• /gps - Abrir o sistema de localização");
        SendClientMessage(playerid, COR_AMARELO, "------------------------------------");
        return 1;
    }

    // Comando /status (Exemplo de RP)
    if(strcmp(cmdtext, "/status", true) == 0)
    {
        SendClientMessage(playerid, COR_AZUL, "[RP] Seus documentos estão limpos e você está empregado.");
        return 1;
    }

    // Caso o comando não exista
    SendClientMessage(playerid, 0xFF0000AA, "Comando desconhecido! Digite /ajuda para ver os comandos disponíveis.");
    return 0;
}
#define FILTERSCRIPT

#include <a_samp>

// Definindo os IDs das Dialogs
#define DIALOG_AJUDA 1000
#define DIALOG_STATUS 1001

public OnGameModeInit()
{
    print("--- Servidor SA-MP RP Mobile (Design Moderno) iniciado! ---");
    return 1;
}

public OnPlayerConnect(playerid)
{
    // Mensagem de boas-vindas visual no chat
    SendClientMessage(playerid, 0x00BFFFAA, "==================================================");
    SendClientMessage(playerid, -1, " Bem-vindo(a) ao servidor! Toque na tela ou digite /ajuda");
    SendClientMessage(playerid, 0x00BFFFAA, "==================================================");
    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    // Comando /ajuda com Design em Dialog (Estilo Menu Mobile)
    if(strcmp(cmdtext, "/ajuda", true) == 0)
    {
        ShowPlayerDialog(playerid, DIALOG_AJUDA, DIALOG_STYLE_LIST, 
            "{00BFFF}Central de Ajuda - RP Mobile", 
            "1. Meus Status e Documentos\n2. Como jogar (Regras básicas)\n3. Trabalhos Disponíveis\n4. Fechar", 
            "Selecionar", "Cancelar");
        return 1;
    }

    // Comando /status rápido
    if(strcmp(cmdtext, "/status", true) == 0)
    {
        ShowPlayerDialog(playerid, DIALOG_STATUS, DIALOG_STYLE_MSGBOX, 
            "{FFD700}Seu Status Atual", 
            "Nome: Jogador\nDinheiro: $5.000\nNível: 1\nEmprego: Desempregado", 
            "Fechar", "");
        return 1;
    }

    return 0; // Retorna 0 para comandos desconhecidos padrão do SA-MP
}

public OnDialogResponse(playerid, dialogid, response, listitem, inputtext[])
{
    // Se o jogador fechou a dialog, não faz nada
    if(!response) return 1;

    if(dialogid == DIALOG_AJUDA)
    {
        switch(listitem)
        {
            case 0: // Opção 1: Meus Status
            {
                ShowPlayerDialog(playerid, DIALOG_STATUS, DIALOG_STYLE_MSGBOX, "{FFD700}Seu Status Atual", "Nome: Jogador\nDinheiro: $5.000\nNível: 1\nEmprego: Desempregado", "Fechar", "");
            }
            case 1: // Opção 2: Regras
            {
                ShowPlayerDialog(playerid, 999, DIALOG_STYLE_MSGBOX, "{00BFFF}Regras do Servidor", "• Proibido DM (Deathmatch sem motivo)\n• Proibido Powergaming\n• Respeite os Staffs e jogadores.", "Voltar", "");
            }
            case 2: // Opção 3: Trabalhos
            {
                ShowPlayerDialog(playerid, 998, DIALOG_STYLE_MSGBOX, "{00BFFF}Trabalhos", "Vá até a prefeitura no GPS para pegar seu primeiro emprego (Ex: Lixeiro ou Entregador).", "Voltar", "");
            }
        }
        return 1;
    }

    return 0;
}
#define FILTERSCRIPT

#include <a_samp>

// ID da Dialog de Divulgação
#define DIALOG_DIVULGAR 2026

public OnGameModeInit()
{
    print("--- Sistema de Divulgacao/Postagem do Servidor carregado! ---");
    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    // Comando /divulgar ou /postar para mostrar os dados do servidor
    if(strcmp(cmdtext, "/divulgar", true) == 0 || strcmp(cmdtext, "/postar", true) == 0)
    {
        // 1. Envia uma mensagem chamativa no chat global do servidor
        new string[144], nome[MAX_PLAYER_NAME];
        GetPlayerName(playerid, nome, sizeof(nome));
        
        format(string, sizeof(string), "[DIVULGAÇÃO] %s está divulgando o servidor! Use /divulgar para ver o IP e Discord.", nome);
        SendClientMessageToAll(0x00FF7FAA, string);

        // 2. Abre um painel visual (Design Mobile) com as informações do servidor
        ShowPlayerDialog(playerid, DIALOG_DIVULGAR, DIALOG_STYLE_MSGBOX, 
            "{00BFFF}Divulgue o Nosso Servidor RP Mobile!", 
            "{FFFFFF}Ajude o servidor a crescer chamando seus amigos!\n\n\
            {FFD700}IP do Servidor: {FFFFFF}seu.ip.aqui:7777\n\
            {FFD700}Discord Oficial: {FFFFFF}discord.gg/seulink\n\
            {FFD700}WhatsApp: {FFFFFF}chat.whatsapp.com/seulink\n\n\
            {00FF7F}Tire um print desta tela e poste nos grupos!", 
            "Fechar", "");
            
        return 1;
    }

    // Comando /anunciar (Para o Admin postar um anúncio grande no meio da tela de todos)
    if(strcmp(cmdtext, "/anunciar", true) == 0)
    {
        if(!IsPlayerAdmin(
