import { gql, useQuery } from "@apollo/client"

const GET_CHALLENGES = gql`
    query ExampleQuery {
        getAllChallenges {
            question
            answer
            options
        }
    }
`

function App() {
    const { loading, error, data } = useQuery(GET_CHALLENGES)
    console.log(error)

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error : {error.message}</p>

    console.log(data.getAllChallenges)
    return <p>qwe</p>
}

export default App
