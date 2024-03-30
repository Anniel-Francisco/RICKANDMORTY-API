
import {  Outlet } from "react-router-dom";
import { ReactNode, FC } from "react";
//

import { Header } from "../components/Header";


interface Props {
          children:ReactNode,
}

export const MainLayout: FC<Props> = ({children}) =>{
          return <>
          
          <Header/>

          {children ? children : <Outlet/>}
     
          </>;
}