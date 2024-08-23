import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import Category from "./components/Category";
import Navbar from "./components/Navbar";
import Button from "./components/Button";
import { FaEllipsisV, FaClock, FaPlus, FaSyncAlt } from "react-icons/fa";
import {
  setCategories
} from "./features/dashboard/dashboardSlice";
import { useEffect, useState } from "react";
import dashData from "./dashData.json";
import Widget from "./components/Widget";
import SideForm from "./components/SideForm";
import initialData from './dashData.json'; // Initial data if `localStorage` is empty


function App() {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.dashboard.categories);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

//   useEffect(() => {
//     dispatch(setCategories(dashData.categories));
//     // dispatch(setWidgets(dashData.categories.widgets));
//   }, [dispatch]);



useEffect(() => {
  const storedCategories = localStorage.getItem('categories');
  if (storedCategories) {
    dispatch(setCategories(JSON.parse(storedCategories)));
  } else {
    dispatch(setCategories(initialData.categories));
    console.log(initialData.categories)
    
  }
}, [dispatch]);

const addWidgetHandler = () => {
  setIsSidebarOpen(true);
};

  return (
    <div className="w-full flex flex-col items-center h-screen dark:bg-gray-900 dark:text-white">
      <Navbar />
      <div className="md:flex justify-between items-center w-full h-auto m-0  hidden  ">
        <h1 className="font-bold text-xl px-5 py-1 my-2 ">CNAPP Dashboard</h1>
        <div className="flex justify-evenly items-center  h-full w-auto">
          <Button onClick = {addWidgetHandler}>
            Add Widget{" "}
            <FaPlus className="text-sm text-gray-600 bg-inherit mx-2" />
          </Button>
          <Button className="sm: hidden">
            <FaSyncAlt className="text-sm text-gray-600 bg-inherit mx-2" />
          </Button>
          <Button>
            {" "}
            <FaEllipsisV className="text-sm text-gray-600 bg-inherit mx-2" />
          </Button>
          <Button>
            <FaClock className="text-sm text-gray-600 bg-inherit mr-2" /> |{" "}
            <select className="bg-inherit text-gray-600">
              <option>Last 2 days</option>
            </select>
          </Button>
        </div>
      </div>
      <div className="h-auto w-full px-6  my-2 flex flex-col items-center">
        {categories.map((category, index) => (
          <Category
            key={index}
            title={category.name}
            widgets={category.widgets}
          />
        ))}
      </div>
     <SideForm isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)}/>
    </div>
  );
}

export default App;
