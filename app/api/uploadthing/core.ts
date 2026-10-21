
import { createUploadthing, type FileRouter } from "uploadthing/next";

const f = createUploadthing();

export const ourFileRouter = {
  // A single file route that handles one PDF at a time
  singlePdfUploader: f({
    pdf: { maxFileSize: "4MB", maxFileCount: 1 }
  })
    .middleware(async () => ({ userId: "user_123" }))
    .onUploadComplete(async ({ file }) => {
      return { url: file.ufsUrl };
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
