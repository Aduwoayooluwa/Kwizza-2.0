import { getLeaderboard } from "@/app/actions"
import Leaderboard from "@/page/leaderboard/page;


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
        <div className="px-20 py-28">
            <h1 className="text-2xl font-bold mb-4">Leaderboard</h1>
            <Leaderboard data={leaderBoardData as LeaderBoardType[]} />
        </div>
    )
}