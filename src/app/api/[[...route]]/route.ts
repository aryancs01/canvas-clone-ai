import {Context, Hono} from "hono"
import {handle} from "hono/vercel"
import { AuthConfig, initAuthConfig } from "@hono/auth-js"
import { env } from 'hono/adapter'

import images from "./images"
import projects from "./projects"
import users from "./users"
import ai from "./ai"
import authConfig from "@/auth.config"
export const runtime = "nodejs";

function getAuthConfig(c:Context): AuthConfig {
    const { AUTH_SECRET } = env<{AUTH_SECRET:string}>(c)
    return {
        secret:AUTH_SECRET,
        ...authConfig
    }
}

const app = new Hono().basePath("/api")

app.use("*",initAuthConfig(getAuthConfig))

const routes = app
    .route("/images",images)
    .route("/ai",ai)
    .route("/users",users)
    .route("/projects",projects)

export const GET = handle(app);
export const POST = handle(app);
export const PATCH = handle(app);
export const DELETE = handle(app);

export type AppType = typeof routes