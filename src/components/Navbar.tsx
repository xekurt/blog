"use client";
import React, { useEffect, useState, Fragment } from "react";
import Input from "@/src/components/Input";
import Button from "@/src/components/Button";
import { AddIcon } from "@/src/assets/icons/AddIcon";
import { Dialog, Transition } from "@headlessui/react";
import CreatePostModal from "@/src/components/CreatePostModal";
export default function Navbar({
  searchPosts,
}: {
  searchPosts: (q: string) => void;
}) {
  let [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleChangeInputValue = (e: React.FormEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    setInputValue((prevState) => value);
  };

  useEffect(() => {
    if (inputValue.length > 3) {
      searchPosts(inputValue);
    } else {
      searchPosts("");
    }
  }, [searchPosts, inputValue]);
  const handleCloseModal = () => {
    setIsOpen(false);
  };
  const handleOpenModal = () => {
    setIsOpen(true);
  };

  return (
    <div className="flex justify-between">
      <Input
        value={inputValue}
        handleChangeValue={handleChangeInputValue}
        hasIcon
        className="relative w-80"
      />
      <Button onClick={handleOpenModal} Icon={AddIcon}>
        Add new post{" "}
      </Button>
      <CreatePostModal isOpen={isOpen} handleCloseModal={handleCloseModal} />
    </div>
  );
}
