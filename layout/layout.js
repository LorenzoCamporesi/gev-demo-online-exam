import Navbar from "../components/navbar/navbar";
import Script from 'next/script'
import {useEffect} from "react";

export default function Layout({ children }) {
    useEffect(() => {
    })
    return (
        <>
            <div className="p-5 pt-10 lg:px-36 xl:px-80 2xl:px-96">
                <h1 className="mb-1 text-3xl text-center font-bold">Prova quiz GEV</h1>
                <p className="mb-5 text-center">Quiz di prova per l'esame delle Guardie Ecologiche Volontarie. Le domande e le risposte sono state prese dal <a className="underline text-blue-500" href={"https://ambiente.regione.emilia-romagna.it/it/parchi-natura2000/sistema-regionale/GEV/allegati/BancadatiQUIZGEV_nov2018.docx"}> documento della Regione Emilia-Romagna</a>. Qui sotto puoi cominciare subito il quiz.<br/>
                    ⬇️ ⬇️ ⬇️ ⬇️ ⬇️ ⬇️
                </p>
                <main>{children}</main>
            </div>
            <div className="p-3 mt-20 text-center">
                Sviluppato da <a target="_blank" href="https://lorenzocamporesi.it" className="underline hover:text-green-600">Lorenzo Camporesi</a> per l'ambiente 🌱
            </div>
        </>
    )
}
