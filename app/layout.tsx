import "./globals.css";
import Providers from "app/store/provider";


export const metadata = {
  title: "My Next App",
  description: "Sign In / Sign Up / Details flow",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
