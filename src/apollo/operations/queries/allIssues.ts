import { gql } from '@apollo/client'

const GET_ALL_ISSUES = gql`
query allIssues {
    allIssues {
        id
        text
        point {
            x
            y
        }
    }
}`;

export { GET_ALL_ISSUES };