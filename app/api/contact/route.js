// app/api/contact/route.js
import { NextResponse } from 'next/server';

export async function POST(request) {
  const ZAPIER_WEBHOOK_URL = 'https://hooks.zapier.com/hooks/catch/18518563/u3bphus/'; 

  try {
    const body = await request.json();
    
    // Validate required fields
    const requiredFields = ['name', 'email', 'phone', 'message'];
    const missingFields = requiredFields.filter(field => !body[field]);
    
    if (missingFields.length > 0) {
      return NextResponse.json(
        { error: 'Bad request', message: `Missing required fields: ${missingFields.join(', ')}` },
        { status: 400 }
      );
    }

    // Send to Zapier
    const zapierResponse = await fetch(ZAPIER_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...body,
        submission_date_iso: new Date().toISOString(),
        submission_date_readable: new Date().toLocaleString(),
      }),
    });

    if (!zapierResponse.ok) {
      const errorText = await zapierResponse.text().catch(() => 'Failed to parse error');
      throw new Error(`Zapier error: ${zapierResponse.status} - ${errorText}`);
    }

    return NextResponse.json({ success: true }, { status: 200 });

  } catch (error) {
    console.error('API Error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    
    return NextResponse.json(
      { error: 'Internal server error', message: errorMessage },
      { status: 500 }
    );
  }
}

// Optionally add other HTTP methods
export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  );
}