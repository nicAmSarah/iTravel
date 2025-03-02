import Link from "next/link"
import Image from "next/image"

export function NavBar(){
    return(
        <div>
            <header className="p-3 md:p-5 border-2 md:border-3 border-b-border/20 border-x-navbar border-t-navbar">
                <div className="flex justify-between text-text">
                    <Link  className="pl-25" href="../src/app/page.tsx">
                        <Image src="/logo.svg" alt="logo " width={50} height={50}/>
                    </Link>
                    <div className="flex pt-1 text-sm md:text-base font-bold w-2/5 pr-25 justify-between flex-row-reverse gap-4">
                        <Link href="/login">
                            Login
                        </Link>
                        <Link href="/contacts">
                            Contacts
                        </Link>
                        <Link href="/aboutMe">
                            About Me
                        </Link>
                    </div>
                </div>
            </header>
        </div>
    )
}