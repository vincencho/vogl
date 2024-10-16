import React from 'react';
import TrendSeedFeed from '../components/TrendSeedFeed';

const HomePage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Fashion Trend Feed</h1>
      <TrendSeedFeed />
    </div>
  );
};

export default HomePage;