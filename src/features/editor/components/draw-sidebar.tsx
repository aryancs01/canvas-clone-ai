import { cn } from "@/lib/utils"
import { ActiveTool, Editor, FILL_COLOR, STROKE_COLOR, STROKE_WIDTH } from "../types"
import { ToolSidebarHeader } from "./tool-sidebar-header"
import { ToolSidebarClose } from "./tool-sidebar-close"
import { ScrollArea } from "@/components/ui/scroll-area"
import { ColorPicker } from "./color-picker"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"

interface DrawSidebarProps {
    editor:Editor | undefined
    activeTool:ActiveTool
    onChangeActiveTool: (tool: ActiveTool) => void
}

export function DrawSidebar({
    editor,
    activeTool,
    onChangeActiveTool
}:DrawSidebarProps){
    const colorValue = editor?.getActiveStrokeColor() || STROKE_COLOR;
    const widthValue = editor?.getActiveStrokeWidth() || STROKE_WIDTH


    const onClose = ()=>{
        editor?.disableDrawingMode();
        onChangeActiveTool("select")
    }

    const onColorChange = (value: string) => {
        editor?.changeStrokeColor(value)
    }

    const onWidthChange = (value: number) => {
        editor?.changeStrokeWidth(value)
    }

    return (
        <aside
            className={cn(
                "bg-white relative border-r z-[40] w-[360px] h-full flex flex-col",
                activeTool === "draw" ? "visible":"hidden"
            )}
        >
            <ToolSidebarHeader
                title="Draw Mode"
                description="Modify brush settings"
            />
            <ScrollArea className="overflow-y-hidden">
                <div className="p-4 space-y-4 border-b">
                    <Label className="text-sm">
                        Brush Width
                    </Label>
                    <Slider
                       value={[widthValue]}
                       onValueChange={(value)=>onWidthChange(value[0])} 
                    />
                </div>
                <div className="p-4 space-y-4">
                    <ColorPicker
                        value={colorValue}
                        onChange={onColorChange}
                    />
                </div>
            </ScrollArea>
            <ToolSidebarClose onClick={onClose}/>
        </aside>
    )
}