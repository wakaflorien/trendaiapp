
import Navbar from "@/components/Nav";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex flex-col min-h-screen h-screen w-full">
            <Navbar isDashboard={true} names="Oscar Man" type="Brand" />
            <main className="flex flex-col gap-8  items-center ">
                {children}
            </main>
        </div>
    );
}
