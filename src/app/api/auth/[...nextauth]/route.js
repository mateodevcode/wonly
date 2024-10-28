
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import User from "@/models/user";
import { connectMongoDB } from "@/libs/mongoDB";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {},

      async authorize(credentials) {
        const { email, password } = credentials;
        try {
          await connectMongoDB();
          const user = await User.findOne({ email });
          if (!user) {
            return null;
          }
          // const passwordsMatch = await bcrypt.compare(password, user.password);
          // if (!passwordsMatch) {
          //   return null;
          // }

          const verificarPassword = await password === user.password;
          if (!verificarPassword) {
            return null;
          }

          return user;
        } catch (error) {
          console.log(error);
          
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      await connectMongoDB();

      // Verifica si el usuario ya existe
      const existingUser = await User.findOne({ email: user.email });

      // Si no existe, crea el usuario
      if (!existingUser) {
        await User.create({
          name: user.name,
          email: user.email,
          image: user.image,
          provider: account.provider,
        });
      }

      return true;
    },
    // async session({ session, token }) {
    //   // Aquí puedes pasar información adicional al objeto de sesión
    //   return session;
    // },
  },

  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
