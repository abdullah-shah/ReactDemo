import { useEffect } from "react";
import { useState } from "react";
import UserList from "./components/userList";
import "./App.css";
import Button from "./components/Button";
import {useFetch} from "./hooks/useFetch";
import {useOnline} from "./hooks/useOnline";
import DropdownPortal from "./portals/dropdown";
import {parseHTML} from "./utils/parseHtml";
import { Tooltip } from "./portals/tooltip";

function App() {
  const url = "https://dummyjson.com/users";
  const initialData = null;
  const [data, loading, error] = useFetch({url,initialData} );
  const {isOnline} = useOnline();
  const dropdownPortalHtmlString = "<ul><li>Option 1</li><li>Option 2</li><li>Option 3</li></ul>";
  const parsedHtmlForDropdownPortal = parseHTML(dropdownPortalHtmlString);  
  return (
    <>
      <div className="App">
        
        {loading && (
        <div>Data is loading</div>
        )}
        {
        data && (
            <div>
              <h1>Welcome Noobs Onboard</h1>
              <UserList users={data.users}/>
            </div>
        )}
        {!isOnline?(
          <div className="internet-error">
            <p>NO INTERNET CONNECTION</p>
          </div>
        ):''}

        <DropdownPortal html={parsedHtmlForDropdownPortal} />
        <Tooltip text="Hi! I am a tooltip">
          <Button 
          styles={{padding:'7px', color:'black', background:'#f4f4f4'}}
          // handleClick={handleClick}
          buttonText= 'Reusable Button'
          />
        </Tooltip>
      </div>
    </>
  );
}

export default App;
