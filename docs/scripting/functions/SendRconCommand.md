---
título: SendRconCommand
descrição: Envia um comando RCON (console remoto).
tags: ["administrador"]
---

## Descrição

Sends an RCON (Remote Console) command.

| Nome             | Descrição                                |
| ---------------- | ------------------------------------------ |
| const format[]   | O comando RCON a ser executado.           |
| OPEN_MP_TAGS:... | Número indefinido de argumentos de qualquer tag. |

## Retorno

Esta função sempre retorna 1.

## Exemplos

```c
SendRconCommand("gmx");
// Esta é uma versão com script de digitação "/rcon gmx" no jogo.
// GMX reinicia o modo de jogo.

// Exemplo usando format()
new szMapName[] = "Los Santos";
new szCmd[64];
format(szCmd, sizeof(szCmd), "mapname %s", szMapName);
SendRconCommand(szCmd);

// DICA PRO: Você não precisa de `format` em open.mp
SendRconCommand("game.map %s", szMapName);
```

## Notes

:::aviso

- Não suporta login, devido à falta do parâmetro 'playerid'.
- 'password 0' removerá a senha do servidor se alguma estiver definida.
- Esta função resultará em uma chamada na callback [OnRconCommand](../callbacks/OnRconCommand).

:::

:::info

Veja [config.json](../../server/config.json)

:::

## Funções Relacionadas

- [IsPlayerAdmin](IsPlayerAdmin): Verifica se um jogador está logado na RCON.

## Callbacks Relacionadas

- [OnRconCommand](../callbacks/OnRconCommand): Chamado quando um comando RCON é enviado.
- [OnRconLoginAttempt](../callbacks/OnRconLoginAttempt): Chamado quando é feita uma tentativa de login no RCON.
