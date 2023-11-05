import Container from "./templates/container"
import Link from "next/link"

const Footer = () => {
    return(
        <>
        <Container>
        <div className="flex justify-between mt-36 mb-8 ">
            <div className="text-secondary-2">Muhamad irgi F - 2023</div>
            <div className="flex gap-6">
                <Link href="Email">Email</Link>
                <Link href="https://github.com/irgifhz">Github</Link>
                <Link href="https://www.linkedin.com/in/irgi-fahrureza/">Linkedin</Link>
                <Link href="https://www.instagram.com/irgifhrrz/">Instagram</Link>
            </div>
        </div>
        </Container>
        
        </>
    )
}
export default Footer