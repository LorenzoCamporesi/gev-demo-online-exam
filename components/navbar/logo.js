import Image from 'next/image'

function Logo() {
    return <a className="text-red-400" href="#">
        <Image src="/logo.png" alt="hero" className="" height="1000" width="1000" layout="responsive" />
    </a>
}

export default Logo;
