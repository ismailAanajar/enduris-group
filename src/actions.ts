"use server";
import fs from "fs/promises";

export async function upload(formData: FormData) {
  console.log(Object.fromEntries(formData.entries()));
  const data = Object.fromEntries(formData.entries());
  await fs.mkdir("public/products", { recursive: true });
  const path = `/products/${crypto.randomUUID()}-${data.file?.name}`;
  await fs.writeFile(
    `public${path}`,
    Buffer.from(await data.file.arrayBuffer())
  );
}
