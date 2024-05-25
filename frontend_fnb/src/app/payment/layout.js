export default function Layout({children}) {
  return (
    <html lang="en">
      <body className="m-0 bg-gradient-to-b from-[#eeeeee] via-white via to-white">
        <main>{children}</main>
      </body>
    </html>
  );
}
