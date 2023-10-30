import { gql, useQuery } from "@apollo/client"

const GET_CHALLENGES = gql`
    query getAllChallenges {
        question
        answer
        options
    }
`

function App() {
    const { loading, error, data } = useQuery(GET_CHALLENGES)
    console.log(data, "====")
    console.log(error);

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error : {error.message}</p>

    return <div>qwewe</div>
}

export default App
