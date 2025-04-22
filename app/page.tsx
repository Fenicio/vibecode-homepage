import Header from './components/Header';
import { WhatIsVibeCoding } from './components/marketing/what-is-vibe-coding';
import { QuickStart } from './components/marketing/quick-start';
import ToolsSection from './components/marketing/tools-section';
import { ArticlesSection } from './components/marketing/articles-section';
import { GlossarySection } from './components/marketing/glossary-section';
import { SocialSection } from './components/marketing/social-section';
import { SuccessStories } from './components/marketing/success-stories';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="flex justify-center py-12">
        <Header />
      </div>
      <main className="container mx-auto px-4 py-12 space-y-24">
        <WhatIsVibeCoding />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <QuickStart />
          <ToolsSection />
        </div>
        <ArticlesSection />
        <GlossarySection />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <SocialSection />
          <SuccessStories />
        </div>
      </main>
    </div>
  );
}
