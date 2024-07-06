import { createQuestion } from "@/app/actions"
import { Button, Input } from "@nextui-org/react"
import React from "react"


export const CreateQuestion = () => {
    
    return <form action={createQuestion} className="w-full md:w-[400px] bg-white rounded shadow-md lg:w-[600px] p-6 space-y-10">
        <p className="font-semibold text-lg">Create Question</p>
        <Input
            label="Enter Answer"
            labelPlacement={"outside"}
            name="question"
            className="placeholder:text-xs"
        />

        <Input
            label="Enter Audio Link"
            labelPlacement={"outside"}
            name="audioLink"
        />
        <Button className="w-full" type="submit" color="primary">Create</Button>
    </form>
}