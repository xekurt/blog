"use client";
import React from "react";

interface SearchInputProps {
  value: string;
  handleChangeValue: (e: React.FormEvent<HTMLInputElement>) => void;
  hasIcon: boolean;
}
export default function SearchInput({
  value,
  handleChangeValue,
  hasIcon,
}: SearchInputProps) {
  return (
    <div className="relative h-10 w-80">
      {hasIcon && (
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <svg
            aria-hidden="true"
            className="h-5 w-5 text-gray-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>
      )}
      <input
        type="text"
        id="simple-search"
        className="block w-full rounded-3xl border border-[#e7e7e7]  p-2.5 pl-10 text-sm hover:border-[#9d9d9d] focus:border-[#9d9d9d] focus:outline-none"
        placeholder="Search"
        value={value}
        onChange={handleChangeValue}
        required
      />
    </div>
  );
}
