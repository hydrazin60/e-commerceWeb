import CommonForm from "@/components/common/Form";
import { LoginFormControls } from "@/config";
import React from "react";
import { Link } from "react-router-dom";
const initialState = {
  email: "",
  password: "",
};

export default function Login() {
  const [formData, setFormData] = React.useState(initialState);
  const onSubmit = () => {};
  return (
    <div className="mx-auto w-full max-w-md space-y-6">
      <div className="text-center ">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Sign in to your account
        </h1>
        <p className="mt-2"> Don't have an account ?</p>
        <Link
          className="font-medium  ml-2 text-primary hover:underline text-blue-500"
          to="/auth/register"
        >
          Login
        </Link>
      </div>
      <CommonForm
        formControls={LoginFormControls}
        buttonText={"Login"}
        onSubmit={onSubmit}
        formData={formData}
        setFormData={setFormData}
      />
    </div>
  );
}
