"use server";
import fs from "fs/promises";
import { z } from "zod";

const schema = z.object({
  file: z.instanceof(File),
});

export async function upload(formData: FormData) {
  console.log(Object.fromEntries(formData.entries()));
  const result = schema.safeParse(Object.fromEntries(formData.entries()));
  if (!result.success) {
    return "error";
  }
  const data = result.data;
  await fs.mkdir("public/products", { recursive: true });
  const path = `/products/${crypto.randomUUID()}-${data.file?.name}`;
  await fs.writeFile(
    `public${path}`,
    Buffer.from(await data.file.arrayBuffer())
  );
}
