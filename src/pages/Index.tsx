import { motion } from "framer-motion";

const Index = () => {
  return (
    <div className="flex min-h-svh bg-background text-foreground antialiased">
      {/* Sidebar */}
      <aside className="w-60 flex-shrink-0 bg-secondary/50 shadow-separator-v flex flex-col">
        <div className="h-14 flex items-center px-6">
          <h1 className="text-sm font-semibold tracking-tight">Hit Meter Pro</h1>
        </div>
        <nav className="flex-1 px-3 py-4">
          <div className="h-8 w-full rounded-md bg-accent/80 flex items-center px-3">
            <span className="text-xs font-medium text-foreground/70">Overview</span>
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        <header className="h-14 flex items-center px-8 shadow-separator">
          <h2 className="text-sm font-medium text-muted-foreground">Dashboard</h2>
        </header>

        <motion.section
          className="flex-1 p-8"
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="h-full w-full rounded-xl shadow-border-sm bg-secondary/30 border border-dashed border-border flex flex-col items-center justify-center gap-2">
            <span className="text-sm text-muted-foreground font-medium">
              No active meters
            </span>
            <span className="text-xs text-muted-foreground/60">
              Create your first tracker to begin.
            </span>
          </div>
        </motion.section>
      </main>
    </div>
  );
};

export default Index;
