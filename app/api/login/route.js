import clientPromise from "lib/mongodb";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json({ error: "Email and password are required." }, { status: 400 });
    }

    // Connect to MongoDB Atlas
    const client = await clientPromise;
    const db = client.db("solu_db");

    // Find the user by email
    const user = await db.collection("users").findOne({ email: email.toLowerCase() });

    if (!user) {
      return NextResponse.json({ error: "Invalid email or password." }, { status: 401 });
    }

    // Verify password (keeping it simple for our current dev setup)
    if (user.password !== password) {
      return NextResponse.json({ error: "Invalid email or password." }, { status: 401 });
    }

    // Login successful - return user profile data (excl. password for security)
    return NextResponse.json({
      message: "Login successful",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        currentQuarter: user.currentQuarter || "Q1",
        cscaStatus: user.cscaStatus || "Pending"
      }
    }, { status: 200 });

  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Internal server database error." }, { status: 500 });
  }
}