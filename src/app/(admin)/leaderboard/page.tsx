import { getLeaderboard } from "@/app/actions"
import { Sidebar } from "@/layout/sidebar"
import Leaderboard from "@/page/leaderboard/page"


export type LeaderBoardType = {
    rank: number
    id: string
    userId: string
    userName: string
    totalScore: number
}
export default async function page() {
    const leaderBoardData: LeaderBoardType[] | undefined  = await getLeaderboard();

    return (
        <Sidebar>
        <div className=" px-6 md:px-10 lg:px-20 ">
                <Leaderboard data={leaderBoardData as LeaderBoardType[]} />
                <p>Hello world this is it</p>
        </div>
        </Sidebar>
    )
}