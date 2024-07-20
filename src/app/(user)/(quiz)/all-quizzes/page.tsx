import { Sidebar } from "@/layout/sidebar";
import Link from "next/link";
import { CiMenuKebab } from "react-icons/ci";
interface DisplayCardProps {
    tagName: string
    category: string
    titleName: string
    description: string
}
const QuizCard: React.FC<DisplayCardProps> = (props) => {
    return (
        
            <div className="shadow-sm cursor-pointer hover:shadow-md p-6 relative w-full lg:w-[580px] rounded-[10px] bg-white h-[200px]">
            <span className={`absolute w-[5.2px] h-[25px] rounded-r-lg left-0 ${props.tagName.toLowerCase() === "closed" ? "bg-[#BE3232]" : ""}`}>
                {/* // simple tag */}
            </span>

            <span className="absolute right-6 top-6 cursor-pointer"><CiMenuKebab /></span>
            <span className={`border min-w-[114px] px-3 py-1 font-semibold rounded-[10px] text-center text-xs min-h-[30px] ${props.tagName.toLowerCase() === "closed" ? "text-[#BE3232]  border-[#BE3232]" : ""}`}>{ props.tagName.toUpperCase() }</span>

            <Link href="/quiz-info" passHref={true}>
                <div className="mt-4 space-y-2">
                    <h2 className="font-semibold text-xl md:text-[2xl]">{props.titleName}</h2>
                    <p className="text-[#898989] font-medium">{ props.description }</p>
                </div>
            </Link>

            <span className={`border absolute right-6 bottom-6 border-[#9E9D9D] text-[#898989] font-medium px-3 py-1 text-small rounded-[10px]`}>{ props.category.toUpperCase() }</span>
        </div>
    )
}
export default function page() {
    return (
        <Sidebar>
            <div>

               <div className="grid grid-cols-2 gap-12">
                 <QuizCard  tagName="Closed" category="Word of God" titleName="Hello world Test 1" description="(no description)"/>

                <QuizCard  tagName="Closed" category="Word of God" titleName="Hello world Test 1" description="(no description)"/>

                <QuizCard  tagName="Closed" category="Word of God" titleName="Hello world Test 1" description="(no description)"/>

                <QuizCard  tagName="Closed" category="Word of God" titleName="Hello world Test 1" description="(no description)"/>
               </div>


            </div>
        </Sidebar>
    )
}