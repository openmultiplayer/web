import { DocsSidebar } from "src/components/Sidebar";

const Page = () => {
  return (
    <div className="flex flex-column flex-row-ns overflow-none flex-auto">
      <DocsSidebar />
      <section className="mw7 pa3">
        <h1>Documentation</h1>
        <p>
          This is the new documentation site for open.mp and SA-MP. It's a work
          in progress!
        </p>
      </section>
    </div>
  );
};

export default Page;
