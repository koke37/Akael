
/*import { NextResponse } from 'next/server'
import { dbConnect } from '@/lib/mongodb'
import fs from 'fs/promises'
import path from 'path'

export async function GET() {
  if (process.env.DATA_SOURCE === 'mongodb' && process.env.MONGODB_URI) {
    try {
      await dbConnect()
      const docs = await (await (await import('mongoose')).default).connection.db.collection('projects').find({}).toArray()
      return NextResponse.json(docs)
    } catch (e) { console.error(e) }
  }
  const file = path.join(process.cwd(), 'data', 'projects.json')
  const raw = await fs.readFile(file, 'utf-8')
  return NextResponse.json(JSON.parse(raw))
}*/
