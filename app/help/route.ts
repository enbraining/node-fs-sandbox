import fs from "fs";
import { NextResponse } from "next/server";

export async function GET() {
  const filePath = `${process.cwd()}/public/help.md`;
  const data = fs.readFileSync(filePath, "utf8");

  return new NextResponse(data);
}
