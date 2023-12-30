import "@styles/globals.css";

import Nav from "@components/Nav";
import Provider from "@components/Provider";

export const metadata = {
  
  title: "Happily coming 2024",
  description: "Share New year Goals ",
  
  icon: "/assets/images/hpy.svg",
  keywords:"newyear, happy, goals, 2024",
  author: "Hafiz Abdullah",
  image: "/assets/images/hpy.svg"
};

const RootLayout = ({ children }) => (
  <html lang='en'>
    <head>
     <link rel="icon" href={metadata.icon} />
     <meta name="keywords" content={metadata.keywords}/>
     <meta name="author" content={metadata.author} />
     <meta name="description" content={metadata.description} />
     <meta property="og:image" content={metadata.image}/>
     </head>
    
    <body>
      <Provider>
        <div className='main'>
          <div className='gradient' />
        </div>

        <main className='app'>
          <Nav />
          {children}
        </main>
      </Provider>
    </body>
  </html>
);

export default RootLayout;
