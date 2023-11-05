import Container from "./templates/container"
import RightArrow from "@/assets/icons/rightarrow.png"
import Link from "next/link"
import Image from "next/image"

const Contact = () => {
    return(
        <>
        <Container>
            <div className="grid grid-cols-2 gap-4 mt-20 pt-24 border-t-2 border-black">
                <p> I am thrilled to answer to your next project
                    
                </p>
                <div>
                    <p>muhamadirgi42@gmail.com</p>
                    <p>View Resume</p>
                </div>
            </div>
        </Container>
        </>
    )
}
export default Contact