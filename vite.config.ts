import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

import { defineConfig } from "vite";

const rootDirectory = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        index: resolve(rootDirectory, "index.html"),
        blog: resolve(rootDirectory, "blog.html"),
        contact: resolve(rootDirectory, "contact.html"),
        blogTemplate: resolve(rootDirectory, "blogs/template.html"),
        cloudResumeChallenge: resolve(rootDirectory, "blogs/CloudResumeChallenge.html"),
      },
    },
  },
});
