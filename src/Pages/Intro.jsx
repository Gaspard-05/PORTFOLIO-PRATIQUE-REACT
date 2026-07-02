import HeroBanner from "../components/HeroBanner";
import Cta from "../components/Cta";
import MyStory from "../components/MyStory";
import MyStory2 from "../components/MyStory2";
import MyProject from "../components/MyProject";
const Intro = () => {

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


  const myprojects = [
    {

      titre: "Project 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    },
    {
    
      titre: "Project 2",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    },
    {
     
      titre: "Project 3",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    },
    {
      titre: "Project 4",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    }
  ];



  return (
    <>
      <HeroBanner
        title="Welcome to Our Website. We Create Amazing Experiences."
        description="Discover the perfect solution for your needs."
        startButton="Get Started"
        learnMoreButton="Learn More"
        imageUrl="https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
      />
      <Cta
        titre="Ready to Get Started?"
        projects="130+ Projets Livrés"
        contactButton="Contactez Moi"
        myContact="Mes Contacts"
      />
      <MyStory
        titre="My Story"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
      />

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

      <div className="pb-16 lg:pb-20">
        <div className="flex items-center pb-6">
          <img src="/src/assets/img/icon-story.png" alt="icon story" />
          <h3 className="ml-3 font-body text-2xl font-semibold text-primary dark:text-white">
            MY PROJECTS
          </h3>
        </div>
        <div>
          {myprojects.map((project, index) => (
            <MyProject
              key={index}
              titre={project.titre}
              description={project.description}
            />
          ))}
        </div>
      </div>

      
    </>
  );
};

export default Intro;
