import React from "react";
import { SocialIcon } from 'react-social-icons';

function SocialButtons() {
  return (
    <div className="flex pt-5 space-x-5 ">
      <div className="socialLink hover:animate-pulse hover:shadow-md ease-in-out">
        <SocialIcon url="https://www.linkedin.com/in/ernestang98/" target="_blank" rel="noopener noreferrer"/>
      </div>
      <div className="socialLink hover:animate-pulse hover:shadow-md ease-in-out">
        <SocialIcon url="https://www.github.com/ernestang98/" target="_blank" rel="noopener noreferrer"/>
      </div>
      <div className="socialLink hover:animate-pulse hover:shadow-md ease-in-out">
        <SocialIcon url="https://ernestang.netlify.app" target="_blank" rel="noopener noreferrer"/>
      </div>
    </div>
  );
}

export default SocialButtons;
