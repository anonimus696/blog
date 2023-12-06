
export const EmailTemplate = ({ firstName, message }) => (
    <div>
        <h2>Welcome, {firstName}!</h2>
        <p>Thank you for sending a message</p>
        <p>Your message: {message}</p>
    </div>
);

