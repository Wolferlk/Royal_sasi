import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './sidebar.scss';

const  hig = 0;

const sidebarNavItems = [
  {
    display: "Dashboard",
    icon: <i className="bx bx-home"></i>,
    to: "/manager/dashboard",
    section: "Dashboard",
    hig: 0,
  },
  {
    display: "Additional Class",
    icon: <i className="bx bx-star"></i>,
    // to: './pages/manager',
    hig: 65,
    section: "started",
  },
  {
    display: "Enrollments",
    icon: <i className="bx "></i>,
    to: "/manager",
    section: "Enroll",
    hig: "125",
  },
  {
    display: "Payments",
    icon: <i className="bx bx-user"></i>,
    // to: '/user',
    section: "Payments",
  },
  {
    display: "TimeTable",
    icon: <i className="bx bx-receipt"></i>,
    // to: '/order',
    section: "TimeTable",
  },
  {
    display: "Attendance",
    icon: <i className="bx bx-user"></i>,
    to: "/student",
    section: "Payments",
  },
  {
    display: "Salary",
    icon: <i className="bx bx-user"></i>,
    // to: '/user',
    section: "Payments",
  },
  {
    display: "FeedBack",
    icon: <i className="bx bx-user"></i>,
    // to: '/user',
    section: "Payments",
  },
  {
    display: "Profile",
    icon: <i className="bx bx-user"></i>,
    // to: '/user',
    section: "Payments",
  },
];

const Sidebar = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [stepHeight, setStepHeight] = useState(0);
    const sidebarRef = useRef();
    const indicatorRef = useRef();
    const location = useLocation();

    useEffect(() => {
        setTimeout(() => {
            const sidebarItem = sidebarRef.current.querySelector('.sidebar__menu__item');
            indicatorRef.current.style.height = `${sidebarItem.clientHeight}px`;
            setStepHeight(sidebarItem.clientHeight);
        }, 50);
    }, []);

    // change active index
    useEffect(() => {
        const curPath = window.location.pathname.split('/')[1];
        const activeItem = sidebarNavItems.findIndex(item => item.section === curPath);
        setActiveIndex(curPath.length === 0 ? 0 : activeItem);
    }, [location]);

    return <div className='sidebar'>
        
        <div ref={sidebarRef} className="sidebar__menu">
            <div
                ref={indicatorRef}
                className="sidebar__menu__indicator"
                style={{
                    //transform: `translateX(-50%) translateY({hig}px)`
                    //transform: `translateX(-50%) translateY(${activeIndex * stepHeight}px)`
                     transform: `translateX(-50%) translateY(65px)`
                }}
            ></div>
            {
                sidebarNavItems.map((item, index) => (
                    <Link to={item.to} key={index}>
                        <div className={`sidebar__menu__item ${activeIndex === index ? 'active' : ''}`}>
                            <div className="sidebar__menu__item__icon">
                                {item.icon}
                            </div>
                            <div className="sidebar__menu__item__text">
                                {item.display}
                            </div>
                        </div>
                    </Link>
                ))
            }
        </div>
    </div>;
};

export default Sidebar;