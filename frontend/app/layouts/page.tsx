import type { Metadata } from "next";
import { ThemeProvider } from "../components/theme";
import "./styles/globals.css";

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
            <body>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
