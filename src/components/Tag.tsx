"use client";
import { FC } from "react";

interface TagsProps {
  text: string;
}
const Tag: FC<TagsProps> = ({ text }) => {
  return (
    <span className="mr-1 mt-1 rounded-xl border border-[#E7E7E7] px-3 py-1 text-xs text-[#9D9D9D]">
      {text}
    </span>
  );
};

export default Tag;
