import NextAuth from "next-auth/next";
import GithubProvider from 'next-auth/providers/github'

const authOptions ={
    provider:[
        GithubProvider({
            
        })
    ]
}