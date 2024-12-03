/* eslint-disable */
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
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any; }
};

export type Auth = {
  __typename?: 'Auth';
  /** Session access token */
  accessToken: Scalars['String']['output'];
  /** User logged in */
  user: User;
};

export type CreateUserInput = {
  /** User document */
  document: Scalars['String']['input'];
  /** Type of the document */
  documentType: DocumentType;
  /** User email */
  email: Scalars['String']['input'];
  /** Group the user belongs to */
  groupId?: InputMaybe<Scalars['ID']['input']>;
  /** User name */
  name: Scalars['String']['input'];
  /** User password */
  password: Scalars['String']['input'];
  /** Referrer code */
  reffererCode: Scalars['String']['input'];
  /** User surname */
  surname: Scalars['String']['input'];
};

export enum DocumentType {
  Cnpj = 'CNPJ',
  Cpf = 'CPF',
  Rg = 'RG'
}

export type Group = {
  __typename?: 'Group';
  /** Date of creation */
  createdAt: Scalars['DateTime']['output'];
  /** Group description */
  description?: Maybe<Scalars['String']['output']>;
  /** Unique identifier */
  id: Scalars['ID']['output'];
  /** Group name */
  name: Scalars['String']['output'];
  /** Date of last update */
  updatedAt: Scalars['DateTime']['output'];
  /** Users in the group */
  users: Array<User>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createUser: User;
  deleteUser: User;
  signIn: Auth;
  updateUser: User;
};


export type MutationCreateUserArgs = {
  createUserInput: CreateUserInput;
};


export type MutationDeleteUserArgs = {
  id: Scalars['String']['input'];
};


export type MutationSignInArgs = {
  signInInput: SignInInput;
};


export type MutationUpdateUserArgs = {
  updateUserInput: UpdateUserInput;
};

export type Query = {
  __typename?: 'Query';
  getCurrentUser: User;
  getUser: User;
  getUserByEmail: User;
  getUsers: Array<User>;
};


export type QueryGetUserArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetUserByEmailArgs = {
  email: Scalars['String']['input'];
};

export type SignInInput = {
  /** User e-mail */
  email: Scalars['String']['input'];
  /** User password */
  normalizedPassword: Scalars['String']['input'];
};

export type UpdateUserInput = {
  /** User document */
  document?: InputMaybe<Scalars['String']['input']>;
  /** Type of the document */
  documentType?: InputMaybe<DocumentType>;
  /** User email */
  email?: InputMaybe<Scalars['String']['input']>;
  /** Group the user belongs to */
  groupId?: InputMaybe<Scalars['ID']['input']>;
  /** User name */
  id: Scalars['ID']['input'];
  /** User name */
  name?: InputMaybe<Scalars['String']['input']>;
  /** User password */
  password?: InputMaybe<Scalars['String']['input']>;
  /** Referrer code */
  reffererCode?: InputMaybe<Scalars['String']['input']>;
  /** User surname */
  surname?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  /** Date of creation */
  createdAt: Scalars['DateTime']['output'];
  /** User document */
  document: Scalars['String']['output'];
  /** Type of the document */
  documentType: DocumentType;
  /** User email */
  email: Scalars['String']['output'];
  /** Group the user belongs to */
  group?: Maybe<Group>;
  /** Unique identifier */
  id: Scalars['ID']['output'];
  /** User name */
  name: Scalars['String']['output'];
  /** User password */
  password: Scalars['String']['output'];
  /** Referrer code */
  reffererCode: Scalars['String']['output'];
  /** User surname */
  surname: Scalars['String']['output'];
  /** Date of last update */
  updatedAt: Scalars['DateTime']['output'];
};
