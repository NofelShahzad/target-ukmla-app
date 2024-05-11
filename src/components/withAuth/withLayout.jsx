import SideBar from "../navbars/sidebar/SideBar";
import DashboardHeader from "../navbars/dashboardHeader/DashboardHeader";

export default function withLayout(Component) {
  const WrappedComponent = (props) => {
    return (
      <main className="dashboard-wrapper d-flex">
        <SideBar />
        <section className="main-content dashboard-content container w-100">
          <DashboardHeader />
          <Component {...props} />
        </section>
      </main>
    );
  };

  return WrappedComponent;
}
