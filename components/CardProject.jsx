import Container from "./templates/container"
import BinarCarRental from "@/assets/images/binarcarrental.png"
import ShinzoeApp from "@/assets/images/shinzoapp.png"
import GreenAriela3 from "@/assets/images/greenariela3.png"
import RightArrow from "@/assets/icons/rightarrow.png"
import Link from "next/link"
import Image from "next/image"

const CardProject = () => {
    return(
        <>
        <Container>
        
        <div>
            <p className=" text-2xl font-bold text-center">My Project :</p>
        </div>

        <div class="grid grid-cols-2 gap-4 mt-20 pb-24 border-b-4 border-black">
            <div className="grid grid-cols-1">
                <p>01/ BINAR CAR RENTAL</p>
                <p> Binar Car Rental is a website that provides vehicle rental services with a wide section of ualty cars for travel purposes.</p>
                <div className="grid grid-cols-2">
                    <Link href="/project1"> See This Project </Link>
                    <Image className="w-6 h-6 " src={RightArrow} alt="rightarrow"/>
                    </div>
            </div>
            <div className="w-{640} h-{480}">
                <Image src={BinarCarRental} alt="binarcarrental" />
            </div>
        </div>

        <div class="grid grid-cols-2 gap-4 mt-20 pb-24 border-b-4 border-black">
            <div className="grid grid-cols-1">
                <p>02/ SHINZO APP</p>
                <p> Shinzo App is a website that makes purchasing airline ticket easy, offering a wide selection of flights for your journey with comfort and convenience.</p>
                    <div className="grid grid-cols-2">
                    <Link href="/project1"> See This Project </Link>
                    <Image className="w-6 h-6 " src={RightArrow} alt="rightarrow"/>
                    </div>
            </div>
            <div className="">
                <Image src={ShinzoeApp} alt="shinzoeapp" />
            </div>
        </div>

        <div class="grid grid-cols-2 gap-4 mt-20 pb-24 border-b-4 border-black">
            <div className="grid grid-cols-1">
                <p>03/ GREEN ARIELA 3</p>
                <p> Green Ariela 3 Residence is a website that introduces housing with a green environment and quality facilities.</p>
                    <div className="grid grid-cols-2">
                    <Link href="/project1"> See This Project </Link>
                    <Image className="w-6 h-6 " src={RightArrow} alt="rightarrow"/>
                    </div>
            </div>
            <div className="">
                <Image src={GreenAriela3} alt="greenariela3" />
            </div>
        </div>
        </Container>
        </>
    )
}
export default CardProject