import { ReactNode } from "react";
import { redirect } from "next/navigation";
import { getAuthenticated } from "@/lib/actions/auth.action";

const AuthLayout = async ({ children }: { children: ReactNode }) => {
    const isUserAuthenticated = await getAuthenticated();

    if (isUserAuthenticated) redirect("/root");

    return <div className="auth-layout">{children}</div>;
};

export default AuthLayout;
