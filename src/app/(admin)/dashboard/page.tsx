import { Sidebar } from "@/layout/sidebar";
import Dashboard from "@/page/dashbaord";

export default function page() {
    return (
        <Sidebar>
            <Dashboard />
        </Sidebar>
    )
}