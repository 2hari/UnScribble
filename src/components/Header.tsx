import Link from "next/link"
import localFont from "next/font/local"
import Image from "next/image"
import clsx from "clsx"

const clash = localFont({ src: "../app/ClashDisplay-Variable.ttf" })

interface IHeaderProps {
  photo?: string
}

const Header: React.FC<IHeaderProps> = ({ photo }) => {
  return (
    <header className="flex max-w-7xl mx-auto justify-between items-center w-full mt-5 pb-7 sm:px-4 px-2">
      <Link href="/" className="flex space-x-2 items-center">
        <Image
          alt="Logo"
          src="/logo.png"
          className="w-7 h-7"
          width={25}
          height={25}
        />
        <h1
          className={clsx(
            "text-3xl font-semibold ml-2 tracking-tight",
            clash.className
          )}
        >
          UnScribble
        </h1>
      </Link>
    </header>
  )
}

export default Header
