import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./Sidebar.scss";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarLeft">{/* SidebarLeft */}</div>
      <div className="serverIcon">
        <img src="" alt="" />
      </div>
      <div className="sidebarRight">
        <div className="sidebarTop">
          <h3>Server Name</h3>
          <ExpandMoreIcon />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
