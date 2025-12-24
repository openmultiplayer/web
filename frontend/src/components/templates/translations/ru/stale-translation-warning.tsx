import Admonition from "../../../Admonition";

export default function StaleTranslationWarning({
  englishDocLink,
}: {
  englishDocLink: string;
}) {
  return (
    <Admonition type="warning">
      <p>
        <strong>Этот перевод может быть устаревшим.</strong>
      </p>
      <p>
        Английская версия этой статьи была недавно обновлена. Данный перевод
        может всё ещё не отражать эти изменения.
      </p>
      <p>
        Помогите нам поддерживать актуальность переводов! Если вы свободно
        владеете английским языком, пожалуйста, рассмотрите возможность
        проверки <a href={englishDocLink}>английской версии</a> и обновления
        этого перевода.
      </p>
    </Admonition>
  );
}
