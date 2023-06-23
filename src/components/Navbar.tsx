"use client";
import React, { useState } from "react";
import SearchInput from "@/src/components/SearchInput";
import Button from "@/src/components/Button";
import { AddIcon } from "@/src/assets/icons/AddIcon";

export default function Navbar() {
  const [inputValue, setInputValue] = useState("");
  const handleChangeInputValue = (e: React.FormEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    setInputValue((prevState) => value);
  };
  return (
    <div className="flex justify-between">
      <SearchInput
        value={inputValue}
        handleChangeValue={handleChangeInputValue}
        hasIcon
      />
      <Button Icon={AddIcon}>Add new post </Button>
    </div>
  );
}
