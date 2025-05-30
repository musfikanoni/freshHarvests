import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";

const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const res = await fetch("http://localhost:3000/api/auth/login", {
            method: "POST",
            body: JSON.stringify(credentials), 
            headers: { "Content-Type": "application/json" },
            
            });


        const user = await res.json();

        if (res.ok && user) {
          return user;
        }

        return null;
      },
    }),
      GoogleProvider({
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET
  }),

  

  FacebookProvider({
    clientId: process.env.FACEBOOK_CLIENT_ID,
    clientSecret: process.env.FACEBOOK_CLIENT_SECRET
  })
]


};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
