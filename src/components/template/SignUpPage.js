"use client";
import Link from "next/link";
import { Toaster, toast } from "react-hot-toast";
// style
import styles from "./SignupPage.module.css";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const SignUpPage = () => {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
    rePassword: "",
  });
  const router = useRouter();
  const changHandler = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const signUpHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (!form.email || !form.password || !form.rePassword) {
      toast.error("اطلاعات را بصورت  صحیح کامل کنید");
      return;
    }
    if (form.password !== form.rePassword) {
      toast.error("رمز های عبور تطابق ندارند");
      return;
    }
    const req = await axios.post("/api/auth/signup", {
      email: form.email,
      password: form.password,
      rePassword: form.rePassword,
    });
    if (req.status == 201) {
      setLoading(false);
      setForm({
        email: "",
        password: "",
        rePassword: "",
      });
    }
    toast.success(req.data.message);
    router.push("/signin");
  };

  return (
    <div className={styles.form}>
      <h4>فرم ثبت نام</h4>
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
        <label>تکرار رمز عبور</label>
        <input
          type="password"
          name="rePassword"
          value={form.rePassword}
          onChange={changHandler}
        />
        <button onClick={signUpHandler}>ثبت نام</button>
      </form>
      <p>
        حساب کاربری دارید؟
        <Link href={"/signin"}>ورود</Link>
      </p>
      <Toaster />
    </div>
  );
};

export default SignUpPage;
