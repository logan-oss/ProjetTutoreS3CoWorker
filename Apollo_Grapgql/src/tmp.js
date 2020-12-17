#Description of a CoWorking space
type CoWorking {
  id: ID!
  name: String!
  address: String!
  owner: Lessor!
  #officeType: OfficeType!
}

type Service {
  id: ID!
  name: String!
  description: String!
  duree: Double!
  price: Float!
  postType: String!
  owner: Pro!
}

type Post {
  id: ID!
  officeType: String!
}

enum Gender {
  Mr
  Ms
}
