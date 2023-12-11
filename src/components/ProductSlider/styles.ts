import styled from "styled-components";
import { motion } from 'framer-motion';

export const MotionDiv = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width:96%;
  /* box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.10); */
  background-color: #fff;
  border-radius: 5px;
  margin: 10px;
`;

export const Product = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  /* width: 50%;  */
  box-shadow: 0px 0px 2px 1px rgba(0,0,0,0.10);
  background-color: #fff;
  border-radius: 10px;
  margin: 10px;
`;
