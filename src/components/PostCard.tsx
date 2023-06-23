import { FC } from "react";
import Image from "next/image";
import Tag from "@/src/components/Tag";
import UserAvatar from "@/src/components/UserAvatar";
import Favs from "@/src/components/Favs";

interface PostCardProps {
  id: number;
  image: string;
  likes: number;
  publishDate: string;
  tags: string[];
  text: string;
  title: string;
  userId: number;
}
const PostCard: FC<PostCardProps> = (props) => {
  return (
    <article className="column relative m-2 h-[520px] flex-col items-center justify-center overflow-hidden rounded-sm border border-[#e7e7e7] p-3">
      <div className="m-auto h-36 w-full">
        <img
          src={props.image}
          className="h-full w-full object-cover"
          alt={props.id.toString()}
          loading="lazy"
        />
      </div>
      <h1 className="text-lg font-bold">{props.title}</h1>
      <p className="mt-1 text-sm text-[#9D9D9D]">{props.text}</p>
      <div className="mt-2 flex flex-wrap">
        {props.tags.map((tag, index) => (
          <Tag text={tag} key={index} />
        ))}
      </div>
      <div className="absolute bottom-0 left-0 flex h-16 w-full items-center justify-between">
        <UserAvatar id={props.userId} date={props.publishDate} />
        <Favs count={props.likes} />
      </div>
    </article>
  );
};
export default PostCard;
