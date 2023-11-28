
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { connect } from "@/utils/db";
import bcrypt from 'bcryptjs';
import User from "@/models/User";

const handler = NextAuth({
    // Configure one or more authentication providers
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            authorization: {
                params: {
                    prompt: "consent",
                    access_type: "offline",
                    response_type: "code"
                }
            }
        }),

        CredentialsProvider({
            id: 'credentials',
            name: 'credentials',
            async authorize(credentials) {

                await connect()

                try {
                    const user = await User.findOne({ email: credentials.email })


                    if (user) {
                        const isPassworCorrect = await bcrypt.compare(
                            credentials.password,
                            user.password
                        );

                        if (isPassworCorrect) {
                            return user;
                        } else {
                            throw new Error('Wrong credentials')
                        }

                    } else {
                        throw new Error('User not found')
                    }

                } catch (err) {
                    throw new Error(err)
                }
            }
        }),
    ],
    callbacks: {
        async jwt({ token, user, session }) {
            // console.log('async jwt', { token, user, session });
            if (user) {
                return {
                    ...token,
                    id: user.id,
                };
            }
            return token;
        },
        async session({ session, token, user }) {
            // console.log('async session', { session, token, user });
            if (token) {
                return {
                    ...session,
                    user: {
                        ...session.user,
                        id: token.id,
                    }
                };
            }
            return session;
        }
    },
    pages: {
        error: "/dashboard/login"
    },

})

export { handler as GET, handler as POST }
