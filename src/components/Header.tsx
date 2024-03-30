import { useNavigate  } from "react-router-dom";
export function Header(){
       const navigate = useNavigate();
       const routes:Array<object> = [{name:'Home', route:'/'},{name:'Characters', route:'/characters' }, {name:'Locations', route:'/locations' }];

          const goToPage = (route:string) => {
              navigate(route);
          }

          return (
          <>
          <div style={{height:'80px', backgroundColor:"#262c3a", padding:'10px 20px 0 20px',}} className="flex justify-between sticky top-0 z-10">
                    <div className="flex" style={{width:'100%'}}>
                              <img onClick={() => goToPage('/')} src="src/assets/rickImage.png" alt="rick-image" className="cursor-pointer hover:-translate-y-1 duration-300" />
                    </div>
                    <div className="flex gap-5 text-white">
                     {
                            routes.map((route, index) => {
                                   return(
                                          <button key={index} onClick={() => goToPage(route.route)}  className="outline-none hover:underline text-xl font-medium">{route.name}</button>
                                   );
                            })
                     }
                            
                    </div>
          </div>
     
          </>);
}