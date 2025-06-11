import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { getAuthenticated } from "@/lib/actions/auth.action";

export default async function RootLayout({
                                             children,
                                         }: {
    children: React.ReactNode;
}) {
    const isUserAuthenticated = await getAuthenticated();

    if (!isUserAuthenticated) {
        redirect("/sign-in");
    }

    return (
        <div className="root-layout">
            <nav>
                <Link href="/" className="flex items-center gap-2">
                    <Image src="/logo.svg" alt="Logo" width={38} height={32} />
                    <h2 className="text-primary-100">EchoHire</h2>
                </Link>
            </nav>
            {children}
        </div>
    );
}
