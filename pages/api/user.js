import { getSession, signOut } from 'next-auth/react';

// gets a prop from getServerSideProps
function User({ user }) {

    return (
        <div>
            <button onClick={() => signOut({ redirect: '/signin' })}>Disconnect</button>
        </div>
    );
}

export async function getServerSideProps(context) {
    const session = await getSession(context);

    // redirect if not authenticated
    if (!session) {
        return {
            redirect: {
                destination: '/signin',
                permanent: false,
            },
        };
    }

    return {
        props: { user: session.user },
    };
}

export default User;