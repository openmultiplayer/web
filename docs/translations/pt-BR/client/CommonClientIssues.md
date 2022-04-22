---
title: Problemas Conhecidos
---

## Conteúdos

## Cliente

### Recebi o erro "San Andreas cannot be found"

O San Andreas Multiplayer **não é** um software único! Ele adiciona o multiplayer para o San Andreas, mas ainda necessita do GTA San Andreas instalado no computador - o mesmo precisa ser a versão **EU/US v1.0**, outras versões, tais como v2.0, Steam ou Direct2Drive não são aceitas. [Clique aqui para fazer o download do path de Downgrade do GTA: SA para versão 1.0](http://grandtheftauto.filefront.com/file/GTA_SA_Downgrader_Patch;74661)

### Não consigo encontrar nenhum servidor no cliente SA:MP

Antes de qualquer coisa, tenha certeza de seguir todos os procedimentos informados no [Guia Ínicio Rápido](https://team.sa-mp.com/wiki/Getting_Started). Caso você tenha seguido todos os passos e ainda não consiga ver a lista de servidores tente permitir o SA-MP no firewall do seu computador. Infelizmente, devido a grande quantidade de firewalls disponíveis no mercado, nós não podemos oferecer suporte - sugerimos que você olhe o site do desenvolvedor (do firewall) ou faça uma breve pesquisa no Google. E claro, tenha 100% de certeza do seu cliente SA-MP estar atualizado com a última versão disponível!

### O modo single-player carrega ao invés do SA-MP

:::warning

Não é normal ver o menu de opções single-player (novo jogo, carregar jogo, etc) - o SA-MP deve carregar e direcionar para tela inicial do servidor em questão. Caso você veja "novo jogo" significa que o modo single-player foi carregado ao invés do San Andreas Multiplayer.

:::

O singleplayer pode carregar por 2 motivos; Você instalou o SA-MP em uma pasta na qual não continha seu GTA: San Andreas ou sua versão do GTA está incorreta. Caso você identifique o problema sendo a versão, faça o downgrade da mesma para **EU/US v1.0** baixando o path nesse [link](http://grandtheftauto.filefront.com/file/GTA_SA_Downgrader_Patch;74661).

Em alguns casos o menu de singleplayer será exibido mesmo com o SA-MP sendo carregado corretamente. Para sair simplesmente selecione uma opção qualquer e pressione a tecla ESC até fechar o mesmo. O SA-MP prosseguirá normalmente com o carregamento.

### Recebi o aviso "Unacceptable Nickname" ao tentar conexão com o servidor

Tenha certeza de não estar utilizando nenhum caractere "fora dos padrões", **utilize somente** ( 0-9, a-z, \[\], (), \$, @, ., \_ e = ), por fim, confira se seu usuário não possuí mais de 20 caracteres. Esse problema também pode ocorrer quando há um jogador no servidor com o mesmo nome que o seu (o que pode ocorrer caso alguém já tenha escolhido um nick igual, ou você tente se reconectar rápidamente após um crash/timeout). Servidores Windows rodando o SA-MP à mais de 50 dias podem causar esse bug (algumas vezes).

### Tela fica parada em "Connecting to IP:Port..."

O servidor pode estar offline, ou, caso você não consiga conectar a nenhum servidor, desabilite seu firewall e tente novamente, caso funcione você terá de reconfigurar o mesmo (firewall). Verifique se você está utilizando a ultima versão do SA-MP - você pode fazer o download da última versão disponível [aqui](http://sa-mp.com/download.php).

### Meu GTA: San Andreas é modificado e meu SA:MP não carrega

Caso não esteja carregando remova seus mods.

### Quando abro o GTA com o SA:MP o mesmo não inicia

Remova o arquivo gta_sa.set da pasta `GTA San Andreas User Files` e confirme que seu GTA não possí nenhum Mod instalado.

### O jogo crasha quando um veículo explode

Caso você tenha 2 monitores tem dois modos de resolver isso:

1. Desabilite seu segundo monitor quando estiver jogando sa-mp. (Não é tão legal caso você queira utilizar o mesmo para outras tarefas.)
2. Coloque o Visual FX para qualidade miníma. (Esc > Opções > Configurações de Display > Avançadas)
3. Renomeie a pasta do seu GTA San Andreas (ex. "GTA San Andreas2") (Isso funciona de vez em quando, pode ser que de o mesmo problema após algum tempo, nesse caso basta repetir o processo.)

### Meu mouse não funciona ao sair no menu de pausa

Caso seu mouse pareça estar travado (congelado) ao (parcialmente) funcionar no menu de pausa, você deve tentar desabilitar a opção "multicore" no arquivo sa-mp.cfg [sa-mp.cfg](ClientCommands#Arquivo-sa-mpcfg "Sa-mp.cfg") (troque de 1 para 0). Continue apertando ESC até seu mouse responder novamente (ainda não há uma solução própria para isso :/).

### O arquivo dinput8.dll não foi encontrado

Esse aviso aparece quando o DirectX não foi instalado corretamente, tente reinstalar o mesmo - Não se esqueça de reiniciar seu computador. Se o problema persistir após realizar os passos anteriores, vá até o diretório C:\\Windows\\System32, copie o arquivo dinput.dll e cole na pasta do seu GTA San Andreas. Isso deve resolver!

### Não consigo ver o nome dos outros jogadores!

Tenha em mente que os servidores **PODEM desabilitar** as name tags globalmente. Por outro lado, computadores com Intel HD Graphics podem sofrer com esse problema (pois não são feitos para jogos). Infelizmente, a causa desse problema é incerta, e até o momento não há uma correção disponível. Um modo de corrigir o problema é instalando uma placa de vídeo dedicada, caso seu orçamento permita.