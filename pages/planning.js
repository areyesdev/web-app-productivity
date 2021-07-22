import { useQuery } from "react-query";
import {
  Heading,
  Button,
  FullHeightContent,
  Avatar,
  Spacer,
} from "../../components-app-productivity";

import { tasks } from "../api";

export default function Start() {
  const { isLoading, error, data } = useQuery("todos", () => tasks.getAll());
  if (isLoading) return "Loading...";
  if (error) return `An error has ocurred ${error.message}`;
  console.log(data);
  return (
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
          <button onClick={() => {}}>Toca para agregar tarea</button>
          {data &&
            data.map((task) => {
              return (
                <div>
                  <Heading>{task.status}</Heading>
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
  );
}
