import { useState } from "react";
import uniqid from "uniqid";
const exampleJson = {
  id: "kngp89fc",
  title: "Amigos dos Amigos",
  type: "2",
  items: [
    {
      id: "kngp8d0p",
      title: "new aaa",
      status: true,
      answers: [
        {
          id: "kngp8eyp",
          title: "111112123",
          status: true,
        },
        {
          id: "kngp9ott",
          title: "beleza",
          status: true,
        },
      ],
    },
    {
      id: "kngp9y4g",
      title: "karuju traidor",
      status: true,
      answers: [
        {
          id: "kngpa91j",
          title: "trabalha",
          status: true,
        },
      ],
    },
    {
      id: "kngpbwlb",
      title: "amigos dos amigos",
      status: true,
      answers: [
        {
          id: "kngpc15c",
          title: "1",
          status: true,
        },
        {
          id: "kngpc1io",
          title: "2",
          status: true,
        },
        {
          id: "kngpc21k",
          title: "3",
          status: true,
        },
      ],
    },
  ],
};
function App() {
  // const [form, setForm] = useState({
  //   id: uniqid(),
  //   title: "",
  //   type: "3",
  //   items: [],
  // });
  const [form, setForm] = useState(exampleJson);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleAddItem = () => {
    setForm({ ...form, items: [...form.items, { id: uniqid(), title: "new", status: true, answers: [] }] });
  };
  const handleAddAnswer = (e, id) => {
    setForm({
      ...form,
      items: [
        ...form.items.map((x) => {
          if (x.id === id) {
            x.answers = [...x.answers, { id: uniqid(), title: "", status: true }];
          }
          return x;
        }),
      ],
    });
  };
  const handleChangeItem = (e, id, field, type) => {
    setForm({
      ...form,
      items: [
        ...form.items.map((x) => {
          if (x.id === id) {
            x[field] = type === 0 ? e.target.value : e.target.value === "true";
          }
          return x;
        }),
      ],
    });
  };
  const handleChangeAnswer = (e, id) => {
    console.log(id);
    setForm({
      ...form,
      items: [
        ...form.items.map((x) => {
          x.answers = [
            ...x.answers.map((an) => {
              if (an.id === id) {
                an.title = e.target.value;
              }
              return an;
            }),
          ];
          return x;
        }),
      ],
    });
  };
  return (
    <div>
      <form>
        <div>
          <label>
            Formulário: <input type="text" name="title" value={form?.title} onChange={handleChange} />
          </label>
        </div>
        <div style={{ marginTop: 5 }}>
          <label>
            Type:{" "}
            <select name="type" onChange={handleChange} value={form?.type}>
              <option value="1">Checkbox</option>
              <option value="2">Radio</option>
              <option value="3">Text</option>
            </select>
          </label>
        </div>
        <div>
          <button type="button" onClick={handleAddItem}>
            Adicionar Item
          </button>
          <div>
            {form &&
              form.items &&
              form.items.map((item, index) => {
                return (
                  <div key={index}>
                    <hr />
                    <div>
                      <input type="text" value={item.title} onChange={(e) => handleChangeItem(e, item.id, "title", 0)} />
                      <select value={item.status} onChange={(e) => handleChangeItem(e, item.id, "status", 1)}>
                        <option value="true">True</option>
                        <option value="false">False</option>
                      </select>
                    </div>
                    <div>
                      <button type="button" onClick={(e) => handleAddAnswer(e, item.id)}>
                        Adicionar Pergunta
                      </button>
                    </div>
                    <div>
                      {item &&
                        item.answers.map((answer, i) => {
                          return (
                            <div key={i}>
                              <input type="text" value={answer.title} onChange={(e) => handleChangeAnswer(e, answer.id)} />
                            </div>
                          );
                        })}
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </form>
      <pre>{JSON.stringify(form, null, 2)}</pre>
    </div>
  );
}

export default App;
