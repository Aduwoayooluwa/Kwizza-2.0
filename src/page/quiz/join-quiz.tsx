import { Button, Input } from "@nextui-org/react"
import { onSubmitForm } from "./action"

export default function JoinQuiz({ userName}: { userName: string }) {
    return (
        <div className="user-board rounded-[20px] w-[650px] shadow-sm bg-white h-full p-6">
            <p className="font-semibold text-lg">Join Quiz</p>
            <small>Fill the required fields</small>
            <form className="mt-10" action={onSubmitForm}>
                 
                <Input defaultValue={userName} name="username" className="my-10" label="Username" readOnly  labelPlacement={"outside"} type="text"  />

                <Input label="Code" placeholder="Enter code" className="focus:ring-blue-600 focus:ring-2 focus:border-blue-600 block w-full sm:text-sm border-gray-300  rounded-md" required name="code" labelPlacement={"outside"} type="text" />

                <Button color="primary" className="mt-7">Start</Button>
            </form>
        </div>
    )
}