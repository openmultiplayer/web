---
title: "Controlando um Servidor"
sidebar_label: "Controlando um Servidor"
description: Comandos úteis para gerenciar um servidor.
---

## Mudando o Gamemode

### Rodando um gamemode customizado/baixado

- Abra o diretório em que você instalou o servidor (ex: /Rockstar Games/GTA San Andreas/server)
- Pegue o arquivo .amx baixado/compilado e coloque-o na pasta gamemodes onde você instalou o servidor.
- Use RCON para mudar de modo como descrito acima (2.1)
- Como alternativa você pode adicionar um novo modo para a rotação, também descrito acima (2.3)

### Usando Filterscripts

O mesmo que rodar um gamemode customizado, exceto:

- Coloque o .amx em uma pasta chamada `filterscripts`
- Adicione o seguinte no server.cfg `filterscripts <scriptname>`

## Colocando senha no seu servidor

- Se você desejar, poderá adicionar uma senha para que apenas seus amigos possam entrar, adicione isso ao seu server.cfg

```
password qualquercoisa
```

- Isso irá fazer com que seu servidor contenha uma senha para acessar, que colocamos como 'qualquercoisa', mude-a como desejar.
- Você também pode mudar a senha enquanto estiver no jogo usando `/rcon password novasenhaaqui`
- Você pode remover a senha usando `/rcon password 0`, ou reiniciando o servidor.

## Usando RCON

### Logando

Você pode logar quando estiver no jogo, basta escrever `/rcon login senha`, ou quando estiver fora do jogo usando a RCON no Console Remoto.

A senha é a mesma que você colocou no server.cfg

### Colocando Banimentos

##### samp.ban

samp.ban é o arquivo usado para organizar banimentos, incluindo as seguintes informações sobre o mesmo:

- IP
- Data
- Tempo
- Nome (Nome da pessoa ou motivo, veja [BanEx](../functions/BanEx))
- Tipo de ban

Para adicionar um banido, basta colocar uma linha como esta:

```
IP_AQUI [28/05/09 | 13:37:00] JOGADOR - INGAME BAN
```

Onde `IP_AQUI` é onde você coloca o IP que gostaria de banir.

##### Função Ban()

A função de [Ban](../functions/Ban) pode ser usada para banir um jogador de um script. O [BanEx](../functions/BanEx) irá adicionar uma opção como esta:

```
13.37.13.37 [28/05/09 | 13:37:00] Cheater - BANIMENTO NO JOGO
```

##### RCON Comando de Banimento

O comando de banimento do RCON, executado escrevendo /rcon ban in-game ou "ban" no console, é usado para banir um jogador específico que está no seu servidor, para banir um IP veja a próxima seção.

Simplesmente escreva:

```
# No Jogo:
/rcon ban PLAYERID

# Console:
ban PLAYERID
```

##### Banimento por IP

O comando de banir por IP do RCON, executado escrevendo /rcon banip in-game ou "banip" no console, é usado para banir um endereço de IP específico, para banir um jogador do servidor por IP veja a seção anterior.

Simplesmente escreva:

```
# No Jogo:
/rcon banip IP

# Console:
banip IP
```

### Removendo Banimentos

Uma vez que alguém é banido, há duas maneiras de desabnir o mesmo.

- Remover do samp.ban
- O comando `unbanip` do RCON

#### samp.ban

samp.ban pode ser encontrado no diretório do seu servidor, ele contém linhas com as seguintes informações sobre cada banimento

- IP
- Data
- Tempo
- Nome (Nome do jogador ou motivo (veja [BanEx](../../functions/BanEx)))
- Tipo do banimento (INGAME, IP BAN etc,)

Exemplos:

```
127.8.57.32 [13/06/09 | 69:69:69] NONE - IP BAN
13.37.13.37 [28/05/09 | 13:37:00] Kyeman - INGAME BAN
```

Para desbanir alguém, simplesmente remova a linha, então execute o comando do RCON "reloadbans" para fazer com que o servidor faça a leitura novamente do arquivo.

#### unbanip

O comando de "unbanip" do RCON pode ser usado no jogo ou no console do servidor. Para desbanir um IP, siplesmente digite `/rcon unbanip IP_AQUI` caso esteja no jogo, ou `unbanip IP_AQUI` no console.

Exemplo:

```
13.37.13.37 [28/05/09 | 13:37:00] Kyeman - INGAME BAN
```

```
# No jogo:
/rcon unbanip 13.37.13.37

# Console:
unbanip 13.37.13.37
```

Para desbanir alguém, simplesmente use `unbanip`, então execute o comando do RCON "reloadbans" para fazer com que o servidor faça a leitura novamente do arquivo.

#### reloadbans

`samp.ban` é um arquivo que contém informações dos IP's que já foram banidos do servidor. Este arquivo é lido quando o servidor é iniciado. então caso desbane um IP/Jogador você PRECISA digitar no RCON `reloadbans` para fazer com que o servidor leia novamente o arquivo, permitindo com que os jogadores desbanidos entrem no servidor.

### Comandos do RCON

Digite cmdlist para comandos (ou, varlist para variáveis) dando assim uso ao RCON no jogo (`/rcon cmdlist`).

Estas são as funções que você como admin pode usar:

| Comando                           | Descrição                                                                                           |
| --------------------------------- | --------------------------------------------------------------------------------------------------- |
| `/rcon cmdlist`                   | Mostra a lista de comandos.                                                                         |
| `/rcon varlist`                   | Mostra a lista com as variáveis atuais.                                                             |
| `/rcon exit`                      | Fecha o servidor.                                                                                   |
| `/rcon echo [text]`               | Mostra o `[text]` no console do servidor (NÃO no console do jogador).                               |
| `/rcon hostname [name]`           | Muda o nome da host (_exemplo: /rcon hostname meu servidor_).                                       |
| `/rcon gamemodetext [name]`       | Muda o texto do gamemode (_exemplo: /rcon gamemodetext minha GM_).                                  |
| `/rcon mapname [name]`            | Muda o nome do mapa (_exemplo: /rcon mapname San Andreas_).                                         |
| `/rcon exec [filename]`           | Executa o arquivo que contém o server.cfg (_exemplo: /rcon exec blah.cfg_).                         |
| `/rcon kick [ID]`                 | Kick o jogador de determinado ID (_exemplo: /rcon kick 2_).                                         |
| `/rcon ban [ID]`                  | Bane o jogador de determinado ID (_exemplo: /rcon ban 2_).                                          |
| `/rcon changemode [mode]`         | Este comando irá alternar entre as gamemode's (_exemplo: /rcon changemode sftdm_).                  |
| `/rcon gmx`                       | Irá carregar a próxima gamemode no server.cfg.                                                      |
| `/rcon reloadbans`                | Carrega e reliza uma nova leitura do samp.ban                                                       |
| `/rcon reloadlog`                 | Carrega novamente o server_log.txt.                                                                 |
| `/rcon say`                       | Mostra uma mensagem no console dos jogadores (\_exemplo: `/rcon say olá` irá mostrar `Admin: olá`). |
| `/rcon players`                   | Mostra os jogadores que estão no servidor (Com nome, IP e ping).                                    |
| `/rcon banip [IP]`                | Bane determinado IP (_exemplo: /rcon banip 127.0.0.1_).                                             |
| `/rcon unbanip [IP]`              | Desbane determinado IP (_exemplo: /rcon unbanip 127.0.0.1_).                                        |
| `/rcon gravity`                   | Muda a gravidade (_exemplo: /rcon gravity 0.008_).                                                  |
| `/rcon weather [ID]`              | Muda o clima (_exemplo: /rcon weather 1_).                                                          |
| `/rcon loadfs`                    | Carrega o determinado filterscript (_exemplo: /rcon loadfs adminfs_).                               |
| `/rcon weburl [server url]`       | Muda o URL do servidor no cliente                                                                   |
| `/rcon unloadfs`                  | Descarrega o determinado filterscript (_exemplo: /rcon unloadfs adminfs_).                          |
| `/rcon reloadfs`                  | Recarrega o determinado filterscript (_exemplo: /rcon reloadfs adminfs_).                           |
| `/rcon rcon\_password [PASSWORD]` | Muda a senha do RCON                                                                                |
| `/rcon password [password]`       | Coloca/Reseta a senha do servidor                                                                   |
| `/rcon messageslimit [count]`     | Muda o número e mensagens por segundo que um jogador pode enviar. (padrão: 500) |
| `/rcon ackslimit [count]`         | Muda o limite de acks (padrão: 3000)  |
| `/rcon messageholelimit [count]`  | Muda o limite dos "buracos" na mensagem: (padrão: 3000) |
| `/rcon playertimeout [limit m/s]` | Muda o tempo em milisegundos quando um jogador cai. (padrão: 1000)              |
| `/rcon language [language]`       | Muda a língua do servidor (_example: /rcon language English_).                  |

### Funções e Callbacks relacionadas

#### Callbacks

- [OnRconLoginAttempt](../../callbacks/OnRconLoginAttempt): Chamado quando há uma tentativa de logar no RCON.

#### Functions

- [IsPlayerAdmin](../../functions/IsPlayerAdmin): Verifica se um jogador está logado no RCON.
- [SendRconCommand](../../functions/SendRconCommand): Envia um comando para o RCON via código.
