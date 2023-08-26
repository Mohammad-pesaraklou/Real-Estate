import User from "@/models/User";
import ConnectDb from "@/utils/ConnectDb";
import { verifyPassword } from "@/utils/auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  session: { strategy: "jwt" },
  providers: [
    CredentialsProvider({
      async authorize(credential) {
        try {
          await ConnectDb();
        } catch (error) {
          throw new Error("مشکلی در سرور رخ داده است");
        }

        const { email, password } = credential;

        if (!email || !password) {
          throw new Error("!لطفا اطلاعات را به درستی وارد کنید");
        }

        const user = await User.findOne({ email });

        if (!user) {
          throw new Error("لطفا ابتدا حساب کاربری ایجاد کنید");
        }

        const isValid = await verifyPassword(password, user.password);

        if (!isValid) {
          throw new Error("ایمیل یا گذرواژه صحیح را وارد نمایید");
        }

        return { email };
      },
    }),
  ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
