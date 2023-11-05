import Container from "./templates/container"
import ArrowDown from "@/assets/icons/arrowdown.png"
import Link from "next/link"
import Image from "next/image"

const Jumbotron = () => {
    return(
        <>
        <Container>
        <div className="grid grid-cols-2 gap-4 mt-32 sm:">
            <div className=" text-4xl pr-52 mb-12">Hello, I'm Muhamad Irgi Fahrureza.</div>
            <div className=" text-xl text-primary-2 font-normal pr-20 ">A final-year Information system student from Gunadarma University who trying to specialize in programming and computer networking.</div>
        </div>
        <Image src={ArrowDown} alt='ArrowDown'/>
        </Container>
        </>
    )
}
export default Jumbotron