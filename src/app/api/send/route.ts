
import { EmailTemplate } from '../../../components/email-template';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
    try {
        const body = await request.json();
        console.log('body', body);
        const { name, email, message } = body;
        const data = await resend.emails.send({
            from: 'Acme <onboarding@resend.dev>',
            to: email,
            subject: 'This is Victor',
            react: EmailTemplate({ firstName: name }),
        });

        if (data.status === 'success') {
            return NextResponse.json({ message: 'email sent successfully' })
        }
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error });
    }
}
