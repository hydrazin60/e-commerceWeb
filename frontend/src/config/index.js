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

export const addProductFormElements = [
  {
    label: "product Name",
    name: "productName",
    componentType: "input",
    type: "text",
    placeholder: "Enter product Name",
  },
  {
    label: "description",
    name: "description",
    componentType: "textarea",
    placeholder: "Enter product description",
  },
  {
    label: "Category",
    name: "category",
    componentType: "select",
    options: [
      { id: "men", label: "Men" },
      { id: "women", label: "Women" },
      { id: "kids", label: "Kids" },
      { id: "accessories", label: "Accessories" },
      { id: "kitchen", label: "kitchen" },
      { id: "electronics", label: "electronics" },
    ],
  },
  {
    label: "Brand",
    name: "brand",
    componentType: "select",
    options: [
      { id: "nike", label: "Nike" },
      { id: "adidas", label: "Adidas" },
      { id: "puma", label: "Puma" },
      { id: "levi", label: "Levi's" },
      { id: "zara", label: "Zara" },
      { id: "h&m", label: "H&M" },
      { id: "reebok", label: "Reebok" },
      { id: "gucci", label: "Gucci" },
      { id: "versace", label: "Versace" },
      { id: "chanel", label: "Chanel" },
      { id: "prada", label: "Prada" },
      { id: "louis-vuitton", label: "Louis Vuitton" },
      { id: "gucci", label: "Gucci" },
      { id: "versace", label: "Versace" },
    ],
  },
  {
    label: "Price",
    name: "price",
    componentType: "input",
    type: "number",
    placeholder: "Enter product price",
  },
  {
    label: "Sale Price",
    name: "salePrice",
    componentType: "input",
    type: "number",
    placeholder: "Enter sale price (optional)",
  },
  {
    label: "Total Stock",
    name: "totalStock",
    componentType: "input",
    type: "number",
    placeholder: "Enter total stock",
  },
  {
    label: "Any Offer",
    name: "offer",
    componentType: "input",
    type: "number",
    placeholder: "Enter offer (optional)",
  },
];
