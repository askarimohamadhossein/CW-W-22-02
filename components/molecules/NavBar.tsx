import Link from "next/link";

export const NavBar: React.FC = () => {
  return (
    <div className="flex gap-4 items-center py-6 px-4 bg-slate-300 shadow-md">
      <Link href="/about">
        <p className="text-xl font-semibold hover:text-slate-700">About Us</p>
      </Link>
      <Link href="/contact">
        <p className="text-xl font-semibold hover:text-slate-700">Contact Us</p>
      </Link>
      <Link href="/posts">
        <p className="text-xl font-semibold hover:text-slate-700">Posts</p>
      </Link>
    </div>
  );
};
