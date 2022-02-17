import {gql} from '@apollo/client'


export const CATEGORIES = gql`
query FetchCategories {
    categories {
        name
    }
}
`
