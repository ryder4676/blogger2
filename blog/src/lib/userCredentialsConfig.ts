import { AdapterUser } from "next-auth/adapters";

interface UserCredentialsConfig {
  authorize: (
    credentials:
      | Record<"email" | "password" | "name" | "image", string>
      | undefined,
    req: Pick<RequestInternal, "query" | "headers" | "body" | "method">
  ) => Promise<AdapterUser | null>;
 
}
