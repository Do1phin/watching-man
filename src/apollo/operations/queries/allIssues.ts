import { gql } from '@apollo/client';

const GET_ALL_ISSUES = gql`
  query allIssues {
    allIssues {
      id
      title
      description
      status
      createdAt
      point {
        lon
        lat
      }
    }
  }
`;

export { GET_ALL_ISSUES };
