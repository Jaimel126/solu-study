import clientPromise from "../../../lib/mongodb";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { name, email, password, whatsapp } = await request.json();

    // 1. Basic validation
    if (!name || !email || !password || !whatsapp) {
      return NextResponse.json({ error: "All fields are required." }, { status: 400 });
    }

    // 2. Connect to MongoDB
    const client = await clientPromise;
    const db = client.db("solu_db");

    // 3. Check if user already exists
    const existingUser = await db.collection("users").findOne({ email: email.toLowerCase() });
    if (existingUser) {
      return NextResponse.json({ error: "An account with this email already exists." }, { status: 400 });
    }

    // 4. Create the student record (Defaulting application progress to Quarter 1)
    const newStudent = {
      name,
      email: email.toLowerCase(),
      password, // In production, we will look into hashing this, keeping it simple for dev
      whatsapp,
      role: "student",
      currentQuarter: "Q1",
      cscaStatus: "Pending",
      createdAt: new Date(),
    };

    await db.collection("users").insertOne(newStudent);

    return NextResponse.json({ message: "Registration successful!" }, { status: 201 });

  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Internal server database error." }, { status: 500 });
  }
}