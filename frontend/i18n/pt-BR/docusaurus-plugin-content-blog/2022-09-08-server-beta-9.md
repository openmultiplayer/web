---
slug: server-beta-9
title: Compatibilidade com SA-MP 0.3.DL, além de outros recursos adicionados e correções de bugs - LANÇAMENTO BETA DO SERVIDOR 9
authors: potassium
---

Acabamos de lançar o open.mp server beta 9, trazendo grandes melhorias, correções e o aguardado suporte ao SA:MP 0.3.DL! Esta atualização inclui novos recursos, melhor compatibilidade com plugins e opções aprimoradas de configuração do servidor.

<!-- truncate -->

Publicado no canal de anúncios do nosso servidor Discord por kseny ([discord.gg/samp](https://discord.gg/samp))

Olá a todos

Acabamos de lançar o open.mp server beta 9, corrigindo vários problemas reportados e adicionando diversos novos recursos. A mudança mais notável é o suporte ao SA:MP 0.3.DL. Agora você pode executar servidores compatíveis com 0.3.7 e 0.3.DL a partir do mesmo binário.

## Outras mudanças

- Taxa de ticks dinâmica. Especifique uma taxa de ticks alvo, em vez de um tempo de sleep fixo.
    - Use o comando de console `tickrate` para definir a taxa.
    - `sleep` agora pode ser um float para acomodar taxas de tick precisas.
- Mais compatibilidade com plugins - fsutil, Discord connector (apenas com build não estática)
- Retorno de `SetSpawnInfo` corrigido.
- Corrige clima e horário não sendo redefinidos após GMX.
- Corrige vários bugs de GMX.
- Corrige vários comandos de console.
- Corrige `GetPlayerClass`.
- Corrige `GetVehicleLastDriver`.
- Adiciona a native `GetVehicles`.
- Adiciona a native `GetPlayers`.
- Adiciona a native `GetActors`.
- Todos os modos de lagcomp agora estão disponíveis via configuração.
- Corrige sincronização de trailer.
- Corrige `GetVehicleLastDriver`.
- Corrige `GetPlayerRotationQuat`.
- Corrige crash em componente de veículo.

## SA:MP DL

Esta é obviamente a grande notícia, e vem com uma série de novas configurações:

- Implementadas todas as natives e callbacks do DL (`AddSimpleModel`, `AddSimpleModelTimed`, `GetPlayerCustomSkin`, `OnPlayerFinishedDownloading`, `OnPlayerRequestDownload`):
    - A native `RedirectDownload` e o callback `OnPlayerRequestDownload` agora estão obsoletos em favor das opções de configuração de CDN.
- Adiciona a opção de configuração `artwork.enable` (legado: `useartwork`).
- Adiciona a opção de configuração `artwork.models_path` (legado: `artpath`).
    - O servidor pode carregar modelos personalizados do arquivo `artconfig.txt`, como o SA:MP faz.
- A compatibilidade com 0.3.7 é preservada e pode ser configurada pela opção de configuração `network.allow_037_clients` (true por padrão).
- O servidor open.mp agora vem com um webserver embutido usado para servir modelos personalizados
    - O webserver usa o endereço e a porta de bind do servidor open.mp. Permita conexões TCP na sua porta no firewall se você planeja usá-lo.
    - Se o seu endereço IP público for diferente do endereço de bind (ex: você está atrás de um roteador), será necessário defini-lo na opção de configuração `network.public_addr`.

## Observações

- Devido a algumas mudanças, arquivos config.json antigos podem não funcionar corretamente. Use `./omp-server --default-config` para gerar um novo
- Usuários de server.cfg não são afetados.
- Ao permitir conexões 0.3.7, apenas 1000 objetos podem ser criados
- O servidor open.mp agora fornece dois tipos de builds Linux, standard e static. Recomendamos usar a build standard se possível; ela minimizará incompatibilidades com vários plugins. No entanto, ela exigirá openssl 1.1 instalado no seu sistema. Se você não conseguir instalar uma versão moderna do openssl no seu sistema (normalmente se ele for muito antigo), pode usar a build static, mas alguns plugins ou componentes podem falhar ao carregar e causar crash no servidor.

## Includes oficiais

Preparar um lançamento completo não é apenas ter um servidor funcionando, mas também todos os outros periféricos - bibliotecas, ferramentas, documentação e muito mais. No lado pawn, o open.mp é uma atualização significativa, com muitas melhorias de QoL já vistas por meio de correções e novas funções, e mais ainda por vir. Uma grande parte desse esforço é oferecer mais diagnósticos do compilador para encontrar problemas no código com antecedência, principalmente por meio de mais tags e const-correctness. Enquanto as versões oficiais ainda não saíram, você ainda pode ajudar enquanto isso testando seu código com os seguintes includes e ferramentas:

https://github.com/pawn-lang/samp-stdlib/tree/consistency-overhaul  
https://github.com/pawn-lang/pawn-stdlib/tree/backported-natives  
https://github.com/openmultiplayer/upgrade  
https://github.com/pawn-lang/compiler  

Eles foram originalmente desenvolvidos para melhorar os includes padrão do SA:MP, mas nunca foram totalmente lançados (ou seja, nunca foram mesclados na master, apesar do PR ter sido aceito). Os includes do open.mp se baseiam na fundação estabelecida aqui, então pense neles como um passo intermediário rumo à segurança completa de tags e const do open.mp; e como um feedback importante sobre a direção deles. Veja os links acima para muito mais informações e documentação sobre atualização.

Como sempre, se você não quiser atualizar, códigos e includes antigos ainda funcionarão (pelo menos no primeiro lançamento).
