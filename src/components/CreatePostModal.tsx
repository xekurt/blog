import { Dialog, Transition } from "@headlessui/react";
import React, { FC, Fragment, useState } from "react";
import Button from "@/src/components/Button";
import Input from "@/src/components/Input";
import Tag from "@/src/components/Tag";

interface CreatePostModalProps {
  isOpen: boolean;
  handleCloseModal: () => void;
}
interface ModalInputsTypes {
  title: string;
  description: string;
  tags: string[];
}
const CreatePostModal: FC<CreatePostModalProps> = ({
  isOpen,
  handleCloseModal,
}) => {
  const [modalInputValue, setModalInputValue] = useState<ModalInputsTypes>({
    title: "",
    description: "",
    tags: [],
  });
  const [tagInputValue, setTagInputValue] = useState("");
  const handleChangeModalInput = (e: React.FormEvent<HTMLInputElement>) => {
    const { id, value } = e.currentTarget;
    setModalInputValue((prevState) => ({ ...prevState, [id]: value }));
  };
  const handleAddTag = () => {
    if (tagInputValue.trim().length > 0) {
      setModalInputValue((prevState) => ({
        ...prevState,
        tags: [...prevState.tags, tagInputValue],
      }));
    }
  };
  console.info(modalInputValue);
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={handleCloseModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="div"
                  className="flex w-full items-center justify-between text-lg font-bold leading-6 text-gray-900"
                >
                  <h3 className="flex items-center">
                    <span
                      className="mr-8 cursor-pointer rounded-3xl border p-2"
                      onClick={handleCloseModal}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="h-6 w-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                        />
                      </svg>
                    </span>
                    New Post
                  </h3>
                  <Button onClick={handleCloseModal}>Publish Post</Button>
                </Dialog.Title>
                <div>
                  <label title="Title" className="ml-2 text-sm font-bold">
                    Title{" "}
                  </label>
                  <input className="block w-full rounded-md border border-[#e7e7e7]  p-2.5 text-sm hover:border-[#9d9d9d] focus:border-[#9d9d9d] focus:outline-none" />
                </div>
                <div className="mt-2">
                  <label className="ml-2 text-sm font-bold">Description</label>
                  <textarea
                    className="block w-full rounded-md border border-[#e7e7e7]  p-2.5 text-sm hover:border-[#9d9d9d] focus:border-[#9d9d9d] focus:outline-none"
                    multiple
                    rows={5}
                  />
                </div>
                <div className="relative mt-2">
                  <label className="ml-2 text-sm font-bold">Tags</label>
                  <div
                    className={`absolute inset-y-0 right-0 z-50 mr-2 mt-6 flex items-center font-bold ${
                      tagInputValue.length > 0
                        ? "cursor-pointer text-[#4F73D0]"
                        : "cursor-not-allowed text-[#9d9d9d]"
                    }`}
                    onClick={handleAddTag}
                  >
                    <span className="mr-1 mt-0.5 text-xs">Add</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="h-4 w-4 font-bold"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4.5v15m7.5-7.5h-15"
                      />
                    </svg>
                  </div>
                  <input
                    onChange={(e) => {
                      setTagInputValue(e.target.value);
                    }}
                    value={tagInputValue}
                    className="block w-full rounded-md border border-[#e7e7e7] p-2.5 pr-16 text-sm hover:border-[#9d9d9d] focus:border-[#9d9d9d] focus:outline-none"
                  />
                </div>
                <div className="mt-2">
                  {modalInputValue.tags.map((tag, key) => (
                    <Tag text={tag} key={key} />
                  ))}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default CreatePostModal;
