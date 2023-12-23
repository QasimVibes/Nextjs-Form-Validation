
import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">Home</h1>
      <ol className="list-decimal pl-4">
        <li className="mb-2">
          <Link href="/contact" className="text-blue-500 hover:underline">
            Contact
          </Link>
        </li>
      </ol>
    </div>
  );
}

