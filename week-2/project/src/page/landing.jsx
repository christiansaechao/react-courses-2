import React, { useState } from "react";
import { KeyFeatures } from "../components/KeyFeatures";
import { WhatOurDancers } from "../components/WhatOurDancers";
import { HeroSection } from "../components/HeroSection";
import { FooterSection } from "../components/FooterSection";

const Landing = () => {
  const [userComments, setUserComments] = useState([
    {
      img: "https://avatar.iran.liara.run/public",
      comment:
        "Found my perfect salsa partner! This app is a game-changer for dancers.",
      username: "Maria S.",
    },
    {
      img: "https://avatar.iran.liara.run/public",
      comment: "So easy to use! I've met so many amazing dancers in my city.",
      username: "David L.",
    },
    {
      img: "https://avatar.iran.liara.run/public",
      comment:
        "Highly recommend for anyone passionate about dance. Great community!",
      username: "Chloe P.",
    },
  ]);

  const features1 = [
    {
      img: "https://images.unsplash.com/photo-1642052502412-483a09ecdd37?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8MXx8bW9iaWxlJTI1MjBkYW5jZSUyNTIwY29ubmVjdGlvbnxlbnwxfDB8fHwxNzUzNzMwMDA5fDA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Swipe to Connect",
      description:
        "Easily find compatible dance partners with a simple swipe interface",
    },
    {
      img: "https://images.unsplash.com/photo-1520410973988-f551cf36c60d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8Mnx8bW9iaWxlJTI1MjBkYW5jZSUyNTIwcGFydG5lcnxlbnwxfDB8fHwxNzUzNzI5OTk2fDA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Diverse Dance Styles",
      description:
        "From ballroom to hip-hop, find partners for any dance genre",
    },
    {
      img: "https://images-ext-1.discordapp.net/external/qxkF34W4Ir560w947oHA83fvZiXg-cpRxu5_sA21xG4/%3Fcrop%3Dentropy%26cs%3Dtinysrgb%26fit%3Dmax%26fm%3Djpg%26ixid%3DM3w2MzQ2fDB8MXxzZWFyY2h8M3x8bW9iaWxlJTI1MjBkYW5jZSUyNTIwcGFydG5lcnxlbnwxfDB8fHwxNzUzNzI5OTk2fDA%26ixlib%3Drb-4.1.0%26q%3D80%26w%3D1080/https/images.unsplash.com/photo-1718426572483-26b79a1c9c5a?format=webp&width=2094&height=1398",
      title: "Location Based Matching",
      description:
        "Discover dancers in your local meetup area for convenient matching",
    },
  ];

  const features2 = [
    {
      img: "https://images.unsplash.com/photo-1647880087466-a1318b812de5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8Mnx8bW9iaWxlJTI1MjBkYW5jZSUyNTIwY29ubmVjdGlvbnxlbnwxfDB8fHwxNzUzNzMwMDA5fDA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "1. Create Your Profile",
      description: "Showcase your dance style, experience, and preferences",
    },
    {
      img: "https://images.unsplash.com/photo-1726607288637-a646ddd3814a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8M3x8bW9iaWxlJTI1MjBkYW5jZSUyNTIwY29ubmVjdGlvbnxlbnwxfDB8fHwxNzUzNzMwMDA5fDA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "2. Discover Matches",
      description:
        "Browse profiles of dancers near you and find your perfect match",
    },
    {
      img: "https://images.unsplash.com/photo-1642052502412-483a09ecdd37?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8MXx8bW9iaWxlJTI1MjBkYW5jZSUyNTIwY29ubmVjdGlvbnxlbnwxfDB8fHwxNzUzNzMwMDA5fDA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "3. Connect & Dance",
      description: "Chat with matches and arrange your next dance session",
    },
  ];

  return (
    <div>
      <HeroSection
        heroTitle="Find Your Dance Partner"
        heroText="Connect with Dancers near you."
        buttonText="Get Started"
        actionCallText="Swipe, match, and dance!"
      />
      <KeyFeatures features={features1} header="Key Features" />
      <KeyFeatures features={features2} header="How It Works" />

      <div className="flex flex-col justify-center items-center gap-2">
        <h1 className="text-2xl">What Our Dancers Say</h1>
        {userComments.map(({ img, comment, username }) => (
          <WhatOurDancers
            username={username}
            profilePic={img}
            comment={comment}
          />
        ))}
        <FooterSection
          title="Ready to Dance?"
          downloadCall="Download the app now and find your perfect dance partner!"
        />
      </div>
    </div>
  );
};

export default Landing;
