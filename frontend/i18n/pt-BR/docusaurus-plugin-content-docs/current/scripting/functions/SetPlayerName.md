---
title: SetPlayerName
sidebar_label: SetPlayerName
description: "Define o nome de um jogador."
tags: ["player"]
---


## Descrição

Define o nome de um jogador.

| Nome | Descrição |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| playerid | O ID do jogador cujo nome será definido.                                                                                       |
| const name[] | O nome a ser definido. Deve ter de 1 a 24 caracteres e conter apenas caracteres válidos (0-9, a-z, A-Z, [], (), \$ @ . \_ e = somente). |

## Retornos

**1** O nome foi alterado com sucesso

**0** O jogador não está conectado ou o nome já está em uso

**-1** O nome não pode ser alterado (tem menos de 3 símbolos, é muito longo ou contém caracteres inválidos)

## Exemplos

```c
// O comando simplesmente define o nome do jogador como "Superman", se possível, sem verificação de erros ou mensagens.
if (strcmp(cmdtext, "/superman", true) == 0)
{
    SetPlayerName(playerid, "Superman");
    return 1;
}

// O comando define o nome do jogador como "Superman" se possível, informa o jogador sobre
// quaisquer erros usando uma instrução "switch".
if (strcmp(cmdtext, "/superman", true) == 0)
{
    switch (SetPlayerName(playerid, "Superman"))
    {
        case -1:
        {
            SendClientMessage(playerid, 0xFF0000FF, "The name has invalid characters or it's out of length.");
        }
        case 0:
        {
            SendClientMessage(playerid, 0xFF0000FF, "Unable to change your name, someone else is known as 'Superman' already.");
        }
        case 1:
        {
            SendClientMessage(playerid, 0x00FF00FF, "You are now known as 'Superman'");
        }
    }
    return 1;
}
```
## Notas

:::warning

- Alterar o nome dos jogadores para o mesmo nome, mas com casos de personagem diferentes (por exemplo, "John" para "JOHN") não funcionará.
- Se usado em [OnPlayerConnect](../callbacks/OnPlayerConnect), o novo nome não será mostrado para o jogador conectado.
- Passar uma string nula como novo nome irá travar o servidor. (Corrigido em open.mp)
- Os nomes dos jogadores podem ter até 24 caracteres ao usar esta função, mas ao ingressar no servidor a partir do navegador do servidor SA-MP, os nomes dos jogadores não devem ter mais que 20 e menos que 3 caracteres (o servidor negará a entrada). Isso permite 4 caracteres extras ao usar SetPlayerName.

:::

## Funções Relacionadas

- [GetPlayerName](GetPlayerName): Obtenha o nome de um jogador.
- [IsValidNickName](IsValidNickName): Verifica se um apelido é válido.
- [AllowNickNameCharacter](AllowNickNameCharacter): Permite que um caractere seja usado no apelido.
