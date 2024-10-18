import React from 'react'
import { Box, Stack, Typography } from '@mui/material';
import Herobanner from '../assets/images/banner.png'
import { motion } from "framer-motion"
import './HeroBanner.css'
import NumberCounter from "number-counter";
import hero_image from "../assets/images/hero_image.png"
import hero_back from "../assets/images/hero_image_back.png"
import redd from "../assets/images/redd.png"

const HeroBanner = () => {
    const mobile = window.innerWidth <= 768 ? true : false;
    const transition = { duration: 3, type: "spring" };
    return (
        <Box sx={{ mt: { lg: '120px', xs: '40px' }, ml: { sm: '50px' } }} position="relative" p="10px">
            <div className="right-h">

                {/* heart rate */}

                {/* hero images */}
                <img className="hero-img" src={hero_image} alt="" />
                <motion.img
                    initial={{ right: mobile ? "11rem" : '11rem' }}
                    whileInView={{ right: "20rem" }}
                    transition={transition}
                    className="hero-back"
                    src={hero_back}
                    alt=""
                />

                {/* calories */}
                <motion.div
                    initial={{ right: "32rem" }}
                    whileInView={{ right: "28rem" }}
                    transition={transition}
                    className="calories"
                >
                </motion.div>
            </div>
            <div className="the-best">
                <motion.div
                    initial={{ left: mobile ? "178px" : '238px' }}
                    whileInView={{ left: "8px" }}
                    transition={{ ...transition, type: "tween" }}
                ></motion.div>
                <span>THE BEST FITNESS CLUB IN THE TOWN</span>
            </div>
            <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '40px' } }} mb="23px" mt="30px">
                Sweat, Smile <br />
                And Repeat
            </Typography>
            <Typography fontSize="22px" fontFamily="Alegreya" lineHeight="35px" mb="20px">
                Check out the most effective exercises personalized to you
            </Typography>
            <div className="figures">
                <div>
                    <span>
                        <NumberCounter end={140} start={100} delay={4} preFix="+" />
                    </span>
                    <span>EXPERT COACHES</span>
                </div>
                <div>
                    <span>
                        <NumberCounter end={978} start={878} delay={4} preFix="+" />
                    </span>
                    <span>MEMBERS JOINED</span>
                </div>
                <div>
                    <span>
                        <NumberCounter end={50} delay={2} preFix="+" />
                    </span>
                    <span>FITNESS PROGRAMS</span>
                </div>
            </div>
            <Stack>
                <a href="#exercises" style={{ marginTop: '45px', textDecoration: 'none', width: '200px', textAlign: 'center', background: '#FF2625', padding: '14px', fontSize: '22px', textTransform: 'none', color: 'white', borderRadius: '4px' }}>Explore Exercises</a>
            </Stack>
            <Typography fontWeight={600} color="#FF2625" sx={{ opacity: '0.1', display: { lg: 'block', xs: 'none' }, fontSize: '200px' }}>
                Exercise
            </Typography>
            <img
                src={redd}
                alt="hero-banner"
                className="hero-banner-img"
                style={{
                    position: 'absolute', // Required to apply top, left properties
                    top: '-30px',          // Adjust top position as needed
                    right: '-310px',         // Adjust left position as needed
                    zIndex: -10 
                }}
            />




        </Box>
    )
}

export default HeroBanner