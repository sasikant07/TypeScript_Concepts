interface Mailable {
    send(email: string): boolean
    queue(email: string): boolean
}

interface FutureMailable extends Mailable {
    later(email: string, after: number): boolean 
}

class Mail implements FutureMailable {
    later(email: string, after: number): boolean {
        console.log(`Send email to ${email} in ${after} ms.`);
        return true;
    }

    send(email: string): boolean {
        console.log(`Sent email to ${email}.`);
        return true;
    }

    queue(email: string): boolean {
        console.log(`Queue an email to ${email}`);
        return true;
    }
}

let sendMail = new Mail();
console.log(sendMail.send('john.doe@email.com'));
