import React from "react";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownSection,
  DropdownTrigger,
} from "@nextui-org/react";
import { RiShareForwardLine } from "react-icons/ri";
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  RedditShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
  RedditIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from "react-share";

interface PostProps {
  shareData: {
    title: string;
    description: string;
    url: string;
  };
}

const SharePost = ({ shareData }: PostProps): JSX.Element => {
  return (
    <div>
      <Dropdown>
        <DropdownTrigger>
          <Button variant="bordered">
            <RiShareForwardLine className="text-2xl text-gray-900" />
          </Button>
        </DropdownTrigger>
        <DropdownMenu variant="faded" aria-label="Dropdown">
          <DropdownSection title="Share">
            <DropdownItem key="share">
              <div className="flex gap-3 items-center">
                <FacebookShareButton
                  url={shareData?.url}
                  title={shareData?.description}
                >
                  <FacebookIcon size={32} round />
                </FacebookShareButton>
                <TwitterShareButton
                  url={shareData?.url}
                  title={shareData?.description}
                  via={shareData?.title}
                  hashtags={["TechTips", "TechTricks"]}
                >
                  <TwitterIcon size={32} round />
                </TwitterShareButton>
                <WhatsappShareButton
                  url={shareData?.url}
                  title={shareData?.description}
                  separator=":: "
                >
                  <WhatsappIcon size={32} round />
                </WhatsappShareButton>
                <LinkedinShareButton
                  url={shareData?.url}
                  title={shareData?.title}
                  summary={shareData?.description}
                  source="Tech Tips & Tricks Hub"
                >
                  <LinkedinIcon size={32} round />
                </LinkedinShareButton>
                <RedditShareButton
                  url={shareData?.url}
                  title={shareData?.description}
                >
                  <RedditIcon size={32} round />
                </RedditShareButton>
              </div>
            </DropdownItem>
          </DropdownSection>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default SharePost;
