import logo from './logo.svg';
import './App.css';
import Header from './Header';

function App() {
  return (
    <div className="App">
      <Header 
      logoHref="https://library.tamu.edu" 
      logo="https://api.library.tamu.edu/tl-components/1.12/assets/icons/tl/tamu-logo.svg" 
      title="Aviary React" 
      mastTitle="Aviary Components"
      titleHref="#">
        
<nav>
      <ul>
        <li><a href="//library.tamu.edu/about/hours">Hours</a></li>
        <li className="menu">
          <a href="//library.tamu.edu/about/index">Libraries</a>
          <ul role="menu">
            <li role="presentation">
              <a href="//blcc.library.tamu.edu" title="Go to Business Library and Collaboration Commons website">Business Library & Collaboration Commons</a>
              <a className="directions" href="//library.tamu.edu/about/directions/business-library" title="Parking Directions for Business Library and Collaboration Commons">Parking Directions</a>
              <span className="phone">979-845-2111</span>
            </li>
            <li role="presentation">
              <a href="//cushing.library.tamu.edu" title="Go to Cushing Library website">Cushing Memorial Library & Archives</a>
              <a className="directions" href="//library.tamu.edu/about/directions/cushing-library" title="Parking Directions for Cushing Library">Parking Directions</a>
              <span className="phone">979-845-1951</span>
            </li>
            <li role="presentation">
              <a href="//msl.library.tamu.edu" title="Go to Medical Sciences Library website">Medical Sciences Library</a>
              <a className="directions" href="//library.tamu.edu/about/directions/medical-sciences-library" title="Parking Directions for Medical Sciences Library">Parking Directions</a>
              <span className="phone">979-845-7428</span>
            </li>
            <li role="presentation">
              <a href="//psel.library.tamu.edu" title="Go to Policy Sciences and Economics Library website">Policy Sciences & Economics Library</a>
              <a className="directions" href="//library.tamu.edu/about/directions/policy-sciences-economics-library" title="Parking Directions for Policy Sciences and Economics Library">Parking Directions</a>
              <span className="phone">979-845-3731</span>
            </li>
            <li role="presentation">
              <a href="//library.tamu.edu" title="Go to Evans Library website">Sterling C. Evans Library & Annex</a>
              <a className="directions" href="//library.tamu.edu/about/directions/evans-library-annex" title="Parking Directions for Evans Library and Annex">Parking Directions</a>
              <span className="phone">979-845-3731</span>
            </li>
          </ul>
        </li>
        <li className="menu">
          <a href="//library.tamu.edu">Information for</a>
          <ul role="menu">
            <li role="presentation">
              <a role="menuitem" href="//library.tamu.edu/faculty_info">Information for Faculty</a>
            </li>
            <li role="presentation">
              <a role="menuitem" href="//library.tamu.edu/grad_info">Graduate Student Resources</a>
            </li>
            <li role="presentation">
              <a role="menuitem" href="//library.tamu.edu/undergrad_info">Undergraduate Student Resources</a>
            </li>
            <li role="presentation">
              <a role="menuitem" href="//library.tamu.edu/services/accessibility">Services for Individuals with Disabilities</a>
            </li>
            <li role="presentation">
              <a role="menuitem" href="//tamu.libguides.com/c.php?g=949823">Students at Satellite Campuses</a>
            </li>
            <li role="presentation">
              <a role="menuitem" href="//tamu.libguides.com/c.php?g=586101&amp;p=4048709">School Visitors</a>
            </li>
            <li role="presentation">
              <a role="menuitem" href="//library.tamu.edu/about/other_patrons">Other Library Guests (Non-TAMU Affiliates)</a>
            </li>
          </ul>
        </li>
        <li><a href="//library.tamu.edu/mylibrary">MyLibrary</a></li>
        <li className="menu">
          <a href="//askus.library.tamu.edu">Help</a>
          <ul role="menu">
            <li role="presentation">
              <a role="menuitem" href="//askus.library.tamu.edu">Chat with us</a>
            </li>
            <li role="presentation">
              <a role="menuitem" href="//library.tamu.edu/about/phone">Call us</a>
            </li>
            <li role="presentation">
              <a role="menuitem" href="sms:9792561091">Text us @ 979-256-1091</a>
            </li>
            <li role="presentation">
              <a role="menuitem" href="//askus.library.tamu.edu/contact">Email us</a>
            </li>
            <li role="presentation">
              <a role="menuitem" href="//askus.library.tamu.edu">FAQs</a>
            </li>
            <li role="presentation">
              <a role="menuitem" href="//askus.library.tamu.edu/contact">Report a problem</a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
      </Header>
    </div>
  );
}

export default App;
