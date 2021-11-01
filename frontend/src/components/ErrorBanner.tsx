import { WarningTwoIcon } from "@chakra-ui/icons";
import { Heading, Stack, Text } from "@chakra-ui/layout";
import React, { FC } from "react";
import { APIError } from "src/types/_generated_Error";

type Props = APIError;

const ErrorBanner: FC<Props> = ({ error, message, suggested }) => {
  return (
    <section>
      <Stack spacing={4}>
        <header>
          <WarningTwoIcon w={7} h={7} />
          <Heading my="0">An Error Occurred</Heading>
        </header>

        <Text>{message ?? "An unexpected error occurred."}</Text>

        {suggested && (
          <Text>
            <em>Suggested action:</em> {suggested}
          </Text>
        )}

        <pre>{error ?? "(no detailed error information was provided)"}</pre>
      </Stack>
      <style jsx>{`
        section {
          max-width: 40em;
          margin: auto;
          padding: 3em;
          background-color: var(--chakra-colors-red-300);
        }
        header {
          display: flex;
          align-items: center;
          gap: 0.5em;
        }
      `}</style>
    </section>
  );
};

export default ErrorBanner;
