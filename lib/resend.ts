"use server";

import { ErrorResponse, Resend } from "resend";

const resendAPI = new Resend(process.env.RESEND_API_KEY as string);
const domainName = process.env.RESEND_DOMAIN_URL as string;
const emailSender = process.env.RESEND_EMAIL_SENDER as string;

export async function SendEmail({ email, subject, body }: { email: string; subject: string; body: string }) {
    try {
        const replaceDomain = (mail: string): string => {
            if (mail.includes("{domain.com}")) {
                const newBody = mail.replace("{domain.com}", domainName);
                return replaceDomain(newBody);
            }
            return mail;
        };

        const bodyEmail = replaceDomain(body);

        const { data } = await resendAPI.emails.send({
            from: emailSender,
            to: email,
            subject: subject,
            html: bodyEmail,
        });

        return data;
    } catch (error) {
        throw new Error("Unable to send email -> " + (error as ErrorResponse).message);
    }
}
