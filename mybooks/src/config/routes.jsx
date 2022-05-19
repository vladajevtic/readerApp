import ErrorPage from "../pages/Error/ErrorPage";
import HomePage from "../pages/Home/HomePage";
import MyListPage from "../pages/MyList/MyListPage";

const routes = [
    {
      name: "Home",
      path: "/",
      component: HomePage,
      
    },
    {
      name: "MyLists",
      path: "/MyListPage",
      component: MyListPage
      
    },
    {
      name: "Error",
      path: "*",
      component: ErrorPage
    },
  ];
  
  export default routes;
  