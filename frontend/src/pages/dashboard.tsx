import { withAuth } from "src/auth/hoc";

const Page = () => {
  return <div>dashboard lol</div>;
};

export default withAuth(Page);
