import { Navbar } from "@/components/Navbar";

export function PageShell({ children }) {
  return (
    <div className="min-h-screen overflow-x-hidden bg-radial-lux text-white">
      <Navbar />
      {children}
    </div>
  );
}
