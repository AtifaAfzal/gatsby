import React from 'react';
import {FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon} from "react-share";



const ShareButtons =(shareUrl) =>{
    console.log("share button data:", shareUrl);
    console.log("share button data2:", shareUrl);
   
    return(                
    <div>
    <FacebookShareButton url={shareUrl.url}>
    <FacebookIcon size={32} round={true} />
    </FacebookShareButton>
    <TwitterShareButton url={shareUrl.url}>
    <TwitterIcon size={32} round={true} />
    </TwitterShareButton>
    </div>





    )
}
export default ShareButtons;