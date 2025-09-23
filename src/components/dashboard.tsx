import { Link } from "react-router-dom";
import Headings from "./headings";
import { Button } from "./ui/button";
import { Plus } from "lucide-react";
import { Separator } from "./ui/separator";

const Dashboard = () => {
  return (
    <>
      <div className="flex w-full items-center justify-between">
        {/* Heading */}
        <Headings
          title="Dashboard"
          description="Create and start your AI Mock INterview"
        />
        <Link to={"/generate/create"}>
          <Button size={"sm"}>
            <Plus /> Add New
          </Button>
        </Link>
      </div>

      <Separator className="my-8" />
      {/* Content Section */}
    </>
  );
};

export default Dashboard;
