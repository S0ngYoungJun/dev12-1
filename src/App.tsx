import React from 'react';
import './App.scss'; // If you have a style file, you can import it here

// Functional component named App
function App() {
  return (
    <div id="root">
      {/* Container 1 */}
      <div className="container1">
        {/* Box 1 */}
        <div className="box1">
          {/* Your text content goes here */}
          Lorem ipsum dolor sit amet consectetur. Odio quisque et
          ac egestas aliquet lectus sagittis tortor pellentesque.
          Fames urna porttitor egestas ornare non pharetra vulputate
          imperdiet. Massa vulputate ultrices mauris ut amet sit et
          netus. Non enim aliquam placerat mattis id in mattis.
          Elementum mauris vestibulum ullamcorper orci penatibus
          laoreet risus diam. Etiam neque ut est posuere leo
          tincidunt ridiculus vitae sagittis. Egestas sed lectus
          tempus purus egestas. Elit maecenas turpis justo feugiat
          sagittis enim cras lobortis. Imperdiet turpis pellentesque
          posuere suspendisse.
        </div>

        {/* Box 2 */}
        <div className="box2">
          {/* Small boxes within Box 2 */}
          <div className='small1'></div>
          <div className='small2'></div>
          <div className='small3'></div>
        </div>
      </div>

      {/* Container 2 */}
      <div className="container2">
        {/* Box 3 */}
        <div className="box3"></div>

        {/* Box 4 */}
        <div className="box4">
          {/* Small boxes within Box 4 */}
          <div className='small4'></div>
          <div className='small5'></div>
        </div>

        {/* Box 5 */}
        <div className="box5"></div>
      </div>
    </div>
  );
}

// Export the component as the default export
export default App;