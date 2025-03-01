import Link from "next/link"
import Image from "next/image"

export function NavBar(){
    return(
        <div>
            <header className="p-3 md:p-5 border-2 md:border-3 border-b-border/20 border-x-navbar border-t-navbar">
                <div className="flex justify-between text-text">
                    <Link href="../src/app/page.tsx">
                        <Image src="/logo.svg" alt="logo " width={40} height={40}/>

                    </Link>
                    <div className="flex pt-1 text-sm md:text-base font-bold flex-row-reverse gap-4">
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