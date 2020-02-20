import * as React from "react";
import {
  GetMyTodosQuery,
  RemoveTodoMutation,
  RemoveTodoMutationHookResult,
  ToggleTodoMutation,
  ToggleTodoMutationHookResult
} from "../../generated/graphql-types";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";
import { MutationUpdaterFn } from "apollo-client";
import { GET_MY_TODOS } from "./TodoPrivateList";
import query from "apollo-cache-inmemory/lib/fragmentMatcherIntrospectionQuery";

interface TodoItemType {
  index: number;
  todo: GetMyTodosQuery["todos"][0];
}

const TOGGLE_TODO = gql`
  mutation toggleTodo($id: Int!, $isCompleted: Boolean!) {
    update_todos(
      where: { id: { _eq: $id } }
      _set: { is_completed: $isCompleted }
    ) {
      affected_rows
      returning {
        id
        title
        is_completed
      }
    }
  }
`;

const REMOVE_TODO = gql`
  mutation removeTodo($id: Int!) {
    delete_todos(where: { id: { _eq: $id } }) {
      affected_rows
    }
  }
`;

const TodoItem = ({ index, todo }: TodoItemType) => {
  const [todoUpdate]: ToggleTodoMutationHookResult = useMutation(TOGGLE_TODO);

  const [todoRemove]: RemoveTodoMutationHookResult = useMutation(REMOVE_TODO);

  const removeTodo = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    todoRemove({
      variables: {
        id: todo.id
      },
      update: updateCacheAfterRemove
    });
  };

  const toggleTodo = () => {
    todoUpdate({
      variables: {
        id,
        isCompleted: !is_completed
      },
      optimisticResponse: {
        __typename: "mutation_root",
        update_todos: {
          __typename: "todos_mutation_response",
          affected_rows: 1,
          returning: [
            {
              __typename: "todos",
              id,
              title,
              is_completed
            }
          ]
        }
      },
      update: updateCacheAfterToggle
    });
  };

  const updateCacheAfterToggle: MutationUpdaterFn<ToggleTodoMutation> = (
    cache,
    { data }
  ) => {
    const existingTodos = cache.readQuery<GetMyTodosQuery>({
      query: GET_MY_TODOS
    });
    const newTodos = existingTodos!.todos.map(t => {
      if (t.id === id) {
        return { ...t, ...data!.update_todos!.returning[0] };
      } else {
        return t;
      }
    });
    cache.writeQuery<GetMyTodosQuery>({
      query: GET_MY_TODOS,
      data: {
        todos: newTodos
      }
    });
  };

  const updateCacheAfterRemove: MutationUpdaterFn<RemoveTodoMutation> = (cache) => {
    const existingTodos = cache.readQuery<GetMyTodosQuery>({
      query: GET_MY_TODOS
    });

    const newTodos = existingTodos!.todos.filter(t => t.id !== todo.id);
    cache.writeQuery<GetMyTodosQuery>({
      query: GET_MY_TODOS,
      data: {
        todos: newTodos
      }
    });
  };

  const { is_completed, id, title } = todo;
  return (
    <li key={index}>
      <div className="view">
        <div className="round">
          <input
            checked={is_completed}
            type="checkbox"
            id={id!.toString()}
            onChange={() => toggleTodo()}
          />
          <label htmlFor={id!.toString()} />
        </div>
      </div>

      <div className={"labelContent" + (is_completed ? " completed" : "")}>
        <div>{title}</div>
      </div>

      <button className="closeBtn" onClick={e => removeTodo(e)}>
        x
      </button>
    </li>
  );
};

export default TodoItem;
