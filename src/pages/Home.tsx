
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
export default function Home(){

          const icons:Array<object> = [
                    {icon: <FaGithub size={30} className="text-white" />, link:''},
                    {icon: <FaLinkedin size={30} className="text-white"/>, link:'https://www.linkedin.com/in/anniel-francisco-reyes-javier-b22347274/'},
          ];

          return(
               <div style={{backgroundColor:"#262c3a", height:"calc(100vh - 80px)", backgroundPositionY:'75%', padding:'10px 20px'}} className="w-full flex max-md:flex-wrap justify-start text-8xl font-extrabold bg-[url('src/assets/background-rick.jpg')] bg-no-repeat bg-cover">
                   <div className="flex items-center">
                    <h1 className="text-white max-md:text-center">Rick and Morty API</h1>
                   </div>

                   <div className="flex items-end justify-end w-full gap-3">
                    {
                              icons.map((icon,index) =>{
                                     return( 
                                        <a key={index} href={icon.link} target="_blank" className="hover:-translate-y-1 duration-300">
                                                  {icon.icon}
                                        </a>); 
                              })
                    }
                   </div>
                </div>        
          );
}