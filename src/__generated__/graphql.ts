/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
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

export type AuthPayload = {
  __typename?: 'AuthPayload';
  token: Scalars['String']['output'];
  user: User;
};

export type Cart = {
  __typename?: 'Cart';
  count: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  products: Array<Maybe<Product>>;
  taxes: Scalars['String']['output'];
  total: Scalars['String']['output'];
};

export type Catalog = {
  __typename?: 'Catalog';
  count: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  products: Array<Maybe<Product>>;
};

export type Image = {
  __typename?: 'Image';
  desktop: Scalars['String']['output'];
  mini: Scalars['String']['output'];
  mobile: Scalars['String']['output'];
  tablet: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  login: AuthPayload;
};


export type MutationLoginArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type Product = {
  __typename?: 'Product';
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  image?: Maybe<Image>;
  name: Scalars['String']['output'];
  price: Scalars['Int']['output'];
};

export type Query = {
  __typename?: 'Query';
  cart: Cart;
  catalog: Catalog;
};

export type User = {
  __typename?: 'User';
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  password: Scalars['String']['output'];
};

export type GetCatalogQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCatalogQuery = { __typename?: 'Query', catalog: { __typename?: 'Catalog', id: string, count: number, products: Array<{ __typename?: 'Product', id: string, description: string, name: string, price: number, image?: { __typename?: 'Image', desktop: string, tablet: string, mobile: string, mini: string } | null } | null> } };

export type GetCartQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCartQuery = { __typename?: 'Query', cart: { __typename?: 'Cart', id: string, taxes: string, total: string, count: number, products: Array<{ __typename?: 'Product', id: string, description: string, name: string, price: number, image?: { __typename?: 'Image', desktop: string, tablet: string, mobile: string, mini: string } | null } | null> } };


export const GetCatalogDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCatalog"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"catalog"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"products"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"desktop"}},{"kind":"Field","name":{"kind":"Name","value":"tablet"}},{"kind":"Field","name":{"kind":"Name","value":"mobile"}},{"kind":"Field","name":{"kind":"Name","value":"mini"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}}]} as unknown as DocumentNode<GetCatalogQuery, GetCatalogQueryVariables>;
export const GetCartDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCart"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cart"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"products"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"desktop"}},{"kind":"Field","name":{"kind":"Name","value":"tablet"}},{"kind":"Field","name":{"kind":"Name","value":"mobile"}},{"kind":"Field","name":{"kind":"Name","value":"mini"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"taxes"}},{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}}]} as unknown as DocumentNode<GetCartQuery, GetCartQueryVariables>;