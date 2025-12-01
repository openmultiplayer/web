---
title: Problemas Comuns de Cliente
sidebar_label: Problemas Comuns de Cliente
description: Guia de como resolver problemas no cliente SA-MP.
---

## Problemas Comuns de Cliente

### Eu tenho o erro "San Andreas cannot be found"

San Andreas Multiplayer **NÃO** é um programa autônomo (que funciona sozinho). Ele adiciona a funcionalidade de multijogador ao San Andreas e, portanto, você precisa do GTA San Andreas no seu computador. Também precisa ser **EU/US v1.0**, outras versões como 2.0, Steam ou Direct2Drive não irão funcionar. [Clique aqui para baixar um patch para desatualizar seu GTA: SA para a versão 1.0](https://www.gamefront.com/games/grand-theft-auto-san-andreas/file/gta-sa-downgrader-patch).

### Não consigo ver nenhum servidor no aplicativo do SA-MP

Primeiro, certifique-se de que está seguindo os procedimentos prescritos no [Quick-start guide](https://sampwiki.blast.hk/wiki/Getting_Started). Se você seguiu como descrito e ainda não pode ver nenhum servidor, você precisa permitir que o SA-MP tenha acesso através do seu firewall. Infelizmente, devido ao grande número de firewalls disponíveis, não podemos oferecer suporte para esta ocasião, sugerimos procurar no site dos desenvolvedores ou pesquisar no Google. Também certifique-se de que está usando a última versão do SA-MP!

### O modo singleplayer abre ao invés do multiplayer

:::warning

Você, provavelmente, não deverá ver as opções do singleplayer (novo jogo, carregar jogo, etc). O SA-MP deve carregar por si mesmo e não apresentar estas opções. Caso ocorra, saiba que o modo singleplayer carregou e não o multiplayer.

:::

O modo singleplayer pode carregar por dois motivos: caso tenha instalado o SA-MP no diretório errado, ou você tem a versão errada do San Andreas. Caso tenha a versão errada é fácil de consertar, clique [aqui](https://www.gamefront.com/games/grand-theft-auto-san-andreas/file/gta-sa-downgrader-patch) para baixar o patch de desatualização.

Algumas vezes o menu do singleplayer irá carregar, mas o SA-MP terá carregado corretamente. Para consertar isso, você precisa selecionar um item no menu e pressionar ESC até que esteja fora, então o SA-MP irá proceder e carregar.

### Eu tenho "Unacceptable NickName" ao conectar no servidor

Certifique-se de que você não está usando nenhum caractere não permitido no jogo (use 0-9, a-z, \[\], (), \$, @, ., \_ e = apenas) e que seu nome não seja maior que 20 caracteres. Isso também pode ser causado quando há um jogador no servidor com o mesmo nome que o seu. Um servidor Windows executando o SA-MP com um tempo maior que 50 dias também pode causar este bug.

### Tela trava no "Connecting to ip:port..."

O servidor pode estar offline, ou se você não pode conectar a nenhum servidor, desative seu firewall e veja se funciona. Caso funcione, você precisa configurar seu firewall corretamente. Também pode ser que você tenha uma versão antiga do SA-MP, baixe a última versão: [Página de download do SA-MP](https://sa-mp.mp/downloads/).

### Eu tenho um GTA modificado: GTA San Andreas e SA-MP não carregam

Caso nenhum dos dois execute, remova seus mods.

### Ao iniciar o GTA com SA-MP não funciona

Delete o arquivo gta_sa.set da pasta GTA San Andreas User Files e certifique-se de que você não tem nenhum mod/cheat.

### O jogo crasha quando um veículo explode

Se você usa 2 monitores, então há 3 maneiras de resolver isso:

1. Desligue o 2º monitor ao jogar SA-MP (Talvez não muito útil caso queira utilizá-lo).
2. Defina seus efeitos visuais para "Low" (baixo) em Esc > Options > Display Setup > Advanced.
3. Renomeie a pasta do seu GTA San Andreas (ex: "GTA San Andreas2"). Isso funciona frequentemente, porém pode ser que volte a crashar, então será necessário trocar o nome para outro novamente.

### Meu mouse não funciona após sair do menu de pausa

Você deve desativar a opção multicore do [sa-mp.cfg](ClientCommands#file-sa-mpcfg "sa-mp.cfg") (coloque em 0).

### O arquivo dinput8.dll está faltando

Isso possivelmente surge quando o DirectX não está propriamente instalado, tente instalá-lo novamente, não esqueça de reiniciar seu computador. Se o problema persistir, apenas vá até C:\\Windows\\System32, então copie e cole o arquivo para a pasta raiz do seu GTA San Andreas, isso deve resolver o problema.

### Não consigo ver a nametag de outros jogadores!

Esteja ciente de que alguns servidores podem desativar as nametags. Por outro lado, este problema ocorre frequentemente com computadores com processadores gráficos integrados da Intel. Infelizmente, a causa do problema não aparenta ter solução no presente momento. Uma forma de consertar seria, talvez, instalando uma placa de vídeo dedicada em seu computador, caso seja possível e seu computador permitir. Laptops (notebooks) não podem ser melhorados (geralmente).