import React from "react";
import {CreateQuestion} from "../../../components/create-question";
export default function Page() {
    return (
        <div className="bg-gray-100 w-full h-screen p-6 md:p-0 grid place-items-center">
            <CreateQuestion />
        </div>
    )
}