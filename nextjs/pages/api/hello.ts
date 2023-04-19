// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextRequest } from 'next/server'

type Data = {
  name: string
}

export const config = {
  runtime: 'experimental-edge',
}

export default function handler(
  req: NextRequest,
) {
  return new Response(
    JSON.stringify({
      name: process.env.HELLO,
    }),
    {
      status: 200,
      headers: {
        'content-type': 'application/json',
      },
    }
  )
}
