function Header({logoHref, logo, title, mastTitle, titleHref, children}:any) {
    return (
<>
    <a className="skip-to-content" href="#content">Skip to content</a>

    <header aria-label="header">
    <div className="top-bar">
        <div className="container">
        <div className="logo">
            <a href={logoHref}>
                <span>
                    <img src={logo} alt={title}/>
                    <span className="mastTitle">{mastTitle}</span>
                </span>
            </a>
        </div>
        <div className="navigation">
            {children}
        </div>
        </div>
    </div>
    <div className="masthead">
        <div className="container">
        <a href={titleHref}>
            <h1>{title}</h1>
        </a>
        </div>
    </div>
    </header>
</>
    ) 
  }


export default Header;
