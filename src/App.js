import { useEffect, useState } from "react";
import ButtonContainer from "./ButtonContainer";
import Jobinfo from "./Jobinfo";

const url = "https://course-api.com/react-tabs-project";
const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [currentItem, setCurrentItem] = useState(0);

  const fetchJobs = async () => {
    const response = await fetch(url);
    const jobData = await response.json();
    setJobs(jobData);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  if (isLoading) {
    return (
      <section className="jobs-center">
        <div className="loading">loading...</div>
      </section>
    );
  }
  return (
    <section className="jobs-center">
      <ButtonContainer
        jobs={jobs}
        currentItem={currentItem}
        setCurrentItem={setCurrentItem}
      />
      <Jobinfo jobs={jobs} currentItem={currentItem} />
    </section>
  );
};

export default App;
