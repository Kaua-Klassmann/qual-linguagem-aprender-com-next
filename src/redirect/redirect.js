"use server";

import { redirect } from "next/navigation";

export default async function push(route) {
  redirect(route);
}
