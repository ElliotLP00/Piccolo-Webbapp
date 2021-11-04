import './App.css';
import { Box } from 'theme-ui'
function App() {
  return (
    <div className="App">
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Box sx={{ p: 3 }} className="App-Header">
          <div >
            <h1>Header</h1>
          </div>
        </Box>
        <Box sx={{ flex: '1 1 auto', p: 3 }} className="App-Content">
          <div >
            <h2>Content</h2>
          </div>
        </Box>
        <Box sx={{ p: 3 }} className="App-Footer">
          <div >
            <h3>Footer</h3>
          </div>
        </Box>
      </Box>
    </div>
  );
}

export default App;
