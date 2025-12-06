# Prefácio

---

“pawn” é uma linguagem de script simples, sem tipos e de 32 bits, com sintaxe parecida com C. Velocidade de execução, estabilidade, simplicidade e baixo consumo de recursos foram critérios essenciais tanto para a linguagem quanto para o interpretador/máquina abstrata que executa um programa pawn.

Nenhuma aplicação ou ferramenta consegue fazer tudo para todos os usuários. Isso não apenas impulsiona novos sistemas, como explica a presença de opções extensas de configuração e linguagens de macro/script dentro de softwares. Nas minhas próprias aplicações sempre existiram “mini linguagens”: algumas extremamente simples, outras bem abrangentes... e, na maioria dos casos, as necessidades poderiam ser atendidas por uma linguagem de propósito geral acompanhada de uma biblioteca específica. Assim surgiu o pawn.

A linguagem pawn foi desenhada para manipular objetos dentro de uma aplicação hospedeira. O conjunto de ferramentas (compilador e máquina abstrata) foi escrito para ser facilmente extensível e capaz de rodar em diferentes arquiteturas de software e hardware.

## ♦

pawn descende do Small C original, de Ron Cain e James Hendrix, que por sua vez era um subconjunto de C. Algumas das modificações que fiz no Small C —como remover o sistema de tipos e substituir ponteiros por referências— foram tão profundas que já não era apropriado chamar minha linguagem de “subconjunto de C” ou “dialeto de C”. Por isso tirei o “C” do título e passei a publicar sobre a linguagem com o nome “Small” na revista Dr. Dobb’s Journal e nos anos seguintes. Durante o desenvolvimento e manutenção do produto recebi inúmeros pedidos de mudança; um dos mais frequentes era adotar outro nome, pois procurar por “small scripting language” na Internet era dificultado pelo termo “small” ser comum demais. A mudança de nome coincidiu com outra alteração importante da linguagem: o suporte a “estados” (e máquinas de estados).

Sou grato a Ron Cain e James Hendrix (e, mais recentemente, Andy Yuen) e à revista Dr. Dobb’s Journal por terem colocado esse projeto em movimento. Embora eu tenha revisado praticamente todas as linhas do código original algumas vezes, as origens em Small C ainda são visíveis.

## ♦

---

Um panorama detalhado dos objetivos de design e dos compromissos assumidos está no apêndice C; aqui faço um resumo de alguns pontos-chave. Como dito anteriormente, pawn serve para customizar aplicações (escrevendo scripts), não para escrever aplicações completas. Ele é modesto em termos de estrutura de dados porque os programas pawn existem para manipular objetos (texto, sprites, fluxos, consultas etc.) dentro da aplicação hospedeira, e esse programa, por design, não tem acesso direto a dados fora da sua máquina abstrata. A única forma de interagir com objetos na aplicação host é chamando sub-rotinas —as “funções nativas” expostas por ela.

Pawn é flexível justamente nessa área crucial: a chamada de funções. Ele suporta valores padrão para **qualquer** argumento (não apenas o último), chamada por referência e por valor, e argumentos nomeados ou posicionais. Como é uma linguagem sem tipos, não possui verificação de tipos tradicional; em vez disso, oferece um mecanismo de “classificação” chamado “tags”. Esse sistema é especialmente útil em parâmetros de funções, pois cada argumento pode aceitar múltiplas tags.

Creio que o ponto forte do pawn não está em um recurso isolado, e sim na combinação deles. Argumentos nomeados permitem especificar parâmetros em qualquer ordem; valores padrão possibilitam omitir os que não importam para o contexto. Juntos, criam uma forma prática e “descritiva” de chamar (funções nativas) para manipular objetos na aplicação hospedeira.

---

[Voltar ao sumário](00-Contents)
