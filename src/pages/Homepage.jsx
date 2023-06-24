import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import styles from "../styles/homepage.module.css";
import group from "../png/Group.png";
import prod from "../png/products.png";
import channel from "../png/channel.png";
import dash from "../png/dashboard.png";
import delivery from "../png/delivery.png";
import mark from "../png/marketing.png";
import repo from "../png/reports.png";
import ven from "../png/vendor.png";
import sale from "../png/sale.png";
import del from "../png/deliv.png";
import pack from "../png/package.png";
import cust from "../png/cust.png";
import inn from "../png/inn.png";
import f1 from "../png/F1.png";
import f2 from "../png/File.png";
import brief from "../png/briefcase.png";
import BarChart from "../components/BarChart";

const Homepage = () => {
  return (
    <Box className={styles.container}>
      <Box>
        <Box className={styles.whiteBg}></Box>
        <Box className={styles.navs}>
          <Flex>
            <img src={dash} alt="" />
            <Text>Dashboard</Text>
          </Flex>
          <Flex>
            <img src={prod} alt="" />
            <Text>Products</Text>
          </Flex>
          <Flex>
            <img src={group} alt="" />
            <Text>Customers</Text>
          </Flex>
          <Flex>
            <img src={channel} alt="" />
            <Text>Multi Channel</Text>
          </Flex>
          <Flex>
            <img src={delivery} alt="" />
            <Text>Shipping</Text>
          </Flex>
          <Flex>
            <img src={mark} alt="" />
            <Text>Marketing</Text>
          </Flex>
          <Flex>
            <img src={repo} alt="" />
            <Text>Reports</Text>
          </Flex>
          <Flex>
            <img src={ven} alt="" />
            <Text>Vendor</Text>
          </Flex>
          <Flex>
            <img src={sale} alt="" />
            <Text>Sales Order</Text>
          </Flex>
          <Flex>
            <img src={pack} alt="" />
            <Text>Packages</Text>
          </Flex>
          <Flex>
            <img src={del} alt="" />
            <Text>Delivery</Text>
          </Flex>
          <Flex>
            <img src={cust} alt="" />
            <Text>Customers</Text>
          </Flex>
          <Flex>
            <img src={inn} alt="" />
            <Text>Invoices</Text>
          </Flex>
        </Box>
      </Box>
      <Box className={styles.main}>
        <Box className={styles.first}>
          <Box>
            <Box>
              <Box className={styles.blueC}></Box>
              <Text>Low Stock Items</Text>
            </Box>
            <Box>
              <Box className={styles.redC}></Box>
              <Text>Low Stock Items</Text>
            </Box>
          </Box>
          <Flex justifyContent={"space-between"} gap={"30px"}>
            <Box className={styles.info}>
              <Box className={styles.icon}>
                <img src={brief} alt="" />
              </Box>
              <Box className={styles.txt}>
                <Text>quantity</Text>
                <Text>4923</Text>
              </Box>
            </Box>
            <Box className={styles.info}>
              <Box className={styles.icon}>
                <img src={f1} alt="" />
              </Box>
              <Box className={styles.txt}>
                <Text>Shipped</Text>
                <Text>1032</Text>
              </Box>
            </Box>
            <Box className={styles.info}>
              <Box className={styles.icon}>
                <img src={f2} alt="" />
              </Box>
              <Box className={styles.txt}>
                <Text>Shipped</Text>
                <Text>1032</Text>
              </Box>
            </Box>
          </Flex>
        </Box>

        <Box className={styles.second}>
          <Box>
            <Box className={styles.pDetail}>
              <Box>
                <Text>Product Details</Text>

                <Box className={styles.cTxt}>
                  <Flex>
                    <Box className={styles.bCircle}></Box>
                    <Text>Low Stock Items</Text>
                    <Text fontWeight={600}>25</Text>
                  </Flex>
                  <Flex>
                    <Box className={styles.rCircle}></Box>
                    <Text>All Item Groups</Text>
                    <Text fontWeight={600}>4408</Text>
                  </Flex>
                  <Flex>
                    <Box className={styles.bCircle}></Box>
                    <Text>Smok</Text>
                    <Text fontWeight={600}>76</Text>
                  </Flex>
                  <Flex>
                    <Box className={styles.rCircle}></Box>
                    <Text>E-Liquids</Text>
                    <Text fontWeight={600}>1000</Text>
                  </Flex>
                </Box>
              </Box>
              <Box>Active Items</Box>
            </Box>
            <Box className={styles.aItem}></Box>
          </Box>
          <Box className={styles.order}>
            <Text className={styles.head}>Recent Orders</Text>
            <Text className={styles.greyTxt}>
              Maiores dicta atque dolorem temporibus{" "}
            </Text>

            <Box className={styles.ordrLst}>
              <Box className={styles.dest}>
                <Box className={styles.Circle}></Box>
                <Box className={styles.line}></Box>
                <Box className={styles.Circle}></Box>
                <Box className={styles.line}></Box>
                <Box className={styles.Circle}></Box>
              </Box>
              <Box>
                <Box>
                  <Text className={styles.smltxt}>January 2nd, 04:30 PM</Text>
                  <Text className={styles.gryTxt}>
                    Illum omnis quo illum nisi. Nesciunt est accusamus.
                  </Text>
                </Box>
                <Box>
                  <Text className={styles.smltxt}>January 3rd, 06:19 PM</Text>
                  <Text className={styles.gryTxt}>
                    Corrupti unde qui molestiae labore ad adipisci ve
                  </Text>
                </Box>
                <Box>
                  <Text className={styles.smltxt}>January 4th, 05:30 PM</Text>
                  <Text className={styles.gryTxt}>
                    Maiores doloribus qui. Repellat accusamus minima{" "}
                  </Text>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box className={styles.thirdDiv}>
          <Box className={styles.inf}>
            <Text fontWeight={600} fontSize={"20px"}>
              Product Static
            </Text>
            <Text mt={5} color={"grey"} fontSize={"12px"}>
              Total Customers
            </Text>
            <Text fontWeight={600} fontSize={"20px"}>
              12,345,678
            </Text>
            <Text fontWeight={500} fontSize={"12px"}>
              <span style={{ color: "green" }}>23%</span> less than last month
            </Text>

            <Flex alignItems={"center"} gap={2} mt={8}>
              <Box className={styles.redC}></Box>
              <Box>
                <Text fontSize={'12px'} color={'grey'}>Last Month</Text>
                <Text fontWeight={600}>123,456</Text>
              </Box>
            </Flex>
            <Flex alignItems={"center"} gap={2} mt={5}>
              <Box className={styles.blueC}></Box>
              <Box>
                <Text fontSize={'12px'} color={'grey'}>Last Month</Text>
                <Text fontWeight={600}>123,456</Text>
              </Box>
            </Flex>
          </Box>
          <Box className={styles.chart}>
            <BarChart />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Homepage;
