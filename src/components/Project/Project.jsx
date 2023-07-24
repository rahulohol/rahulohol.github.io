import { Box, Flex, Heading, VStack } from "@chakra-ui/react";
import "./project.css";
import bg from "../../Assets/gradient.jpeg";
import data from "./data.json";
import { Card } from "./Card";
import { v4 as key } from "uuid";
import { textVariant } from "../utility/Component/motion";
import { motion } from "framer-motion";
export const Project = () => {
  return (
    <section id="project">
      <Box
        position={"relative"}
        bgImage={bg}
        bgSize={["auto 100%", "100% 100%"]}
        bgPosition={"center"}
        bgRepeat={"no-repeat"}
        h="max-content"
        py="20px"
      >
        <VStack align={"center"} justify={"center"}>
          <motion.div
            variants={textVariant(0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true }}
          >
            <Heading color={"#00ccff"}>About My Projects</Heading>
          </motion.div>
        </VStack>
        <Flex
          className="pcs"
          align={"center"}
          w="100%"
          gap="10px"
          flexWrap={"wrap"}
        >
          {data
            ? data.map((el, i) => (
                <Card key={key()} data={el} flexDir={i % 2 === 0} />
              ))
            : ""}
        </Flex>
      </Box>
    </section>
  );
};
