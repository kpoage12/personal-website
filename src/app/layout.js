import "./globals.css";

export const metadata = {
  title: "Kyle Poage",
  description: "Personal site",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-gray-900 text-gray-100 antialiased">
        {children}
      </body>
    </html>
  );
}
