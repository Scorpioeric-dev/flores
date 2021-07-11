import React from "react";
import tw from "twin.macro";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/TwoColumnWithVideo.js";
import Features from "components/forms/SimpleContactUs.js";
import MainFeature from "components/features/TwoColWithButton.js";
import TabGrid from "components/cards/TabCardGrid.js";
import chefIconImageSrc from "images/chef-icon.svg";
import celebrationIconImageSrc from "images/celebration-icon.svg";
import shopIconImageSrc from "images/shop-icon.svg";

export default () => {
  const Subheading = tw.span`tracking-wider text-sm font-medium`;
  const HighlightedText = tw.span`bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block`;
  const HighlightedTextInverse = tw.span`bg-gray-100 text-primary-500 px-4 transform -skew-x-12 inline-block`;
  const Description = tw.span`inline-block mt-8`;
  const imageCss = tw`rounded-4xl`;
  return (
    <AnimationRevealPage>
      <Hero
        heading={
          <>
            Get all your reported stories about the Chicago Flores Twins and the Cartel Wives 
          </>
        }
        primaryButtonText="Get Started"
        primaryButtonUrl="#"
        watchVideoButtonText="Watch Video"
        watchVideoYoutubeUrl="https://www.youtube.com/embed/2utQ11SU1fY"
        imageSrc="https://i.dailymail.co.uk/i/pix/2017/06/12/15/415D17CA00000578-0-image-a-29_1497276675634.jpg"
      />
      <MainFeature
        subheading={<Subheading>Vivian & Valeria Flores</Subheading>}
        heading={
          <>
            Las Esposas Del Cartel
            <wbr />
          </>
        }
        description={
          <Description>
          Federal prosecutors have indicted Mia and Olivia Flores, the wives of twin brothers who became key informants in the case against drug kingpin Joaquin "El Chapo" Guzman..
            <br />
            <br />
            From 1998 to 2008, twin brothers Pedro and Margarito Flores ran a nearly $2 billion drug ring that operated in Chicago and other major US cities..
          </Description>
        }
        show={false}
        buttonRounded={false}
        primaryButton={false}
        textOnLeft={true}
        primaryButtonText="Latest Offers"
        imageSrc={
          "https://image.cnbcfm.com/api/v1/image/106884238-1621286304811-AG_S14B_EP_196_EL_CHAPO_SNEAK_PEEK01.png?v=1621286327"
        }
        imageCss={imageCss}
        imageDecoratorBlob={true}
        imageDecoratorBlobCss={tw`left-1/2 -translate-x-1/2 md:w-32 md:h-32 opacity-25`}
      />
      {/* TabGrid Component also accepts a tabs prop to customize the tabs and its content directly. Please open the TabGrid component file to see the structure of the tabs props.*/}
      <TabGrid
        heading={
          <>
            <HighlightedText>Reported Stories.</HighlightedText>
          </>
        }
      />
      <Features 
      />
    </AnimationRevealPage>
  );
};
