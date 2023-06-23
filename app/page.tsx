import PostsList from "@/src/components/PostsList";
import Navbar from "@/src/components/Navbar";

export default async function Home() {
  return (
    <div className="h-screen w-screen p-6 md:p-12 lg:p-24">
      <Navbar />
      <PostsList />
    </div>
  );
}
