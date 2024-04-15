import React from 'react';

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      <div className="min-h-screen min-w-[20%] bg-red-500">sidebar</div>
      <div>{children}</div>
    </div>
  );
}
