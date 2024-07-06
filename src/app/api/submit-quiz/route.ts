import { prisma } from "@/utils/global";
import { Prisma } from "@prisma/client";

export async function POST(request: Request) {
    try {
        // Parse and validate the request body
        const { totalScore, userName, userId }: {
            totalScore: number;
            userName: string;
            userId: string;
        } = await request.json();

        if (typeof totalScore !== 'number' || typeof userName !== 'string' || typeof userId !== 'string') {
            return new Response(JSON.stringify({ error: 'Invalid input data' }), { status: 400 });
        }

        // Create the leaderboard entry
        const userQuizData = await prisma.leaderBoard.create({
            data: {
                rank: 1,
                totalScore,
                userName,
                userId,
            }
        });

        // Return a successful response
        return new Response(JSON.stringify(userQuizData), { status: 201 });
    } catch (error) {
        // Log the error (for debugging purposes)
        console.error('Error creating leaderboard entry:', error);

        // Handle different types of errors and respond appropriately
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
            // Handle known Prisma errors
            return new Response(JSON.stringify({ error: 'Database error occurred' }), { status: 500 });
        } else if (error instanceof SyntaxError) {
            // Handle JSON parsing errors
            return new Response(JSON.stringify({ error: 'Invalid JSON' }), { status: 400 });
        } else {
            // Handle all other errors
            return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
        }
    }
}
