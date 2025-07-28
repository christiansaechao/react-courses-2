import React from "react";

export const WhatOurDancers = ({ comment, username, profilePic }) => {
  return (
      <div className="flex flex-col justify-center items-center gap-4 rounded-md p-6 bg-white/70">
        <img src={profilePic} className="rounded-4xl h-[50px]" />
        <div className="italic text-slate-200">"{comment}"</div>
        <h3 className="text-xl">- {username}</h3>
        <img className="rounded-xl w-full h-35" src="https://images.unsplash.com/photo-1734941167971-056c56759c39?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8MXx8aGFwcHklMjUyMGNvdXBsZSUyNTIwZGFuY2luZ3xlbnwxfDB8fHwxNzUzNzMwMDE3fDA&ixlib=rb-4.1.0&q=80&w=1080" />
      </div>
  );
};
