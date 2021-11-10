import React, { useLayoutEffect, useState } from 'react';
import "./playerList.css"
import { Box ,} from "theme-ui"
import { Link } from 'react-router-dom';
import logo from "../assets/logo.png";

function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
}

export default function ShowWindowDimensions(props) {
  const [width, height] = useWindowSize();
  const [list, setList] = useState([1, 2, 3, 4, 5]);
  const listItems = list.map((number) =>
    <h1>{number}</h1>
  );

  
  return (
    <span>
      <div className="App">
            <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
                <Box sx={{ p: 2 }} backgroundColor="red" width={width} className="App-Header">
                    <div>
                        <img src={logo} width={width} alt="Logo" />;
                    </div>
                </Box>
                <Box sx={{ flex: '1 1 auto', p: 3 }} className="App-Content">
                    <div >
                        <h1>Content</h1>
                        {listItems}
                        
                    </div>
                </Box>
                <Box sx={{ p: 3 }} className="App-Footer">
                    <div >
                        <Link to="Category" >Choose category</Link>  
                    </div>
                </Box>
            </Box>
        </div>
    </span>
    );
}
