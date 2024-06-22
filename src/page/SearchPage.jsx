import { Helmet } from "react-helmet";
import {SearchPageView} from "../section/Home/view";

function SearchPage() {
    return (
      <>
        <Helmet>
          <title> Watch Store </title>
        </Helmet>
        <SearchPageView />
      </>
    );
  }
  
  export default SearchPage;