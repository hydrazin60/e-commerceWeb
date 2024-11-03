import CommonForm from "@/components/common/Form";
import { RegisterFormControls } from "@/config";
import React from "react";
import { Link } from "react-router-dom";
const initialState = {
  name: "",
  email: "",
  password: "",
  conformPassword: "",
};

export default function Register() {
  const [formData, setFormData] = React.useState(initialState);
  const onSubmit = () => {};
  return (
    <div className="mx-auto w-full max-w-md space-y-6">
      <div className="text-center ">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Create new account
        </h1>
        <p className="mt-2">Already have an account ?</p>
        <Link
          className="font-medium  ml-2 text-primary hover:underline text-blue-500"
          to="/auth/login"
        >
          Login
        </Link>
      </div>
      <CommonForm
        formControls={RegisterFormControls}
        buttonText={"Register"}
        onSubmit={onSubmit}
        formData={formData}
        setFormData={setFormData}
      />
    </div>
  );
}
