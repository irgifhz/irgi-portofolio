import Container from "./templates/container"
import Link from "next/link"

const NavBar = () => {
    return(
        <>
        <Container>
        <div className="flex justify-between my-8 ">
            <div>MI.</div>
            <div className="flex gap-6">
                <Link href="/">Project</Link>
                <Link href="/about">About</Link>
                <Link href="/about">Contact</Link>
            </div>
        </div>
        </Container>
        
        </>
    )
}
export default NavBar