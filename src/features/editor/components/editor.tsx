"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { useEditor } from "../hooks/use-editor"
import { fabric } from "fabric"
import { Navbar } from "./navbar"
import { Sidebar } from "./sidebar"
import { Toolbar } from "./toolbar"
import { Footer } from "./footer"
import { ActiveTool } from "../types"
import { ShapeSidebar } from "./shapesidebar"

export function Editor(){
    const [activeTool, setActiveTool] = useState<ActiveTool>("select");
    const onChangeActiveTool = useCallback((tool:ActiveTool)=>{
        if(tool === activeTool){
            return setActiveTool("select")
        }

        if(tool === "draw"){

        }

        if(activeTool === "draw"){

        }

        setActiveTool(tool)
    },[activeTool])

    const { init,editor } = useEditor()
    const canvasRef = useRef(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(()=>{
        const canvas = new fabric.Canvas(
            canvasRef.current,
            {
                controlsAboveOverlay:true,
                preserveObjectStacking:true
            }
        );

        init({
            initialCanvas:canvas,
            initialContainer:containerRef.current!
        })

        return () => {
            canvas.dispose()
        }
    },[init])

    return (
        <div className="h-full flex flex-col">
            <Navbar
                 activeTool={activeTool}
                onChangeActiveTool={onChangeActiveTool}
            />
            <div className="absolute h-[calc(100%-68px)] w-full top-[68px] flex">
                <Sidebar
                    activeTool={activeTool}
                    onChangeActiveTool={onChangeActiveTool}
                />
                <ShapeSidebar
                    editor={editor}
                    activeTool={activeTool}
                    onChangeActiveTool={onChangeActiveTool}
                />
                <main className="bg-muted flex-1 overflow-auto relative flex flex-col">
                    <Toolbar/>
                    <div className="flex-1 h-[calc(100%-124px)] bg-muted" ref={containerRef}>
                        <canvas ref={canvasRef }/>
                    </div>
                    <Footer/>
                </main>
            </div>
        </div>
    )
}