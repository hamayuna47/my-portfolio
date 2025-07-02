import { MongoClient } from 'mongodb'
import { NextResponse } from 'next/server'

const uri = process.env.MONGODB_URI as string
const dbName = process.env.MONGODB_DB as string
const client = new MongoClient(uri)

export async function POST(request: Request) {
  if (request.method !== 'POST') {
    return NextResponse.json({ message: 'Method Not Allowed' }, { status: 405 })
  }

  try {
    const data = await request.json()

    // Input validation
    if (!data.fullName || !data.email) {
      return NextResponse.json({ message: 'Missing required fields' }, { status: 400 })
    }

    // Limit the number of connections reused (best for serverless)
    if (!client.topology?.isConnected()) {
      await client.connect()
    }

    const db = client.db(dbName)
    const collection = db.collection('contacts')

    await collection.insertOne({
      ...data,
      createdAt: new Date()
    })

    return NextResponse.json({ message: 'Success' }, { status: 200 })
  } catch (err) {
    console.error('MongoDB Insertion Error:', err)
    return NextResponse.json({ message: 'Failed' }, { status: 500 })
  }
}
