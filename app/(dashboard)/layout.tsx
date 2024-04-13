import NewTodoForm from "@/components/NewTodoForm";

export default function DashboardLayout({ children }) {
  return (
    <>
      <h1>Dashboard Layout.</h1>
      <NewTodoForm />
      <div>{children}</div>
    </>
  );
}
