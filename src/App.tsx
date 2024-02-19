import React from 'react';
import { Drawer } from './components/ui';
import { Beacon } from './beacon';

const SHOW_DRAWER = false;

function App() {
  if (SHOW_DRAWER) {
    return (
      <main>
        <h1>Test Beacon Drawer</h1>
        <Drawer isOpen={true} setIsOpen={value => {}}>
          <Beacon />
        </Drawer>
      </main>
    );
  }

  return (
    <div className="App">
      <Beacon />
    </div>
  );
}

export default App;
