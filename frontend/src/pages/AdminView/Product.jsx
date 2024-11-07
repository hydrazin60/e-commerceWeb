import ProductImageUploader from "@/components/adminView/ProductImageUploader";
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
  const [imageFile, setImageFile] = React.useState(null);
  const [uploadedImageUrl, setUploadedImageUrl] = React.useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    
    // Create FormData object to submit
    const formDataToSubmit = new FormData();
  
    // Append text fields from formData to FormData
    Object.keys(formData).forEach((key) => {
      formDataToSubmit.append(key, formData[key]);
    });
  
    // Append the uploaded image to FormData (use imageFile here)
    if (imageFile) {
      formDataToSubmit.append("image", imageFile);
    }
  
    // Log the FormData object (to see the data you're sending)
    const formDataObject = {};
    formDataToSubmit.forEach((value, key) => {
      formDataObject[key] = value;
    });
  
    console.log("Submitting product data:", formDataObject);
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
        <SheetContent side="right" className="overflow-y-scroll">
          <SheetHeader>
            <SheetTitle>Add New Product</SheetTitle>
          </SheetHeader>
          <ProductImageUploader
            file={imageFile}
            setFile={setImageFile}
            uploadedImageUrl={uploadedImageUrl}
            setUploadedImageUrl={setUploadedImageUrl}
          />
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
