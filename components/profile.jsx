import Container from "./templates/container"
import Image from "next/image"
import FotoProfile from "@/assets/images/profile.jpeg"

export default function Profile() {
return (
    <>
    <Container>
        <div className="grid grid-cols-2 mt-32">
            <div className="grid grid-rows-3">
                <p className="text-2xl font-bold">Hi I'm Muhamad Irgi Fahrureza.</p>
                <p>My work specifically focuses on software development and computer network management.
                    I have a deep interest in the exploration of aspects of information technology.
                </p>
                <p>Currently, I am a final semester student at Gunadarma University majoring in information System.
                    While persuing a degree,I am also active in freelance project and open to seeking relevant internship opportunities to develop my skill and experience.
                </p>
            </div>
            <div className=" pl-32">
                <Image src={FotoProfile} className="w-2/4" alt="fotoprofile"/>
            </div>
        </div>

        <div>
        
        </div>
    </Container>
    </>
)
}
