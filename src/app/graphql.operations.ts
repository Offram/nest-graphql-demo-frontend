import { gql } from "apollo-angular";


const GET_OWNERS = gql`
  query GetOwners {
    owners {
      id,
      name,
      pets {
        id,
        name
      }
    }
  }
`

const GET_PETS = gql`
  query GetPets {
    pets {
      id,
      name,
      owner {
        name
      }
    }
  }
`

export { GET_OWNERS, GET_PETS }
