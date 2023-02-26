import Head from 'next/head'
import { Menu, Tag } from '@/layouts'
import { Encrypt } from '@/utils'
import { useState } from 'react';

export default function Home() {

    const [key, setKey] = useState("");
    const [value, setValue] = useState("");
    const [result, setResult] = useState("");

    const handleSubmit = async () => {
        
        setResult(Encrypt(value, key))
    }

    const handleReset = async () => {
        
        setKey("")
        setValue("")
        setResult("")
    }

    return (
        <>
            <Head>
                <title>Next App</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div>

                {/* menu */}
                <Menu />
                {/* end menu */}

                <main className="lg:ml-60 pt-11 h-screen overflow-auto bg-yellow-200">

                    <div className="px-6 py-8">
                            
                        {/* tag */}
                        <Tag />

                        <div className="max-w-4xl mx-auto mt-3">
                            <div className="bg-white rounded-3xl p-8 mb-5">

                                <h1 className="text-3xl font-bold mb-10">Encrypt Data</h1>

                                <hr className="my-10" />

                                <div className="grid grid-cols-2 gap-4">

                                    <div className="col-span-1">
                                        <div className="p-4 bg-purple-100 rounded-xl">
                                            <div className="font-bold text-xl text-gray-800 leading-none">Value</div>
                                            <div className="mt-5">
                                                <textarea value={value} onChange={e => { setValue(e.target.value); }}  className="p-3 w-full rounded-lg shadow"></textarea>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-span-1">
                                        <div className="p-4 bg-green-100 rounded-xl">
                                            <div className="font-bold text-xl text-gray-800 leading-none">Key</div>
                                            <div className="mt-5">
                                                <input type="text" value={key} onChange={e => { setKey(e.target.value); }} className="p-3 w-full rounded-lg shadow" />
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="col-span-2 flex justify-end">
                                        <button onClick={handleReset} type="button" className="bg-red-400 inline-flex items-center justify-center py-2 px-3 rounded-xl text-white hover:text-white text-sm font-semibold transition mr-2">
                                            Reset
                                        </button>
                                        <button onClick={handleSubmit} type="button" className="bg-blue-400 inline-flex items-center justify-center py-2 px-3 rounded-xl text-gray-800 hover:text-white text-sm font-semibold transition">
                                            Start Encrypt
                                        </button>
                                    </div>

                                </div>

                                <hr className="my-10" />

                                <div>
                                    <h2 className="text-2xl font-bold mb-4">Results</h2>
                                    <div className="space-y-4">

                                        <div className="p-4 bg-white border rounded-xl text-gray-800 space-y-2">
                                            {result == "" ? "result" : result}
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}
