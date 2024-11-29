import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "PopScore",
    description: "Movies and Shows tailored for you",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
