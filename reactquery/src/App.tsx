import "./App.css";
import { useQuery, useMutation } from "@tanstack/react-query";

const POSTS = [
  { id: 1, title: "Post 1" },
  { id: 2, title: "Post 2" },
];

function App() {
  const postsQuery = useQuery({
    queryKey: ["posts"],
    queryFn: () => wait(1000).then(() => [...POSTS]),
  });

  const newPostMutation = useMutation({
    mutationFn: title => {
      return wait(1000).then(() =>
      POSTS.push({id: 3, title }))
    }
  })

  if (postsQuery.isLoading) return <h1>Loading...</h1>;
  if (postsQuery.isError) {
    return <pre>{JSON.stringify(postsQuery.error)}</pre>;
  }
  return (
    <>
     {postsQuery.data?.map(post => (
      <div key={post.id}>{post.title}</div>
     ))}
     <button onClick={()=> new }>
      Add New
     </button>
    </>
  );
  function wait(duration: number) {
    return new Promise((resolve) => setTimeout(resolve, duration));
  }
}

export default App;
