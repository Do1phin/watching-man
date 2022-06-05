import { gql } from '@apollo/client';

const ADD_ISSUE = gql`
  mutation addIssue($data: IssueInput!) {
    addIssue(data: $data) {
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

export { ADD_ISSUE };
