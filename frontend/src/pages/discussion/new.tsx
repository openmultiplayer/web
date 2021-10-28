import { useToast, Box, Stack } from "@chakra-ui/react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";
import { withAuth } from "src/auth/hoc";
import BackLink from "src/components/forum/BackLink";
import PostEditor, { PostPayload } from "src/components/forum/PostEditor";
import { apiSSP } from "src/fetcher/fetcher";
import { APIError } from "src/types/_generated_Error";
import { Post } from "src/types/_generated_Forum";

const Editor = () => {
  const router = useRouter();
  const toast = useToast();

  const onSubmit = async (data: PostPayload) => {
    console.log({ data });

    if (data?.body?.length === 0 || data?.body === "\\n") {
      toast({
        title: "Post has no content",
        status: "error",
      });

      return;
    }

    try {
      const post = await apiSSP<Post>("/forum", {
        method: "POST",
        body: JSON.stringify(data),
      });
      router.push(post.slug ?? "");
      toast({
        title: "Post created!",
        status: "success",
      });
    } catch (e) {
      const err = e as APIError;
      console.error(err);
      toast({
        title: "An error occurred",
        description: err?.message ?? "Unexpected error occurred",
        status: "error",
      });
    }
  };

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
