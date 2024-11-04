import CommonForm from "@/components/common/Form";
import { RegisterFormControls } from "@/config";
import { RegisterUseAction } from "@/redux/authSlice";
import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
const initialState = {
  UserName: "",
  email: "",
  password: "",
  ConformPassword: "",
};

export default function Register() {
  const [formData, setFormData] = React.useState(initialState);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.UserName ||
      !formData.email ||
      !formData.password ||
      !formData.ConformPassword
    ) {
      toast.error("All fields are required");
      return;
    }
    if (formData.password !== formData.ConformPassword) {
      toast.error("Passwords do not match");
      return;
    }
    dispatch(RegisterUseAction(formData))
      .unwrap()
      .then((res) => {
        toast.success(res.message);
        navigate("/auth/login");
      })
      .catch((err) => {
        toast.error(err);
        
      });
  };

  return (
    <div className="mx-auto w-full max-w-md space-y-6">
      <div className="text-center ">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Create new account
        </h1>
        <p className="mt-2">Already have an account ?</p>
        <Link
          className="font-medium  ml-2 text-primary hover:underline text-blue-600"
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
