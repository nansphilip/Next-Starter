"use server";

import EmailTemplate from "@comps/server/Email";
import Plunk from "@plunk/node";
import { render } from "@react-email/render";

const plunk = new Plunk(process.env.PLUNK_API_KEY as string);

type SendEmailProps = {
    email: string;
    url: string;
};

export const SendEmail = async (props: SendEmailProps) => {
    try {
        const { email, url } = props;

        const body = await render(EmailTemplate({buttonUrl: url}), { pretty: true });

        const success = await plunk.emails.send({
            to: email,
            subject: "Welcome! Let's verify your email.",
            body,
        });

        return success;
    } catch (error) {
        throw new Error("Unable to send email -> " + (error as Error).message);
    }
}
