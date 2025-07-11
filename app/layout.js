import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata = {
<<<<<<< HEAD
    title: "Portfolio de Alejandro Alba Castillo | Desarrollador de Software",
    description:
        "Portfolio profesional de Alejandro Alba Castillo, desarrollador de software con experiencia en desarrollo web y aplicaciones móviles.",
=======
    title: "Portfolio de Alejandro Alba | Desarrollador de Software",
    description:
        "Portfolio profesional de Alejandro Alba, desarrollador de software con experiencia en desarrollo web y aplicaciones móviles.",
>>>>>>> 765b9132c3ee923718f41869dcfc61e624a47ad5
};

export default function RootLayout({ children }) {
    return (
        <html lang="es">
            <body
                className={`${inter.variable} ${geistMono.variable} antialiased bg-gradient-to-b from-[#fafafc] via-[#e2e2e2] to-[#cbd5e1]`}
            >
                {children}
            </body>
        </html>
    );
}
