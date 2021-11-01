import { Box, Stack } from "@chakra-ui/react";
import { NextPage } from "next";
import React from "react";
import { withAuth } from "src/auth/hoc";
import BackLink from "src/components/forum/BackLink";
import PostEditor from "src/components/forum/PostEditor";
import { useCreateThread } from "src/components/forum/hooks";

const Editor = () => {
  const onSubmit = useCreateThread();

  return (
    <div>
      <PostEditor
        onSubmit={onSubmit}
        disableThreadCreationOptions={false}
        postButtonText="Create Post"
      />
    </div>
  );
};

const Page: NextPage = () => {
  return (
    <Box paddingTop={2} paddingBottom={2} maxWidth="40em" margin="auto">
      <Stack spacing={2}>
        <BackLink to="/discussion" />
        <Editor />
      </Stack>
    </Box>
  );
};

export default withAuth(Page);
