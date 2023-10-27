import { ApolloServer } from "@apollo/server"
import { startStandaloneServer } from "@apollo/server/standalone"
import { readFileSync } from "fs"

const typeDefs = readFileSync("./schema.graphql", { encoding: "utf-8" })

const challenges = [
    {
        id: "1",
        question: "Capital of Russia",
        answer: "Moscow",
        options: ["Beijing", "Moscow", "Manila"],
    },
    {
        id: "2",
        question: "Who is the author of 'Pride and Prejudice'?",
        answer: "Jane Austen",
        options: ["Emily Bronte", "Jane Austen", "Charles Dickens"],
    },
    {
        id: "3",
        question: "What is the capital of Australia?",
        answer: "Canberra",
        options: ["Sydney", "Melbourne", "Canberra"],
    },
    {
        id: "4",
        question: "Who painted the Mona Lisa?",
        answer: "Leonardo da Vinci",
        options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci"],
    },
]

const resolvers = {
    Query: {
        getAllChallenges: () => challenges,
        getChallenge: (_, { id }) => {
            // Find the challenge with the specified ID
            const challenge = challenges.find(challenge => challenge.id === id)

            if (!challenge) {
                throw new Error(`Challenge with ID ${id} not found`)
            }

            return challenge
        },
    },
}

const server = new ApolloServer({
    typeDefs,
    resolvers,
})

const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
})

console.log(`Running at: ${url}`)
