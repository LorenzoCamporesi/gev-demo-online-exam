import Navbar from "../components/navbar/navbar";
import Script from 'next/script'
import {useEffect} from "react";

export default function Layout({ children }) {
    useEffect(() => {
    })
    return (
        <>
            <div className="p-5 pt-10 lg:px-36 xl:px-80 2xl:px-96">
                <h1 className="mb-5 text-3xl text-center font-bold">Prova quiz GEV 2022</h1>
                <main>{children}</main>
            </div>
            <div className="p-3 mt-20 text-center">
                Sviluppato da <a target="_blank" href="https://lorenzocamporesi.it" className="underline hover:text-green-600">Lorenzo Camporesi</a> per l'ambiente 🌱
            </div>
        </>
    )
}
