
/*import { NextResponse } from 'next/server'
import { dbConnect } from '@/lib/mongodb'
import fs from 'fs/promises'
import path from 'path'

export async function GET() {
  if (process.env.DATA_SOURCE === 'mongodb' && process.env.MONGODB_URI) {
    try {
      await dbConnect()
      // Example: read from a collection called services (schema-less using native driver via mongoose.connection.db)
      const docs = await (await (await import('mongoose')).default).connection.db.collection('services').find({}).toArray()
      return NextResponse.json(docs)
    } catch (e) {
      console.error(e)
    }
  }

  // Fallback to JSON file
  const file = path.join(process.cwd(), 'data', 'services.json')
  const raw = await fs.readFile(file, 'utf-8')
  return NextResponse.json(JSON.parse(raw))
}
*/