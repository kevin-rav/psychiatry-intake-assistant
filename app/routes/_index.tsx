import type { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { prisma } from "~/db.server";

export const loader: LoaderFunction = async () => {
  const users = await prisma.user.findMany();
  return users;
};

export default function Index() {
  const users = useLoaderData<typeof loader>();
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Users</h1>
      <ul>
        {users.map((user: any) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
