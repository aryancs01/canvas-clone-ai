import { Logo } from "./logo";
import { SidebarRoutes } from "./sidebar-routes";

export function Sidebar() {
    return (
        <aside className="invisible lg:visible lg:flex fixed flex-col w-[300px] left-0 shrink-0 h-full">
            <Logo/>
            <SidebarRoutes/>
        </aside>
    )
}