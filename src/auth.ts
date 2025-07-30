import NextAuth from "next-auth"
import { DrizzleAdapter } from "@auth/drizzle-adapter"
import GitHub from "next-auth/providers/github"
import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google"
import { db } from "./db/drizzle"
import { JWT } from "next-auth/jwt"
import z from "zod";
import { users } from "./db/schema";
import { eq } from "drizzle-orm";
import bcrypt from "bcryptjs";

const CredentialSchema = z.object({
  email:z.string().email(),
  password:z.string(),
})

declare module "next-auth/jwt" {
  interface JWT  {
    id: string | undefined;
  }
}
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: DrizzleAdapter(db),
  providers: [
    Credentials({
      credentials:{
        email:{label:"Email", type:"email"},
        password:{label:"Password", type:"password"}
      },
      async authorize(credentials){
        const validatedFields = CredentialSchema.safeParse(credentials);

        if(!validatedFields.success){
          return null
        }

        const { email, password } = validatedFields.data

        const query = await db
          .select()
          .from(users)
          .where(eq(users.email, email))

        const user = query[0];

        if(!user || !user.password){
          return null;
        }

        const passwordMatch = await bcrypt.compare(
          password,
          user.password
        )

        if(!passwordMatch){
          return null;
        }

        return user;
      }
    }),
  GitHub, 
  Google],
  pages:{
    signIn:"/signin",
    error:"/signin"
  },
  session:{
    strategy:"jwt"
  },
  callbacks:{
    session({session, token}){
      if(token.id){
        session.user.id = token.id
      }
      return session;
    },
    jwt({ token, user}){
      if(user){
        token.id = user.id
      }
      return token;
    }
  }
})