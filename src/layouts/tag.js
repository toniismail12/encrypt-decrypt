import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router';

export default function Tag() {

    const router = useRouter();
    const currentRoute = router.pathname;

    return (
        <>
            <div className="lg:hidden col-span-2 flex justify-start">
                <Link href="/" className={currentRoute == "/" ? "bg-blue-400 inline-flex items-center justify-center py-2 px-3 rounded-xl text-white hover:text-white text-sm font-semibold transition mr-2" : "inline-flex items-center justify-center py-2 px-3 rounded-xl text-black hover:text-white text-sm font-semibold transition"}>
                    Encrypt
                </Link>
                <Link href="/decrypt" className={currentRoute == "/decrypt" ? "bg-blue-400 inline-flex items-center justify-center py-2 px-3 rounded-xl text-white hover:text-white text-sm font-semibold transition mr-2" : "inline-flex items-center justify-center py-2 px-3 rounded-xl text-black hover:text-white text-sm font-semibold transition"}>
                    Decrypt
                </Link>
            </div>
        </>
    )
}
