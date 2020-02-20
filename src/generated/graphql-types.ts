import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHoc from '@apollo/react-hoc';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  timestamptz: any,
};

/** expression to compare columns of type Boolean. All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: Maybe<Scalars['Boolean']>,
  _gt?: Maybe<Scalars['Boolean']>,
  _gte?: Maybe<Scalars['Boolean']>,
  _in?: Maybe<Array<Scalars['Boolean']>>,
  _is_null?: Maybe<Scalars['Boolean']>,
  _lt?: Maybe<Scalars['Boolean']>,
  _lte?: Maybe<Scalars['Boolean']>,
  _neq?: Maybe<Scalars['Boolean']>,
  _nin?: Maybe<Array<Scalars['Boolean']>>,
};

/** expression to compare columns of type Int. All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: Maybe<Scalars['Int']>,
  _gt?: Maybe<Scalars['Int']>,
  _gte?: Maybe<Scalars['Int']>,
  _in?: Maybe<Array<Scalars['Int']>>,
  _is_null?: Maybe<Scalars['Boolean']>,
  _lt?: Maybe<Scalars['Int']>,
  _lte?: Maybe<Scalars['Int']>,
  _neq?: Maybe<Scalars['Int']>,
  _nin?: Maybe<Array<Scalars['Int']>>,
};

/** mutation root */
export type Mutation_Root = {
   __typename?: 'mutation_root',
  /** delete data from the table: "todos" */
  delete_todos?: Maybe<Todos_Mutation_Response>,
  /** insert data into the table: "todos" */
  insert_todos?: Maybe<Todos_Mutation_Response>,
  /** update data of the table: "todos" */
  update_todos?: Maybe<Todos_Mutation_Response>,
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>,
};


/** mutation root */
export type Mutation_RootDelete_TodosArgs = {
  where: Todos_Bool_Exp
};


/** mutation root */
export type Mutation_RootInsert_TodosArgs = {
  objects: Array<Todos_Insert_Input>,
  on_conflict?: Maybe<Todos_On_Conflict>
};


/** mutation root */
export type Mutation_RootUpdate_TodosArgs = {
  _set?: Maybe<Todos_Set_Input>,
  where: Todos_Bool_Exp
};


/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _set?: Maybe<Users_Set_Input>,
  where: Users_Bool_Exp
};

/** columns and relationships of "online_users" */
export type Online_Users = {
   __typename?: 'online_users',
  id?: Maybe<Scalars['String']>,
  last_seen?: Maybe<Scalars['timestamptz']>,
  /** An object relationship */
  user?: Maybe<Users>,
};

/** Boolean expression to filter rows from the table "online_users". All fields are combined with a logical 'AND'. */
export type Online_Users_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Online_Users_Bool_Exp>>>,
  _not?: Maybe<Online_Users_Bool_Exp>,
  _or?: Maybe<Array<Maybe<Online_Users_Bool_Exp>>>,
  id?: Maybe<String_Comparison_Exp>,
  last_seen?: Maybe<Timestamptz_Comparison_Exp>,
  user?: Maybe<Users_Bool_Exp>,
};

/** ordering options when selecting data from "online_users" */
export type Online_Users_Order_By = {
  id?: Maybe<Order_By>,
  last_seen?: Maybe<Order_By>,
  user?: Maybe<Users_Order_By>,
};

/** select columns of table "online_users" */
export enum Online_Users_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  LastSeen = 'last_seen'
}

/** column ordering options */
export enum Order_By {
  /** in the ascending order, nulls last */
  Asc = 'asc',
  /** in the ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in the ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in the descending order, nulls first */
  Desc = 'desc',
  /** in the descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in the descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** query root */
export type Query_Root = {
   __typename?: 'query_root',
  /** fetch data from the table: "online_users" */
  online_users: Array<Online_Users>,
  /** fetch data from the table: "todos" */
  todos: Array<Todos>,
  /** fetch data from the table: "todos" using primary key columns */
  todos_by_pk?: Maybe<Todos>,
  /** fetch data from the table: "users" */
  users: Array<Users>,
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>,
};


/** query root */
export type Query_RootOnline_UsersArgs = {
  distinct_on?: Maybe<Array<Online_Users_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Online_Users_Order_By>>,
  where?: Maybe<Online_Users_Bool_Exp>
};


/** query root */
export type Query_RootTodosArgs = {
  distinct_on?: Maybe<Array<Todos_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Todos_Order_By>>,
  where?: Maybe<Todos_Bool_Exp>
};


/** query root */
export type Query_RootTodos_By_PkArgs = {
  id: Scalars['Int']
};


/** query root */
export type Query_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Users_Order_By>>,
  where?: Maybe<Users_Bool_Exp>
};


/** query root */
export type Query_RootUsers_By_PkArgs = {
  id: Scalars['String']
};

/** expression to compare columns of type String. All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>,
  _gt?: Maybe<Scalars['String']>,
  _gte?: Maybe<Scalars['String']>,
  _ilike?: Maybe<Scalars['String']>,
  _in?: Maybe<Array<Scalars['String']>>,
  _is_null?: Maybe<Scalars['Boolean']>,
  _like?: Maybe<Scalars['String']>,
  _lt?: Maybe<Scalars['String']>,
  _lte?: Maybe<Scalars['String']>,
  _neq?: Maybe<Scalars['String']>,
  _nilike?: Maybe<Scalars['String']>,
  _nin?: Maybe<Array<Scalars['String']>>,
  _nlike?: Maybe<Scalars['String']>,
  _nsimilar?: Maybe<Scalars['String']>,
  _similar?: Maybe<Scalars['String']>,
};

/** subscription root */
export type Subscription_Root = {
   __typename?: 'subscription_root',
  /** fetch data from the table: "online_users" */
  online_users: Array<Online_Users>,
  /** fetch data from the table: "todos" */
  todos: Array<Todos>,
  /** fetch data from the table: "todos" using primary key columns */
  todos_by_pk?: Maybe<Todos>,
  /** fetch data from the table: "users" */
  users: Array<Users>,
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>,
};


/** subscription root */
export type Subscription_RootOnline_UsersArgs = {
  distinct_on?: Maybe<Array<Online_Users_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Online_Users_Order_By>>,
  where?: Maybe<Online_Users_Bool_Exp>
};


/** subscription root */
export type Subscription_RootTodosArgs = {
  distinct_on?: Maybe<Array<Todos_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Todos_Order_By>>,
  where?: Maybe<Todos_Bool_Exp>
};


/** subscription root */
export type Subscription_RootTodos_By_PkArgs = {
  id: Scalars['Int']
};


/** subscription root */
export type Subscription_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Users_Order_By>>,
  where?: Maybe<Users_Bool_Exp>
};


/** subscription root */
export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars['String']
};


/** expression to compare columns of type timestamptz. All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamptz']>,
  _gt?: Maybe<Scalars['timestamptz']>,
  _gte?: Maybe<Scalars['timestamptz']>,
  _in?: Maybe<Array<Scalars['timestamptz']>>,
  _is_null?: Maybe<Scalars['Boolean']>,
  _lt?: Maybe<Scalars['timestamptz']>,
  _lte?: Maybe<Scalars['timestamptz']>,
  _neq?: Maybe<Scalars['timestamptz']>,
  _nin?: Maybe<Array<Scalars['timestamptz']>>,
};

/** columns and relationships of "todos" */
export type Todos = {
   __typename?: 'todos',
  created_at: Scalars['timestamptz'],
  id: Scalars['Int'],
  is_completed: Scalars['Boolean'],
  is_public: Scalars['Boolean'],
  title: Scalars['String'],
  /** An object relationship */
  user: Users,
  user_id: Scalars['String'],
};

/** input type for inserting array relation for remote table "todos" */
export type Todos_Arr_Rel_Insert_Input = {
  data: Array<Todos_Insert_Input>,
  on_conflict?: Maybe<Todos_On_Conflict>,
};

/** Boolean expression to filter rows from the table "todos". All fields are combined with a logical 'AND'. */
export type Todos_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Todos_Bool_Exp>>>,
  _not?: Maybe<Todos_Bool_Exp>,
  _or?: Maybe<Array<Maybe<Todos_Bool_Exp>>>,
  created_at?: Maybe<Timestamptz_Comparison_Exp>,
  id?: Maybe<Int_Comparison_Exp>,
  is_completed?: Maybe<Boolean_Comparison_Exp>,
  is_public?: Maybe<Boolean_Comparison_Exp>,
  title?: Maybe<String_Comparison_Exp>,
  user?: Maybe<Users_Bool_Exp>,
  user_id?: Maybe<String_Comparison_Exp>,
};

/** unique or primary key constraints on table "todos" */
export enum Todos_Constraint {
  /** unique or primary key constraint */
  TodosPkey = 'todos_pkey'
}

/** input type for inserting data into table "todos" */
export type Todos_Insert_Input = {
  is_public?: Maybe<Scalars['Boolean']>,
  title?: Maybe<Scalars['String']>,
};

/** response of any mutation on the table "todos" */
export type Todos_Mutation_Response = {
   __typename?: 'todos_mutation_response',
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'],
  /** data of the affected rows by the mutation */
  returning: Array<Todos>,
};

/** input type for inserting object relation for remote table "todos" */
export type Todos_Obj_Rel_Insert_Input = {
  data: Todos_Insert_Input,
  on_conflict?: Maybe<Todos_On_Conflict>,
};

/** on conflict condition type for table "todos" */
export type Todos_On_Conflict = {
  constraint: Todos_Constraint,
  update_columns: Array<Todos_Update_Column>,
  where?: Maybe<Todos_Bool_Exp>,
};

/** ordering options when selecting data from "todos" */
export type Todos_Order_By = {
  created_at?: Maybe<Order_By>,
  id?: Maybe<Order_By>,
  is_completed?: Maybe<Order_By>,
  is_public?: Maybe<Order_By>,
  title?: Maybe<Order_By>,
  user?: Maybe<Users_Order_By>,
  user_id?: Maybe<Order_By>,
};

/** select columns of table "todos" */
export enum Todos_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  IsCompleted = 'is_completed',
  /** column name */
  IsPublic = 'is_public',
  /** column name */
  Title = 'title',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "todos" */
export type Todos_Set_Input = {
  is_completed?: Maybe<Scalars['Boolean']>,
  title?: Maybe<Scalars['String']>,
};

/** update columns of table "todos" */
export enum Todos_Update_Column {
  /** column name */
  IsCompleted = 'is_completed',
  /** column name */
  Title = 'title'
}

/** columns and relationships of "users" */
export type Users = {
   __typename?: 'users',
  id: Scalars['String'],
  name: Scalars['String'],
  /** An array relationship */
  todos: Array<Todos>,
};


/** columns and relationships of "users" */
export type UsersTodosArgs = {
  distinct_on?: Maybe<Array<Todos_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Todos_Order_By>>,
  where?: Maybe<Todos_Bool_Exp>
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Users_Bool_Exp>>>,
  _not?: Maybe<Users_Bool_Exp>,
  _or?: Maybe<Array<Maybe<Users_Bool_Exp>>>,
  id?: Maybe<String_Comparison_Exp>,
  name?: Maybe<String_Comparison_Exp>,
  todos?: Maybe<Todos_Bool_Exp>,
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint */
  UsersPkey = 'users_pkey'
}

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
   __typename?: 'users_mutation_response',
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'],
  /** data of the affected rows by the mutation */
  returning: Array<Users>,
};

/** on conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint,
  update_columns: Array<Users_Update_Column>,
  where?: Maybe<Users_Bool_Exp>,
};

/** ordering options when selecting data from "users" */
export type Users_Order_By = {
  id?: Maybe<Order_By>,
  name?: Maybe<Order_By>,
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  last_seen?: Maybe<Scalars['timestamptz']>,
};

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  LastSeen = 'last_seen'
}

export type UpdateLastSeenMutationVariables = {
  now?: Maybe<Scalars['timestamptz']>
};


export type UpdateLastSeenMutation = (
  { __typename?: 'mutation_root' }
  & { update_users: Maybe<(
    { __typename?: 'users_mutation_response' }
    & Pick<Users_Mutation_Response, 'affected_rows'>
  )> }
);

export type GetOnlineUsersSubscriptionVariables = {};


export type GetOnlineUsersSubscription = (
  { __typename?: 'subscription_root' }
  & { online_users: Array<(
    { __typename?: 'online_users' }
    & Pick<Online_Users, 'id'>
    & { user: Maybe<(
      { __typename?: 'users' }
      & Pick<Users, 'name'>
    )> }
  )> }
);

export type Insert_TodosMutationVariables = {
  todo: Scalars['String'],
  isPublic: Scalars['Boolean']
};


export type Insert_TodosMutation = (
  { __typename?: 'mutation_root' }
  & { insert_todos: Maybe<(
    { __typename?: 'todos_mutation_response' }
    & Pick<Todos_Mutation_Response, 'affected_rows'>
    & { returning: Array<(
      { __typename?: 'todos' }
      & Pick<Todos, 'id' | 'title' | 'is_completed'>
    )> }
  )> }
);

export type ToggleTodoMutationVariables = {
  id: Scalars['Int'],
  isCompleted: Scalars['Boolean']
};


export type ToggleTodoMutation = (
  { __typename?: 'mutation_root' }
  & { update_todos: Maybe<(
    { __typename?: 'todos_mutation_response' }
    & Pick<Todos_Mutation_Response, 'affected_rows'>
    & { returning: Array<(
      { __typename?: 'todos' }
      & Pick<Todos, 'id' | 'title' | 'is_completed'>
    )> }
  )> }
);

export type RemoveTodoMutationVariables = {
  id: Scalars['Int']
};


export type RemoveTodoMutation = (
  { __typename?: 'mutation_root' }
  & { delete_todos: Maybe<(
    { __typename?: 'todos_mutation_response' }
    & Pick<Todos_Mutation_Response, 'affected_rows'>
  )> }
);

export type GetMyTodosQueryVariables = {};


export type GetMyTodosQuery = (
  { __typename?: 'query_root' }
  & { todos: Array<(
    { __typename?: 'todos' }
    & Pick<Todos, 'id' | 'title' | 'is_completed'>
  )> }
);

export type ClearCompletedMutationVariables = {};


export type ClearCompletedMutation = (
  { __typename?: 'mutation_root' }
  & { delete_todos: Maybe<(
    { __typename?: 'todos_mutation_response' }
    & Pick<Todos_Mutation_Response, 'affected_rows'>
  )> }
);


export const UpdateLastSeenDocument = gql`
    mutation updateLastSeen($now: timestamptz) {
  update_users(where: {}, _set: {last_seen: $now}) {
    affected_rows
  }
}
    `;
export type UpdateLastSeenMutationFn = ApolloReactCommon.MutationFunction<UpdateLastSeenMutation, UpdateLastSeenMutationVariables>;
export type UpdateLastSeenProps<TChildProps = {}> = ApolloReactHoc.MutateProps<UpdateLastSeenMutation, UpdateLastSeenMutationVariables> & TChildProps;
export function withUpdateLastSeen<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  UpdateLastSeenMutation,
  UpdateLastSeenMutationVariables,
  UpdateLastSeenProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, UpdateLastSeenMutation, UpdateLastSeenMutationVariables, UpdateLastSeenProps<TChildProps>>(UpdateLastSeenDocument, {
      alias: 'updateLastSeen',
      ...operationOptions
    });
};

/**
 * __useUpdateLastSeenMutation__
 *
 * To run a mutation, you first call `useUpdateLastSeenMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateLastSeenMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateLastSeenMutation, { data, loading, error }] = useUpdateLastSeenMutation({
 *   variables: {
 *      now: // value for 'now'
 *   },
 * });
 */
export function useUpdateLastSeenMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateLastSeenMutation, UpdateLastSeenMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateLastSeenMutation, UpdateLastSeenMutationVariables>(UpdateLastSeenDocument, baseOptions);
      }
export type UpdateLastSeenMutationHookResult = ReturnType<typeof useUpdateLastSeenMutation>;
export type UpdateLastSeenMutationResult = ApolloReactCommon.MutationResult<UpdateLastSeenMutation>;
export type UpdateLastSeenMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateLastSeenMutation, UpdateLastSeenMutationVariables>;
export const GetOnlineUsersDocument = gql`
    subscription getOnlineUsers {
  online_users(order_by: {user: {name: asc}}) {
    id
    user {
      name
    }
  }
}
    `;
export type GetOnlineUsersProps<TChildProps = {}> = ApolloReactHoc.DataProps<GetOnlineUsersSubscription, GetOnlineUsersSubscriptionVariables> & TChildProps;
export function withGetOnlineUsers<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetOnlineUsersSubscription,
  GetOnlineUsersSubscriptionVariables,
  GetOnlineUsersProps<TChildProps>>) {
    return ApolloReactHoc.withSubscription<TProps, GetOnlineUsersSubscription, GetOnlineUsersSubscriptionVariables, GetOnlineUsersProps<TChildProps>>(GetOnlineUsersDocument, {
      alias: 'getOnlineUsers',
      ...operationOptions
    });
};

/**
 * __useGetOnlineUsersSubscription__
 *
 * To run a query within a React component, call `useGetOnlineUsersSubscription` and pass it any options that fit your needs.
 * When your component renders, `useGetOnlineUsersSubscription` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOnlineUsersSubscription({
 *   variables: {
 *   },
 * });
 */
export function useGetOnlineUsersSubscription(baseOptions?: ApolloReactHooks.SubscriptionHookOptions<GetOnlineUsersSubscription, GetOnlineUsersSubscriptionVariables>) {
        return ApolloReactHooks.useSubscription<GetOnlineUsersSubscription, GetOnlineUsersSubscriptionVariables>(GetOnlineUsersDocument, baseOptions);
      }
export type GetOnlineUsersSubscriptionHookResult = ReturnType<typeof useGetOnlineUsersSubscription>;
export type GetOnlineUsersSubscriptionResult = ApolloReactCommon.SubscriptionResult<GetOnlineUsersSubscription>;
export const Insert_TodosDocument = gql`
    mutation insert_todos($todo: String!, $isPublic: Boolean!) {
  insert_todos(objects: {title: $todo, is_public: $isPublic}) {
    affected_rows
    returning {
      id
      title
      is_completed
    }
  }
}
    `;
export type Insert_TodosMutationFn = ApolloReactCommon.MutationFunction<Insert_TodosMutation, Insert_TodosMutationVariables>;
export type Insert_TodosProps<TChildProps = {}> = ApolloReactHoc.MutateProps<Insert_TodosMutation, Insert_TodosMutationVariables> & TChildProps;
export function withInsert_Todos<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  Insert_TodosMutation,
  Insert_TodosMutationVariables,
  Insert_TodosProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, Insert_TodosMutation, Insert_TodosMutationVariables, Insert_TodosProps<TChildProps>>(Insert_TodosDocument, {
      alias: 'insertTodos',
      ...operationOptions
    });
};

/**
 * __useInsert_TodosMutation__
 *
 * To run a mutation, you first call `useInsert_TodosMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsert_TodosMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertTodosMutation, { data, loading, error }] = useInsert_TodosMutation({
 *   variables: {
 *      todo: // value for 'todo'
 *      isPublic: // value for 'isPublic'
 *   },
 * });
 */
export function useInsert_TodosMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<Insert_TodosMutation, Insert_TodosMutationVariables>) {
        return ApolloReactHooks.useMutation<Insert_TodosMutation, Insert_TodosMutationVariables>(Insert_TodosDocument, baseOptions);
      }
export type Insert_TodosMutationHookResult = ReturnType<typeof useInsert_TodosMutation>;
export type Insert_TodosMutationResult = ApolloReactCommon.MutationResult<Insert_TodosMutation>;
export type Insert_TodosMutationOptions = ApolloReactCommon.BaseMutationOptions<Insert_TodosMutation, Insert_TodosMutationVariables>;
export const ToggleTodoDocument = gql`
    mutation toggleTodo($id: Int!, $isCompleted: Boolean!) {
  update_todos(where: {id: {_eq: $id}}, _set: {is_completed: $isCompleted}) {
    affected_rows
    returning {
      id
      title
      is_completed
    }
  }
}
    `;
export type ToggleTodoMutationFn = ApolloReactCommon.MutationFunction<ToggleTodoMutation, ToggleTodoMutationVariables>;
export type ToggleTodoProps<TChildProps = {}> = ApolloReactHoc.MutateProps<ToggleTodoMutation, ToggleTodoMutationVariables> & TChildProps;
export function withToggleTodo<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  ToggleTodoMutation,
  ToggleTodoMutationVariables,
  ToggleTodoProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, ToggleTodoMutation, ToggleTodoMutationVariables, ToggleTodoProps<TChildProps>>(ToggleTodoDocument, {
      alias: 'toggleTodo',
      ...operationOptions
    });
};

/**
 * __useToggleTodoMutation__
 *
 * To run a mutation, you first call `useToggleTodoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useToggleTodoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [toggleTodoMutation, { data, loading, error }] = useToggleTodoMutation({
 *   variables: {
 *      id: // value for 'id'
 *      isCompleted: // value for 'isCompleted'
 *   },
 * });
 */
export function useToggleTodoMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<ToggleTodoMutation, ToggleTodoMutationVariables>) {
        return ApolloReactHooks.useMutation<ToggleTodoMutation, ToggleTodoMutationVariables>(ToggleTodoDocument, baseOptions);
      }
export type ToggleTodoMutationHookResult = ReturnType<typeof useToggleTodoMutation>;
export type ToggleTodoMutationResult = ApolloReactCommon.MutationResult<ToggleTodoMutation>;
export type ToggleTodoMutationOptions = ApolloReactCommon.BaseMutationOptions<ToggleTodoMutation, ToggleTodoMutationVariables>;
export const RemoveTodoDocument = gql`
    mutation removeTodo($id: Int!) {
  delete_todos(where: {id: {_eq: $id}}) {
    affected_rows
  }
}
    `;
export type RemoveTodoMutationFn = ApolloReactCommon.MutationFunction<RemoveTodoMutation, RemoveTodoMutationVariables>;
export type RemoveTodoProps<TChildProps = {}> = ApolloReactHoc.MutateProps<RemoveTodoMutation, RemoveTodoMutationVariables> & TChildProps;
export function withRemoveTodo<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  RemoveTodoMutation,
  RemoveTodoMutationVariables,
  RemoveTodoProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, RemoveTodoMutation, RemoveTodoMutationVariables, RemoveTodoProps<TChildProps>>(RemoveTodoDocument, {
      alias: 'removeTodo',
      ...operationOptions
    });
};

/**
 * __useRemoveTodoMutation__
 *
 * To run a mutation, you first call `useRemoveTodoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveTodoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeTodoMutation, { data, loading, error }] = useRemoveTodoMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useRemoveTodoMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<RemoveTodoMutation, RemoveTodoMutationVariables>) {
        return ApolloReactHooks.useMutation<RemoveTodoMutation, RemoveTodoMutationVariables>(RemoveTodoDocument, baseOptions);
      }
export type RemoveTodoMutationHookResult = ReturnType<typeof useRemoveTodoMutation>;
export type RemoveTodoMutationResult = ApolloReactCommon.MutationResult<RemoveTodoMutation>;
export type RemoveTodoMutationOptions = ApolloReactCommon.BaseMutationOptions<RemoveTodoMutation, RemoveTodoMutationVariables>;
export const GetMyTodosDocument = gql`
    query getMyTodos {
  todos(where: {is_public: {_eq: false}}, order_by: {created_at: desc}) {
    id
    title
    is_completed
  }
}
    `;
export type GetMyTodosProps<TChildProps = {}> = ApolloReactHoc.DataProps<GetMyTodosQuery, GetMyTodosQueryVariables> & TChildProps;
export function withGetMyTodos<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetMyTodosQuery,
  GetMyTodosQueryVariables,
  GetMyTodosProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, GetMyTodosQuery, GetMyTodosQueryVariables, GetMyTodosProps<TChildProps>>(GetMyTodosDocument, {
      alias: 'getMyTodos',
      ...operationOptions
    });
};

/**
 * __useGetMyTodosQuery__
 *
 * To run a query within a React component, call `useGetMyTodosQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMyTodosQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMyTodosQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetMyTodosQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetMyTodosQuery, GetMyTodosQueryVariables>) {
        return ApolloReactHooks.useQuery<GetMyTodosQuery, GetMyTodosQueryVariables>(GetMyTodosDocument, baseOptions);
      }
export function useGetMyTodosLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetMyTodosQuery, GetMyTodosQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetMyTodosQuery, GetMyTodosQueryVariables>(GetMyTodosDocument, baseOptions);
        }
export type GetMyTodosQueryHookResult = ReturnType<typeof useGetMyTodosQuery>;
export type GetMyTodosLazyQueryHookResult = ReturnType<typeof useGetMyTodosLazyQuery>;
export type GetMyTodosQueryResult = ApolloReactCommon.QueryResult<GetMyTodosQuery, GetMyTodosQueryVariables>;
export const ClearCompletedDocument = gql`
    mutation clearCompleted {
  delete_todos(where: {is_public: {_eq: false}, is_completed: {_eq: true}}) {
    affected_rows
  }
}
    `;
export type ClearCompletedMutationFn = ApolloReactCommon.MutationFunction<ClearCompletedMutation, ClearCompletedMutationVariables>;
export type ClearCompletedProps<TChildProps = {}> = ApolloReactHoc.MutateProps<ClearCompletedMutation, ClearCompletedMutationVariables> & TChildProps;
export function withClearCompleted<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  ClearCompletedMutation,
  ClearCompletedMutationVariables,
  ClearCompletedProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, ClearCompletedMutation, ClearCompletedMutationVariables, ClearCompletedProps<TChildProps>>(ClearCompletedDocument, {
      alias: 'clearCompleted',
      ...operationOptions
    });
};

/**
 * __useClearCompletedMutation__
 *
 * To run a mutation, you first call `useClearCompletedMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useClearCompletedMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [clearCompletedMutation, { data, loading, error }] = useClearCompletedMutation({
 *   variables: {
 *   },
 * });
 */
export function useClearCompletedMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<ClearCompletedMutation, ClearCompletedMutationVariables>) {
        return ApolloReactHooks.useMutation<ClearCompletedMutation, ClearCompletedMutationVariables>(ClearCompletedDocument, baseOptions);
      }
export type ClearCompletedMutationHookResult = ReturnType<typeof useClearCompletedMutation>;
export type ClearCompletedMutationResult = ApolloReactCommon.MutationResult<ClearCompletedMutation>;
export type ClearCompletedMutationOptions = ApolloReactCommon.BaseMutationOptions<ClearCompletedMutation, ClearCompletedMutationVariables>;