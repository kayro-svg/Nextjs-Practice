import './ui/global.css'
import '@/app/ui/global.css';
import { inter, lusitana} from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`} >{children}
      <footer className='py-10 flex justify-center align-center'>
        Hecho con esfuerzo y dedicacion por mi
      </footer>
      </body>
    </html>
  );
}
