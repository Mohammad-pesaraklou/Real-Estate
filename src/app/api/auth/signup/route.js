import User from "@/models/User";
import ConnectDb from "@/utils/ConnectDb";
import { hashedPassword } from "@/utils/auth";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await ConnectDb();

    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json(
        { error: "!لطفا اطلاعات را به درستی وارد کنید" },
        { status: 422 }
      );
    }

    const isExistingUser = await User.findOne({ email });

    if (isExistingUser) {
      return NextResponse.json(
        { error: "این حساب کاربری وجود دارد" },
        {
          status: 422,
        }
      );
    }

    const passwordHashed = await hashedPassword(password);

    const NewUser = await User.create({
      email: email,
      password: passwordHashed,
    });

    return NextResponse.json(
      { message: "کاربر با موفقیت ایجاد شد" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        error: "مشکلی در سرور رخ داده است!",
      },
      {
        status: 500,
      }
    );
  }
}
