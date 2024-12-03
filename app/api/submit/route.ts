import { NextResponse, NextRequest } from 'next/server';

export async function POST(req: NextRequest) {
    try {
        const formData = await req.formData();
        const name = formData.get('name') as string;
        const email = formData.get('email') as string;

        console.log('Name:', name);
        console.log('Email:', email);

        return NextResponse.json({ message: 'Form submitted successfully' }, { status: 200 });
    } catch (error) {
        console.error('Error processing form:', error);
        return NextResponse.json({ message: 'Error submitting form' }, { status: 500 });
    }
}




// import { NextApiRequest, NextApiResponse } from 'next';
// import * as yup from 'yup';


// const schema = yup.object().shape({
//   name: yup.string().min(3, 'Name must be at least 3 characters long').required(),
//   email: yup.string().email('Invalid email address').required(),
// });

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method === 'POST') {
//     try {
//       const { name, email } = req.body;
//       await schema.validate({ name, email }, { abortEarly: false });

//       // Proceed with form processing (e.g., saving to database)
//       console.log('Form submitted', { name, email });
//       return res.redirect('/form?success=true');
//     } catch (err) {
//       if (err instanceof yup.ValidationError) {
//         const nameError = err.inner.find(e => e.path === 'name')?.message || '';
//         const emailError = err.inner.find(e => e.path === 'email')?.message || '';
//         const query = new URLSearchParams({ nameError, emailError }).toString();
//         return res.redirect('/form?' + query);
//       }
//       res.status(400).end(); // Bad Request
//     }
//   } else {
//     res.status(405).end(); // Method Not Allowed
//   }
// }
