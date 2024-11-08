import React from "react";
import { useForm } from "react-hook-form";

const ProductAdd = () => {
  const {
    register,
    handleSubmit,
    formState: { error },
  } = useForm();
  return <div>ProductAdd</div>;
};

export default ProductAdd;
