import { icons } from "lucide-react";

export const RegisterFormControls = [
  {
    name: "UserName",
    lable: "User Name",
    placeholder: "Enter your user name",
    componentType: "input",
    type: "text",
    required: true,
  },
  {
    name: "email",
    lable: "Email",
    placeholder: "Enter your email",
    componentType: "input",
    type: "email",
    required: true,
  },
  {
    name: "password",
    lable: "Password",
    placeholder: "Enter your password",
    componentType: "input",
    type: "password",
    required: true,
  },
  {
    name: "ConformPassword",
    lable: "ConformPassword",
    placeholder: "conform password",
    componentType: "input",
    type: "password",
    required: true,
  },
];

export const LoginFormControls = [
  {
    name: "email",
    lable: "Email",
    placeholder: "Enter your email",
    componentType: "input",
    type: "email",
  },
  {
    name: "password",
    lable: "Password",
    placeholder: "Enter your password",
    componentType: "input",
    type: "password",
  },
];
 