import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type CreateOwnerInput = {
  name: Scalars['String']['input'];
};

export type CreatePetInput = {
  name: Scalars['String']['input'];
  ownerId: Scalars['Int']['input'];
  type?: InputMaybe<Scalars['String']['input']>;
};

export type LoginResponse = {
  __typename?: 'LoginResponse';
  access_token: Scalars['String']['output'];
  user: User;
};

export type LoginUserInput = {
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createOwner: Owner;
  createPet: Pet;
  login: LoginResponse;
  removeOwner: MutationResponseOutput;
  signup: User;
  updateOwner: MutationResponseOutput;
};


export type MutationCreateOwnerArgs = {
  createOwnerInput: CreateOwnerInput;
};


export type MutationCreatePetArgs = {
  createPetInput: CreatePetInput;
};


export type MutationLoginArgs = {
  loginUserInput: LoginUserInput;
};


export type MutationRemoveOwnerArgs = {
  id: Scalars['Int']['input'];
};


export type MutationSignupArgs = {
  signupUserInput: SignupUserInput;
};


export type MutationUpdateOwnerArgs = {
  updateOwnerInput: UpdateOwnerInput;
};

export type MutationResponseOutput = {
  __typename?: 'MutationResponseOutput';
  affected: Scalars['Int']['output'];
};

export type Owner = {
  __typename?: 'Owner';
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  pets?: Maybe<Array<Pet>>;
};

export type Pet = {
  __typename?: 'Pet';
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  owner: Owner;
  ownerId: Scalars['Int']['output'];
  type?: Maybe<Scalars['String']['output']>;
};

export type Query = {
  __typename?: 'Query';
  getPet: Pet;
  owner: Owner;
  owners: Array<Owner>;
  pets: Array<Pet>;
  roles: Array<Role>;
  user: User;
  users: Array<User>;
};


export type QueryGetPetArgs = {
  id: Scalars['Int']['input'];
};


export type QueryOwnerArgs = {
  id: Scalars['Int']['input'];
};


export type QueryUserArgs = {
  username: Scalars['String']['input'];
};

export type Role = {
  __typename?: 'Role';
  id: Scalars['Int']['output'];
  rolename: Scalars['String']['output'];
  users?: Maybe<Array<User>>;
};

export type SignupUserInput = {
  password: Scalars['String']['input'];
  roleId: Scalars['Float']['input'];
  username: Scalars['String']['input'];
};

export type UpdateOwnerInput = {
  id: Scalars['Int']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  id: Scalars['Int']['output'];
  password: Scalars['String']['output'];
  role: Role;
  roleId: Scalars['Int']['output'];
  username: Scalars['String']['output'];
};

export type PetsQueryVariables = Exact<{ [key: string]: never; }>;


export type PetsQuery = { __typename?: 'Query', pets: Array<{ __typename?: 'Pet', id: number, name: string, owner: { __typename?: 'Owner', name: string } }> };

export type LoginMutationVariables = Exact<{
  input: LoginUserInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'LoginResponse', access_token: string, user: { __typename?: 'User', username: string, id: number, role: { __typename?: 'Role', rolename: string } } } };

export const PetsDocument = gql`
    query Pets {
  pets {
    id
    name
    owner {
      name
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class PetsGQL extends Apollo.Query<PetsQuery, PetsQueryVariables> {
    document = PetsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const LoginDocument = gql`
    mutation login($input: LoginUserInput!) {
  login(loginUserInput: $input) {
    user {
      username
      id
      role {
        rolename
      }
    }
    access_token
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class LoginGQL extends Apollo.Mutation<LoginMutation, LoginMutationVariables> {
    document = LoginDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }