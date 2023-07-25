import Link from "next/link";

const { default: List } = require("@/components/List");

const Home = () => {
  return (
    <div>
      <List />
      <div>
        <h2>Actions</h2>
        <Link href="/create">Create new Item</Link>
      </div>
      <div>
        <h2>Dashboard</h2>
        <Link href="/panel">Create new Item</Link>
      </div>
    </div>
  );
};

export default Home;
