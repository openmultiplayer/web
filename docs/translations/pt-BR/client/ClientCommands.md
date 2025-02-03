---
title: "Comandos de Cliente"
description: Lista de todos os comandos de cliente.
---

## Comandos

| Comandos | Descrição |
|----------|-----------|
| /quit (/q) | Como o próprio nome diz, ele fecha o jogo. Você também pode usar o comando /q, que é exatamente o mesmo comando porém apenas mais curto. |
| /save | /save é provavelmente o comando padrão mais utilizado, e provavelmente o mais útil. Quando você digita /save, sua posição atual é salva no arquivo savedpositions.txt que fica no seu diretório de arquivos de usuário, podendo utilizá-lo em scripts. |
| /rs | /rs (Salvamento Bruto) é como o /save, mas ele apenas salva sua posição atual e ângulo de visão no arquivo rawpositions.txt no diretório de arquivos de usuário. Informações extras como classe e armas não são salvas. |
| /interior | Quase tão importante quanto o /save, esse comando simplesmente mostra seu interior atual no chat. |
| /vw | Quase tão importante quanto o /save, esse comando simplesmente mostra seu mundo virtual atual no chat. |
| /fpslimit | Esse comando determina o valor limite de FPS (Frames Por Segundo) do seu jogo. Quanto maior o limite, mais suave ficará seu jogo. Não surtirá efeito se o limitador de quadros estiver desabilitado nas opções gráficas. O limite pode ser ajustado entre 20 a 90 e o padrão é 50. Isso configura a opção 'fpslimit' no sa-mp.cfg. |
| /pagesize | /pagesize é usado para escolher a quantidade de linhas visíveis no chat. Podendo ser qualquer valor entre 10 a 20 linhas. O valor padrão é 10. Isso configura a opção 'pagesize' no sa-mp.cfg. |
| /headmove | Esse comando controla se as cabeças dos jogadores se movem na direção em que estão olhando, no entanto ele só se aplica localmente, então outros jogadores ainda poderão ver sua cabeça se movendo. Isso configura a opção 'disableheadmove' no sa-mp.cfg. |
| /timestamp | Esse comando mostra/esconde o tempo para todas as mensagens no chat. O tempo que é mostrado é o de seu computador, não sendo o tempo do servidor. Isso configura a opção 'timestamp' no sa-mp.cfg. |
| /dl | DL significa Rótulos de Debug (Debug Labels). Esse comando alterna a visibilidade dos rótulos de debug nos veículos, que mostram o ID do veículo, modelo, vida, se o veículo está pré-carregado, distância do jogador, reboque, assentos disponíveis, posição atual e posição de criação. |
| /nametagstatus | Quando habilitado (que é o padrão), os jogadores verão um pequeno ícone de ampulheta próximo à tag de nome dos jogadores pausados. Isso incluí jogos minimizados (alt-tab), no menu de pausa (ESC), conexões perdidas (falha/tempo esgotado) e quando são tiradas fotos da tela que congelam o jogo por mais de 3 segundos. Isso configura a opção 'nonametagstatus' no sa-mp.cfg. |
| /mem | Mostra a quantidade atual de uso de memória. (Entretanto, geralmente é mostrado apenas 128 MB.) |
| /audiomsg | Habilita/desabilita a mensagem que aparece quando uma URL é transmitida para o cliente. Isso configura a opção 'audiomsgoff' no sa-mp.cfg. |
| /fontsize | Altera o tamanho da fonte da Interface Gráfica (chat, diálogos, etc...). São tamanhos válidos valores entre -3 a 5. |
| /ctd | Esse comando foi adicionado na versão 0.3.7 RC2. Habilita o debugging no cliente do alvo da câmera do jogador. |
| /rcon | Mais relacionado com o servidor do que com o cliente. Esse comando é utilizado para executar comandos RCON. RCON é o sistema interno de administração. RCON significa [Controle Remoto (Remote Control)](../server/ControllingServer#using-rcon). |
| /hudscalefix | Esse comando foi adicionado na versão 0.3.7 R3. Habilita/desabilita a correção de escala do radar, para que o radar do jogo se ajuste melhor em resoluções widescreen (corrigindo a distorção que faz o radar aparecer em formato oval). Isso configura a opção 'nohudscale' no sa-mp.cfg. |

## Arquivo sa-mp.cfg

| Opção | Descrição |
|-------|-----------|
| pagesize | Ver /pagesize. |
| fpslimit | Ver /fpslimit. |
| disableheadmove | Ver /headmove. |
| timestamp | Ver /timestamp. |
| ime | Controla se a janela de entrada do chat suporta edição de texto por Método de Entrada (IME) e troca de idiomas. 1 habilita o IME, 0 desabilita. |
| audiomsgoff | Ver /audiomsg. |
| multicore | Alterna se o cliente SA-MP usa múltiplos núcleos da CPU durante a execução. O padrão é 1 (USA múltiplos núcleos). Configure para 0 se você tiver problemas com o mouse. |
| directmode | Permite que jogadores com problemas na exibição do texto do chat usem o modo mais lento de renderização direta na tela. 0 para desabilitar, 1 para habilitar. |
| audioproxyoff | Se esta opção estiver configurada como 1, e houver um servidor proxy configurado nas Opções de Internet do Windows, o proxy não será usado ao reproduzir streams de áudio no SA-MP. |
| nonametagstatus | Ver /nametagstatus. |
| fontface | Permite alterar a fonte do chat, diálogos e placar. Ex: fontface="Comic Sans MS". Não é oficialmente suportado e pode causar problemas. |
| fontweight | Esta opção alterna se a fonte do seu chat é negrito ou não. 0 = NEGRITO (padrão) e 1 = NORMAL. |
| nohudscale | Esta opção foi adicionada na versão 0.3.7 R3. Ver /hudscalefix. |