import { execSync } from "child_process";
import { env } from "process";

// In production, this site is hosted on Vercel. These utilities can determine
// if the site's environment is production or preview.

// This only works at runtime, it simply uses the environment variable that
// Vercel sets for all serverless functions.
export const isPreviewRuntime = (): boolean => {
  if ("VERCEL_ENV" in env) {
    return env["VERCEL_ENV"] === "preview";
  }
  // Probably not running in Vercel.
  return false;
};

// Because Vercel offers no environment variables at build-time, this function
// uses the Git branch to determine whether or not the build is a preview. This
// works because Vercel only builds previews for non-default branches.
export const isPreviewBuildtime = (): boolean => {
  if ("VERCEL_ENV" in env) {
    return env["VERCEL_ENV"] === "preview";
  } else {
    return execSync("git branch --show-current").toString().trim() !== "master";
  }
};
