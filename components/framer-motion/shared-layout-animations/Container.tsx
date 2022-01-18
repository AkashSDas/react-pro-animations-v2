import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const tabs = [
  { name: "Amazing", emoji: "🔥" },
  { name: "Haha", emoji: "😆" },
  { name: "Love", emoji: "💙" },
  { name: "Sad", emoji: "😢" },
];

const Container = () => {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  return (
    <div>
      <nav>
        <ul className="flex justify-between">
          {tabs.map((t) => (
            <li
              key={t.name}
              onClick={() => setSelectedTab(t)}
              className="w-[200px] bg-card text-secondary text-center cursor-pointer"
            >
              <div className="py-4">{`${t.emoji} ${t.name}`}</div>
              {t.name === selectedTab.name ? (
                <motion.div
                  className="bg-[#8E06E2] h-[2px] bottom-[-1px]"
                  layoutId="underline"
                />
              ) : null}
            </li>
          ))}
        </ul>
      </nav>
      <main className="w-full bg-card py-[50px]">
        <AnimatePresence exitBeforeEnter>
          <motion.div
            key={selectedTab ? selectedTab.name : "empty"}
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.15 }}
            className="text-[200px] text-center"
          >
            {selectedTab ? selectedTab.emoji : "😋"}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
};

export default Container;
