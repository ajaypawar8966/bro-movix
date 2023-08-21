import "./App.css";
import { useEffect } from "react";
import { fetchDataFromApi } from "./utils/api";
import { useSelector, useDispatch } from "react-redux";
import { getApiConfiguration } from "./store/homeSlice";

// getApiConfiguration

function App() {
  const dispatch = useDispatch();
  const { url }= useSelector((state) => state.home);
  console.log(url, "url");

  
  useEffect(() => {
    apiTesting();
  },[]);

  const apiTesting = () => {
    fetchDataFromApi("/movie/popular").then((res) => {
      console.log(res, "response");
      dispatch(getApiConfiguration(res));
    });
  };
  return (
    <>
      <div className="App" style={{ color: "white" }}>
        AJAY
        {url?.total_pages}
      </div>
    </>
  );
}

export default App;
