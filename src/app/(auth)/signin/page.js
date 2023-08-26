import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
// component
import SignInPage from "@/template/SignInPage";

const SignIn = async () => {
  const session = await getServerSession(authOptions);
  if (session) redirect("/");
  return <SignInPage />;
};

export default SignIn;
