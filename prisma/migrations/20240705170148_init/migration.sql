-- CreateTable
CREATE TABLE "User" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "name" STRING NOT NULL,
    "email" STRING NOT NULL,
    "scores" INT4[],

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Question" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "word" STRING NOT NULL,
    "audioLink" STRING NOT NULL,
    "attempts" INT4 NOT NULL,
    "correct" INT4 NOT NULL,
    "roundId" STRING,

    CONSTRAINT "Question_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LeaderBoard" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "userId" STRING NOT NULL,
    "userName" STRING NOT NULL,
    "totalScore" INT4 NOT NULL,
    "rank" INT4 NOT NULL,

    CONSTRAINT "LeaderBoard_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_name_key" ON "User"("name");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Question_word_key" ON "Question"("word");

-- CreateIndex
CREATE UNIQUE INDEX "Question_audioLink_key" ON "Question"("audioLink");

-- CreateIndex
CREATE UNIQUE INDEX "LeaderBoard_userId_key" ON "LeaderBoard"("userId");
