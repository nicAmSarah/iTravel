import Image from "next/image"

export function Hero(){
    return(
        <div className="flex justify-center pt-6">
            <Image src="/riojane.svg" alt="Hro" width={800} height={200} className=" rounded-t-2xl"/>
        </div>
    )
}