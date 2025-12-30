// app/layout.js
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ReduxProvider from "@/redux/Provider";
import DefaultLayout from "@/components/layouts/default-layout/DefaultLayout";
import ShoppingCartDrawer from "@/components/modal/ShoppingCardDrawer";
import { Toaster } from "react-hot-toast";
import { getAboutData } from "@/utils/fetchAbout";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

// Dynamic metadata for SEO
export async function generateMetadata() {
  const about = await getAboutData();

  return {
    title: about?.name || "My Website",
    description: about?.description || "Default description",
    icons: {
      icon: `${process.env.NEXT_PUBLIC_API_URL}/storage/images/${about?.favicon}`,
    },
    openGraph: {
      title: about?.name,
      description: about?.description,
      images: [
        `${process.env.NEXT_PUBLIC_API_URL}/storage/images/${about?.favicon}`,
      ],
    },
  };
}

export default async function RootLayout({ children }) {
  const about = await getAboutData(); // for navbar logo

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ReduxProvider>
          <DefaultLayout navbarLogo={`${process.env.NEXT_PUBLIC_API_URL}/storage/images/${about?.navbar_logo}`}>
            <div className="min-h-[40vh]">{children}</div>
            <ShoppingCartDrawer />
            <Toaster />
          </DefaultLayout>
        </ReduxProvider>
      </body>
    </html>
  );
}
