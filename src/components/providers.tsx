"use client"

import React from "react"
import QueryProviders from "./query-provider"

interface ProvidersProps {
    children: React.ReactNode
}

export const Providers = ({children}:ProvidersProps)=>{
    return (
        <QueryProviders>
            {children}
        </QueryProviders>
    )
}