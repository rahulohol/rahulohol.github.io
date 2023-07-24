import { Box, Flex, Text, useDisclosure, VStack } from "@chakra-ui/react";
import "./Hero.css";
import { Clock } from "../utility/Component/Clock";
import { GmContact } from "../utility/Component/GmContact";
import { Gbtn } from "../utility/Component/Gbtn";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGithub, SiHackerrank, SiLeetcode, SiCodechef } from "react-icons/si";
import { useState } from "react";
import { motion } from "framer-motion";
import { AnimatedCharacters } from "../utility/Component/TextAnimation";

export const Hero = () => {
  const { isOpen, onToggle, onClose } = useDisclosure();
  const [bg, setBg] = useState("");
  const placeholderText = [
    { type: "heading2", text: "Hi I'm" },
    { type: "heading1", text: "RAHUL OHOL" },
    {
      type: "heading2",
      text: "Full Stack Web Developer",
    },
  ];
  const textContainer = {
    visible: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };
  return (
    <Box h="100vh" w={"100%"} bg={bg} transition="0.5s">
      <VStack className="name" justifyContent={"space-evenly"} h="full">
        <VStack align={"flex-start"} p="5px">
          <motion.div
            className="herotextbox"
            initial="hidden"
            animate="visible"
            variants={textContainer}
          >
            <div className="textContainer" style={{ marginTop: "20px" }}>
              {placeholderText.map((item, index) => {
                return <AnimatedCharacters {...item} key={index} />;
              })}
            </div>
          </motion.div>
          <Box>
            <Gbtn onToggle={onToggle} />
          </Box>
        </VStack>
        {/* <Text
          textAlign={"center"}
          fontSize={{ md: "20px" }}
          mt={3}
          // fontWeight={600}
        >
          Time is the architect of all achievements, and I'm committed to
          building a legacy!
        </Text> */}
        <Flex position={"relative"} top="25px" minW="250px" minH="250px">
          <Clock bg={bg} />
        </Flex>
        <Box
          width={{ base: "75%", sm: "60%", md: "60%", lg: "50%" }}
          // pt="25px"
          pt="50px"
          h="250px"
        >
          <div className="social">
            <ul className="sci">
              <li data-text="Github" style={{ "--clr": bg }}>
                <a
                  className="github"
                  href="https://github.com/rahulohol"
                  target={"_blank"}
                  rel="noreferrer"
                  onMouseEnter={() => setBg("#1b1d39")}
                  onMouseLeave={() => setBg("")}
                >
                  <Box className="gbtn">
                    <span>
                      <Box className="sicon">
                        <SiGithub />
                      </Box>
                    </span>
                  </Box>
                </a>
              </li>
              <li data-text="Leetcode">
                <a
                  className="leetcode"
                  href="https://leetcode.com/Rahulohol/"
                  target={"_blank"}
                  rel="noreferrer"
                  onMouseEnter={() => setBg("#1b1d39")}
                  onMouseLeave={() => setBg("")}
                >
                  <Box className="gbtn">
                    <span>
                      <Box className="sicon">
                        <SiLeetcode />
                      </Box>
                    </span>
                  </Box>
                </a>
              </li>
              <li data-text="Hackerrank">
                <a
                  className="hackerrank"
                  href="https://www.hackerrank.com/rahulohol01"
                  target={"_blank"}
                  rel="noreferrer"
                  onMouseEnter={() => setBg("#1b1d39")}
                  onMouseLeave={() => setBg("")}
                >
                  <Box className="gbtn">
                    <span>
                      <Box className="sicon">
                        <SiHackerrank />
                      </Box>
                    </span>
                  </Box>
                </a>
              </li>
              <li data-text="Codechef">
                <a
                  className="Codechef"
                  href="https://www.codechef.com/users/rahulohol"
                  target={"_blank"}
                  rel="noreferrer"
                  onMouseEnter={() => setBg("#1b1d39")}
                  onMouseLeave={() => setBg("")}
                >
                  <Box className="gbtn">
                    <span>
                      <Box className="sicon">
                        <SiCodechef />
                      </Box>
                    </span>
                  </Box>
                </a>
              </li>
              <li data-text="Linkedin">
                <a
                  className="linkedin"
                  href="https://www.linkedin.com/in/rahulohol/"
                  target={"_blank"}
                  rel="noreferrer"
                  onMouseEnter={() => setBg("#1b1d39")}
                  onMouseLeave={() => setBg("")}
                >
                  <Box className="gbtn">
                    <span>
                      <Box className="sicon">
                        <FaLinkedinIn />
                      </Box>
                    </span>
                  </Box>
                </a>
              </li>
            </ul>
          </div>
        </Box>
        <Box className="contactpos" zIndex={"1002"}>
          <GmContact
            display={isOpen ? "Flex" : "none"}
            onC={onClose}
            isO={isOpen}
          />
        </Box>
      </VStack>
    </Box>
  );
};
