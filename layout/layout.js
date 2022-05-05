import Navbar from "../components/navbar/navbar";
import Script from 'next/script'
import {useEffect} from "react";

export default function Layout({ children }) {
    useEffect(() => {
    })
    return (
        <>
            <div className="p-5 pt-10 lg:px-36 xl:px-80 2xl:px-96">
                <main>{children}</main>
            </div>
        </>
    )
}
