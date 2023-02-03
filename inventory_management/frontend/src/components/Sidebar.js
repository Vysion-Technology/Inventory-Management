// import React, { useState } from "react";
// import styled from "styled-components";
// import { Link } from "react-router-dom";
// import * as FaIcons from "react-icons/fa";
// import * as AiIcons from "react-icons/ai";
// import { SidebarData } from "./SidebarData";
// import SubMenu from "./SubMenu";
// import { IconContext } from "react-icons/lib";

// const Nav = styled.div`
// background: #15171c;
// height: 80px;
// display: flex;
// justify-content: flex-start;
// align-items: center;
// `;

// const NavIcon = styled(Link)`
// margin-left: 2rem;
// font-size: 2rem;
// height: 80px;
// display: flex;
// justify-content: flex-start;
// align-items: center;
// `;

// const SidebarNav = styled.nav`
// background: #15171c;
// width: 250px;
// height: 100vh;
// display: flex;
// justify-content: center;
// position: fixed;
// top: 0;
// left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
// transition: 350ms;
// z-index: 10;
// `;

// const SidebarWrap = styled.div`
// width: 100%;
// `;

// const Sidebar = () => {
// const [sidebar, setSidebar] = useState(false);

// const showSidebar = () => setSidebar(!sidebar);

// return (
// 	<>
// 	<IconContext.Provider value={{ color: "#fff" }}>
// 		<Nav>
// 		<NavIcon to="#">
// 			<FaIcons.FaBars onClick={showSidebar} />
// 		</NavIcon>
// 		<h1
// 			style={{ textAlign: "center",
// 					marginLeft: "200px",
// 					color: "green" }}
// 		>
// 			Vehicle Inventory
// 		</h1>
// 		</Nav>
// 		<SidebarNav sidebar={sidebar}>
// 		<SidebarWrap>
// 			<NavIcon to="#">
// 			<AiIcons.AiOutlineClose onClick={showSidebar} />
// 			</NavIcon>
// 			{SidebarData.map((item, index) => {
// 			return <SubMenu item={item} key={index} />;
// 			})}
// 		</SidebarWrap>
// 		</SidebarNav>
// 	</IconContext.Provider>
// 	</>
// );
// };

// export default Sidebar;
import "../style.css";
import React, { useState } from "react";
import {
  RiHome4Line,
  RiTeamLine,
  RiCalendar2Line,
  RiFolder2Line,
  RiUserFollowLine,
  RiPlantLine,
  RiStackLine,
  RiUserUnfollowLine
} from "react-icons/ri";
import { FiChevronsLeft, FiChevronsRight } from "react-icons/fi/";
import {
  Sidebar,
  SubMenu,
  Menu,
  MenuItem
  //useProSidebar
} from "react-pro-sidebar";
import { Link } from "react-router-dom";

//import Active from "./Active.js";

function Sidebars() {
  //const { collapseSidebar } = useProSidebar();
  const [collapsed, setCollapsed] = useState(false);

  const [toggled, setToggled] = useState(false);

  const handleCollapsedChange = () => {
    setCollapsed(!collapsed);
  };
  const handleToggleSidebar = (value) => {
    setToggled(value);
  };

  return (
    <div>
      <Sidebar
        className={`app ${toggled ? "toggled" : ""}`}
        style={{ height: "100%", position: "absolute" }}
        // collapsed={collapsed}
        // toggled={toggled}
        handleToggleSidebar={handleToggleSidebar}
        handleCollapsedChange={handleCollapsedChange}
      >
        <main>
          {/* <Menu>
            {collapsed ? (
              <MenuItem
                icon={<FiChevronsRight />}
                onClick={handleCollapsedChange}
              ></MenuItem>
            ) : (
              <MenuItem
                suffix={<FiChevronsLeft />}
                onClick={handleCollapsedChange}
              >
                <div
                  style={{
                    padding: "9px",
                    // textTransform: "uppercase",
                    fontWeight: "bold",
                    fontSize: 14,
                    letterSpacing: "1px"
                  }}
                >
                  YOUR LOGO!..
                </div>
              </MenuItem>
            )}
            <hr />
          </Menu> */}

          <Menu>
            {/* <MenuItem icon={<RiHome4Line />}>Dashboard</MenuItem> */}
            <SubMenu defaultOpen label={"Professors"} icon={<RiTeamLine />}>
              <MenuItem
                component={<Link to="/consumable" />}
                icon={<RiUserFollowLine />}
              >
                Active{" "}
              </MenuItem>
              <MenuItem icon={<RiUserUnfollowLine />}>Ex Professors</MenuItem>
              <MenuItem icon={<RiCalendar2Line />}>Probation Period</MenuItem>
            </SubMenu>
            {/* <SubMenu defaultOpen label={"Records"} icon={<RiFolder2Line />}>
              <MenuItem icon={<RiStackLine />}>Senior Students</MenuItem>
              <MenuItem icon={<RiPlantLine />}>Junior Students</MenuItem>
            </SubMenu> */}
          </Menu>
        </main>
      </Sidebar>
    </div>
  );
}
export default Sidebars;