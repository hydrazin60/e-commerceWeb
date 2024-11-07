import React, { useRef } from "react";
import { Input } from "../ui/input";
import { UploadCloudIcon, XIcon } from "lucide-react";
import { Button } from "../ui/button";

export default function ProductImageUploader({
  file,
  setFile,
  uploadedImageUrl,
  setUploadedImageUrl,
}) {
  const inputRef = useRef(null);

  const handleImageChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDropOver = (event) => {
    event.preventDefault();
    const dropedFile = event.dataTransfer.files[0];
    if (dropedFile) {
      setFile(dropedFile);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto mt-4">
      <label className="text-lg font-semibold">Product Image Upload </label>
      <div
        onDragOver={handleDragOver}
        onDrop={handleDropOver}
        onClick={() => inputRef.current.click()}
        className="border-2 border-dashed rounded-lg p-4 border-green-500"
      >
        <Input
          type="file"
          ref={inputRef}
          onChange={handleImageChange}
          className="hidden"
        />
        {!file ? (
          <label
            htmlFor="image-upload"
            className={`flex flex-col items-center justify-center h-32 cursor-pointer`}
          >
            <UploadCloudIcon className="w-10 h-10 text-muted-foreground mb-2" />
            <span>Drag & drop or click to upload image</span>
          </label>
        ) : (
          <div className="relative">
            <img
              src={URL.createObjectURL(file)}
              alt="Selected"
              className="mt-2 max-h-20 rounded-full object-cover"
            />
            <Button
              onClick={() => {
                setFile(null);
                setUploadedImageUrl(null);
                inputRef.current.value = null;
              }}
              className=" h-5 rounded-full p-1 object-contain absolute -top-1 left-9  bg-red-500"
            >
              <XIcon className="h-3 w-3 text-white" />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
