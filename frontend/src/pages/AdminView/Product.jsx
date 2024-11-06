import CommonForm from "@/components/common/Form";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { addProductFormElements } from "@/config";
import React, { Fragment } from "react";
const initialFormData = {
  title: "",
  description: "",
  price: "",
  image: "",
  category: "",
  brand: "",
  salePrice: "",
  totalStock: "",
};

export default function AdminProduct() {
  const [openCreateProductDialog, setOpenCreateProductDialog] =
    React.useState(false);
  const [formData, setFormData] = React.useState(initialFormData);
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <Fragment>
      <div className="mb-5 w-full flex justify-end ">
        <Button
          onClick={() => setOpenCreateProductDialog(!openCreateProductDialog)}
        >
          Add New Product
        </Button>
      </div>
      <div className="grid grid-4 md:grid-cols-3 lg:grid-cols-4"></div>
      <Sheet
        open={openCreateProductDialog}
        onOpenChange={() => {
          setOpenCreateProductDialog(!openCreateProductDialog);
        }}
      >
        <SheetContent side="right" className="overflow-hidden">
          <SheetHeader>
            <SheetTitle>Add New Product</SheetTitle>
          </SheetHeader>

          <div className="py-6">
            <CommonForm
              onSubmit={onSubmit}
              formData={formData}
              setFormData={setFormData}
              formControls={addProductFormElements}
              buttonText="Add Product"
            ></CommonForm>
          </div>
        </SheetContent>
      </Sheet>
    </Fragment>
  );
}
