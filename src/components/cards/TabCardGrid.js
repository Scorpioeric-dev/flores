import React, { useState } from "react";
import { motion } from "framer-motion";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import { SectionHeading } from "components/misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import { ReactComponent as StarIcon } from "images/star-icon.svg";
import { ReactComponent as SvgDecoratorBlob1 } from "images/svg-decorator-blob-5.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "images/svg-decorator-blob-7.svg";
import ResponsiveVideoEmbed from "../../helpers/ResponsiveVideoEmbed.js";

const HeaderRow = tw.div`flex justify-between items-center flex-col xl:flex-row`;
const Header = tw(SectionHeading)``;
const TabsControl = tw.div`flex flex-wrap bg-gray-200 px-2 py-2 rounded leading-none mt-12 xl:mt-0`;

const TabControl = styled.div`
  ${tw`cursor-pointer px-6 py-3 mt-2 sm:mt-0 sm:mr-2 last:mr-0 text-gray-600 font-medium rounded-sm transition duration-300 text-sm sm:text-base w-1/2 sm:w-auto text-center`}
  &:hover {
    ${tw`bg-gray-300 text-gray-700`}
  }
  ${(props) => props.active && tw`bg-primary-500! text-gray-100!`}
  }
`;

const TabContent = tw(
  motion.div
)`mt-6 flex flex-wrap sm:-mr-10 md:-mr-6 lg:-mr-12`;
const CardContainer = tw.div`mt-10  lg:w-1/2 lg:w-1/3 lg:w-1/4 sm:pr-10 md:pr-6 lg:pr-12`;
const Card = tw(
  motion.a
)`bg-gray-300  block max-w-xs mx-auto sm:max-w-none sm:mx-0`;
const CardImageContainer = styled.div`
  ${(props) =>
    css`
      background-image: url("${props.imageSrc}");
    `}
  ${tw`h-56 xl:h-64 bg-center bg-cover relative rounded-t`}
`;
const CardRatingContainer = tw.div`leading-none absolute inline-flex bg-gray-100 bottom-0 left-0 ml-4 mb-4 rounded-full px-5 py-2 items-end`;
const CardRating = styled.div`
  ${tw`mr-1 text-sm font-bold flex items-end`}
  svg {
    ${tw`w-4 h-4 fill-current text-orange-400 mr-1`}
  }
`;

const CardHoverOverlay = styled(motion.div)`
  background-color: rgba(255, 255, 255, 0.5);
  ${tw`absolute inset-0 flex justify-center items-center`}
`;
const CardButton = tw(PrimaryButtonBase)`text-sm hocus:bg-black `;
const CardText = tw.div`p-4 text-gray-900`;
const CardTitle = tw.h5`text-base font-semibold group-hover:text-primary-500`;
const CardContent = tw.p`mt-1 text-sm font-medium text-gray-600`;

const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
  ${tw`pointer-events-none -z-20 absolute right-0 top-0 h-64 w-64 opacity-15 transform translate-x-2/3 -translate-y-12 text-pink-400`}
`;
const DecoratorBlob2 = styled(SvgDecoratorBlob2)`
  ${tw`pointer-events-none -z-20 absolute left-0 bottom-0 h-80 w-80 opacity-15 transform -translate-x-2/3 text-primary-500`}
`;

const StyledResponsiveVideoEmbed = styled(ResponsiveVideoEmbed)`
  padding-bottom: 56.25% !important;
  padding-top: 0px !important;
  ${tw`rounded`}
  iframe {
    ${tw`rounded bg-black shadow-xl`}
  }
`;

export default ({
  heading = "Checkout the Menu",
  tabs = {
    Videos: [
      {
        imageSrc: "https://www.youtube.com/embed/2utQ11SU1fY",
        title:
          "American Greed: The First 10 Minutes - Inside El Chapo's Empire | CNBC Prime",
        url: "https://www.youtube.com/embed/2utQ11SU1fY",
      },
      {
        imageSrc: "https://www.youtube.com/embed/2utQ11SU1fY",
        title:
          "American Greed: The First 10 Minutes - Inside El Chapo's Empire | CNBC Prime",
        url: "https://www.youtube.com/embed/2utQ11SU1fY",
      },
      {
        imageSrc: "https://www.youtube.com/embed/2utQ11SU1fY",
        title:
          "American Greed: The First 10 Minutes - Inside El Chapo's Empire | CNBC Prime",
        url: "https://www.youtube.com/embed/2utQ11SU1fY",
      },
      {
        imageSrc: "https://www.youtube.com/embed/2utQ11SU1fY",
        title:
          "American Greed: The First 10 Minutes - Inside El Chapo's Empire | CNBC Prime",
        url: "https://www.youtube.com/embed/2utQ11SU1fY",
      },
      {
        imageSrc: "https://www.youtube.com/embed/2utQ11SU1fY",
        title:
          "American Greed: The First 10 Minutes - Inside El Chapo's Empire | CNBC Prime",
        url: "https://www.youtube.com/embed/2utQ11SU1fY",
      },
      {
        imageSrc: "https://www.youtube.com/embed/2utQ11SU1fY",
        title:
          "American Greed: The First 10 Minutes - Inside El Chapo's Empire | CNBC Prime",
        url: "https://www.youtube.com/embed/2utQ11SU1fY",
      },
      {
        imageSrc: "https://www.youtube.com/embed/2utQ11SU1fY",
        title:
          "American Greed: The First 10 Minutes - Inside El Chapo's Empire | CNBC Prime",
        url: "https://www.youtube.com/embed/2utQ11SU1fY",
      },
      {
        imageSrc: "https://www.youtube.com/embed/2utQ11SU1fY",
        title:
          "American Greed: The First 10 Minutes - Inside El Chapo's Empire | CNBC Prime",
        url: "https://www.youtube.com/embed/2utQ11SU1fY",
      },
    ],
    Articles: getArticles(),
  },
}) => {
  /*
   * To customize the tabs, pass in data using the `tabs` prop. It should be an object which contains the name of the tab
   * as the key and value of the key will be its content (as an array of objects).
   * To see what attributes are configurable of each object inside this array see the example above for "Starters".
   */
  const tabsKeys = Object.keys(tabs);
  const [activeTab, setActiveTab] = useState(tabsKeys[0]);
  console.log(activeTab);
  return (
    <Container>
      <ContentWithPaddingXl>
        <HeaderRow>
          <Header>{heading}</Header>
          <TabsControl>
            {Object.keys(tabs).map((tabName, index) => (
              <TabControl
                key={index}
                active={activeTab === tabName}
                onClick={() => setActiveTab(tabName)}
              >
                {tabName}
              </TabControl>
            ))}
          </TabsControl>
        </HeaderRow>
        {tabsKeys.map((tabKey, index) => (
          <TabContent
            key={index}
            variants={{
              current: {
                opacity: 1,
                scale: 1,
                display: "flex",
              },
              hidden: {
                opacity: 0,
                scale: 0.8,
                display: "none",
              },
            }}
            transition={{ duration: 0.4 }}
            initial={activeTab === tabKey ? "current" : "hidden"}
            animate={activeTab === tabKey ? "current" : "hidden"}
          >
            {tabs[tabKey].map((card, index) => (
              <CardContainer key={index}>
                <Card
                  className="group"
                  href={card.url}
                  initial="rest"
                  whileHover="hover"
                  animate="rest"
                >
                  {console.log(activeTab)}
                  {activeTab == "Videos" ? (
                    <StyledResponsiveVideoEmbed
                      url={card.imageSrc}
                    ></StyledResponsiveVideoEmbed>
                  ) : (
                    <CardImageContainer imageSrc={card.imageSrc}>
                      <CardHoverOverlay
                        variants={{
                          hover: {
                            opacity: 1,
                            height: "auto",
                          },
                          rest: {
                            opacity: 0,
                            height: 0,
                          },
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <CardButton>Click to read</CardButton>
                      </CardHoverOverlay>
                    </CardImageContainer>
                  )}

                  <CardText>
                    <CardTitle>{card.title}</CardTitle>
                    <CardContent>{card.content}</CardContent>
                  </CardText>
                </Card>
              </CardContainer>
            ))}
          </TabContent>
        ))}
      </ContentWithPaddingXl>
      <DecoratorBlob1 />
      <DecoratorBlob2 />
    </Container>
  );
};

/* This function is only there for demo purposes. It populates placeholder cards */
const getArticles = () => {
  const cards = [
    {
      imageSrc:
        "https://www.latinousa.org/wp-content/uploads/2018/09/cartelwives.jpg",
      title: "Married to the Cartel",
      content: "Joaquin “El Chapo” Guzman is renowned around the world as the now-imprisoned leader of Mexico’s Sinaloa Cartel, described by the U.S. Justice Department as one of the most “prolific, violent and powerful” drug cartels ever.",
      url: "https://www.latinousa.org/2018/09/18/marriedtothecartel/",
    },
    {
      imageSrc:
        "https://static01.nyt.com/images/2019/07/17/universal/es/17chapo-01-ES/merlin_155762247_4136c838-8214-42ba-913a-deb8da6bb5ea-superJumbo.jpg",
      title: "Mexico Will Seek to Extradite ‘El Chapo’ After Drug Lord’s Recapture",
      content: "Top Story – The office of Mexico’s attorney general announced on Sunday that it has launched extradition proceedings against recaptured drug kingpin Joaquín “El Chapo” Guzmán, but the Sinaloa Cartel leader is sure to battle his transfer to the United States, where he is far less likely to escape from prison for a third time.",
      url: "https://www.latinousa.org/2016/01/11/mexico-will-seek-to-extradite-el-chapo/",
    },
    {
      imageSrc:
        "https://assets.vogue.com/photos/5b2d0771dfb55f5d708a2c80/master/w_2560%2Cc_limit/00-story-cartel-wives.jpg",
      title: "Two Hours in an Undisclosed Location With the Cartel Wives Whose Husbands Helped Bring Down El Chapo",
      content: "Sometime in the last month, I was asked if I wanted to talk to two women for a story. The women had written a book, Cartel Wives, about their lives as wives of twin brothers who just so happened to be right-hand men to Joaquín “El Chapo” Guzman, the notorious head of Mexico’s Sinaloa cartel.",
      url: "https://www.vogue.com/article/el-chapo-cartel-wives-interview",
    },
    {
      imageSrc:
        "https://pisco.meaww.com/5cffb4a0-8148-4c23-86f3-2f1b6d8e222b.png",
      title: "Spouses of twins who turned on ‘El Chapo’ tell story of ‘Cartel Wives’",
      content: "Mia Flores and Olivia Flores live under assumed names. To their neighbours, they are typical single mothers, their days filled with school runs and PTA meetings. But Olivia and Mia are anything but ordinary. They live in fear, hiding from a past that included wealth beyond their wildest dreams but also more danger than they ever could have imagined.",

      url: "https://chicago.suntimes.com/2017/6/17/18342603/spouses-of-twins-who-turned-on-el-chapo-tell-story-of-cartel-wives",
    },
    {
      imageSrc:
        "https://1.bp.blogspot.com/-RZyqkfEuhRA/X1kToA2B0yI/AAAAAAAArbE/b6ki5JWl8fseyILG0K602jXWj69tLfj4ACLcBGAsYHQ/s1600/fflores%2Btin%2Bback%2Bin%2Bthe%2Bday%2B%25281%2529watermark.jpg",
      title: "A dad's influence: How the Flores twins learned the drug trade at home",
      content: "That the Flores twins would inherit their father's trade was hardly surprising given what they were exposed to at a young age. When he returned home from prison after eight years, the elder Flores taught his boys tricks they would use and improve on later.",
      
      url: "https://www.chicagotribune.com/news/ct-father-flores-brothers-met-20150507-story.html",
    },
    {
      imageSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMuJK-j_JBXL5GYIZd1Otio29nEur73ERIcw&usqp=CAU",
      title: " Chicago hub of the Sinaloa cartel",
      content: "Twin brothers Pedro and Margarito Flores, from Chicago's Little Village, became wholesale distributors for Mexico's infamous Sinaloa cartel but flipped on the notoriously violent drug empire and helped take down kingpin Joaquin 'El Chapo' Guzman.",
      
      url: "https://www.nydailynews.com/news/crime/twin-drug-kingpins-14-years-snitched-el-chapo-article-1.2093887",
    },
    {
      imageSrc:
        "https://pisco.meaww.com/df35c7c6-1130-469c-9b1a-4f5af5a8a125.635148716",
      title: "Drug lord 'El Chapo' escapes prison using 1-mile tunnel, Mexico says",
      content: "Mexico mounted an all-out manhunt Sunday for its most powerful drug lord, Joaquin  Guzman, who escaped from a maximum security prison through a 1.5-kilometer (1 mile) tunnel from a small opening in the shower area of his cell, according to the country's top security official.",
      url: "https://www.capitalgazette.com/news/nation-world/ct-joaquin-el-chapo-guzman-escapes-20150712-story.html",
    },
    {
      imageSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfLmr00ZV-e7va6g2hycAeohAbYaahAFlyvg&usqp=CAU",
      title: "Chicago drug dealer who snitched on El Chapo seeks early prison release over fears he could catch coronavirus",
      content:"Margarito Flores is requesting to be released from prison because he fears catching coronavirus behind bars"
,
      url: "https://www.dailymail.co.uk/news/article-8340793/Chicago-drug-dealer-snitched-El-Chapo-seeks-early-prison-release-coronavirus-fears.html"
    },
  ];

  // Shuffle array
  return cards.sort(() => Math.random() - 0.5);
};
