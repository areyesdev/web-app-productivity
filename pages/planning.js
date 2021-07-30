import {
  useQuery,
  useMutation,
  ReactQueryCacheProvider,
  QueryCache,
  useQueryCache,
} from "react-query";
import {
  Heading,
  Button,
  FullHeightContent,
  Avatar,
  Spacer,
  AddButton,
} from "../../components-app-productivity";

import { tasks } from "../api";

//FIXME: this needs to happen once
const queryCache = new QueryCache();

function Planning() {
  const cache = new useQueryCache();
  const { isLoading, error, data } = useQuery("tasks", () => tasks.getAll());

  // Mutations
  const [addTask] = useMutation((params) => tasks.create(params), {
    onSuccess: () => {
      // Invalidate and refetch
      cache.invalidateQueries("tasks");
    },
  });
  const [deleteTask] = useMutation((params) => tasks.delete(params), {
    onSuccess: () => {
      // Invalidate and refetch
      cache.invalidateQueries("tasks");
    },
  });
  if (isLoading) return "Loading...";
  if (error) return `An error has ocurred ${error.message}`;
  return (
    <ReactQueryCacheProvider queryCache={queryCache}>
      <FullHeightContent
        content={
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div style={{ display: "flex" }}>
              <Avatar src="https://placeimg.com/200/200/people" />
              <Spacer.Vertical size="xs" />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
              >
                <Heading size="lg">Hola, Andres</Heading>
                <Heading size="md" color="primary">
                  ¿Cómo quieres empezar?
                </Heading>
              </div>
            </div>
            <Heading size="lg">
              Ahora dime, ¿cuál es la primera tarea en la que trabajarás hoy?
            </Heading>
            <AddButton
              type="primary"
              onClick={() => addTask({ description: "new task hello" })}
            >
              Agregar Tarea
            </AddButton>
            {data &&
              data.map((task) => {
                return (
                  <div key={task.id}>
                    <Heading>{task.description}</Heading>
                    <button onClick={() => deleteTask({ id: task.id })}>
                      X
                    </button>
                  </div>
                );
              })}
          </div>
        }
        footer={
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              accusantium quos corporis minus sed non optio saepe magnam.
              Provident enim officia debitis saepe? Quidem eveniet doloremque
              cupiditate nam blanditiis id!
            </p>
            <Button type="primary">Empieza ahora</Button>
          </div>
        }
      />
    </ReactQueryCacheProvider>
  );
}

export default Planning;
