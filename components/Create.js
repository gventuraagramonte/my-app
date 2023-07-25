const { useState } = require("react");
const { useRouter } = require("next/router");
const { createItem } = require("@/utils/api");

const Create = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newItem = {
      name,
      description,
      status,
    };
    await createItem(newItem);
    router.push("/");
  };

  return (
    <div>
      <h1>Create Item</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Description:
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <label>
          Description:
          <input
            type="text"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          />
        </label>
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default Create;
