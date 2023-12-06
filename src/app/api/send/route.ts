
import { EmailTemplate } from '@/components/email-template';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
    try {
        const body = await request.json();
        console.log('body', body);
        const { name, email, message } = body;
        const data = await resend.emails.send({
            from: 'Form send <support@mainblog.space>',
            to: email,
            subject: 'The best site team',
            react: EmailTemplate({ firstName: name, message }),
        })


        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error });
    }
}
