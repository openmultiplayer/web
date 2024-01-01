---
title: Common Issues
---

## Conteúdos

## Cliente

### Eu tenho o erro "San Andreas cannot be found"

San Andreas Multi-player **NÃO** é um programa "stand-alone" (que funciona sozinho). Ele adiciona a funcionalidade de multi-jogador ao San Andreas e portanto você precisa do GTA San Andreas no seu computador, também precisa ser **EU/US v1.0**, outras versões como 2.0, Steam ou Direct2Drive não irão funcionar. [clique aqui para baixar um patch para desatualizar seu GTA: SA para a versão 1.0](https://gamefront.com/games/grand-theft-auto-san-andreas/file/gta-sa-downgrader-patch)

### Não consigo ver nenhum servidor no aplicativo do SA-MP

Primeiro, garanta que está seguindo os procedimetnos prescritos no [Quick-start guide](https://sampwiki.blast.hk/wiki/Getting_Started). Se você seguiu como descrito, e ainda não pode ver nenhum servidor, você precisa permitir que o SA:MP tenha acesso através do seu firewall. Infelizmente, devido ao grande número de firewalls disponíveis, não podemos oferecer suporte para esta ocasião, sugerimos procurar no site dos desenvolvedores ou pesquisar no Google. Também tenha certeza de estar usando a última versão do SA:MP!

### O modo single-player abre ao invés do multiplayer

:::warning

Você, provavelmente, não deverá ver as opções do singleplayer (novo jogo, carregar jogo, etc), SA-MP deve carregar por sí mesmo e não apresentar estas opções, caso ocorra saiba que o modo singleplayer carregou e não o multiplayer.

:::

O modo singleplayer pode carregar por dois motivos, caso tenha instalado o SA:MP no diretório errado, ou você tem a versão errada do San Andreas. Caso tenha a versão errada é fácil de consertar, clique [aqui](https://gamefront.com/games/grand-theft-auto-san-andreas/file/gta-sa-downgrader-patch) para baixar o patch de desatualização.

Algumas vezes o menu do singleplayer irá carregar, mas o SA:MP em fato terá carregado corretamente. Para consertar isso você precisa selecionar um item no menu e precionar ESC até que esteja fora, então o SA:MP irá proceder e carregar.

### Eu tenho "Unacceptable NickName" ao conectar no servdior

Garanta que você não está usando nenhum caractere não permitido no jogo (use 0-9, a-z, \[\], (), \$, @, ., \_ e = apenas) e que seu nome não seja maior que 20 caracteres. Isso também pode ser causado quando há um jogador no servidor com o mesmo nome que o seu. Um servidor Windows executando o SA-MP com um tempo maior que 50 dias também pode causar este bug.

### Tela trava no "Connecting to ip:port..."

O servidor pode estar offline, ou se você não pode conectar a nenhum servidor desative seu firewall e veja se funciona. Caso funciona você precisa configurar seu firewall corretamente. Também pode ser que você tenha uma versão antiga do SA-MP, baixa a última versão: [Página de download do SA-MP](https://sa-mp.mp/downloads/).

### Eu tenha um GTA modificado: San Andreas e SA:MP não irão carregar

Caso ambos não executem retire seus mods.

### Ao carregar o GTA com SA:MP não irá iniciar

Delete o arquivo gta_sa.set da paste onde está seu userfiles e tenha certeza que você não tem nenhum mod/cheat.

### O jogo crasha quando um veículo explode

Se você usa 2 monitores então há 3 maneiras de resolver isso:

1. Desligue o 2º motior ao jogar sa-mp. (Talvez não muito útil caso queira utilizar.)
2. Defina seus efeitos visuais para "Low" baixo. (Esc > Options > Display Setup > Advanced)
3. Renomeie a paste do seu Gta Sanandreas (ex: "GTA San Andreas2") (Isso funciona frequentemente, porém pode ser que volte a crashar, entãi será necessário trocar o nome para outro novamente.)

### Meu mouse não funciona após sair do menu de pausa

Você deve desativar a opção multicre do [sa-mp.cfg](../../../client/ClientCommands#file-sa-mpcfg "sa-mp.cfg") (coloque em 0)

### O arquivo dinput8.dll está faltando

Isso possivelmente surge quando o DirectX não está propriamente instalado, tente instala-lo novamente, não esqueça de reiniciar seu computador. Se o problema persistir, apenas vá até C:\\Windows\\System32 então copie e cole o arquivo para a pasta raiz do seu GTA San Andreas, isso deve resolver o problema.

### Não consigo ver a nametag de outros jogadores!

Esteja ciente que alguns servidores podem desativar as nametags. Por outro lado, este problema ocorre frequentemente com computadores com processadores gráficos integrados da Intel. Infelizmente, a causa do problema não aparente solução no presente momento. Uma forma de consertar, talvez seria instalando uma placa de vídeo dedicada em seu computador, caso seja possível e seu computador permitir, laptops (notebooks) não podem ser melhorados (geralmente).
