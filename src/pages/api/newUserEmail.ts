// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

import sgMail from '@sendgrid/mail';

type Data = {
    name: any;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    if (req.method === 'POST') {
        const data = req.body; // Access the request body
        const email = data.email;
        const mailTitle = data.mailTitle;
        const cc = data.cc;
        const bcc = data.bcc;
        const mailBody = data.mailBody;
        sgMail.setApiKey(process.env.SENDGRID_API_KEY!);
        const msg = {
            to: email, // Change to your recipient
            from: 'BFP Online Application<onlineapplication@bridgesforpeace.com>', // Change to your verified sender
            cc: cc,
            bcc: 'ronaga@bridgesforpeace.com', // delete later
            subject: mailTitle,
            html: mailBody
        };
        sgMail
            .send(msg)
            .then((e) => {
                res.status(200).json({ name: e });
            })
            .catch((error) => {
                res.status(200).json({ name: error });
            });
    } else {
        res.status(405).json({ name: 'Method Not Allowed' });
    }
}
