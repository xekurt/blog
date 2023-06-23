import { FC, useEffect, useState } from "react";
import { userApi } from "@/src/apis/usersApi";

interface UserAvatarProps {
  id: number;
  date: string;
}
type UserType = {
  avatar: string;
  email: string;
  firstName: string;
  id: number;
  lastName: string;
  date: string;
};
const UserAvatar: FC<UserAvatarProps> = ({ id, date }) => {
  const [userDetails, setUserDetails] = useState<UserType>();
  useEffect(() => {
    userApi.get(id).then((user: UserType) => {
      setUserDetails(user);
    });
  }, [id]);
  return (
    <div className="justify-left flex h-full w-2/3 p-2">
      <img
        className="ml-1 h-10 w-10 self-center rounded-3xl bg-[#ededed] text-white"
        src={userDetails?.avatar}
        width={28}
        height={28}
        alt={userDetails?.id.toString()}
      />
      <div className="ml-1 flex-col justify-center">
        <p className="mt-2 text-xs">
          {userDetails?.firstName + " " + userDetails?.lastName}
        </p>
        <p className="text-xs text-[#9d9d9d]">
          {new Date(date).toString().slice(4, 15)}
        </p>
      </div>
    </div>
  );
};
export default UserAvatar;
