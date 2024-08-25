---
title: "Komendy klienta"
Opis: Lista wszystkich komend klienta.
---

## Komendy

| Komenda        | Opis                                                                                                                                                                                                                                                                                                                                                            |
|----------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| /quit (/q)     | Komenda mówi sama za siebie, opuszczasz grę. Możesz również użyć /q gdyż to ta sama koemnda, ale skrócona.                                                                                                                                                                                                                                                    |
| /save          | /save to najczęściej używana standardowa komenda i prawdopodobnie najbardziej użyteczna. Kiedy wpiszesz /save Twoja aktualna pozycja zostanie zapisana w pliku savedpositions.txt który znajduje się w Twoim folderze użytkownika, a następnie możesz go użyć w swoim skrypcie.                                                                                                                            |
| /rs            | /rs (Raw Save) jest jak /save, ale zapisuje tylko Twoją aktualną pozycję oraz kierunek w którym patrzysz w pliku rawpositions.txt w Twoim folderze użytkownika. Dane z tej komendy nie posiadają dodatkowych informacji takich jak klasa oraz broń.|
| /interior      | Prawie tak ważne jak /save, ta komenda pozwala wyświetlić na chacie aktualny interior w którym się znajdujesz. |
| /vw            | Prawie tak ważne jak /save, ta komenda pozwala wyświetlić na chacie aktualny identyfikator świata wirtualnego(VW) na chacie.|
| /fpslimit      | Ta komenda ustawia limit FPS (Frames Per Second / Klatek na sekundę) dla Twojej gry. Im wyższy limit tym Twoja gra jest płynniejsza. Nie działa gdy ogranicznik FPS w ustawieniach graficznych jest włączony. Limit może być ustawiony pomiędzy 20 a 90, a 50 to wartość domyślna. Ustawia opcję 'fpslimit' w pliku sa-mp.cfg.|
| /pagesize      | /pagesize używamy gdy chcemy zmienić ilość wyświetlanych libnijek czatu. Możemy wyświetlić od 10 do 20 lini, gdzie 10 to wartość domyślna. Ustawia opcję 'pagesize' w sa-mp.cfg.|
| /headmove      | Ta komenda kontroluje czy głowa postaci gracza obraca się w stronę w którą gracz się patrzy, jednakże ta wartość jest lokalna co oznacza iż inni gracze dalej będą widzieć ruch Twojej głowy. Ustawia wartość 'disableheadmove' w pliku sa-mp.cfg.                                                                                                                                               |
| /timestamp     | Ta komenda pozwala na pokazanie/schowanie czasu przy wiadomości na czacie. Wyświetlony czas jest czasem który masz ustawiony na komputerze, a nie czasem serwerowym. Ustawia wartość 'timestamp' w pliku sa-mp.cfg.                                                                                                                                                                           |
| /dl            | DL to skrót od debug labels. Ta komenda pozwala na włączenie lub wyłączenie etykiet na pojazdach, które pokazują ID pojazdu, model, hp, czy pojazd jest pojazdem pre-loaded, dystans od gracza, naczepę, dostępną ilość siedzeń, aktualną pozycję oraz pozycję respawnu pojazdu.                                                                                                                      |
| /nametagstatus | Gdy włączone (Jest domyślnie włączone), gracze będą widzieć klepsydrę przy nazwie gracza który zapauzował grę. W przypadku zminimalizowania gry(alt-tab), wejścia do menu(ESC), stracenia połączenia (crash/timeout) i podczas robienia zrzutów ekranu które zawieszają grę na dłużej niż 3 sekundy. Ustawia wartość 'nonametagstatus' w sa-mp.cfg.                                                                                                                                                                                              |
| /mem           | Pokazuje aktualne użycie pamięci (Zazwyczaj pokazuje tylko 128 MB)                                                                                                                                                                                                                                                                                 |
| /audiomsg      | Włącza/wyłącza wiadomość która wyświetla się gdy url zacznie być streamowany dla klienta. Ustawia wartość 'audiomsgoff' w pliku sa-mp.cfg.                                                                                                                                                                                                                                            |
| /fontsize      | Zmienia wielkość czcionki interfejsu użytkownika(czat, dialogi itp.) Wartości 'fontsize' to -3 do 5.                                                                                                                                                                                                                                                                                       |
| /ctd           | Ta komenda została dodana w wersji SA-MP 0.3.7 RC2. Włącza debugowanie kamery gracza w kliencie.                                                                                                                                                                                                                                                               |
| /rcon          | Bardziej odnosi się do serwera niż klienta. Ta komenda pozwala wykonywać komendy RCON. RCON to wbudowany system administracji. RCON oznacza [Remote Control](../server/ControllingServer#using-rcon).                                                                                                                                                         |
| /hudscalefix   | Ta komenda została dodana w wersji SA-MP 0.3.7 R3. Włączała lub wyłączała poprawkę dla skali radaru. Dzięki niej radar skalował się lepiej w szerszych rozdzielczościach(zmieniał kształt z 'jajka' na koło). Ustawia wartość 'nohudscale' w sa-mp.cfg.                                                                                                                                        |

## Plik sa-mp.cfg

| Opcja          | Opis                                                                                                                                                                                  |
|-----------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| pagesize        | Zobacz /pagesize.|
| fpslimit        | Zobacz /fpslimit.|
| disableheadmove | Zobacz /headmove.|
| timestamp       | Zobacz /timestamp.|
| ime             | Kontroluje czy okno czatu wspiera edytowanie tekstu oraz zmianę języka. wartość 1 włącza opcję, a 0 wyłącza.|
| audiomsgoff     | Zobacz /audiomsg.|
| multicore       | Opcja ta pozwala przełączyć klienta SA-MP tak aby używał on wielu rdzeni procesora podczas gdy działa. Stadardowo ustawione jest na 1 co oznacza iż klient używa wielu rdzeni. Ustawić na 0 jeśli doświadczasz problemów z myszką. |
| directmode      | Pozwala graczom którzy mają problem z rysowaniem tekstu użyć wolniejszej metody renderowania. 0 aby wyłączyć a 1 żeby włączyć.                        |
| audioproxyoff   | Jeśli ta opcja jest ustawonia na 1 i posiadasz serwer proxy w opcjach interentu w Windowsie to proxy nie zostanie użyte do streamowania audio w SA-MP.|
| nonametagstatus | Zobacz /nametagstatus.|
| fontface        | Pozwala zmienić czcionkę czatu, dialogów i tablicy wyników. np. fontface="Comic Sans MS". Ta opcja nie jest oficjalnie wspierana i może powodować problemy|
| fontweight      | Opcja pozwala przełączyć czy czcionka czatu jest pogrubiona czy nie. 0 = Pogrubiona (Standardowe ustawienie) i 1 = Normalna.|
| nohudscale      | Zobacz /hudscalefix.| 
