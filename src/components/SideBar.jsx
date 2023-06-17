import {React, useState} from "react";
import { Link } from "react-router-dom";

const MajorList = ({ title, items, fa, link}) => {
    const [expandedIndex, setExpandedIndex] = useState(-1);
  
    const handleItemClick = (index) => {
      setExpandedIndex(index === expandedIndex ? -1 : index);
    };

    console.log(items)
  
    return (
      <>
        <li className="h-full p-4 flex gap-3 hover:bg-white hover:text-[#4790cc] hover:rounded-lg" >
        <Link to={link} className="flex gap-3"><i>{fa}</i><span>{title}</span></Link>
        
        </li>

           {/* <li className="nav-item sidebar-nav-item " key={key} onClick={() => handleItemClick(index)}>
            <a className="nav-link"><i className="flaticon-dashboard"></i><span>{title}</span></a>
                      {expandedIndex === key && (
                           
                            
                      )}
                     </li>
              
               */}
          
         
       
      </>
    );
  };
  
const SideBar = () => {

    const majorLists = [
        {
          title: 'Dashboard',
          fa: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
        </svg>
        ,
   link:'/dashboard',
        },
        
        {
          title: 'Questionnaire',
          fa: (<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"></path></svg>)
        ,
        link:'/dashboard/questionaire',
        },
      
        {
          title: 'Assessment Results',
          fa: (<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 20h9"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 10h-9l-4-8-4 8H3"></path><circle cx="12" cy="12" r="3"></circle></svg>)
        ,
        link:'/dashboard/assessment',
        },
        {
          title: 'Image Analysis',
          link:'/dashboard/analysis',
          fa: (<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20h4v-7h6V8H8v5H2l10 10z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 15v-3a2 2 0 00-2-2h-1M7 9l-3 3m0 0l3 3m-3-3H21"></path></svg>)
        ,
          
          
        },
        {
          title: 'Resources',
          fa: (<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6h8m0 0v12m0-12L9 3m3 15l-3 3 3-3 3 3M3 14l3 3-3 3M21 5v6m0 0v6m0-6h-6"></path></svg>)
        ,
        },
        {
          title: 'Support',
          fa: (<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 21l9-9-9-9-9 9 9 9z"></path></svg>)
        ,
        },
          {
            title: 'Settings',
            fa: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          ,
            items: [
            //   { title: 'All Classes'},
            //   { title: 'Class Detail'},
            //   { title: 'Add New Class'},
              
            ],
          },  
          
                                        
        // Add more major lists as needed
      ];



    return (
        <div className="w-2/12  bg-[#336eec]">
            <div className="hidden md:block p-4 text-center text-[#f2f3f8] font-extrabold">
                 <div className="text-3xl">
                     <a href="index.html">DEEPRESSION ANALYSIS PORTAL</a>
                 </div>
            </div>
             <div className="p-2 bg-[#336eec]">
                 <ul className="text-white">
                    {majorLists.map((list, index) => (
                        <MajorList key={index} index={index} fa={list.fa} title={list.title} link={list.link}  />
                    ))}
                     
                 </ul>
             </div>
         </div>
    )
}

export default SideBar