import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./Sidebar.scss";
import ExpandMoreOutlined from "@mui/icons-material/ExpandMoreOutlined";
import AddIcon from "@mui/icons-material/Add";

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
      <div className="sidebarChannels">
        <div className="sidebarChannelsHeader">
          <div className="sidebarHeader">
            <ExpandMoreOutlined />
            <h4>プログラミングチャンネル</h4>
          </div>
          <AddIcon className="sidebarAddChannel" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
