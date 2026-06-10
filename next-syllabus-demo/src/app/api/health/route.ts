import { NextResponse } from "next/server"
import { getEnv } from "@/lib/env"

// Route Handler GET — Topic 15
export async function GET() {
  const env = getEnv()

  return NextResponse.json({
    status: "ok",
    app: env.appName,
    environment: env.nodeEnv,
    timestamp: new Date().toISOString(),
  })
}
