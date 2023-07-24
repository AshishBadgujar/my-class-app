import React, { useState } from 'react';
import WelcomeBanner from '../partials/dashboard/WelcomeBanner';
import DashboardCard10 from '../partials/dashboard/DashboardCard10'

function Home() {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
      <WelcomeBanner />
      <DashboardCard10 />

    </div>

  );
}

export default Home;