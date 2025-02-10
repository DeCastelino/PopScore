import "server-only";
import { cookies } from "next/headers";
import axios from "axios";

export async function createSession(userID: string) {
  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
  const sessionID: string = await axios.get("http://localhost:3000/api/user", {
    params: { userID },
  });
  const cookieStore = await cookies();

  cookieStore.set({
    name: "user",
    value: sessionID,
    httpOnly: true,
    secure: true,
    expires: expiresAt,
    sameSite: "lax",
    path: "/",
  });
}
