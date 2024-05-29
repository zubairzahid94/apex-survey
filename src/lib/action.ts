"use server";

import { revalidatePath } from "next/cache";

// biome-ignore lint/complexity/noForEach: <explanation>
export const update = (paths = []) => paths.forEach((p) => revalidatePath(p));
