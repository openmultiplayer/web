---
title: OnPlayerPrivmsg
description: This callback is called when a player sends a private message through the native PM system /pm.
tags: ["player"]
---

# OnPlayerPrivmsg

<TagLinks />

::: warning

This callback was removed in SA-MP 0.3. See below how to create a /pm command.

:::

## Description

This callback is called when a player sends a private message through the native PM system /pm.

| Name       | Description                          |
| ---------- | ------------------------------------ |
| playerid   | The player who sent a message.       |
| recieverid | The player who receives the message. |
| text[]     | The actual message.                  |

## Returns

ImportantNote

You can't return 0 and block private messages in a filterscript, it must be used in a gamemode

## Examples

```c
public OnPlayerPrivmsg(playerid, recieverid, text[])
{
    if(muted[playerid]) return 0;
    return 1;
}
if(!strcmp("/pm", cmdtext, true))
{
    tmp = strtok(cmdtext,idx);
    if(!strlen(tmp)) return SendClientMessage(playerid,0xFF0000FF,"USAGE: /PM (id) (message)");
    new id = strval(tmp);
    gMessage = strrest(cmdtext,idx);
    if(!strlen(gMessage)) return SendClientMessage(playerid,0xFF0000FF,"Usage: /pm (id) (message)");
    if(!IsPlayerConnected(id)) return SendClientMessage(playerid,0xFF0000FF,"/pm :Invalid ID");
    GetPlayerName(id,iName,sizeof(iName));
    GetPlayerName(playerid,pName,sizeof(pName));
    format(Message,sizeof(Message),">> %s(%i): %s",iName,id,gMessage);
    SendClientMessage(playerid,0xFFD720FF,Message);
    format(Message,sizeof(Message),"** %s(%i): %s",pName,playerid,gMessage);
    SendClientMessage(id,0xFFD720FF,Message);
    PlayerPlaySound(id,1085,0.0,0.0,0.0);
    return 1;
}
```

## Notes

::: warning

You can't return 0 and block private messages in a filterscript, it must be used in a gamemode

:::

## Related Functions

- OnPlayerCommandText: Called when a player types a command.
- OnPlayerText: Called when a player sends a message via the chat.
