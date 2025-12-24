import Admonition from "../Admonition";

export default function StaleTranslationWarning({
  englishDocLink,
}: {
  englishDocLink: string;
}) {
  return (
    <Admonition type="warning">
      <p>
        <strong>Translation May Be Outdated</strong>
      </p>
      <p>
        The English version of this document was recently updated. This
        translation may not reflect those changes yet.
      </p>
      <p>
        Please help keep our translations up to date! If you're fluent in this
        language, consider reviewing the{" "}
        <a href={englishDocLink}>English version</a> and updating this
        translation.
      </p>
    </Admonition>
  );
}
