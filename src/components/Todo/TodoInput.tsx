import * as React from "react";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";
import {
  GetMyTodosQuery,
  Insert_TodosMutation,
  Insert_TodosMutationHookResult
} from "../../generated/graphql-types";
import { GET_MY_TODOS } from "./TodoPrivateList";
import { MutationUpdaterFn } from "apollo-client";

const ADD_TODO = gql`
  mutation insert_todos($todo: String!, $isPublic: Boolean!) {
    insert_todos(objects: { title: $todo, is_public: $isPublic }) {
      affected_rows
      returning {
        id
        title
        is_completed
      }
    }
  }
`;

const TodoInput = ({ isPublic = false }) => {
  const [todoInput, setTodoInput] = React.useState("");
  const [addTodo]: Insert_TodosMutationHookResult = useMutation(ADD_TODO);

  // Updates cache with the recent todo

  const updateCache: MutationUpdaterFn<Insert_TodosMutation> = (
    cache,
    { data }
  ) => {
    if (isPublic || !data) {
      return null;
    }

    const getExistingTodos = cache.readQuery<GetMyTodosQuery>({
      query: GET_MY_TODOS
    });

    const existingTodos = getExistingTodos?.todos ?? [];

    const newTodo = data.insert_todos?.returning[0]!;

    cache.writeQuery<GetMyTodosQuery>({
      query: GET_MY_TODOS,
      data: {
        todos: [newTodo, ...existingTodos]
      }
    });
  };

  return (
    <form
      className="formInput"
      onSubmit={e => {
        e.preventDefault();
        // add todo
        addTodo({
          variables: {
            todo: todoInput,
            isPublic
          },
          update: updateCache
        });
        setTodoInput("");
      }}
    >
      <input
        className="input"
        placeholder="What needs to be done?"
        value={todoInput}
        onChange={e => setTodoInput(e.target.value)}
      />
      <i className="inputMarker fa fa-angle-right" />
    </form>
  );
};

export default TodoInput;
