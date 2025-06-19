import fs from "fs";
import { NextResponse } from "next/server";
import path from "path";

export async function GET() {
  const directoryPath = path.join(process.cwd(), "public", "contents");

  const files = fs.readdirSync(directoryPath);
  const fileContents = files.map((value) => {
    const filePath = path.join(process.cwd(), "public", "contents", value);

    return {
      content: fs.readFileSync(filePath, "utf8"),
    };
  });

  return NextResponse.json(fileContents);
}
