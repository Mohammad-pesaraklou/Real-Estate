"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Toaster, toast } from "react-hot-toast";
// style
import styles from "./SignupPage.module.css";
import { signIn } from "next-auth/react";

const SignInPage = () => {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const router = useRouter();
  const changHandler = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const signInHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    const res = await signIn("credentials", {
      email: form.email,
      password: form.password,
      redirect: false,
    });
    setLoading(false);
    if (res.error) {
      toast.error(res.error);
    } else {
      toast.success("ورود موفقیت امیز بود");
      setTimeout(() => {
        router.push("/");
      }, 3000);
    }
  };

  return (
    <div className={styles.form}>
      <h4>فرم ورود</h4>
      <form>
        <label>ایمیل</label>
        <input
          type="text"
          name="email"
          value={form.email}
          onChange={changHandler}
        />
        <label>رمز عبور</label>
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={changHandler}
        />

        <button onClick={signInHandler}>ورود</button>
      </form>
      <p>
        حساب کاربری ندارید؟
        <Link href={"/signup"}>ثبت نام</Link>
      </p>
      <Toaster />
    </div>
  );
};

export default SignInPage;
