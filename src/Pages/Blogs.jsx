import BlogComponents from "../components/BlogComponents";
import MyStory2 from "../components/MyStory2";
import Pagination from "../components/Pagination";
const Blogs = () => {

   const mystory2 = [
    {
      titre: "My Story 1",
      posts: "130+ Projets Livrés",
      category: "Category 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      date: "June 30, 2020",
      time: "5 min read",
    },
    {
      titre: "My Story 2",
      posts: "130+ Projets Livrés",
      category: "Category 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      date: "June 30, 2020",
      time: "5 min read",
    },
    {
      titre: "My Story 3",
      posts: "130+ Projets Livrés",
      category: "Category 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      date: "June 30, 2020",
      time: "5 min read",
    },
  ];

  return (
    <>
      <BlogComponents />
      
      {mystory2.map((story, index) => (
        <MyStory2
          key={index}
          titre={story.titre}
          posts={story.posts}
          category={story.category}
          description={story.description}
          date={story.date}
          time={story.time}
        />
      ))}
      
      <Pagination />
    </>
  );
};

export default Blogs;