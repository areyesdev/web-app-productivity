import { Button, FullHeightContent } from "../../components-app-productivity";

export default function Start() {
  return (
    <FullHeightContent
      content={
        <>
          <div
            style={{ height: 200, background: "tomato", width: "100%" }}
          ></div>
          <div>
            <p>Hello</p>
          </div>
        </>
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
