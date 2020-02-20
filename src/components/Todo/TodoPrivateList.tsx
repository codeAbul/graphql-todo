import React, { Fragment, useState } from "react";
import gql from "graphql-tag";
import TodoItem from "./TodoItem";
import TodoFilters from "./TodoFilters";
import { useMutation, useQuery } from "@apollo/react-hooks";
import {
  ClearCompletedMutation,
  ClearCompletedMutationHookResult,
  GetMyTodosQuery,
  GetMyTodosQueryHookResult
} from "../../generated/graphql-types";
import { MutationUpdaterFn } from "apollo-client";

export const GET_MY_TODOS = gql`
  query getMyTodos {
    todos(
      where: { is_public: { _eq: false } }
      order_by: { created_at: desc }
    ) {
      id
      title
      is_completed
    }
  }
`;

const CLEAR_COMPLETED = gql`
  mutation clearCompleted {
    delete_todos(
      where: { is_public: { _eq: false }, is_completed: { _eq: true } }
    ) {
      affected_rows
    }
  }
`;

type Todo = {
  id: number;
  title: string;
  is_completed: boolean;
};

const TodoPrivateList = () => {
  const clearCompleted: MutationUpdaterFn<ClearCompletedMutation> = cache => {
    console.log(cache);
    const existingTodos = cache.readQuery<GetMyTodosQuery>({
      query: GET_MY_TODOS
    });

    const newTodos = existingTodos!.todos.filter(t => !t.is_completed);

    cache.writeQuery<GetMyTodosQuery>({
      query: GET_MY_TODOS,
      data: {
        todos: newTodos
      }
    });
  };
  const [filter, setFilter] = useState<string>("all");

  const { loading, error, data }: GetMyTodosQueryHookResult = useQuery(
    GET_MY_TODOS
  );

  const [clearTodos]: ClearCompletedMutationHookResult = useMutation(
    CLEAR_COMPLETED,
    {
      update: clearCompleted
    }
  );

  if (loading) return <div>Loading...</div>;
  if (error || !data) return <div>Error {error?.message}</div>;

  let filteredTodos = data.todos;

  const filterResults = (filter: string): void => {
    setFilter(filter);
  };

  if (filter === "active") {
    filteredTodos = filteredTodos.filter(todo => !todo.is_completed);
  } else if (filter === "completed") {
    filteredTodos = filteredTodos.filter(todo => todo.is_completed);
  }

  const todoList = filteredTodos.map((todo: Todo, index: number) => (
    <TodoItem key={"item" + index} index={index} todo={todo} />
  ));

  return (
    <Fragment>
      <div className="todoListWrapper">
        <ul>{todoList}</ul>
      </div>

      <TodoFilters
        todos={filteredTodos}
        currentFilter={filter}
        filterResultsFn={filterResults}
        clearCompletedFn={clearTodos}
      />
    </Fragment>
  );
};

export default TodoPrivateList;
