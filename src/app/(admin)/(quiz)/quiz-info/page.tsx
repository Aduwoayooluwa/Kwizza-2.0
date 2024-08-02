import { Input, Textarea, Button } from "@nextui-org/react"

export default function SetupInfo({ children }: {
    children: React.ReactNode
}) {
    const onSave = async (formData: FormData) => {
        "use server"
    }

    return (
        <div className="w-full bg-white rounded drop-shadow-sm p-8 min-h-96">
            <section className="space-y-8">
                {/* basic setting */}
                <p className="text-xs font-medium">BASIC SETTINGS</p>

                <form className="space-y-6" action={onSave}>
                    <Input color="default" variant="underlined" name={'quiz_name'} className="w-full" label={"Quiz Title"} labelPlacement="inside" />
                    <Textarea color="default"  variant="underlined" label="Description" labelPlacement="inside" aria-label="description" className="w-full"/>

                    <Button color="primary" type="submit">Save</Button>
                </form>
            </section>

        </div>
    )
}