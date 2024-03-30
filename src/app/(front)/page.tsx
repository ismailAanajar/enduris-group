import prisma from "@/db";
import Image from "next/image";

export default async function Home() {
  const notif = await prisma.notification.findFirst({
    where: {
      id: 1,
    },
  });
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Image src={notif?.image || ""} alt="hello" width={200} height={200} />
    </main>
  );
}
