import TimePicker from '@/components/ui/time-picker'
import { Button, RadioGroup, Radio } from '@nextui-org/react'
import React from 'react'

const page = () => {
    return (
        <div className="container mx-auto p-4">
            <div className="bg-white shadow rounded-lg p-8 space-y-8">
                <h1 className="text-xs font-medium">TEST DURATION</h1>
                <form action="" method="post" className="space-y-6">

                    <RadioGroup
                        label="Select test duration measuring method:"
                    >
                        <Radio value="complete-test">
                            <TimePicker label="Time to complete the test (hh:mm):" name="time-to-complete" />
                        </Radio>

                        <Radio value="each-question" >
                            <TimePicker label="Time to complete the test (hh:mm):" name="time-to-complete" />
                        </Radio>
                    </RadioGroup>

                    <Button color="primary" type="submit">Save</Button>
                </form>
            </div>
        </div>
    )
}

export default page