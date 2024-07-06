"use server"

import { prisma } from "@/utils/global";

export const getAllQuestions = async (formData: FormData) => {
    const response = await prisma.question.findMany();
    console.log(response)
}

export async function getLeaderboard() {
    try {
        const leaderboardEntries = await prisma.leaderBoard.findMany({
            orderBy: {
                totalScore: 'desc',
            },
        });

        const leaderboardWithRank = leaderboardEntries.map((entry, index) => ({
            ...entry,
            rank: index + 1,
        }));

        return leaderboardWithRank;
    } catch (error) {
        console.error('Error fetching leaderboard:', error);
        // throw new Error('Failed to fetch leaderboard');
    }
}


export const createQuestion = async (formData: FormData) => {
    const question = formData.get("question") as string
    const audioLink = formData.get("audioLink") as string

    const createQuestionData = {
        word: question, audioLink
    }
    console.log(createQuestionData)

    await prisma.question.create({
        data: createQuestionData
    })

    console.log(createQuestionData)

}