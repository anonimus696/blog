
import { EmailTemplate } from '@/components/email-template';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { CreateEmailResponse } from 'resend/build/src/emails/interfaces';

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
        }) as CreateEmailResponse;

        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error });
    }
}
